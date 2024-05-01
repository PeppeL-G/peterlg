<script>
	import Instructions from './Instructions.svelte'
</script>

Many programming languages these days offer two different ways of doing nothing for `x` milliseconds:

| Language | Synchronous | Asynchronous |
|----------|-------------|--------------|
| C#       | [Thread.Sleep()](https://learn.microsoft.com/en-us/dotnet/api/system.threading.thread.sleep?view=net-8.0) | [Task.Delay()](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.delay?view=net-8.0) |
| Kotlin   | [Thread.sleep()](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/Thread.html#sleep(long)) | [delay()](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html) |
| Python   | [time.sleep](https://docs.python.org/3/library/time.html#time.sleep) | [asyncio.sleep()](https://docs.python.org/3/library/asyncio-task.html#asyncio.sleep) |
| Etc.     | ... | ... |

As has been hinted, you must know the difference between synchronous programming and asynchronous programming to understand when to use which of the two versions. This blogpost aims to explain why it's important to use the right one, and what happens if you use the wrong one.

<div style="background-color: yellow; border: 2px solid black; margin: 2em; padding: 0.75em; border-radius: 1.5em;">

<p style="font-weight: bold; text-align: center;">WARNING</p>

In this blogpost, some simplifications have been made to keep things simple (for examples, [multi-core processors](https://en.wikipedia.org/wiki/Multi-core_processor) and [hyper-threading](https://en.wikipedia.org/wiki/Hyper-threading) do make it possible for computers to do multiple things at the same time, contrarily to what this blogpost will claim), but the explained difference between synchronous programming and asynchronous programming is still accurate.

</div>


## Doing things "concurrently" on a computer
A computer can be seen as a very simple machine that can only execute one instruction at a time. This essentially means that only one program at a time can run on a computer, but the clever usage of [time-sharing](https://en.wikipedia.org/wiki/Time-sharing) makes it possible to fool us humans into thinking that multiple programs are running at the same time.

For example, if you want to run three programs at "the same time" on a computer, the computer will:

1. First run the first program for a few milliseconds
2. Then run the second program for a few milliseconds
3. Then run the third program for a few milliseconds
4. Then run the first program for a few milliseconds again
4. Then run the second program for a few milliseconds again
5. Etc.

The computer swaps between running the programs so fast, so we humans don't notice that it is happening!

Below is a visualization of this, where the red, lime and yellow programs run "at the same time", and you can see the order the computer executes the instructions in the programs (first two instructions in red are executed, then 3 instructions in lime, then 2 instructions in yellow, etc.).

<Instructions instructionsText={`
	red 1
	red 2
	lime 1
	lime 2
	lime 3
	yellow 1
	yellow 2
	red 3
	red 4
	lime 4
	yellow 3
	yellow 4
	red 5
	silver ...
`} />

One big downside with this approach is that it takes quite a long time for the computer to swap between programs running. When the computer swaps program, it is actually the [Operating System](https://en.wikipedia.org/wiki/Operating_system) (OS) program that has ordered the computer to execute some instructions to do the swapping, so a more accurate visualization of what actually has happened is something like this (where the aqua program is the OS program running that instructs the computer to do the swapping):

<Instructions instructionsText={`
	red 1
	red 2
	aqua 1
	aqua 2
	lime 1
	lime 2
	lime 3
	aqua 3
	aqua 4
	yellow 1
	yellow 2
	aqua 5
	aqua 6
	red 3
	red 4
	aqua 7
	aqua 8
	lime 4
	aqua 9
	aqua 10
	yellow 3
	yellow 4
	aqua 11
	aqua 12
	red 5
	silver ...
`} />

The computer still runs the programs so fast that we humans won't notice that it actually only runs one program at a time, but as you understand, the more often the computer is swapping program, the slower our programs will run, because much computation is "wasted" on doing the swapping, and not on running the programs.

## Concurrency in a synchronous program
A program itself often needs to do multiple things concurrently. For example, [a GIF image can be animated](https://giphy.com/explore/animated), so a GIF image can consist of multiple images, and when it's displayed on the screen by a program, the program will:

1. First display the first image in the GIF on the screen
2. Then wait a few milliseconds
3. Then display the second image in the GIF on the screen
4. Then wait a few milliseconds
5. Then display the third image in the GIF on the screen
6. Then wait a few milliseconds
7. Etc.

The waiting here can be done using a synchronous `sleep()` call. That basically tells the OS "*I don't need to do anything for a few milliseconds*", and the OS can instruct the computer to swap to another program. Then, after a few milliseconds, the program will run again, and can instruct the computer to display the next image in the GIF on the screen, and so on.

BUT, this basically means the program won't be able to do anything else but waiting and changing the image shown on the screen, because the program is stuck in this loop! So if the program would, for example, want to display multiple GIF images on the screen, only one of them would be updated! (unless one writes special code to update all the GIF images at the same time, but let's imagine that's not the case)

So, what programs can do to avoid this problem is to start this "concurrent" work that needs to be done in new [threads](https://en.wikipedia.org/wiki/Thread_(computing)). For simplicity, a thread can simply be seen as a separate program. So, if our red program would want to display 10 GIF images, it would instruct the computer to start 10 programs, each responsible for animating respective GIF image. I won't even try to visualize that in a figure, because the figure would be very big xD

So, even though we only have 3 "real" programs running, the computer will need to swap between 13 programs running! And with the swapping overhead from the OS program, this all becomes very, very slow, especially when other programs also wants to do some concurrent work too, so they will probably have a bunch of threads running as well. Does there exist a better way we can do this?

## Concurrency in an asynchronous programming
So, creating many threads to wait for something turned out to be bad. What can we do instead? Well, this is where asynchronous programming comes into the picture.

Just as the OS has a list of programs that want to run, each asynchronous program has its own list of tasks that should run when an *event* has happened. An event can for example be:

* When a specific point in time is happening
* When the computer has an Internet connection (after having lost it)
* When some new content has been written to a file
* When the computer receives an HTTP request
* When the computer receives back an HTTP response to an HTTP request it has sent
* Etc.

So, a program doesn't need to create new threads to do the waiting, instead the program has a list of tasks that needs to be done, and the program carries out one of the tasks at a time (when the corresponding event has happened, or as soon as possible thereafter).

This way, the computer is not overwhelmed with swapping program to run. Instead, each asynchronous program simply changes which task to run. And to change which task to run is much faster than changing which program to run, so asynchronous programs tends to run faster than synchronous programs, and this is the benefit with asynchronous programs! 

<div style="background-color: lime; border: 2px solid black; margin: 2em; padding: 0.75em; border-radius: 1.5em;">

<p style="font-weight: bold; text-align: center;">Note</p>

Asynchronous programs run faster when there is concurrent work that needs to be done. If you have no concurrent work that needs to be done, then synchronous programs run faster, since they don't contain the overhead of a task list. In practice, it is often only small scripts that don't contain any concurrent work, so most programs can benefit from asynchronous programming.

Also note that asynchronous programs often are a little bit harder to implement. No pain, no gain!

</div>

## What happens if I use asynchronous programming in my synchronous program?
You can't really do this. To use asynchronous programming, your program must have a list of tasks it should carry out, and it will have that if you are able to use asynchronous programming in it, which makes it an asynchronous program.

If you try to use an asynchronous function/method in a synchronous program/a synchronous part of your program, you will often get an error from your compiler/runtime engine to let you know that you can't use the function/method.

## What happens if I use synchronous programming in my asynchronous program?
Ah, this is where it gets interesting. Nothing stops you from using synchronous programming in an asynchronous program. But it is very bad to do so. Let's take a look at an example to understand why.

Imagine your asynchronous program has the following three tasks it should complete:

1. Draw the next image in a GIF on the screen
2. Handle a received HTTP response (from a previously sent HTTP request)
3. Handle a mouse button click

Your program starts by carrying out Task 1. In it, you draw the next image in the GIF on the screen, and then you need to add this very same task to the list again 1 second later (by default, tasks are deleted from the list when they have been carried out). Here you need to wait for 1 second, and you should use the asynchronous version of wait (often called `delay(1000ms)`). Then your program can continue with carrying out Task 2, and then Task 3, immediately after you have called `delay(1000ms)`.

But, if you instead use the synchronous version of wait (often called `sleep(1000ms)`), then you tell the OS that your program does not need to run at all for 1 second, so even though Task 2 and Task 3 can run immediately after you have completed Task 1, they will not, because nothing in your program will be executed at all for 1 second. So, if you use synchronous programming in an asynchronous program, you prevent the program from being able to immediately run the other tasks it contains, so your program will overall run slower!

## I don't use `sleep()`, do I need to care?
`sleep()` is just the example I chose to go with. As I briefly mentioned, the benefit with asynchronous programming over synchronous programming (faster code execution) applies to all kind of waiting, and is not limited to `sleep()`. For example, all of the following operations includes waiting of some kind:

* Write something to a file (waiting for the hard drive to report back a successful write)
* Read something from a file (waiting for the hard drive to report back the read content)
* Send an SQL query to a DB (waiting for the query to be sent to the DB over the Internet, then for the DB to execute the query, and then for the result to be sent back to the computer over the Internet)
* Send an HTTP request to a server (waiting for the HTTP request to be sent to the server over the Internet, then for the server to execute the request, and then for the HTTP response to be sent back to the computer over the Internet)
* Etc.

In all of these cases, you can benefit from using the asynchronous functions/methods instead of the synchronous ones.
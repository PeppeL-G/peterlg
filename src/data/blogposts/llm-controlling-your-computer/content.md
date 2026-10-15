<script>
	import InfoBox from '#lib/InfoBox.svelte'
</script>

In the blogpost *LLM: From Thinking to Acting*, I showed a way to give a Large Language Model (LLM) the ability to act. That method relied on a programmer to hardcode the "tools" the LLM should be able to use when handling a message from the user.

To hardcode these tools is very limiting, and not very "AI"/not a general solution. Can we somehow do better? For example, we might want the LLM to be able to do whatever a human is able to do on the computer, but we can't hardcode LLM tools for every single thing a human user is able to do at the computer, because that list would be extremely long. So how would we go on about it?



## One tool to rule them all
To give the LLM the ability to do whatever it wants on the computer, there is really only a single tool we need to give it: *the ability to execute whatever code it wants* (the "run code" tool). That way it can really do whatever it wants on the computer:

* **See which files that exist on the computers?**<br>
  Just write code that recursively go through all folders on the computer and lists all files in each folder.
* **Create a new file?**<br>
  Just write code that creates the new file with whatever content you want.
* **Browse the web?**<br>
  Just write code that fetches a webpage using the computer's Internet connection.
* **Etc.**



## Example
If the user's message is the following:

> Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.

Then the LLM might receive the following message:

> To handle the user's message below, you can reply:
>
> * 1, followed by Node.js code that you want to be executed on the user's computer. The output will be given back to you.
> * 2, followed by the message you want to send back to the user.
>
> The user's message is:
>
> Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.

The LLM won't magically know where the "projects" folder is on the user's computer, so that's the first thing it needs to figure out to be able to handle this message. Therefore, it might respond with something like this:

> 1
> ```js
> import { readdir } from 'node:fs/promises'
> import path from 'node:path'
> 
> async function listFolders(dir){
>   
>   const entries = await readdir(dir, { withFileTypes: true })
>   
>   for(const entry of entries){
>     
>     if(entry.isDirectory()){
>       
>       const fullPath = path.resolve(dir, entry.name)
>       
>       console.log(fullPath)
>       
>       await listFolders(fullPath)
>       
>     }
>     
>   }
>  
> }
> 
> await listFolders('/')
> ```

This response will trigger the "run code" tool, which will output the paths to all folders on the user's computer, and that output will be part of the next message to the LLM:

> The following code:
> 
> ```js
> import { readdir } from 'node:fs/promises'
> import path from 'node:path'
> 
> async function listFolders(dir){
>   
>   const entries = await readdir(dir, { withFileTypes: true })
>   
>   for(const entry of entries){
>     
>     if(entry.isDirectory()){
>       
>       const fullPath = path.resolve(dir, entry.name)
>       
>       console.log(fullPath)
>       
>       await listFolders(fullPath)
>       
>     }
>     
>   }
>  
> }
> 
> await listFolders('/')
> ```
> 
> Produced the following output:
> 
> ```
> ...
> /users/peter/Desktop
> /users/peter/Desktop/funny-images
> /users/peter/Desktop/old-files
> ...
> /users/peter/projects
> /users/peter/projects/website-abc
> /users/peter/projects/old-website
> /users/peter/projects/memory-game
> ...
> /users/peter/school
> /users/peter/school/programming-1
> ...
> ```
> 
> To handle the user's message below, you can reply:
>
> * 1, followed by code that you want to be executed on the user's computer. The output will be given back to you.
> * 2, followed by the message you want to send back to the user.
>
> The user's message is:
>
> Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.

This time the LLM will know where the "projects" folder is, and can therefore write code that creates the file the user wanted:

> 1
> ```js
> import { writeFileSync } from 'node:fs'
> import path from 'node:path'
> 
> writeFileSync(
>   '/users/peter/projects/notes.txt',
>   'Reminder: Delete the old-website project.\n',
>   'utf8',
> )
> 
> console.log('Done!')
> ```

Finally, the LLM is invoked one more time, so it can generate a message that is sent back to the user:

> The following code:
> 
> ```js
> import { readdir } from 'node:fs/promises'
> import path from 'node:path'
> 
> async function listFolders(dir){
>   
>   const entries = await readdir(dir, { withFileTypes: true })
>   
>   for(const entry of entries){
>     
>     if(entry.isDirectory()){
>       
>       const fullPath = path.resolve(dir, entry.name)
>       
>       console.log(fullPath)
>       
>       await listFolders(fullPath)
>       
>     }
>     
>   }
>  
> }
> 
> await listFolders('/')
> ```
> 
> Produced the following output:
> 
> ```
> ...
> /users/peter/Desktop
> /users/peter/Desktop/funny-images
> /users/peter/Desktop/old-files
> ...
> /users/peter/projects
> /users/peter/projects/website-abc
> /users/peter/projects/old-website
> /users/peter/projects/memory-game
> ...
> /users/peter/school
> /users/peter/school/programming-1
> ...
> ```
> 
> The following code:
> 
> ```js
> import { writeFileSync } from 'node:fs'
> import path from 'node:path'
> 
> writeFileSync(
>   '/users/peter/projects/notes.txt',
>   'Reminder: Delete the old-website project.\n',
>   'utf8',
> )
> 
> console.log('Done!')
> ```
> 
> Produced the following output:
> 
> ```
> Done!
> ```
> 
> To handle the user's message below, you can reply:
>
> * 1, followed by code that you want to be executed on the user's computer. The output will be given back to you.
> * 2, followed by the message you want to send back to the user.
>
> The user's message is:
>
> Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.

And the LLM might produce the following response:

> 2
> 
> The file has been created.

And the last line of text there is then finally shown to the user in response to their first message.



## That's so impressive!
If we reflect upon what the AI/LLM actually has done, it can be summarized as:

1. Understood the task to be carried out.
2. Recognized that it didn't have all the data it needed to carry out the task.
3. Implemented a way for it to obtain the missing data.
4. Carried out the task.

I'm not saying the AI/LLM actually reasoned this way (after all, it's still a machine that produces tokens based on probabilities), but it has at least somehow managed to solve a none-elementary problem that it has never specifically been trained on to solve and that requires some problem solving skills at human intelligence level, so it is really impressively done indeed!



## Is this a good idea?
Well, not necessarily. You've probably heard about weird mistakes LLMs have done, such as writing inaccurate and false information. In a similar way, they can just as well write programs with bugs, or programs that don't do what you want, and after running such a program, there might be no way to undo the mistake. You can read about one of these cases in the article [An AI Agent Just Destroyed Our Production Data. It Confessed in Writing](https://x.com/lifeofjer/article/2048103471019434248). I've read about many other similar incidents over the last few years too.

So every time the AI wants to run some code, you might want to first read through that code yourself, and only allow it to run if you deem it's safe. But this will slow down your workflow enormously, and optimally we do want AI agents to run as autonomously as possible, so it's not really an optimal solution to the problem. One day LLMs might be so good that they don't make mistakes like the mentioned one, but we're not there yet.



## How bad can it be?
Well, deleting a company's production data, including the backups, is really bad. Not only can it lead to a big loss of money, but if that data is medical records or similar, lives can also be at stake.

But can it be worse than that? Some scientist warns that more and more capable AI agents can lead to the destruction of mankind. Is there any truth to that?

I don't have enough expertise in frontier AI models, nor where the development of those is heading, to say anything about that. But given how the AI in the first example mentioned on this page managed to repeatedly be invoked to solve such a non-elementary problem, I can very easily imagine scenarios where things go very bad. Here's one example:

1. The LLM is given the task *Find a solution to the malaria disease so no humans get killed by it*.
2. The LLM has been trained and learned that a more general solution to a problem is better than a more specific solution. Therefore it starts to try to find a more general solution that do not only solve the "malaria should not kill humans" problem.
3. The LLM recognizes that humans are the cause of many problems on earth (global warming, over consumption, deforestation, depleting the groundwater, etc.), and that those can be solved by getting rid of all humans.
4. The LLM designs a virus that do not only kill all mosquitos that spread the malaria disease, but that also kills any human that gets infected and that also spreads from person to person.

Before that virus is manufactured and released into the wild, let's hope that some scientists actually run some tests to verify that the designed virus only does what it was supposed to do, and that the scientists discover that it is a bad virus, and therefore won't release it into the wild. BUT, imagine if the "manufacture and release virus" tool was directly available to the LLM (similar to the "run code" tool), then the LLM could have manufactured and released that virus into the wild directly, without anyone checking first...

---

So, LLMs on their own aren't able to do us much harm. They are only able to produce text output. But if that output is automatically feed into a tool that starts to run, then it is very easy to imagine scenarios where things can go incredible bad for us humans. And all it takes is one idiot...

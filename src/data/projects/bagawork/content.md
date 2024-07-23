Programming has always been hard to learn.

> *Programming is one of the most difficult branches of applied mathematics; the poorer mathematicians had better remain pure mathematicians.*
>
> -- [Edsger Dijkstra](https://www.brainyquote.com/quotes/edsger_dijkstra_204342)

To instruct a computer what to do, you must first learn how to think like a computer. You basically need to develop a second brain, that thinks and functions the same way as the computer do! And even though this is not easy, programmer after programmer has over the years proved that this is possible. Even when all hope seemed lost, and programming appeared too be too hard to learn, their curiosity and will to learn kept them trying, and after much effort, they finally did learn it!

I remember my own teenage years, where I over many months tried to learn programming, and gave up on learning it at least 3-4 times. But curiosity and will to learn it always drove me back after a week or two. And each time I learned a little bit more than before, and slowly I got better and better at it, and after having passed that famous threshold, things got downhill, and it all become much easier and more fun!

However, today, many need to learn programming who lacks the will to learn it, and aren't very curious about how computers work. And when these people take programming courses, it will be very hard for them to pass the courses, because they find them boring and hard. That's totally understandable, but none the less a big problem.

So, how can we make programming easier and more fun to learn for these people?

---

My attempt to make programming easier and more fun to learn is by creating an app development framework/platform that is as easy to use as possible. I call it [Bagawork](https://bagawork.com/). Unlike professional solutions, Bagawork has no focus on good performance or making the code very scalable (things that usually makes them hard to learn and use), only to make it as easy to learn and teach programming as possible. And there's no drag-and-drop programming using blocks or similar, only code writing, since the intention is to teach programming through code writing. For more info about the design decisions, see the [Motivation](https://bagawork.com/motivation/) page.

Bagawork is really easy to get started with. All you need to do is to open the [Online Editor](https://bagawork.com/editor/) in a web browser on a desktop computer, and you get a simple "*hello, world*" app to start with. No need to install anything. No need to manually execute any compilation steps, or similar. The editor simply directly shows what the app looks like, and you can run it directly in the web browser.

The architecture of an app implemented in Bagawork is also really simple. The app primarily consists of different pages, each with their own graphical user interface (GUI), and one page at a time is shown to the user. When the user has interacted with a page (such as clicked on a button), the user is shown another page in the app. This simple architecture makes it really easy to understand how the app works, and it's also easy to visualize how the app works, which you can also see in the editor. 

Since the architecture itself is so small, Bagawork is really easy to learn, because there is so little to learn! Except for... The GUI... 😒 First I considered to not use a GUI in the framework at all ("*too much to learn for beginners*"), but I think it's a must to make learning programming more fun for most; impatient young people these days want to feel like they are creating "real" apps as soon as possible, and don't want to start with the basics in programming, such as loops and conditional statements. 

So, a way to create the GUI was needed. Instead of using HTML and CSS, I planned to add my own GUI components to the framework, that are easier to use for beginners. And first I intended to use [JSX](https://react.dev/learn/writing-markup-with-jsx) for the GUI, but I quickly realized that learning two languages (JavaScript + XML) would probably be confusing for beginners, so I started to think about the simplest way to use GUI components using only JavaScript. That's actually how [JSML](https://github.com/PeppeL-G/jsml) was created. And I thought it worked really well, so I adopted the same strategy for using [the GUI components in Bagawork](https://bagawork.com/documentation).

What more do beginners need? Well:

* Easy to follow [tutorials](https://bagawork.com/tutorials/)
* Easy to read and understand [documentation](https://bagawork.com/documentation/)
	* Which also includes a lot of examples, and users can also easily change the code in the examples to quickly test how things work
* Easy way to share code using only [links](https://bagawork.com/editor#eNq1Um1Lg1AU/iu386UJMpwxCL+ERcSgIrZFjRzsoscpuXvl3iM1hv+962wyZRYEfVDP+/OCO+B5Dt4OQhkheBBmXGv2sPXznOEnoYg0M/EuEAFVT6iQE86IK3riaxxYdYcUUqEEaxpVtayXSihtiGUWodLgve0gjcAb2SD4pkLcr4ANMo410it4ziFemLhc2pCbe63N+tikTlrEG/yGfJV02N8VaZf33IwPybwGq3mCrLrJYqkYJalmxiFmPiiqcsRSYcrInqf3ZyurpdOGT/BcxwjYgnfhNOTnuMkzA9wS0eLt6/dJ7EdF9hfyU/mhh2GSZpFCMahbAc1yHqJ9yI4E+grZVhZsb6KRwgUbXV6tLPv05o3Mio04AdAdDOi6IJLiG+ZRHp38ZXaB+ofhQ8fq/FS1lW7HyltBqPw1/r+RLwmnc115qZi5329hS+vIOZprd8Z9Hbd3xx33oHbMWpZf5f9oUA==)
* Easy way to distribute apps using [links](https://bagawork.com/run#eNq1Um1Lg1AU/iu386UJMpwxCL+ERcSgIrZFjRzsoscpuXvl3iM1hv+962wyZRYEfVDP+/OCO+B5Dt4OQhkheBBmXGv2sPXznOEnoYg0M/EuEAFVT6iQE86IK3riaxxYdYcUUqEEaxpVtayXSihtiGUWodLgve0gjcAb2SD4pkLcr4ANMo410it4ziFemLhc2pCbe63N+tikTlrEG/yGfJV02N8VaZf33IwPybwGq3mCrLrJYqkYJalmxiFmPiiqcsRSYcrInqf3ZyurpdOGT/BcxwjYgnfhNOTnuMkzA9wS0eLt6/dJ7EdF9hfyU/mhh2GSZpFCMahbAc1yHqJ9yI4E+grZVhZsb6KRwgUbXV6tLPv05o3Mio04AdAdDOi6IJLiG+ZRHp38ZXaB+ofhQ8fq/FS1lW7HyltBqPw1/r+RLwmnc115qZi5329hS+vIOZprd8Z9Hbd3xx33oHbMWpZf5f9oUA==) (meant to be open on a smartphone)
	* Though GitHub probably doesn't like that they are being used as a platform to run apps on, so I'm working on such as platform myself as well, which I'll hopefully write more about on this website soon!

Even though Bagawork is far from finished, there is still a lot more to say about it. But this post is long as it is, so that's all info you get for now ^^ To learn more and stay up-to-date, check out [the Bagawork webite](https://bagawork.com/).
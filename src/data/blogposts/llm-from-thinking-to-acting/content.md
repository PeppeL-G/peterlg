A Large Language Model (LLM) can only be used to predict the next word in a text. That doesn't sound that dangerous, right? So why do some experts raise concerns over that LLMs are dangerous and might be a threat to us humans? To understand this, we must first understand how developers can give LLMs the ability to act.

<div style="background-color: cyan; border: 2px solid black; margin: 2em; padding: 0.75em; border-radius: 1.5em;">

<p style="font-weight: bold; text-align: center;">Want to learn more?</p>

For this blogpost, I assume you already know how LLMs work. If you don't know that, it's a good idea to first read the blogpost *LLM: Is it Really Intelligence?* on the [Blogposts](/blogposts) page.

</div>

## How to Make an LLM Act
An LLM can't act on its own. Instead, an LLM that can act is actually a program that consists of 2 different components:

* The LLM component (🧠) that can produce text.
* The Main component (🤖) that uses the LLM, and which has the ability to carry out some actions a developer has hardcoded it to be able to do, such as:
       * To send an email.
       * To search on Google.
       * To book a meeting in your calendar.
       * Etc.

When you use a program like this, you send your chat message to the Main component, which then adds some text to your message with instructions on how the LMM can instruct the Main component to carry out one of its actions, and then the Main component sends this new message to the LLM. The LLM can then write a response that tells the Main component to carry out one of its actions, and if needed, the Main component can invoke the LLM component with new messages multiple times.

Below is a sequence diagram showing what this can look like in practice.

```
             User                      Main component                     LLM component
              👤                             🤖                                 🧠
╭───────────────────────────╮
│ Send an invitation to my  ➡️
│ birthday party to         │
│ alice@aliceson.com. It    │
│ starts 11:00 next Sunday. │
╰───────────────────────────╯
                                ╭───────────────────────────╮
                                │ If you want to send an    ➡️
                                │ email message, reply      │
                                │ 1:EMAIL:SUBJECT:BODY      │
                                │                           │
                                │ If you want to know       │
                                │ what date it is now,      │
                                │ reply 2.                  │
                                │                           │
                                │ Otherwise, just write     │
                                │ the answer to the         │
                                │ prompt below.             │
                                │                           │
                                │ Send an invitation to my  │
                                │ birthday party to         │
                                │ alice@aliceson.com. It    │
                                │ starts 11:00 next Sunday. │
                                ╰───────────────────────────╯
                                                                ╭───────────────────────────────╮
                                                               ⬅️ 2                             │
                                                                ╰───────────────────────────────╯
                                ╭───────────────────────────╮
                                │ It is Wednesday August 5  ➡️
                                │ 2026.                     │
                                │                           │
                                │ If you want to send an    │
                                │ email message, reply      │
                                │ 1:EMAIL:SUBJECT:BODY      │
                                │                           │
                                │ Otherwise, just write     │
                                │ the answer to the         │
                                │ prompt below.             │
                                │                           │
                                │ Send an invitation to my  │
                                │ birthday party to         │
                                │ alice@aliceson.com. It    │
                                │ starts 11:00 next Sunday. │
                                ╰───────────────────────────╯
                                                                ╭───────────────────────────────╮
                                                               ⬅️ 1:alice@aliceson.com:Birthday │
                                                                │ invitation:Welcome to my      │
                                                                │ birthday party 11:00 next     │
                                                                │ Sunday, August 9.             │
                                                                ╰───────────────────────────────╯
                                       [Sends the email]
                                ╭────────────────────────────╮
                               ⬅️ Email has been sent.       │
                                ╰────────────────────────────╯
          [Is happy]
              👤                             🤖                                 🧠
             User                      Main component                     LLM component
```

In this example, the Main component just needs to look at the first character in the response from the LLM component:

* If `1`, then send the email, and tell the user the email has been sent.
* If `2`, then send the user's message to the LLM again, but this time also include the current date in the message.
* Otherwise, just send back the response from the LLM to the user.

A real implementation of this would of course use something more sophisticated (like instructing the LLM to produce JSON code containing the name of the tool it wants to use and arguments it wants to pass to the tool), but this simple example demonstrates a fundamental technique one can use to give LLMs the ability to act.

## Do we need to worry?
So, what can an LLM with the ability to act really do? Can it order and fire off a nuclear bomb all by itself? Well, only if the developers of the LLM has given it a tool that automatically fires off the atom bomb as soon as the LLM writes a response where it explains that it wants to use that tool. And personally I don't think any developer would ever be that stupid so they hook up atom bombs to digital solutions like that.

But more and more things do get connected to the Internet these days, such as cars, smartphones, TVs, washing machines, laundry machines, etc. And LLMs do often have access to the Internet. So I wouldn't be surprised if it does happen that an LLM do something unexpected (or is maliciously instructed by a bad guy) that leads it to using the Internet and exploits a weakness in a connected device and makes that device do something unintended.

So security for all devices connected to the Internet is, as it always has been, very, very, very important, especially these days when LLMs can process a lot of code very fast and find potential weaknesses in them extremely quickly. So it is important that LLMs are not only used by bad guys looking for weaknesses they can exploit, but also by the original developers, so they can find and fix their mistakes before any bad guy can exploits them.

A secure system is still a secure system. The real question is if we humans (even with the help of LLMs) ever can become capable of implementing them.

<div style="background-color: cyan; border: 2px solid black; margin: 2em; padding: 0.75em; border-radius: 1.5em;">

<p style="font-weight: bold; text-align: center;">Actually...</p>

In addition to acting bad, LLMs can be used to come up with evil things (new viruses, new weapons, mislead people, etc.). This post only focuses on the dangers with giving LLMs the ability to act.

</div>
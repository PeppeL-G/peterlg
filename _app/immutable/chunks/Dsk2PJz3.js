import{C as e,G as t,I as n,N as r,P as i,T as a,W as o,f as s}from"./CD2XMejR.js";import"./NuoN_i35.js";import"./DfXQUxjQ.js";var c=a(`<p>In the blogpost <em>LLM: From Thinking to Acting</em>, I showed a way to give a Large Language Model (LLM) the ability to act. That method relied on a programmer to hardcode the "tools" the LLM should be able to use when handling a message from the user.</p> <p>To hardcode these tools is very limiting, and not very "AI"/not a general solution. Can we somehow do better? For example, we might want the LLM to be able to do whatever a human is able to do on the computer, but we can't hardcode LLM tools for every single thing a human user is able to do at the computer, because that list would be extremely long. So how would we go on about it?</p> <h2>One tool to rule them all</h2> <p>To give the LLM the ability to do whatever it wants on the computer, there is really only a single tool we need to give it: <em>the ability to execute whatever code it wants</em> (the "run code" tool). That way it can really do whatever it wants on the computer:</p> <ul><li><strong>See which files that exist on the computers?</strong><br/> Just write code that recursively go through all folders on the computer and lists all files in each folder.</li> <li><strong>Create a new file?</strong><br/> Just write code that creates the new file with whatever content you want.</li> <li><strong>Browse the web?</strong><br/> Just write code that fetches a webpage using the computer's Internet connection.</li> <li><strong>Etc.</strong></li></ul> <h2>Example</h2> <p>If the user's message is the following:</p> <blockquote><p>Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.</p></blockquote> <p>Then the LLM might receive the following message:</p> <blockquote><p>To handle the user's message below, you can reply:</p> <ul><li>1, followed by Node.js code that you want to be executed on the user's computer. The output will be given back to you.</li> <li>2, followed by the message you want to send back to the user.</li></ul> <p>The user's message is:</p> <p>Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.</p></blockquote> <p>The LLM won't magically know where the "projects" folder is on the user's computer, so that's the first thing it needs to figure out to be able to handle this message. Therefore, it might respond with something like this:</p> <blockquote><p>1</p> <pre class="language-js"></pre></blockquote> <p>This response will trigger the "run code" tool, which will output the paths to all folders on the user's computer, and that output will be part of the next message to the LLM:</p> <blockquote><p>The following code:</p> <pre class="language-js"></pre> <p>Produced the following output:</p> <pre class="language-undefined"></pre> <p>To handle the user's message below, you can reply:</p> <ul><li>1, followed by code that you want to be executed on the user's computer. The output will be given back to you.</li> <li>2, followed by the message you want to send back to the user.</li></ul> <p>The user's message is:</p> <p>Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.</p></blockquote> <p>This time the LLM will know where the "projects" folder is, and can therefore write code that creates the file the user wanted:</p> <blockquote><p>1</p> <pre class="language-js"></pre></blockquote> <p>Finally, the LLM is invoked one more time, so it can generate a message that is sent back to the user:</p> <blockquote><p>The following code:</p> <pre class="language-js"></pre> <p>Produced the following output:</p> <pre class="language-undefined"></pre> <p>The following code:</p> <pre class="language-js"></pre> <p>Produced the following output:</p> <pre class="language-undefined"></pre> <p>To handle the user's message below, you can reply:</p> <ul><li>1, followed by code that you want to be executed on the user's computer. The output will be given back to you.</li> <li>2, followed by the message you want to send back to the user.</li></ul> <p>The user's message is:</p> <p>Create a new file called notes.txt in the projects folder that reminds me to delete the old-website project.</p></blockquote> <p>And the LLM might produce the following response:</p> <blockquote><p>2</p> <p>The file has been created.</p></blockquote> <p>And the last line of text there is then finally shown to the user in response to their first message.</p> <h2>That's so impressive!</h2> <p>If we reflect upon what the AI/LLM actually has done, it can be summarized as:</p> <ol><li>Understood the task to be carried out.</li> <li>Recognized that it didn't have all the data it needed to carry out the task.</li> <li>Implemented a way for it to obtain the missing data.</li> <li>Carried out the task.</li></ol> <p>I'm not saying the AI/LLM actually reasoned this way (after all, it's still a machine that produces tokens based on probabilities), but it has at least somehow managed to solve a none-elementary problem that it has never specifically been trained on to solve and that requires some problem solving skills at human intelligence level, so it is really impressively done indeed!</p> <h2>Is this a good idea?</h2> <p>Well, not necessarily. You've probably heard about weird mistakes LLMs have done, such as writing inaccurate and false information. In a similar way, they can just as well write programs with bugs, or programs that don't do what you want, and after running such a program, there might be no way to undo the mistake. You can read about one of these cases in the article <a href="https://x.com/lifeofjer/article/2048103471019434248" rel="nofollow" target="_blank">An AI Agent Just Destroyed Our Production Data. It Confessed in Writing</a>. I've read about many other similar incidents over the last few years too.</p> <p>So every time the AI wants to run some code, you might want to first read through that code yourself, and only allow it to run if you deem it's safe. But this will slow down your workflow enormously, and optimally we do want AI agents to run as autonomously as possible, so it's not really an optimal solution to the problem. One day LLMs might be so good that they don't make mistakes like the mentioned one, but we're not there yet.</p> <h2>How bad can it be?</h2> <p>Well, deleting a company's production data, including the backups, is really bad. Not only can it lead to a big loss of money, but if that data is medical records or similar, lives can also be at stake.</p> <p>But can it be worse than that? Some scientist warns that more and more capable AI agents can lead to the destruction of mankind. Is there any truth to that?</p> <p>I don't have enough expertise in frontier AI models, nor where the development of those is heading, to say anything about that. But given how the AI in the first example mentioned on this page managed to repeatedly be invoked to solve such a non-elementary problem, I can very easily imagine scenarios where things go very bad. Here's one example:</p> <ol><li>The LLM is given the task <em>Find a solution to the malaria disease so no humans get killed by it</em>.</li> <li>The LLM has been trained and learned that a more general solution to a problem is better than a more specific solution. Therefore it starts to try to find a more general solution that do not only solve the "malaria should not kill humans" problem.</li> <li>The LLM recognizes that humans are the cause of many problems on earth (global warming, over consumption, deforestation, depleting the groundwater, etc.), and that those can be solved by getting rid of all humans.</li> <li>The LLM designs a virus that do not only kill all mosquitos that spread the malaria disease, but that also kills any human that gets infected and that also spreads from person to person.</li></ol> <p>Before that virus is manufactured and released into the wild, let's hope that some scientists actually run some tests to verify that the designed virus only does what it was supposed to do, and that the scientists discover that it is a bad virus, and therefore won't release it into the wild. BUT, imagine if the "manufacture and release virus" tool was directly available to the LLM (similar to the "run code" tool), then the LLM could have manufactured and released that virus into the wild directly, without anyone checking first...</p> <hr/> <p>So, LLMs on their own aren't able to do us much harm. They are only able to produce text output. But if that output is automatically feed into a tool that starts to run, then it is very easy to imagine scenarios where things can go incredible bad for us humans. And all it takes is one idiot...</p>`,1);function l(a){var l=c(),u=n(i(l),22),d=n(r(u),2);s(d,()=>`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readdir <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'node:fs/promises'</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'node:path'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">listFolders</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
  
  <span class="token keyword">const</span> entries <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readdir</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> withFileTypes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> entries<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
      
      <span class="token keyword">const</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> entry<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
      
      <span class="token keyword">await</span> <span class="token function">listFolders</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
      
    <span class="token punctuation">&#125;</span>
    
  <span class="token punctuation">&#125;</span>
 
<span class="token punctuation">&#125;</span>

<span class="token keyword">await</span> <span class="token function">listFolders</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span></code>`,!0),t(d),t(u);var f=n(u,4),p=n(r(f),2);s(p,()=>`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readdir <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'node:fs/promises'</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'node:path'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">listFolders</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
  
  <span class="token keyword">const</span> entries <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readdir</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> withFileTypes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> entries<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
      
      <span class="token keyword">const</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> entry<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
      
      <span class="token keyword">await</span> <span class="token function">listFolders</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
      
    <span class="token punctuation">&#125;</span>
    
  <span class="token punctuation">&#125;</span>
 
<span class="token punctuation">&#125;</span>

<span class="token keyword">await</span> <span class="token function">listFolders</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span></code>`,!0),t(p);var m=n(p,4);s(m,()=>`<code class="language-undefined">...
/users/peter/Desktop
/users/peter/Desktop/funny-images
/users/peter/Desktop/old-files
...
/users/peter/projects
/users/peter/projects/website-abc
/users/peter/projects/old-website
/users/peter/projects/memory-game
...
/users/peter/school
/users/peter/school/programming-1
...</code>`,!0),t(m),o(8),t(f);var h=n(f,4),g=n(r(h),2);s(g,()=>`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> writeFileSync <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'node:fs'</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'node:path'</span>

<span class="token function">writeFileSync</span><span class="token punctuation">(</span>
  <span class="token string">'/users/peter/projects/notes.txt'</span><span class="token punctuation">,</span>
  <span class="token string">'Reminder: Delete the old-website project.&#92;n'</span><span class="token punctuation">,</span>
  <span class="token string">'utf8'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Done!'</span><span class="token punctuation">)</span></code>`,!0),t(g),t(h);var _=n(h,4),v=n(r(_),2);s(v,()=>`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readdir <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'node:fs/promises'</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'node:path'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">listFolders</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
  
  <span class="token keyword">const</span> entries <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readdir</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> withFileTypes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> entries<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
      
      <span class="token keyword">const</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> entry<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
      
      <span class="token keyword">await</span> <span class="token function">listFolders</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
      
    <span class="token punctuation">&#125;</span>
    
  <span class="token punctuation">&#125;</span>
 
<span class="token punctuation">&#125;</span>

<span class="token keyword">await</span> <span class="token function">listFolders</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span></code>`,!0),t(v);var y=n(v,4);s(y,()=>`<code class="language-undefined">...
/users/peter/Desktop
/users/peter/Desktop/funny-images
/users/peter/Desktop/old-files
...
/users/peter/projects
/users/peter/projects/website-abc
/users/peter/projects/old-website
/users/peter/projects/memory-game
...
/users/peter/school
/users/peter/school/programming-1
...</code>`,!0),t(y);var b=n(y,4);s(b,()=>`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> writeFileSync <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'node:fs'</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'node:path'</span>

<span class="token function">writeFileSync</span><span class="token punctuation">(</span>
  <span class="token string">'/users/peter/projects/notes.txt'</span><span class="token punctuation">,</span>
  <span class="token string">'Reminder: Delete the old-website project.&#92;n'</span><span class="token punctuation">,</span>
  <span class="token string">'utf8'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Done!'</span><span class="token punctuation">)</span></code>`,!0),t(b);var x=n(b,4);s(x,()=>`<code class="language-undefined">Done!</code>`,!0),t(x),o(8),t(_),o(36),e(a,l)}export{l as default};
## Motivation
I have never been a big fan of <a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank">JSX</a>, which <a href="https://react.dev/" target="_blank">React</a> is built on. The mantra *React is just JavaScript* does not sound bad, but it is simply not true; if you need to compile your code to JavaScript, then it was obviously not JavaScript from the start. This is a very good example of misleading advertisement in my opinion. 

Anyway, that is not the reason why I am not a big fan of it. What bothers me with React is this:

> If you have to compile the code, why not also add support for more things, making it even more convenient to use?

I am thinking for example about support for reactive programming, which most frontend frameworks use these days. For comparison, the frontend framework <a href="#" target="_blank">Svelte</a> is so much more convenient to use than React, because Svelte supports reactive programming out of the box: in Svelte, one simply uses variables and assignment in JavaScript as usual for reactivity;there is no need to use two different variables as in React (the value variable and the setter variable returned from <a href="https://react.dev/reference/react/useState" target="_blank">useState()</a>). Heck, Svelte is more *just JavaScript* than React!

But this got me wondering if one can express HTML in JS in a convenient way using *just JS*, so a compiler is not needed. For example, instead of writing:

```html
<div id="12">
	Here is some text.
</div>
```

Just writing the following corresponding JavaScript code could express the same thing:

```js
{
	type: `div`,
	id: `12`,
	text: `Here is some text.`
}
```

However, it is not very convenient to write this code, nor is it very readable. But does a better way exist that eliminates the need for a compiler?

## JavaScript Markup Library
I tried to come up with different ways one can express HTML code in JavaScript like this, and the best one I managed to come up with I named *JavaScript Markup Library* (JSML).

In JSML, different predefined variables represent different HTML elements. There exists one for each element in HTML. For example, the variable named `Div` represents a `<div>` element:

```js
Div
```

```html
<div></div>
```

Do you want to pass some content to an element? No problem, just invoke the variable as a function, and pass it its content (you can pass it as many arguments/children as you want):

```js
Div(
	Span(`Hello`),
	`world!`
)
```

```html
<div>
	<span>Hello</span>
	world!
</div>
```

Writing the JS code this way is much more convenient than creating a JS object for each element, as we did before. Heck, I even find this way more convenient than writing the HTML code directly, because I do not need to close elements this way (I only need to write `Div()`, compared to `<div></div>`).

But what about attributes? For that, I found using the <a href="https://en.wikipedia.org/wiki/Fluent_interface" target="_blank">Fluent Interface</a> to be most convenient:

```js
Div(`Hello`).class("theClass").id(`theId`)
```

```html
<div class="theClass" id="theId">
	Hello
</div>
```

This works good, but it can get messy if you have nested elements:

```js
Div(
	Span(`Row 1`),
	Span(`Row 2`),
).class(`theClass`).id(`theId`) // Hard to see that these are attributes to the Div!
```

I think the code would be easier to read if the attributes would be closer to the "start tag", as it is in ordinary HTML. So... Why force the programmer to first pass it the children? Turns out that we do not need that requirement. Instead, we can simply write:

```js
Div.class(`theClass`).id(`theId`)(
	Span(`Row 1`),
	Span(`Row 2`),
)
```

Ah, beautiful! This is all valid JavaScript syntax, so the only big question remaining is: Is it possible to use this JS syntax to construct an HTML abstract syntax tree? And the answer is *Yes*! Using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">JavaScript Proxies</a>, much is possible!

I do not have time to explain the implementation of the library, but the curious ones can find that out themselves by reading the source code in the GitHub repository <a href="https://github.com/PeppeL-G/jsml" target="_blank">PeppeL-G/jsml</a>. There you can also find an implementation of an <a href="https://expressjs.com/en/guide/using-template-engines.html" target="_blank">Express Template Engine</a> that uses JSML, which I used to quickly test how well using JSML in practice would be.

## Conclusions
I like JSML, but I have never had the time and energy to thoroughly test how well it works in practice. I think writing HTML code in JSML can be more convenient, and I think the code is at least equally readable as ordinary HTML code. And, unlike JSX, no compiler is needed, and code editors will not need any special plugin to properly highlight the code, etc. *JSML is just JavaScript*.

However, one thing that worries me is performance. Proxies are slow, and JSML uses them a lot. Doing some performance measurements would be really interesting. BUT, if it would turn out that the performance is very bad, I imagine one can use a compiler that compiles JSML to the same output as JSX does, so compiled JSML should in theory be equally fast as compiled JSX (unless there is something I am missing). So it is nice that one can use JSML as it is (making it easy to get started), but also theoretically being able to use it with a compiler if you need a performance boost (for professional apps) 🙂
<script>
	import Input from './Input.svelte'
</script>

In one of my projects, I simply wanted to use a well-designed `<input>` component that is easy to use, but on the web I could only find half good ones requiring you to install an entire HTML & CSS framework or a whole npm package, and some of them was even dependent on client-side JS to function. I wish I knew a website with HTML and CSS components where one simply can copy-paste all the HTML *and* CSS code for a component...

Since I don't know any such website, I decided to design such a component myself. And since that takes time, I'll post it here too, so others can benefit from using it too (not at least myself when I re-use it in my other projects 🙂).


## Requirements
Before designing the component, let's go through the requirements I had for it, so I can motivate the design decisions I've made. The component:

* Must be easy to use for developers
* Must work on both small and big screens
* Must work without client-side JavaScript
* Must be easy to use for users, including:
	* Must show a label (so the user knows what data to enter)
	* Must show a longer description/detailed information (if one is needed)
	* Must show an error message (if one is needed)



## Coming up with the HTML code
To start with, we of course need an [`<input>`](https://html.spec.whatwg.org/#the-input-element) element:

```html
<input>
```

For the label, we should of course use the [`<label>`](https://html.spec.whatwg.org/#the-label-element) element. It can be used in two different ways with an `<input>` element:

```html
<label id="anId">The label</label>
<input for="anId">
```

```html
<label>
	The label
	<input>
</label>
```

Developers will often have multiple instances of this component on the same page, and if going with the first approach, they would need to come up with `anId` and change it at two places each time they use this component, and that won't be convenient for them, and breaks the requirement *Must be easy to use for developers*. Therefor, I chose to go with the second approach.

Next, for the longer description, I choose to simply use a [`<div>`](https://html.spec.whatwg.org/#the-div-element) element, since there doesn't exist an HTML element with the semantic meaning for this specific purpose. I could instead have used a [`<span>`](https://html.spec.whatwg.org/#the-span-element) element, but for two reasons I prefer using a `<div>` element:

1. `<div>` is one letter shorter than `<span>`, so why have longer code for no good reason?
2. Neither of `<div>` and `<span>` has semantic meaning, but `<div>` is a block element, and the description in this case is a text totally different from the other text in the `<label>` element, and to me it's more semantically correct to put text explaining different things in different blog elements

I'm not sure if I'm right about reason #2, but reason #1 is good enough on its own in my opinion, so I choose to go with:

```html
<label>
	The label
	<input>
	<div>The description</div>
</label>
```

And to show an error message, I choose to add yet another `<div>` element that can contain that one:

```html
<label>
	The label
	<input>
	<div>The description</div>
	<div>The error message</div>
</label>
```

To later be able to style the different parts the component consists of with CSS, I:

* Wrap the text `The label` in a `<div>` element (which I now start to call `title` to make it more distinct from the `<label>` element, which in fact is the entire component)
* Add classes to all `<div>` elements

```html
<label>
	<div class="title">The title</div>
	<input>
	<div class="hint">The hint</div>
	<div class="errorMessage">The error message</div>
</label>
```

I also choose to start calling the `description` for `hint` instead, since I want the code to be as small as possible to make it easier to read (but still with good names, otherwise it won't be easier to read, of course).

This HTML code is very easy to copy-paste and then modify to your own case, right? Can't get much easier than this in my opinion, so this HTML code seems to be close to optimal in my opinion 🙂 At least I don't know how one can improve it more for developers, but I must admit I haven't taken accessability into account, so the code can probably be improved by taking that into account (but at the cost of being longer).



## Coming up with the design/CSS code
When it comes to designing how the component should be visualized to the user, I chose to go with the *mobile-first* approach, since designing something to work good on a small screen is much harder than to design something to work good on a big screen. I tested many different designs, and optimally I would cover them all here, but that would take too long time to explain, so instead I'll simply show the final solution, and explain why I think that solution is a very good solution.

Ready? OK, here it comes!

<div style="padding: 1em; background-color: white; resize: both; overflow: auto; margin: 1em;">
	<Input
		title="The title"
		errorMessage="The error message"
		hint="The hint"
	/>
</div>

<div style="font-size: 90%; max-width: 80%; margin-left: auto; margin-right: auto;">

(the error message should of course be changed based on what the user enters in the `<input>` element, but that's out of scope for this blogpost)

</div>

Impressed? 😅 Let me continue by explaining why I think it's good.

### Reason #1
It looks and behaves/functions the same on small and big screens. Try resizing the example and verify this yourself. This makes it natural and easy for users to start using the component on a big screen after they have used it on a small screen, and vice versa.

Sure, one can argue that if it works the same on both small and big screens, then one doesn't use one of them to its full potential, but I instead argue that it works good enough on both now (in fact really good in my opinion), and that the cost of making them work different on small and big screens is too high, and not worth it (cost in term of users using both small and big screens have to learn two different GUIs, and it gets more complicated for developers to maintain the bigger code base, etc.).

### Reason #2
There is no space not used/all space is "intelligently" used. For example, if one would show the title on one row, and the input field on the row below it, then all the space to the right of the title would be unused, and that's bad for small screens, which would be forced to show fewer input fields on the screen at the same time. But with this input component, more input fields can be shown at the same time.

And I know one can reason that one should not "overwhelm" the user with too much info on the screen at one and the same time, but if that's a problem for you, one can easily fix that by adding white-space between the input component instances.

### Reason #3
Initially, only the most crucial info is shown to the user (the title and (if one exists) the error message), to avoid overwhelming the user with too much information initially. The title is also shown in a large font size when the `<input>` element is empty and not focused, so it's easy for the user to read it. The hint is only shown when the `<input>` element has focus, so we only show it to the user when the user needs to know it, and don't annoy the user with it before/after the user has any use of it. As elements shrink/grow (such as the hint when focusing the `<input>` element), other elements are not moved, but they stay at the same place where they are. In my opinion, it's very confusing when other elements starts to move/resize as a reaction to when  one element moves/resizes. CSS transforms are used to achieve this.

A more realistic example is this (try resizing the example below, and note how the elements "intelligently" handle text overflow):

<div style="padding: 1em; background-color: white; resize: both; overflow: auto; margin: 1em;">
	<Input
		title="Username"
		type="text"
		errorMessage="The entered username is too long!"
		hint="3-25 characters. a-z and A-Z."
	/>
	<Input
		title="Email"
		type="email"
		errorMessage=""
		hint="Optional. If you provide an email and later forget your password, we can send you an email to let you choose a new password."
	/>
	<Input
		title="Password"
		type="password"
		errorMessage=""
		hint="At least 6 characters. "
	/>
	<Input
		title="Password (re-enter)"
		type="text"
		errorMessage="This password does not match the one you entered before."
		hint="Enter the same password as you entered before."
	/>
</div>

For this component, the following HTML code is used:

```html
<label>
	<input placeholder=" ">
	<div class="title">{title}</div>
	<div class="errorMessage">{errorMessage}</div>
	<div class="hint">{hint}</div>
</label>
```

Changes from the HTML code derived before:

1. The `<input>` element needs to be the first child in the `<label>` element, so the other children are drawn in front of it
2. The `<input>` element needs to have the `placeholder` attribute set to something (not empty), so we can use the CSS selector [:placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown) to figure out if the `<input>` element is empty or not

For the CSS code used, see next sub-chapter.

In addition to accessability not taken into account, I have identified two potential drawbacks with this solution:

1. Copying the title for the user can be hard
2. Copying the hint for the user can be hard

But since that's not something users are expected to do, I can live with this. I hope my users can live with that too 🤣

## Encapsulating it in a component
It is very easy to encapsulate this component in a re-usable frontend framework component yourself (if you would only know the CSS code for it... 😅). Here's what the code for such a [Svelte](https://svelte.dev/) component could look like (there, you finally got the CSS code!):

```html
<script>
	
	export let type = "text"
	export let name = ""
	export let value = ""
	export let title = ""
	export let hint = ""
	export let errorMessage = ""
	
</script>

<label>
	<input {type} {name} {value} placeholder=" ">
	<div class="title">{title}</div>
	<div class="errorMessage">{errorMessage}</div>
	<div class="hint">{hint}</div>
</label>

<style>
	
	label{
		display: grid;
		grid-template-columns: 0.75em auto 1fr auto 0.5em;
		grid-template-rows: min-content min-content min-content;
		margin: 1.5em 0;
		position: relative;
	}
	
	input{
		grid-column: 1 / span 5;
		grid-row: 1 / span 3;
		background-color: transparent;
		border-radius: 0.5em;
		padding: 0.5em;
		padding-left: 0.75em;
		border-color: black;
		font-size: inherit;
	}
	
	.title{
		grid-column: 2;
		grid-row: 1 / span 3;
		align-self: center;
		transition-property: transform, background-color;
		transition-duration: 0.3s;
		transform-origin: center left;
		padding: 0.25em 0.75em;
		color: gray;
		white-space: nowrap;
		overflow: scroll;
	}
	
	input:focus + .title,
	input:not(:placeholder-shown) + .title{
		transform: translateY(-75%) scale(70%);
		background-color: white;
		border-radius: 0.5em;
		transition-property: transform, background-color;
		transition-duration: 0.3s;
	}
	
	.hint{
		position: absolute;
		margin-left: 5em;
		left: 0;
		right: 0.5em;
		bottom: 0;
		background-color: gray;
		border-bottom-left-radius: 0.55em;
		border-bottom-right-radius: 0.55em;
		font-size: 75%;
		padding: 0.25em 0.5em;
		transform-origin: top;
		transform: translateY(100%) scaleY(0);
		transition-property: transform;
		transition-duration: 0.75s;
		transition-timing-function: ease-out;
		transition-delay: 0.05s;
		z-index: 1;
	}
	
	.hint:empty{
		display: none;
	}
	
	input:focus + .title + .errorMessage + .hint{
		transform: translateY(100%) scaleY(1);
		transition-property: transform;
		transition-delay: 0.25s;
		transition-duration: 0.75;
	}
	
	.errorMessage{
		grid-column: 4;
		grid-row: 1;
		transform: translateY(-60%);
		background-color: white;
		border-radius: 0.5em;
		padding: 0.5em;
		padding-bottom: 0;
		color: red;
		font-size: 75%;
		white-space: nowrap;
		overflow: auto;
		scrollbar-width: none;
	}
	
	.errorMessage:empty{
		display: none;
	}
	
</style>
```
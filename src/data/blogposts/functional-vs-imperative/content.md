I started my career as a programming teacher. During the first years, I helped out in courses covering functional programming in Lisp (the dialects [Common Lisp](https://lisp-lang.org/) and [Racket](https://racket-lang.org/)). Later, I taught courses where imperative programming instead was used in JavaScript ([ECMAScript](https://262.ecma-international.org/14.0/)), [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) and [Python](https://www.python.org/).

So, I've been teaching both functional programming and imperative programming. Which one is easier to teach, and why? Let me share my experiences and opinions.

---

Let's start with functional programming. These courses were mostly focused on problem solving (algorithms), so my perspective here will be from that point of view.

When a student faces a problem and asks for help with getting started, it's usually (always?) very easy to explain to the student how they should think:

> 1. Find an instance of the problem that is so easy to solve that you can directly send back a value
> 2. If the problem is not that easy to solve, try to make the problem smaller somehow, such as by:
> 
> 	* Removing a value from a list, or
> 	* Decrement a number by one,
> 	* Etc.
> 
>   Then use recursion to solve that smaller problem, and use induction (i.e. assume the recursive call successfully returns the correct value), and then somehow modify that value to compute the solution to the entire problem.

As an example, let's say we should implement a function that summarizes the numbers in a list/array.

The instance of the problem that is so easy to solve is when the list is empty, because then the sum of the numbers is simply `0`:

```js
function getSum(numbers){
	
	// Handle the simplest problem instance.
	if(numbers.length == 0){
		return 0
	}
	
	// TODO: Handle the other problem instances.
	
}
```

If the problem instance is harder to solve, then we make it smaller by removing the first number from the list, and we use recursion to compute the sum of the rest of the numbers, and then we just need to add the first number to that sum:

```js
function getSum(numbers){
	
	// Handle the simplest problem instance.
	if(numbers.length == 0){
		return 0
	}
	
	// Handle the other problem instances.
	return numbers[0] + getSum(numbers.slice(1))
	
}
```

It's also very easy to visualize how the computer computes this using the [Substitution Model](https://sicp.sourceacademy.org/chapters/1.1.5.html). For example, if we want to compute `getSum([3, 2, 5])`:

```
getSum([3, 2, 5]) -->
3 + getSum([2, 5]) -->
3 + 2 + getSum([5]) -->
3 + 2 + 5 + getSum([]) -->
3 + 2 + 5 + 0 -->
10
```

In short, functional programming is easy to teach, and easy to explain how it works.

---

Now, let us compare that with imperative programming. The same function implemented with a loop in imperative programming looks like this:

```js
function getSum(numbers){
	
	let sum = 0
	
	for(const number of numbers){
		sum += number
	}
	
	return sum
	
}
```

In this implementation, we have not split the problem into a simple case and a harder case ("the recursive case"). Instead, we try to handle both cases at the same time, and the same way. And for beginners at programming, I believe that this makes the solution much harder to understand, both how it works and how to come up with.

As a teacher, how should I be able to help a student to come up with the first line of code (`let sum = 0`) on their own? The best I can say is something like:

> The function should return a number, so your result variable should be a number.

But then the student might ask:

> How do I know that I need a result variable?

And that's a very good question. The reason I know that is because (from my own experience), I know this implementation will next require a loop to iterate over all the numbers and add them to the `sum` variable. But the student who doesn't have any programming experience yet won't know that.

So, for a student to be able to write the first line of code, they must already have realized that a loop should come next. So the student basically has to solve the entire problem before they can write the first line of code in the function. This makes it much harder to get started with writing imperative code compared to functional code, where you instead split the implementation of a function into different cases that can be implemented independently of each other.

So, in imperative programming, it's often not enough to just teach about variables and loops, and then expect the students to be able to implement the `getSum(numbers)` function. Instead, it's important to also teach the [Accumulator Pattern](https://runestone.academy/ns/books/published/thinkcspy/Functions/TheAccumulatorPattern.html), since the loop often must be used with a result variable:

```js
let resultVariable = `An initial value of some kind`

for(const value of values){
	resultVariable = computeNewValue(resultVariable, value)
}
```

And for students having to learn also this pattern makes it so much harder for them to get started.

But, let us also dive deeper into explaining how the code works. In functional programming, we hade the substitution model. Easy to learn, easy to explain, and easy to visualize.

What's the corresponding thing we have in imperative programming? I think that would be the variable table, and then step-by-step execution of our statements and expressions.

Here's the imperative implementation again:

```js
function getSum(numbers){
	
	let sum = 0
	
	for(const number of numbers){
		sum += number
	}
	
	return sum
	
}
```

Let's say we want to compute `getSum([3, 2, 5])`. In the function, our variable table will first contain the `numbers` variable (parameter):

<table border="1">
	<thead><tr><th>Variable</th><th>Value</th></tr></thead>
	<tbody>
		<tr><td>numbers</td><td>[3, 2, 5]</td></tr>
	</tbody>
</table>

Then we execute `let sum = 0`, and a new entry is added to our variable table:

<table border="1">
	<thead><tr><th>Variable</th><th>Value</th></tr></thead>
	<tbody>
		<tr><td>numbers</td><td>[3, 2, 5]</td></tr>
		<tr><td>sum</td><td>0</td></tr>
	</tbody>
</table>

Then we get to the loop, and a new variable is added to our variable table:

<table border="1">
	<thead><tr><th>Variable</th><th>Value</th></tr></thead>
	<tbody>
		<tr><td>numbers</td><td>[3, 2, 5]</td></tr>
		<tr><td>sum</td><td>0</td></tr>
		<tr><td>number</td><td>3</td></tr>
	</tbody>
</table>

Then we execute `sum += number`, and we need to update our variable table:

<table border="1">
	<thead><tr><th>Variable</th><th>Value</th></tr></thead>
	<tbody>
		<tr><td>numbers</td><td>[3, 2, 5]</td></tr>
		<tr><td>sum</td><td><s>0</s> 3</td></tr>
		<tr><td>number</td><td>3</td></tr>
	</tbody>
</table>

Then we start next iteration in the loop, and we store the next number in the `number` variable:

<table border="1">
	<thead><tr><th>Variable</th><th>Value</th></tr></thead>
	<tbody>
		<tr><td>numbers</td><td>[3, 2, 5]</td></tr>
		<tr><td>sum</td><td><s>0</s> 3</td></tr>
		<tr><td>number</td><td><s>3</s> 2</td></tr>
	</tbody>
</table>

Then we execute `sum += number` again, and we need to update our variable table:

<table border="1">
	<thead><tr><th>Variable</th><th>Value</th></tr></thead>
	<tbody>
		<tr><td>numbers</td><td>[3, 2, 5]</td></tr>
		<tr><td>sum</td><td><s>0</s> <s>3</s> 5</td></tr>
		<tr><td>number</td><td><s>3</s> 2</td></tr>
	</tbody>
</table>

Etc. You do see how incredibly much more complicated it is to explain how imperative programming works, right? For functional programming with the substitution model, it is very easy and elegant:

```
getSum([3, 2, 5]) -->
3 + getSum([2, 5]) -->
3 + 2 + getSum([5]) -->
3 + 2 + 5 + getSum([]) -->
3 + 2 + 5 + 0 -->
10
```

For imperative programming, we needed a variable table to keep track of the state of the program as we execute the statements in the program, and we also needed to keep track of which statement that is next to be executed. It's so much to keep track of!

And imagine you're a student at a lecture taking notes on this, and then look back on your notes. You can see that some variables in the table have been assigned new values sometimes, but it's not obvious when, nor why. In the substitution model, you have all info there, and it is so much easier to write.

---

So, my conclusions/opinions? I think functional programming is much easier to teach for teachers, and much easier to learn for students. But the industry is still largely using imperative programming, so it might still be favorable for beginners at programming to focus on learning imperative programming.
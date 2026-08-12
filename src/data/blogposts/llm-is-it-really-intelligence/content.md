<script>
	import InfoBox from '$lib/InfoBox.svelte'
</script>

First, let's go through how Large Language Models (LLMs) actually work, and after that we can discuss whether they are intelligent or not, and you can make up your on mind on the matter. I'll skip going through the technical details of how LLMs are implemented internally, and will instead keep things simple by only explaining how they work from an external point of view.

## What is an LLM?
An LLM is a program that predicts the next word in a text by only looking at the previous words in the text. It does this by (somehow internally) compute the probabilities for how likely each word in the programs vocabulary is to come next in the text.

For example, if you would give the LLM the following text:

> Alice is 17 years old and she is a

The LLM would output a table like:

| Word     | Probability |
|----------|-------------|
| mom      |          1% |
| happy    |         10% |
| girl     |         20% |
| daughter |          5% |
| boy      |  0.0000003% |
| sister   |          5% |
| and      |  0.0000001% |
| ...      |         ... |

This output table contains a computed probability for every word the LLM is aware of/has been trained on. As you probably understand, this requires the computer that runs the LLM to carry out an enormously big amount of computations, which is one of the reasons why LLMs are very expensive and very slow to run.

<InfoBox title="LLMs can be fast...">

LLMs can run "fast" by using a lot of very good and very expensive hardware. That's why you often get responses very quickly when writing [ChatGPT](https://chatgpt.com/) and other LLMs. But try running one on your own computer, and you will need to wait minutes/hours for responses from such good LLMs.

</InfoBox>

From this output table, one then often picks the most probable next word (`girl` in the example above) to continue the text with:

> Alice is 17 years old and she is a girl

After this, you can send this new text into the LLM, and it will output a new table with words and their probabilities again, from which you then can select the most probable word to continue the text with again, and so on. This repeated usage of LLMs can be used to make them produce long texts, even though they are actually only producing one word at a time.

<InfoBox title="About generation of creative texts...">

You don't always have to pick the most probable next word. If you want the LLM to generate a creative text (such as a new story), then you can instruct it to pick a random word out of the 5 most probable words, or similar, which will make it produce different texts each time it runs.

</InfoBox>

So when you for example use ChatGPT and ask it a question like the following:

> Which color is the sky?

Then that question will be feed into the LLM, and it will go through the steps explained above and might iteratively produce something like this:

> Which color is the sky?
>
> The

> Which color is the sky?
>
> The sky

> Which color is the sky?
>
> The sky is

> Which color is the sky?
>
> The sky is blue

> Which color is the sky?
>
> The sky is blue.

<InfoBox title="Words VS Tokens...">

I said that an LLM predicts the next word in a text. It's more accurate to say that it predicts the next *token*. A token can be an entire word, a part of a word, or a symbol like a dot, or a comma, etc.

</InfoBox>


## Are LLMs intelligent?
Now that you know how LLMs work from an external point of view, do you think it's correct to say that they are intelligent?

Some people would answer that question with a *no*. They argue that an LLM does not think on its own, and they choose to see it as a machine that simply computes word probabilities. And from this point of view, it is very hard to see it as something intelligent. Instead, it's rather a dumb machine that maps input words to output words' probabilities.

But the big question is really what we choose to use as definition for *intelligence*. And this is actually a very difficult question to answer, because no one seems to know the answer to it. But, what all seems to be able to agree on is that we humans are intelligent, and this is something [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing), one of the first AI researchers, used in his [Turing test](https://en.wikipedia.org/wiki/Turing_test). That is a test to see if a machine can be seen as just as intelligent as a human, and if it is, then that must mean the machine is intelligent.

The Turing test is really simple: an interrogator (a human) will chat respectively  with another human and an AI program, but the interrogator doesn't know which one is which. The goal of the interrogator is to figure out which is the human, and which is the AI program. And to figure this out, the interrogator may only send chat messages to them, and read their responses. Lying is allowed, so it is OK for the AI program to write something like *My name is Lisa, and I work as a teacher*. And if the interrogator after some chatting can't figure out which of them are which, then the AI program should be seen as intelligent as humans, since we can't tell it apart from humans.

Given this definition/test, some LLMs are now at least very close to passing the turing test. But is this really intelligence or not? You are free to make up your own mind.

## Intelligence = Pattern Recognition?
Finally, I thought I could share my stance on the matter.

I suspect that all types of intelligence, including the one we humans have, is a form of pattern recognition: the ability to predict the next entity in a sequence. Like, a wild bird that is being fed at a house learns that there's usually new seeds in the feeder every morning, and therefore chooses to come back and check every morning, even when the bird is too far away too see that new seeds actually have been added:

```
[New morning] → [New seeds at house] → [Becomes full]

    Known            Predicted           Predicted
```
Or a dog that accidentally do something funny, like walking on its front paws, and then notices that the owner liked that and started to pet him, will after a few times recognize that the action "walk on front paws" leads to "being pet", and therefore choose to continue doing it every time it wants to be pet:

```
[Walk on paws] → [Getting petted] → [Becomes happy]

    Known            Predicted         Predicted
```

The intelligence we human posses I imagine is very much the same; no matter what we think, we always try to predict the next entity of some kind based on what comes before it; the very definition of pattern recognition. So I think LLMs use the same type of intelligence that all living beings fundamentally use, which might also even be the only type of intelligence that actually exists. 

So from my point of view, I don't think it's wrong to call LLMs intelligent. Maybe a single LLM on its own is not enough to call it intelligent, because a trained LLM lacks the ability to learn/recognize new patterns, but if you build a system that includes a trained LLM and the ability for it to be retrained on the fly, then I very much think it can be seen it as something that possesses intelligence very similar to the intelligence we humans posses.
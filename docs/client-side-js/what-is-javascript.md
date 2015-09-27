What is JavaScript?
===================

Unlike HTML and CSS, JavaScript is a full fledged programming language. That means
it can handle logic and math, and store information in variables. For websites,
JavaScript is what handles the logic of the user interface. For example, when you
get a new notification on Facebook, it's JavaScript that's updating the number you
see above the globe icon. Normally, JavaScript only runs in the browser, meaning
it's handling all of the logic that doesn't have to touch base with a server.

### Hello World in JavaScript

```javascript
console.log("Hello World!");
```

### Breaking Hello World Down

In this example, we're calling a function called `console.log` that prints out
anything inside the parentheses. This is very similar to `printf` or `System.out`
if you've taken a C or Java programming class before.

### Variables

But what if we wanted to display different text, instead of `Hello World!`?. Heres
where a variable would come in handy. Let's go back to our hello world example,
except this time, use a variable to let us change what's being displayed.

```javascript
var text = "Hi Everyone!";
console.log(text);
```
Now, instead of displaying our variable name, we display the text stored in our
variable name. Variables can store more than just text too. They can store numbers,
booleans (whether something is true or false), and in JavaScript, even functions
(but we'll get to that later). If you've taken a Java or C programming class, you'll
notice that we're not declaring variables with their types (`int`, `string`, `float`),
and that's because in JavaScript infers what type the variable is at runtime.

### Functions

We've mentioned functions a lot already. But now it's time to really see what functions
are about in JavaScript. Let's go back to our hello world example, and make some
more modifications.

```javascript
function display(input) {
  console.log(input);
  return input + " You're all awesome!";
}
var theTruth = display("Hi everyone!");
console.log(theTruth);
```

It may not look like anything's happened, but now when we type in `display('hi')`,
`hi` will appear in our console. And this will work with `display(6)`, `display(true)`,
etc. Functions are a bit more complex, so let's break it down a bit.

#### Arguments

Arguments are the inputs we take in for our function. In our display function, we
take one input called input, and `console.log` the variable. But there's no reason
why we couldn't have 2 arguments, or 5 arguments, or even 0 arguments. We just need
to define those arguments when we're writing the function like so:

```javascript
function foo(bar, baz, qux) {
  // Your logic would go here
}
```

#### Function Body

The function body is where the magic happens in our functions. In our example, we
used the function body to tell our browser to `console.log` the input we received.
The body is generally a good place to store logic that we use a lot in our program.

#### Return

Not only can a function execute the logic in its function body, it can also output
values obtained from executing the logic. For example, suppose we wanted to make
a function took any number an multiplied it by 2 so we could store that value in
another variable. The logic for that would look something like this:

```javascript
function timesTwo(num) {
  return num * 2;
}
```

The return in there allows us to create logic like this outside the function

```javascript
var bigNum = timesTwo(5);
```
`bigNum` in this case would equal `10` since that would be the value returned from
the function.

### Wrap up

This is by no means a full encapsulation of JavaScript, but enough so that we can
add some logic to our website. To explore JavaScript some more, Codecademy has a
great course on JavaScript that can be found [here](https://www.codecademy.com/en/tracks/javascript).

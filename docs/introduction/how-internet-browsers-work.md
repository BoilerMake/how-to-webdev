How Internet Browsers Work
==========================

Obviously Internet browsers are very complex systems. But as a developer of web
applications it is a good idea to have a general understanding of how browsers
work.

> **Warning**: The text to follow is a serious over simplification. If you want
to understand how browsers *really* work, then look [here](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/).

## Text -> Magic -> Product

All programs work the same way. Developers write plain text, they put that text
into some special program, then the output of that program is the final product
that the users use.

For example, an Android developer will write Java code (the plain text). They'll
then run their Java source code through a Java compiler (the special program).
The output of the Java compiler is a finalized Android application that someone
can install on their phone.

Browsers don't work too differently from this. A web developer will write HTML
markup (the plain text). That will be sent over the Internet (via a protocol
called HTTP) to a user's browser. The browser (the special program) will then
translate that plain text into objects on the screen.

## Websites versus Web Apps

There sometimes is a lot of confusion over *websites* and *web apps*. The
difference isn't too hard to understand. Websites are **static** and web apps
are **dynamic**.

Websites are the same for all users. They don't render the content that they send
to their users based on any variables. They are simply serving the same static
assets over again and again.

Web apps can dynamically render different content for different users. They often
talk to databases to render the content that they send to their users. **Web
apps are websites, but websites aren't necessarily web apps.**

> Our web app does send the same content to all users, but it will talk to a
database, and therefore it can be considered a web app.

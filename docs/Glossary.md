# Glossary

You're going to be learning a lot of content at an accelerated pace. Here is a
glossary that you can reference if you hear or see a word and your unsure of
what it means.

## bower

Bower is a command-line tool for install client-side libraries. Dependancies
are stored in a `bower.json` file.

```bash
# This is how you install bower. We add the -g flag so that it's added globally.
$ npm install -g bower

# This is how we create a template bower.json file
$ bower init

# This is how we install a library using bower. We add --save so it will be added to our bower.json file.
$ bower install <library> --save

# This is how we install all of the dependancies from a bower.json file.
$ bower install
```

## http-server

Http-server is a command-line tool for running a simple HTTP server. It will
server all of the files and folders in the directory that it is run from.

```bash
# This is how you install http-server. We add the -g flag so that it's added globally.
$ npm install -g http-server

# This is how we start an HTTP server.
$ http-server

# You can specify the port if you want!
$ http-server -p <port>
```


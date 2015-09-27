What is MVC?
================

With a project the size of this, it's really easy for code to start getting messy
real quick. Luckily there are some programming design paradigms we can utilize to
avoid messy code.

One of the most common paradigms is MVC, Model, View, Controller.

## Model

The model handles all of the information. For example, the model for Facebook would
be all the information about its users such as each user's name, birthday, profile
picture, etc.

## View

The view handles how everything looks in our app. If we use the Facebook example
again, the view would be the news feed or your profile. All the code that tells us
how things should look on Facebook (ie. the colors, the layout, etc) is part of
the view.

## Controller

The controller is the bridge between the model and the view. When information in
the model changes, it's the controller's job to let the view know what's happening
and update accordingly. Similarly, when a user clicks a button or types something
in the search bar in the view, it's the controller's job to tell the model to update
its information, so that everything is consistent. When you update your profile
picture, the controller lets the model know what happened after you've uploaded your
image. That way, all of your friends see an up to date version of the model and
your brand new profile picture.

## Why is MVC important?

The model and the view are generally integral parts of the app to make it work.
The real power from MVC comes from the controller. It becomes difficult to keep
track of everything really quickly when the model and the view can talk to each
other freely, since neither could be a full representation of truth. With a controller
in place, at each moment, the views and models will be up to date and consistent.

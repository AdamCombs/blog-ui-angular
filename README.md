# EndlessStaircase Front-end

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

** This Project is currently under construction **

** It currently uses a Back-end app hosted on heroku at `http://endless-api.herokuapp.com` **

## Running the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Objective

This Angular App was created to be a simple Front-End for my other project `blog-api-flask`. You can find it here: `https://github.com/AdamCombs/blog-api-flask`.

The app recieves blog posts in the form of JSON, styles them, and displays them for the viewer. 

+ It posesses a main component `post.component` that displays a list of `Post` objects.

+ "Top-Four" sidebar, that shows a preview and will alter the `Post` being viewed when clicked. 

+ "Tag" sidebar where when clicked alters the `Post` being viewed when clicked.

+ The `Post` objects and `Tag` objects are retrieved using a `post.service`. Their data is stored in `app.component` the parent, and passed between components using the `@Input` and `@Output` decorators as well as an `EventEmitter`.

+ The `Header`, `Footer`, and `Profile` components display static information. 

## Styles

The styles are inspired by a minimalist approach. They are stored inside the project in three main locations. The `styles.css` and `app.component` hold universal styles. Each component also has it's personal style sheet: `.component.css`.

## Application Structure

The `app` folder holds the `parent` component to all others visible on the screen.

+ app.component - stores post and tag variables that are passed between childern.

  + post - directory holds relevant files to the component that displays each post and it's related tags. The `posts` that are visible to the user are recieved by the parent. 

  + tags - directory holds the tags received from the parent component. When the tag is clicked it emits an event to change the posts in the parent component.

  + sidebar - directory holds the relevant files to the post preview on the right side. It displays a small preview of the four most recent posts in the form of a button. When clicked it will display the post in the post component. 

  + profile, footer, header - directories hold simple components that display their static content. 

+ post.service - holds the relevant methods to retrieve the JSON objects being displayed.

+ post.model, tag.model - hold the objects created by the recieved JSON.

+ global-variables - has main url string that is passed between components. 

## Create, Delete, and Update

This has yet to be added.

## Thank you for reading,

## Adam Combs

## Adamcombs1@gmail.com

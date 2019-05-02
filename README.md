# Build

My main build process is a bit different than in this project due to usually using some sort of routing and apollo / actual backend interactions. I decided to go with Typescript because it is what I am most comfortable with at the moment. The folder structure is the same I use in mostly all of my projects.

```
- components
  - Any component that is reusable
- public
  - index.html
- views
  - any view that the app strictly shows
- index.tsx
```

I feel this folder structure is pretty straight forward and really easy to navigate. I did not follow my own guidlines for the Input / Button because of the simplicity of the app. It would've helped a bit, but in an attempt to stay under the 1hr mark I rushed a bit. Color selection took too long haha.

# Deployment

If this were a production application I would deploy with [now](https://zeit.co/now).

# How it works

We start with 0 items on our list and as the end user adds we append the list. When marked done the item is manipulated in the state to be marked isDone: true, we do it this way so the list looks like it isn't re-rendered and is a smooth cross out with the button to mark changes (I wish I had a bit more time to make a better system for this, checkbox / icons etc). Users can mark is done or simply remove the item from the list completely. This works in a similar way, we give the item thats added a arbitrary ID via `uuid` so that we can manipulate it later one easily.

# Finally

Thank you for consideration and hope I hit the expetations.

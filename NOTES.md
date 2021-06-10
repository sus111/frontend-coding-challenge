# Notes

Please leave anything you like in here

## Part 1

Task 1:
Goals.vue was expecting a 'name' param, but I decided to access it directly from the store, since it stops it makes it more reliable than passing it via the router.

Task 2:
I'm passing a 'customEvent' property down the the CheckButton file in order to make the component reusable. I wanted to store the form data in the same format as it's expected in the API, so I added a 'value' property to the goals and diet objects that are passed to the buttons, and used the same format as in the server file.
Yay, I'm building an app in Vue! :D

I'm not sure I'm using the vuex store correctly as there is a state.js file I haven't used yet.

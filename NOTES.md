# Notes

## Part 1: Completing the survey

Task 1: Name
Goals.vue was expecting a 'name' param, but I decided to access it directly from the store, since it makes the name value more reliable than passing it via the router.

Task 2: Goals & Diet
I'm passing a 'customEvent' property down the the CheckButton file in order to make the component reusable. I wanted to store the form data in the same format as it's expected in the API, so I added a 'value' property to the goals and diet objects that are passed to the buttons, and used the same format as in the server file.
Yay, I'm building an app in Vue! :D

I'm not sure I'm using the vuex store correctly as there is a state.js file I haven't used yet.

Task 3: DOB
I'm storing dob in the vuex store. However, in order to set this.dob for the disableNext function to work - I don't know how to properly 'catch' the emitted dob value from the Button component. I'm using @input on the input element, but doesn't seem correct? This works, but seems like there might be a better Vue way to handle this.

Task 4: Survey Progress
I'm setting the currentStep from the mounted lifecycle hook of each onboarding page. I wondered about passing the name of the component rather than hard-coding a number. The stages of the onboarding form could be a list available across the app, and also used when navigating to the next screen or back to the previous one (eg. this.$router.push('/diet')), which would make rearranging page order / removing pages easier.

Task 5: API call
I removed axios from the project, as we can use fetch. I'm catching the result of the async call inside postSurveyRequest in the Dob component & pushing to the success screen from there. In React, I'd handle routing and subsequent action calls from within an action, rather than a component, so I'm not the best place to handle this.
I am rendering the error message that's returned from the server in case of request error, not sure if it's necessary. The error is cleared when the user focuses on any of the dob inputs.
I removed the getters as I didn't find any use for them, however, I might be missing something!

## Part 2: Adding a Success screen

I tried to use as many existing classes as possible, but I had to add a few class names for text as it's difficult to find the right styles from the minified css in the html file!

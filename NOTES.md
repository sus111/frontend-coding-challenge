# Notes

## Part 1

Task 1:
Goals.vue was expecting a 'name' param, but I decided to access it directly from the store, since it makes the name value more reliable than passing it via the router.

Task 2:
I'm passing a 'customEvent' property down the the CheckButton file in order to make the component reusable. I wanted to store the form data in the same format as it's expected in the API, so I added a 'value' property to the goals and diet objects that are passed to the buttons, and used the same format as in the server file.
Yay, I'm building an app in Vue! :D

I'm not sure I'm using the vuex store correctly as there is a state.js file I haven't used yet.

Task 3:
I'm storing dob in the vuex store. However, in order to set this.dob for the disableNext function to work - I don't know how to properly 'catch' the emitted dob value from the Button component. I'm using @input on the input element, but doesn't seem correct? This works, but seems like there might be a better Vue way to handle this.

Task 4:
I'm setting the currentStep from the mounted lifecycle hook of each onboarding page. I wondered about passing the name of the component rather than hard-coding a number. The stages of the onboarding form could be a list available across the app, and also used when navigating to the next screen or back to the previous one (eg. this.$router.push('/diet')), which would make rearranging page order / removing pages easier.

# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site on screen sizes greater than 300px and less than 1200px
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### What I was able to do
  Users should be able to:

  - View the optimal layout for the site on screen sizes greater than 300px and less than 1200px
  - Receive an error message when the `form` is submitted if:
    - The `input` field is empty
    - The email address is not formatted correctly
    
### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Going into this project with no knowledge of input validation meant I had to do a whole lot of research on YouTube, MDN docs, ChatGPT
I learned of the RegExp object in Javascript which is used to test if a string matches a specific format using the test method which I implemented in my JS code. 


```js
var pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
if(pattern.test(validate)){
    contentDiv.appendChild(paragraph);
    return true;
}
```
I also learned some aspects of DOM manipulation using the createElement and appendChild methods
I was also able to understand how to call the JS function from my HTML document

```h
<input class="input" type="text" onkeyup="validateEmail()" placeholder="Email Address" id="email"></input>
```


### Continued development
  Subsequently, i would love to refine my code to make sure it's more efficient and fully responsive

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

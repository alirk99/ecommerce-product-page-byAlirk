# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/responsive-and-interactive-ecommerce-product-page-_ZzsuQ3i-)
- Live Site URL: (https://alirk99.github.io/ecommerce-product-page-byAlirk/)

## My process

### Built with

- Semantic HTML5 markup
- svg icons
- CSS Flexbox
- CSS Grid
- CSS media query
- CSS transition
- CSS transformation
- JS DOM element methods
  - queryselector()
  - getelementbyid()
  - onclick()
- JS this method
- JS functions
- JS string concatenation 
- JS array length property
- JS jquery events
  - .attr()
  - .removeClass()
  - .addClass()
  - .click()

### What I learned

I tried many techniques of CSS for the first time like grid, animation, utility classes etc.
Also used JS for the first time to make a web page responsive. looking forward to building more cool web pages.

### Continued development

During this project, i came across many ways to perform a task in Javascript. I chose the one i found convenient. I want for have a better understanding of what is the better way, e.g: jquery and DOM CSS and HTML does the same thing in different ways as shown below.

```js
    $(".deleteProduct").click(function () {
        $("#cartEmpty").removeClass("hidden");
        $(".cartItem").addClass("hidden");
        $("#checkout").addClass("hidden");
        // also possible
        // document.querySelector("#cart-popup").style.display = "none";
        // $("#cart-popup").hide();
        $("#cart-popup").css("display", "none");
    });
```

Have 2 unresolved issues in this project
First is the hover state of thumbnails, i used opacity attribute to give the blue effect which works fine for the main page but in lightbox due to black background the effect is not as desired. 
I came across overlay technique but i think it will require every thumbnail to be enclosed in a div. Need suggestions in it.

```css
.thumbnailImage:hover{
    opacity: 0.6;
}
```

Secondly, i am having difficulty in keeping cart popup in its place (right below the cart icon) for larger screen sizes in which it travels far right. I applied a fix by using media query. Need suggestions on that too.

```css
#cart{
    position: absolute;
    top: 80px;
    right: 3%;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 15px 38px -7px var(--Grayish-blue);
    width: 360px;
    min-height: 276px;
}
@media screen and (min-width:1600px) {
    #cart{
        right: 22%;
    }
}
```

### Useful resources

- [Kevin Powell](https://www.youtube.com/watch?v=6j5q-hP8sfk&t=1491s) - This video helped me to understand lightboxes.
- [CodeWithHarry](https://www.youtube.com/watch?v=GeykycZ4Ixs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=103&t=1968s) - Took help from this aswell.
- [w3schools](w3schools.com) - This resource is really helpfull.


## Author

- Frontend Mentor - [@alirk99](https://www.frontendmentor.io/profile/alirk99)
- Twitter - [@alirk99](https://www.twitter.com/alirk99)


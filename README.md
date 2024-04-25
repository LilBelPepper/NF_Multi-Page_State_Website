# Student Work - Multi-Page California State Website

This README serves to document and explain my thoughts and journey in building this project. As such, it might be a bit informal in tone. 

## Table of contents 

- [Overview](#overview)
  - [The Project](#the-project)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview 

This build was created for my final project build of my WGU Front End Web Development class. 

My main goals for this project was to test out using the Bootstrap5 CSS Framework for the first time, implementing components such as an image carousel and navbar menu dropdowns. I also wanted to practice using a CSS grid system to help keep elements displayed consistently. I also wanted to incorporate using color variables/```var()``` for the CSS styling as I learned with my last project, [Frontend Mentor's Intro Component with Sign up Form](https://github.com/LilBelPepper/NF_Intro_Component_with_Sign_Up_Form), I was spending too much time copying and pasting the hex codes when I could've just used color variables. I decided not to focus too much on creating breakpoints for this project on this go around, but I do plan on implementing mobile and laptop breakpoints in the future. With that in mind, this project was styled on a monitor that has a resolution width higher than 1600px. 

My initial time goal for this project was a cumulative hourly completion of 15 hours, not including breaks. Because this project included limited Javascript interactibility, I thought I would be able to complete this build a bit quick. However I didn't realize this build technically had me making multiple pages for one project, something I had yet to do before. While there are only four pages max, (main landing page and four separate state pages that share the same layout), I definitely feel the additional pages added to my time. I spent approximately 11 hours and 30 minutes on the HTML and CSS of all four pages. A lot of this time was unfortunately spent debating whether or not I wanted to implement Bootstrap5 for this project, as I was bit overwhelmed with all of their classes as well as figuring out how to style their default components. It was also spent debating whether I wanted to include a mobile breakpoint since I was already practicing CSS grid, but since my project formally didn't require a mobile display, I nixed the mobile styling halfway through. As mentioned before, I plan on revisting the mobile display again sometime in the future. The Javascript portion was relatively quick as the Intro Component build I mentioned previously required me to learn input validation, so I'd only spent about 5 hours on the Javascript. That makes my overall time spent on this build from start to finish 16 hours and 30 minutes. I'm sure I could've finished a bit quicker if wasn't going back and forth. On one hand, I'm glad I just barely made my personaly time goal! On the other hand I'm not quite sure if this counts as me being able to accurately judge how long it will take for me a build a product yet. 

### The Project 

Prior to this task, I had to build a low-fidelity wireframe myself before moving on to the markup. My previous builds all provided the designs for me, and all I had to focus on was building. This project was an interesting treat as I'd never created my own layout before, so I thought it would be fun to test out my "Design Eye." 

I quickly started to understand those memes you would see on social media about Designers wanting to implement a plethora of cool features, followed by the Developers wanting to die inside once they saw the proposed web design. 

Once my low-fidelity wireframe was passed, I moved onto making a high-fidelity mockup to hone in on the vision I had for this project. 

Some requirements for this project include: 

- A ```header```, ```nav```, ```section``` and an ```aside``` element on *each* page
- Shown at least once: a link that opens an external website or new window  
- Shown at least once: an HTML-coded ordered list with *at least* **3 list** items
- Shown at least once: an HTML-coded unordered list with *at least* **3 list** items
- Shown at least once: an HTML-coded table consisting of **3-6** columns and rows to organize content
- A form that includes text fields for the user's first and last name, user's email address, confirmation field for the email address, and a text box that allows users to ask a question
- Include a Javascript code that verifies the email fields match when a user enters a second email address

## Screenshots 

### Main Landing Page Design
![Main Landing Page Design](/Designs/HiFi%20-%20Main.png)
### City Page Design 
![City Page Desgin](/Designs/HiFi%20-%20City.png)
### Progress Photo 4-19-24
![Progress Photo 4-19-24](/images/PROGRESS%2019-4-2024.PNG)
### Progress Photo 4-22-24
![Progress Photo 4-22-24](/images/PROGRESS%2022-4-2024.PNG)

### Links

- Live Site URL: [Nicole Fortin_Multi-Page Calidornia State Website](https://lilbelpepper.github.io/NF_Multi-Page_State_Website/)


## My process

### Built with 

- Semantic HTML5 markup
- CSS Custom Properties
- CSS Flexbox
- Bootstrap5 CSS
- Vanilla Javascript

### What I learned

Although the requirements for this build were mostly things I've already learned, I was still able to learn a lot from it by adding my own personal goals. I was also excited to build my first multi-page site as I'd only tried single pages before. 

I chose to focus on using CSS Grid this time around because I realized in my previous projects that constantly typing in the same margin/padding for elements could be easily remedied by using a grid system. By giving elements a designated grid area, it takes away the struggle of resizing each element on its own, saving you a lot of time. 

```CSS
#grid {
    display: grid;
    width: 100%;
    grid-template-columns: 100px 2fr 1fr 100px;
    grid-template-rows: 100px 790px 40px 1.5fr 0.5fr;
    gap: 20px;
    grid-template-areas: 
        "header header header header"
        "carousel carousel carousel carousel"
        ". . banner ."
        ". section aside ."
        "footer footer footer footer";
    }
```

It took me a minute to get the hang of creating my layout, I initially had issues with my ```aside``` element taking up its full vertical space, pushing the carousel to the side despite having the template areas laid out. After a while I realized I failed to add the template rows into the mix, and just like that the grid layout was complete! I was quite pleased seeing it light up in the "inspect" window of my browser. 

I wanted to try using Bootstrap as it seemed to be mentioned a lot when talking about CSS pre-processors and frameworks. (Although more recently it seems Tailwind is becoming more popular, so I may have to try that out next).  When I first started implementing Bootstrap5, I quickly became overwhelmed by the sheer amount of classes available and tried to abandon the idea of using it. I assumed that I wouldn't be able to or need to use a custom CSS sheet if I had Bootstrap involved. Thankfully that is not the case! After a while I came back around to the idea of using Bootstrap5 since I saw they had a component for an image carousel. I realized I didn't have to utilize Bootstrap for the entire build yet if I wasn't comfortable, just for the things I needed. After adding and tweaking a few things with the image carousel, I got a little ambitious and wanted to try adding a (functionless) search bar in the navbar that would slide out to the right when the search button was clicked. (It was specifically this silly little feature that made me think of those Designers vs Developers memes.) 

### Continued Development

As mentioned above, I do want to come back and add media breakpoints to help properly display the site across a variety of viewports. When I initially started customizing the CSS Grid, I started developing with the "Mobile-First" design in mind, meaning you start styling for a mobile viewport first and begin scaling up to larger viewports such as up to a tablet, a laptop, and then a large desktop monitor. Since I'm using a CSS Grid layout, it should make it easier for me to scale my design up from the mobile breakpoint to the desktop breakpoint. I previously tried "graceful degredation" with my Intro Component with Sign Up Form build, and while it wasn't too difficult, I think I would prefer to start with a mobile-first mindset instead. 

I also used *a lot* of static units (```px```) in the stylesheet. This will definitely need to change to ```rem``` units when I start styling the mobile display. The tricky part is trying to match the ```rem``` value to the ```px``` values. 

I *definitely* need to go back in and refactor some areas. Is it strange I get a bit anxious with how long my HTML or CSS file looks? I'd see how long it gets in the minimap display on VSCode and think "I just *know* there is something in there I can mash together to make it shorter." 


## Author

- linkedIn - [Nicole Fortin](https://www.linkedin.com/in/nicole-fortin-3530b9211/)
- Frontend Mentor - [@LilBelPepper](https://www.frontendmentor.io/profile/LilBelPepper)
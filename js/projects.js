//  TODO: Add image clips of projects to each project  -- complete
//  TODO: incorporate a link to the project in each section. -- complete
//  TODO: fix styling of project titles to be larger and bold.



// NOTE: The project link will take you to the github repo and the image link will take you to the github page.

//Project 1 dom manipulation start

    // Project 1 heading
const firstProjectHeading = document.getElementById('project1');
const firstProjectHeader = document.createElement('a');
firstProjectHeader.setAttribute('href', 'https://github.com/aruca94/tea-cozy-website');
firstProjectHeader.target = '_blank';
const firstProjectHeaderText = document.createTextNode('Project 1');
firstProjectHeader.appendChild(firstProjectHeaderText);
firstProjectHeading.appendChild(firstProjectHeader);
    //Project 1 paragraph
const firstProjectParagraphTag = document.createElement('p');
const firstProjectParagraphText = document.createTextNode('This goal of this project is to create a landing page for a "client" who is opening up a tea shop called The Tea Cozy. The main components of this project is HTML and CSS. It has a fixed header, four sections, and is styled with flexbox and grid. This project is an "off-platform" project in the Codecademy Front-End Engineering Career Path. The only thing provided is a design template and the purpose is to create this landing page as close as possible to the design template using only help from google, Stack Overflow, etc. ');
firstProjectParagraphTag.appendChild(firstProjectParagraphText);
firstProjectHeading.appendChild(firstProjectParagraphTag);
    //Project 1 image
const imgLinkOne = document.createElement('a');
imgLinkOne.setAttribute('href','https://aruca94.github.io/tea-cozy-website/');
imgLinkOne.className = 'image-link';
imgLinkOne.target = '_blank';
const imgOne = document.createElement('img');
imgOne.src= "images/tea-cozy.PNG";
imgLinkOne.appendChild(imgOne);
firstProjectHeading.appendChild(imgLinkOne);
//Project 2 dom manipulation start

    //Project 2 header
const secondProjectHeading = document.getElementById('project2');
const secondProjectHeader = document.createElement('a');
secondProjectHeader.setAttribute('href', 'https://github.com/aruca94/fend-landing-page');
secondProjectHeader.target = '_blank';
const secondProjectHeaderText = document.createTextNode('Project 2');
secondProjectHeader.appendChild(secondProjectHeaderText);
secondProjectHeading.appendChild(secondProjectHeader);
    //Project 2 paragraph
const secondProjectParagraphTag = document.createElement('p');
const secondProjectParagraphText = document.createTextNode("The idea of this project is that you're creating a page layout that has an undetermined amount of content. The overall goal of this project is to create a webpage that dynamically adjusts for an unlimited amount of content. This project was completed in Udacity's Front-End Developer NanoDegree course. This project features smooth scrolling when a section is clicked in the nav bar, section animation when scrolled into view, and nav bar section highlights by section detection on the page.");
secondProjectParagraphTag.appendChild(secondProjectParagraphText);
secondProjectHeading.appendChild(secondProjectParagraphTag);
    //Project 2 image
const imgLinkTwo = document.createElement('a');
imgLinkTwo.setAttribute('href', 'https://aruca94.github.io/fend-landing-page/');
imgLinkTwo.className = 'image-link';
imgLinkTwo.target = '_blank';
const imgTwo = document.createElement('img');
imgTwo.src = "images/dom-manipulation-landing-page.PNG";
imgLinkTwo.appendChild(imgTwo);
secondProjectHeading.appendChild(imgLinkTwo);
//Project 3 dom manipulation start
    //Project 3 header
const thirdProjectHeading = document.getElementById('project3');
const thirdProjectHeader = document.createElement('a');
thirdProjectHeader.setAttribute('href', 'https://github.com/aruca94/fend-weather-app');
thirdProjectHeader.target = '_blank';
const thirdProjectHeaderText = document.createTextNode('Project 3');
thirdProjectHeader.appendChild(thirdProjectHeaderText);
thirdProjectHeading.appendChild(thirdProjectHeader);
    //Project 3 paragraph
const thirdProjectParagraphTag = document.createElement('p');
const thirdProjectParagraphText = document.createTextNode("This project is a weather web app created in Udacity's Front-End Developer NanoDegree course. The app takes in a user's zipcode and a comment, uses the OpenWeatherMap API to retrieve weather data, and then display a certain part of the data back to the user. User-side technologies used is HTML, CSS, and JavaScript. Server-side technologies used is Node.js, Express.js, CORS, and Body-Parser.");
thirdProjectParagraphTag.appendChild(thirdProjectParagraphText);
thirdProjectHeading.appendChild(thirdProjectParagraphTag);
    //Project 3 image
const imgLinkThree = document.createElement('a');
imgLinkThree.setAttribute('href', 'https://github.com/aruca94/fend-weather-app');
imgLinkThree.className = 'image-link';
imgLinkThree.target = '_blank';
const imgThree = document.createElement('img');
imgThree.src = "images/weather-journal-app.PNG";
imgLinkThree.appendChild(imgThree);
thirdProjectHeading.appendChild(imgLinkThree);
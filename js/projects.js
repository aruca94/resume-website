//  TODO: Add image clips of projects to each project  -- complete
//  TODO: incorporate a link to the project in each section.

//  note: Add classes as needed



// project 1 dom manipulation start

// const projectOneContainer = document.createElement('div');
// projectOneContainer.classList.add('projectOne');
const firstProjectHeading = document.getElementById('project1');
const firstProjectHeader = document.createElement('h2');
const firstProjectHeaderText = document.createTextNode('Project 1');
firstProjectHeader.appendChild(firstProjectHeaderText);
firstProjectHeading.appendChild(firstProjectHeader);
    //project 1 paragraph
const firstProjectParagraphTag = document.createElement('p');
const firstProjectParagraphText = document.createTextNode('Project 1 paragraph here');
firstProjectParagraphTag.appendChild(firstProjectParagraphText);
firstProjectHeading.appendChild(firstProjectParagraphTag);
    //project 1 image
const imgOne = document.createElement('img');
imgOne.src= "images/tea-cozy.PNG";
firstProjectHeading.appendChild(imgOne);
// project 2 dom manipulation start

    //project 2 header
const secondProjectHeading = document.getElementById('project2');
const secondProjectHeader = document.createElement('h2');
const secondProjectHeaderText = document.createTextNode('Project 2');
secondProjectHeader.appendChild(secondProjectHeaderText);
secondProjectHeading.appendChild(secondProjectHeader);
    //project 2 paragraph
const secondProjectParagraphTag = document.createElement('p');
const secondProjectParagraphText = document.createTextNode('Project 2 paragraph here');
secondProjectParagraphTag.appendChild(secondProjectParagraphText);
secondProjectHeading.appendChild(secondProjectParagraphTag);
    //project 2 image
const imgTwo = document.createElement('img');
imgTwo.src = "images/dom-manipulation-landing-page.PNG";
secondProjectHeading.appendChild(imgTwo);
// project 3 dom manipulation start
    //project 3 header
const thirdProjectHeading = document.getElementById('project3');
const thirdProjectHeader = document.createElement('h2');
const thirdProjectHeaderText = document.createTextNode('Project 3');
thirdProjectHeader.appendChild(thirdProjectHeaderText);
thirdProjectHeading.appendChild(thirdProjectHeader);
    //project 3 paragraph
const thirdProjectParagraphTag = document.createElement('p');
const thirdProjectParagraphText = document.createTextNode('Project 3 paragraph here');
thirdProjectParagraphTag.appendChild(thirdProjectParagraphText);
thirdProjectHeading.appendChild(thirdProjectParagraphTag);
    //project 3 image
const imgThree = document.createElement('img');
imgThree.src = "images/weather-journal-app.PNG";
thirdProjectHeading.appendChild(imgThree);
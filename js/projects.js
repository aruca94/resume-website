// project 1 dom manipulation start


//  TODO: Add image clips of projects to each project
//  TODO: Add classes as needed




let firstProjectHeading = document.getElementById('project1');
let firstProjectHeader = document.createElement('h2');
let firstProjectHeaderText = document.createTextNode('Project 1');
firstProjectHeader.appendChild(firstProjectHeaderText);
firstProjectHeading.appendChild(firstProjectHeader);

let firstProjectParagraphTag = document.createElement('p');
let firstProjectParagraphText = document.createTextNode('Project 1 paragraph here');
firstProjectParagraphTag.appendChild(firstProjectParagraphText);
firstProjectHeading.appendChild(firstProjectParagraphTag);

// project 2 dom manipulation start

//h2 and text for h2 below
let secondProjectHeading = document.getElementById('project2');
let secondProjectHeader = document.createElement('h2');
let secondProjectHeaderText = document.createTextNode('Project 2');
secondProjectHeader.appendChild(secondProjectHeaderText);
secondProjectHeading.appendChild(secondProjectHeader);
// paragraph for h2 below
let secondProjectParagraphTag = document.createElement('p');
let secondProjectParagraphText = document.createTextNode('Project 2 paragraph here');
secondProjectParagraphTag.appendChild(secondProjectParagraphText);
secondProjectHeading.appendChild(secondProjectParagraphTag);
//create p tag
//create text for p tag
//append text to p tag
//append p tag to project2 id in html

// project 3 dom manipulation start
let thirdProjectHeading = document.getElementById('project3');
let thirdProjectHeader = document.createElement('h2');
let thirdProjectHeaderText = document.createTextNode('Project 3');
thirdProjectHeader.appendChild(thirdProjectHeaderText);
thirdProjectHeading.appendChild(thirdProjectHeader);
// paragraph for h2 below
let thirdProjectParagraphTag = document.createElement('p');
let thirdProjectParagraphText = document.createTextNode('Project 3 paragraph here');
thirdProjectParagraphTag.appendChild(thirdProjectParagraphText);
thirdProjectHeading.appendChild(thirdProjectParagraphTag);
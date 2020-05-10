let workModal = document.getElementById('work-modal');

$("#rockwell-sb").on("click", function(e) {
  e.preventDefault();

  workModal.title = "Rockwell International";
  
  workModal.innerHTML = ("Seal Beach, CA<br/>" +
  "March 1983 - Novenber 1985<br/>");
  workModal.style.display = "block";
});

$("#eds").on('click', function(e) {
  e.preventDefault();

  workModal.title = "Electronic Data Systems";
  
  workModal.innerHTML = ("Plano, TX<br/>" +
  "December 1985 - October 1987<br/><br/>");
  workModal.style.display = "block";
});

rockwellBoeingUSA.addEventListener('click', function(e) {
  e.preventDefault();
  workModal.title = "Rockwell/Boeing/USA";
  
  workModal.innerHTML = ("Rockwell International - Downey, CA and Houston, TX<br/>"+
  "October 1987 - December 1995<br/><br/>"+
  "Boeing North America - Houston, TX<br/>"+
  "December 1995 - August 1998<br/><br/>"+
  "United Space Alliance - Houston, TX<br/>"+
  "August 1998 - January 2011");

  workModal.style.display = "block";
});

trinity.addEventListener('click', function(e) {
  e.preventDefault();
  workModal.title = "Trinity Millenium";
  
  workModal.innerHTML = ("Performed end-to-end object oriented software development and testing on client/server platforms, developing desktop and web applications utilizing Java, JEE, .NET, and C# using MVC architecture.  Designed and developed software employing Agile methodology in accordance with the Software Development Life Cycle (SDLC) and industry best practices.  Transformed and upgraded client legacy software.");
  workModal.style.display = "block";
});

accenture.addEventListener('click', function(e) {
  e.preventDefault();

  workModal.title = "Accenture";
  
  workModal.innerHTML = ("Assisted in the development of a major Health care provider’s frontend web application. Debugged and fixed numerous reported application defects using Flex and ActionScript. Teamed with other developers to determine fixes to the Java middle-tier. Assisted in the system testing of the complete application.");
  workModal.style.display = "block";

});

usaa.addEventListener('click', function(e) {
  e.preventDefault();

  workModal.title = "USAA";
  
  workModal.innerHTML = ("Applied code fixes to the Credit Card dispute system using Java v7.  Created several REST Web Services for an innovation project that allows our testers to test a dispute flow that was not previously testable. Assisted the team in meeting the Visa rollout of their new dispute handling process. Currently recoding the Credit Card Fraud and Non-Fraud interface to support the release of a new user interface, using Java.");
  workModal.style.display = "block";
});

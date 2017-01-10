/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append(" Priya Balasubramanian");
//  var awesomeThoughts = " I am Priya and i am awesome";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("awesome", "Funny");
// $("#main").append(funThoughts);
//var name = "Priya Balasubramanian";
//var formattedName = HTMLheaderName.replace("%data%",name);
//var role =" Front end web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//$("#header").append(formattedName);
//$("#header").append(formattedRole);

// var skills = ["Programmin", "Painting", "pencilsketch"];
// $("#main").append(skills);
// $("#main").append(skills.length);
//var bio = {
  //"name" : "Priya",
  //"Role" : "Student",
  //"Contact": {
    //"mobile" :"7345480874",
    //"email" : "get.priyab@gmail.com"
  //},
  //"message" : "Hello everyone",
  //"pic" :"images/fry.jpg",
  //"skills" : ["Programmin", "Painting", "pencilsketch"]
//}

 //$("#main").append(bio.name);
//$("#main").append(bio.Role);
//$("#main").append(bio.Contact);
//$("#main").append(bio.message);
//$("#main").append(bio.pic);
//$("#main").append(bio.skills);

//var work = {};
  //work.currentJob = "Nil";
  //work.employer = "Nil";
  //work.city ="Mountain View";

  //$("#main").append(work.currentJob);
  //$("#main").append(work.employer);

  //var education = {};
   //education["city"] ="Tanjore";
    //education["lastSchool"] = "Sastra University";
   //education["yearPassed"]  = "2011-2013";
   //education["city"] ="Tanjore";
   //$("#main").append(education.lastSchool);
    //$("#main").append(work["city"]);
var bio = {
   "name" : "Priya Balasubramanian",
   "role" : "Student",
   "contacts" : {
      "mobile" : "743-548-0874",
      "email"  : "get.priyab@gmail.com",
      "github"  : "priii",
      "location" : "Mountain view"
   },
   "welcomeMessage" : "Hello everyone",
   "skills" :["Painting", "Pencil sketch", "Crafts"],
   "bioPic" : "images/fry.jpg"
 };
   $("#header").append(HTMLheaderName.replace("%data%",bio.name));
   //$("#header").append(HTMLskillsStart.replace("%data%",bio.skills));
   //$("#header").append(HTMLskills.replace("%data%",bio.skills));
   if (bio.skills.length > 0){
     $("#header").append(HTMLskillsStart);
     var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
     $("#skills").append(formattedSkill);
   }

var education = {

  "schools" :[{
    "name" : "Sastra University",
    "city" : "Tanjore, Tamil Nadu, India",
    "degree" : "Masters",
    "Major"  : ["Biz Administration"],
    "dates" : 2013
  },
  {
    "name" : "SFR College",
    "city" : "Sivakasi, Tamil Nadu, India",
    "degree" : "BSC",
    "Major"  : ["CS"],
    "dates" : 2013
  }
],
"onlineCourses": [
  {
    "title": "JavaScript Crash Course",
    "School" :"Udacity",
    "dates":2017
  }
]
};

var work = {
  "jobs": [{
      "employer" :"Bank Of Baroda",
      "title" : "Institutional Sales",
      "dates" : "March 2013-2014",
      "description": "Builds a trusted relationship in the business unit. Participating in meetings with the clients. Communicating with Institute Stakeholders to ensure awarness of their investment in our  bank's fund."
    },
  {
    "employer" :"Mata securities",
    "title" : "Portfolio Accountant",
    "dates" : "March 2012-2013",
    "description" : "Primarily responsible for all aspects of day-to-day accounting for one or more assigned mutual funds and/or institutional funds."
  }]
};
for (job in work.jobs)
//displayWork()
{
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}

var projects ={
  "projects" : [
    {
      "title" : "Build a Portfolio",
      "dates" : "2016",
      " Description" : "Created a Portfolio using Html and CSS "

    },
    {
      "title" : "Animal Trading Card",
      "dates" : "2016",
      " Description" : "Created Animal Trading Card using Html and CSS "
    }
  ]
};
projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace ("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace ("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace ("%data%",projects.projects[project].Description);
    $(".project-entry:last").append(formattedDescription);
  };
}
  projects.display ();


$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//function inName(name){
//  name =name.trim().split("");
//  console.log(name);
  //name[1] = name[1].toUpperCase();
  //name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  //return name[0] + " " + name[1];
//}
//$("#main").append(internationalizeButton);

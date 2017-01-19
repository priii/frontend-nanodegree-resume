var bio = {
    "name": "Priya Balasubramanian",
    "role": "Student",
    "contacts": {
        "mobile": "743-548-0874",
        "email": "get.priyab@gmail.com",
        "github": "https://github.com/priii",
        "location": "Mountain view"
    },
    "welcomeMessage": "Hello everyone !",
    "skills": ["Painting", "Pencil sketch", "Handling a Toddler"],
    "bioPic": "images/pri.jpg"
};

var education = {
    "schools": [{
            "name": "Sastra University",
            "city": "Tanjore, Tamil Nadu, India",
            "degree": "Masters",
            "Major": ["Biz Administration"],
            "dates": "2011-2013"
        },
        {
            "name": "SFR College",
            "city": "Sivakasi, Tamil Nadu, India",
            "degree": "BSC",
            "Major": ["CS"],
            "dates": "2009-2011"
        }
    ],
    "onlineCourses": [{
            "title": "JavaScript Crash Course",
            "School": "Udacity",
            "dates": 2017,
            "url": "https://www.udacity.com/"
        },
        {
            "title": "HTML and CSS ",
            "School": "Udacity",
            "dates": 2017,
            "url": "https://www.udacity.com/"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Bank Of Baroda",
            "title": "Institutional Sales",
            "dates": "March 2013-2014",
            "description": "Builds a trusted relationship in the business unit. Participating in meetings with the clients. Communicating with Institute Stakeholders to ensure awarness of their investment in our  bank's fund.",
            "url": "http://www.barodapioneer.in/default.aspx",
            "city": "Chennai,Tn,India"
        },
        {
            "employer": "Mata securities",
            "title": "Portfolio Accountant",
            "dates": "March 2012-2013",
            "description": "Primarily responsible for all aspects of day-to-day accounting for one or more assigned mutual funds and/or institutional funds.",
            "url": "http://www.matasec.com/",
            "city": "Chennai,Tn,India"
        }
    ]
};


var projects = {
    "projects": [{
            "title": "Build a Portfolio",
            "dates": "2016",
            "Description": "Created a Portfolio using Html and CSS ",
            "image": ["images/blog1.png", "images/blog2.png", "images/blog3.png"]
        },
        {
            "title": "Animal Trading Card",
            "dates": "2016",
            "Description": "Created Animal Trading Card using Html and CSS ",
            "image": ["images/a1.png", "images/a2.png", "images/a3.png"]
        }
    ]
};

//display bio

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    for (skills in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
        $("#skills").append(formattedSkills);
    }
}
bio.display();


//displayWork()

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
        $(".work-entry:last").prepend(formattedLocation);
    }
}
work.display();

//display project
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
        $(".project-entry:last").append(formattedDescription);
        for (img_idx in projects.projects[project].image) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[img_idx]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}
projects.display();

//diaplay education

education.display = function() {
    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:first").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:first").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
        $(".education-entry:first").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].Major);
        $(".education-entry:first").append(formattedSchoolMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (oc in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].School);
        formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }
}
education.display();

//display Map
$("#mapDiv").append(googleMap);

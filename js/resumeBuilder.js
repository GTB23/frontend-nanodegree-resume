/*
Your code to build the resume will go here.
 */
 var bio = {
 	"name" : "Tyler Brim",
 	"role" : "Software Engineer",
 	"contact": {
 		"mobile": "267-614-4453",
 		"email": "george.tyler.brim@gmail.com",
 		"location": "Greater Philadelphia",
 	},
 	"picture": "images/fry.jpg",
 	"welcome": "Welcome to my Resume!",
 	"skills" : ["Assembly", "Rexx","Java","Python","HTML"]
 };
//declare empty object variables
 var work = {};
 var education ={};
// . notation for adding properties
 work.position="Software Engineer";
 work.employer="CA Technologies";
 work.years=5;
 work.city="Ewing, NJ";
// [] notation for adding properties
 education["name"]="Drexel University";
 education["years"]="2006-2011";
 education["city"]="Philadelphia, PA";

 $("#main").append(work["position"]);
 $("#main").append(education.name);

/* $("#main").append(funThoughts); exercise for replace
 var awesomeThoughts = "I am Tyler Brim and I am AWESOME!"
 var funThoughts = awesomeThoughts.replace("AWESOME","Fun");
*/

 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
 var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
 var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
 var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture);
 var formattedWelcome=HTMLwelcomeMsg.replace("%data%",bio.welcome);
 var formattedSkills=HTMLskills.replace("%data%",bio.skills);
 /*
 var formattedMobile=HTMLmobile.replace("%data%",bio.contact[0]);
 var formattedEmail=HTMLemail.replace("%data%",bio.contact[1]);
 var formattedLocation=HTMLlocation.replace("%data%",bio.contact[2]);
 var formattedBioPic=HTMLbioPic.replace("%data%",bio.picture);
 var formattedWelcome=HTMLwelcomeMsg.replace("%data%",bio.welcome);
 var formattedSkills=HTMLskills.replace("%data%",bio.skills);
 */

 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(formattedMobile);
 $("#header").append(formattedEmail);
 $("#header").append(formattedLocation);
 $("#header").append(formattedBioPic);
 $("#header").append(formattedWelcome);
 $("#header").append(formattedSkills);
 /*
 $("#main").append(formattedBioPic);
 $("#main").append(formattedWelcome);
 $("#main").append(formattedSkills);
 */
 

  /*debug command
 console.log(awesomeThoughts);
 console.log(skills.length);
 */
 

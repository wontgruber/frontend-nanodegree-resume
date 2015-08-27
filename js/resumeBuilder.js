/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append(funThoughts);



 var awesomeThoughts = "I am Nick and I am AWESOME!";

 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

/* Okay. Here I'm replacing %data% place holders in helper.js with my 
actual data */
var name = "Nick Wilgruber"
var role = "Geographer"

var formattedName = HTMLheaderName.replace("%data%", name)

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedRole);
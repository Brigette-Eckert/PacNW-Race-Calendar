var app = require("./app.js");

//October 2015 Oregon Races

var race = app.Race;

var runLikeHell = new race("runLikeHell", "10-25-2015", "Portland, OR", "Pioneer Courthouse Square", "Terrapin Events", "http://terrapinevents.com/event/run-like-hell-portland-half-marathon/", 5000, "Halloween/Under the Big Top" );

	runLikeHell.addRace("5k", "TBA", [35,39,45, 49], "3.5hrs",["shirt", "beer", "food", "live music"]);
	runLikeHell.addRace("10k", "TBA", [39,45,49, 54], "3.5hrs",["shirt", "beer", "food", "live music"]);
	runLikeHell.addRace("Half", "TBA", [79,89, 99, 109], "15min/mi",["finisher medal", "shirt", "beer", "food", "live music"]);
	runLikeHell.addRace("Kid's Half Miler", "TBA", [8, 12], "N/A", ["food", "live music"]);


console.log(runLikeHell)



// Race(name, date, location, start, organizer, orgLink, cap, theme)
//fs.writeFile("events.js", JSON.stringify(runLikeHell))

//raceName.addRace("dist", "startTime", limit, [prices], [swag])

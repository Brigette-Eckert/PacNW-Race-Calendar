var build = require("./build.js");
var fs = require("fs");
var race = build.Race;
var raceArr= [];

//October 2015 Races
var Microsoft = new race("Microsoft 5k Run/Walk", "10-02-15", "Redmond, WA", "Microsoft Main Campus Sports Field", "Active Events", "http://www.active.com/redmond-wa/running/distance-running-races/microsoft-5k-run-walk-and-after-party-2015?cmp=39-34-156210&ltcmp=254301&ltclickid=09_42732409_2e5a67f0-99eb-4b3e-b109-3a3b8ba447c0&cmp=39-34", "unknown", "Yes", "None");

	Microsoft.addRace("5k VIP", "2pm", "unknown", ["Indivdual: $100"], ["shirt", "drawstring bag", "food", "drinks"]);
	Microsoft.addRace("5k Adult", "2pm", "unknown", ["Indivdual: $55"], ["food", "drinks"]);
	Microsoft.addRace("5k Youth (18 and under)", "2pm", "unknown", ["Indivdual: $0"], ["none"]);
	Microsoft.addRace("5k Vitural", "2pm", "none", ["Indivdual: $55"], ["bib"]);
raceArr.push(Microsoft);


var pdxMarathon= new race("Portland Maratahon", "10-04-15", "Portland, OR", "SW 4th and Taylor", "Portland Marathon", "http://portlandmarathon.org/", "", "No", "TBD", "None");
	pdxMarathon.addRace("Full", "7am", "8hrs", ["Indivdual: $145"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);
	pdxMarathon.addRace("Half", "7am", "4hrs", ["Charity: $250"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);

raceArr.push(pdxMarathon);

var runLikeHell = new race("Run Like Hell", "10-25-15", "Portland, OR", "Pioneer Courthouse Square", "Terrapin Events", "http://terrapinevents.com/event/run-like-hell-portland-half-marathon/", 5000, "Yes", "Halloween/Under the Big Top" );

	runLikeHell.addRace("5k", "TBA", "3.5hrs", ["Tier 1: First 100 Registrants: $35", "Tier 2: $39", "Tier 3: $45", "Race Weekend: $49"],["shirt", "beer", "food", "live music"]);
	runLikeHell.addRace("10k", "TBA", "3.5hrs",["Tier 1: First 100 Registrants: $39", "Tier 2: $45", "Tier 3: $49", "Race Weekend: $54"], ["shirt", "beer", "food", "live music"]);
	runLikeHell.addRace("Half", "TBA", "15min/mi", ["Tier 1: First 100 Registrants: $79", "Tier 2: $89", "Tier 3: $99", "Race Weekend: $109"], ["finisher medal", "shirt", "beer", "food", "live music"]);
	runLikeHell.addRace("Kid's Half Miler", "TBA", "N/A", ["Tier 1: $8", "Race Weekend: $12"],  ["food", "live music"]);

raceArr.push(runLikeHell);




//raceName.addRace("dist", "startTime", limit, [prices], [swag]);


console.log(raceArr)

//2015

//November 2015 Races

//December 2015 Races


//2016 
//January 2016 Races

//February 2016 Races

//March 2016 Races

//April 2016 Races

//May 2016 Races

//June 2016 Races

//July 2016 Races

//August 2016 Races

//September 2016 Races

//Octobr 2016 Races

//November 2016 Races

//December 2016 Races



// var name = new race(name, date, location, start, organizer, orgLink, cap, bagCheck (y/n), theme);

//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
//raceArr.push(name);
fs.writeFile("raceJSON.js", JSON.stringify(raceArr))

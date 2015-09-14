var build = require("./build.js");
var fs = require("fs");
var race = build.Race;
var raceArr= [];
//2015
//October 2015 Races

var Microsoft15 = new race("Microsoft 5k", "2015-10-02", "r5k", "Redmond, WA", "Microsoft Main Campus Sports Field", "Active Events", "http://www.active.com/redmond-wa/running/distance-running-races/microsoft-5k-run-walk-and-after-party-2015?cmp=39-34-156210&ltcmp=254301&ltclickid=09_42732409_2e5a67f0-99eb-4b3e-b109-3a3b8ba447c0&cmp=39-34", "", "Yes", "");

		Microsoft15.addRace("5k VIP", "2pm", "unknown", ["Indivdual: $100"], ["shirt", "drawstring bag", "food", "drinks"]);
		Microsoft15.addRace("5k Adult", "2pm", "unknown", ["Indivdual: $55"], ["food", "drinks"]);
		Microsoft15.addRace("5k Youth (18 and under)", "2pm", "unknown", ["Indivdual: $0"], ["none"]);
		Microsoft15.addRace("5k Vitural", "2pm", "none", ["Indivdual: $55"], ["bib"]);
raceArr.push(Microsoft15);

var pdxMarathon15= new race("Portland Maratahon", "2015-10-04", "full", "Portland, OR", "SW 4th and Taylor", "Portland Marathon", "http://portlandmarathon.org/", "", "No", "");
		pdxMarathon15.addRace("Full", "7am", "8hrs", ["Indivdual: $145"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);
		pdxMarathon15.addRace("Half", "7am", "4hrs", ["Charity: $250"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);

raceArr.push(pdxMarathon15);

var runLikeHell15 = new race("Run Like Hell", "2015-10-25", "half","Portland, OR", "Pioneer Courthouse Square", "Terrapin Events", "http://terrapinevents.com/event/run-like-hell-portland-half-marathon/", 5000, "Yes", "Halloween/Under the Big Top" );

		runLikeHell15.addRace("5k", "TBA", "3.5hrs", ["Tier 1: First 100 Registrants: $35", "Tier 2: $39", "Tier 3: $45", "Race Weekend: $49"],["shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("10k", "TBA", "3.5hrs",["Tier 1: First 100 Registrants: $39", "Tier 2: $45", "Tier 3: $49", "Race Weekend: $54"], ["shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("Half", "TBA", "15min/mi", ["Tier 1: First 100 Registrants: $79", "Tier 2: $89", "Tier 3: $99", "Race Weekend: $109"], ["finisher medal", "shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("Kid's Half Miler", "TBA", "N/A", ["Tier 1: $8", "Race Weekend: $12"],  ["food", "live music"]);

raceArr.push(runLikeHell15);

//November 2015 Races

var purpleStride15 = new race("PurpleStride Puget Sound", "2015-11-01", "r5k", "Seattle, WA", "Magnuson Park - Hangar 30", "Pancreatic Cancer Action Network", "http://purplestride.kintera.org/faf/home/default.asp?ievent=1136780&lis=1&kntae1136780=1F3F5806E8AC432DA54E18145E426A6C", "", "", "");

		purpleStride15.addRace("5K Survivor", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $0", "Race Day: $0"], ["shirt"]);
		purpleStride15.addRace("5K Adult Timed", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $30", "Race Day: $35"], ["shirt"]);
		purpleStride15.addRace("5K Adult Untimed", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $25", "Race Day: $30"], ["shirt"]);
		purpleStride15.addRace("5K Youth Timed (Ages 3-12)", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $15", "Race Day: $20"], ["shirt"]);
		purpleStride15.addRace("5K Youth Untimed (Ages 3-12)", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $10", "Race Day: $15"], ["shirt"]);
		purpleStride15.addRace("5K Vitrual Strider", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $0", "Race Day: N/A"], [""]);
		
raceArr.push(purpleStride15);

var runWithTheDuck15 = new race ("Run with the Duck", "2015-11-08", "r5k", "Eugene, OR", "Riverfront Field - south side of Autzen Footbridge", "University of Oregon: Healthy Oregon", "http://healthyoregon.uoregon.edu/Events/duckrun.aspx?q=DuckRun", "500", "", "");
	runWithTheDuck15.addRace("5k", "10am", "", ["UO Students, Faculty, Staff, Alumni & Family Members: $0", "$15 Community Members"], ["shirt"]);
	runWithTheDuck15.addRace("Kids Fun Run 1k Ages 4-12 \(kids under 7 years must have a chaperon runner\).", "9:30am", "", ["UO Students, Faculty, Staff, Alumni & Family Members: $0", "$15 Community Members"], [""]);

	raceArr.push(runWithTheDuck15);

var hotButteredRun15 = new race ("Hot Buttered Run", "2015-11-29", "half", "Vancouver, WA", "Esther Short Park", "Engery Events", "http://energyevents.com/hotbutteredrun", "", "", "", "Winter Holidays");
	hotButteredRun15.addRace("5k Adult", "10am", "", ["4/15 to 6/30: $30", "7/1 to 9/30:	$35", "10/1 to 10/31: $40", "11/1 to 11/14:	$45", "11/15 to 11/22: $45 \(No Shirt Included \), Race Day: $50 \(No Shirt Included \)"], ["shirt", "goodie bag", "food", "hot butter rum or hot cocoa", "after party: music & fun"]);
	hotButteredRun15.addRace("5k Youth Ages 8-18", "10am", "", ["4/15 to 11/14: $18", "11/15 to 11/22: $18 \(No Shirt Included \)", "Race Day: $50 \(No Shirt Included \)"], ["shirt", "goodie bag", "food", "hot cocoa", "after party: music & fun"]);
	hotButteredRun15.addRace("Half", "9am", "3hrs", ["4/15 to 6/30: $40", "7/1 to 7/30:	$45", "08/01 to 9/30: $50", "10/1 to 10/31: $60", "11/1 to 11/14: $65", "11/15 to 11/22: $65 \(No Shirt Included \), Race Day: $75 \(No Shirt Included \)"], ["shirt", "finisher medal", "goodie bag", "food", "hot butter rum or hot cocoa", "after party: music & fun"] );
	hotButteredRun15.addRace("Kid's Kandy Kane 1k Ages 5-12 \(No Parents\)", "11:45am", ["Ages 5-6 Pre-Event: $8", "Ages 7-12: $12", "All Ages Race Day: $15"], ["kid's shirt", "kid's medal", "hot cocoa"] );
	hotButteredRun15.addRace("Kid's Kandy Kane Fun Run Ages 3-8 \(kids under 6 must have a parent\)", "11:45am", ["Ages 3-6 Pre-Event: $8", "Ages 7-8: $12", "All Ages Race Day: $15"], ["kid's shirt", "kid's medal", "hot cocoa"]);

	raceArr.push(hotButteredRun15);

//December 2015 Races

var hoHo15 = new race("Ho Ho 5k", "2015-12-06", "r5k", "Tigard, OR", "Cook Park", "X-Dog Events", "http://www.xdogevents.com/hoho.html", "", "", "Winter Holidays");

	hoHo15.addRace("5k Adult", "10am", "", ["Tier 1: $15", "Tier 2: $20"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	hoHo15.addRace("5k Kids Ages 6-12", "10am", "", ["Tier 1: $8", "Tier 2: $11"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	hoHo15.addRace("5k Kids Under 6", "10am", "", ["$5"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	raceArr.push(hoHo15);

var jingleBell15 = new race("Jingle Bell 5k", "2015-12-06", "r5k", "Portland, OR", "World Trade Center", "The Arthritis, Foundation", "http://www.jbr.org/faf/home/default.asp?ievent=1138292", "", "", "Winter Holidays" );
	
	jingleBell15.addRace("5k Adult", "8:50am", "", ["Before 11/01: $30"], ["shirt", "jingle bells"]);
	jingleBell15.addRace("5k Kid Ages 12 & Under", "8:50am", "", ["$20"], ["shirt", "jingle bells"]);
	jingleBell15.addRace("1k Kid's Fun Run with the Elves Ages 10 & Under", "8:30am", "", ["$20"], ["shirt", "jingle bells"]);
	jingleBell15.addRace("Jingle in Your Jammies (Vitrual)", "", "", ["Without Shipping: $25", "With Shipping: $31" ], ["shirt", "jingle bells"]);

	raceArr.push(jingleBell15);

var holidayHalf15 = new race("Holiday Half & 5k", "2015-12-13", "half", "Portland, OR", "Addias North America Campus", "Foot Traffic", "http://foottraffic.us/the-races/holiday/", "", "", "Winter Holidays");
	
	holidayHalf15.addRace("Half", "8am", "15min/mi", ["7/15 to 9/1: $69", "9/2 to 10/15: $77", "10/16 to 11/1: $82", "11/2 to 11/9: $82 \(no name on bib\)", "11/10 until Full: $82 \(no name on bib and shirt not guaranteed\)", "Race Day: $90 \(no name on bib and shirt not guaranteed\)"], ["finisher medal", "shirt", "name on bib", "food", "beer", "music"]);
	holidayHalf15.addRace("5k","8:15am", "", ["7/15 to 9/1: $36", "9/2 to 10/15: $39", "10/16 to 11/1: $41", "11/2 to 11/9: $41 \(no name on bib\)", "11/10 until Full: $41 \(no name on bib and tech shirt subbed with cotton shirt\)", "Race Day: $45 \(no name on bib and shirt not guaranteed\)"], ["finisher medal", "shirt", "name on bib", "food", "beer", "music"] );

	raceArr.push(holidayHalf15);
// var name = new race(title, date, className(ie longest dist offered (r5k, r10k, half, full, ultra etc)) city, startLocation, organizer, orgLink, cap, bagCheck, theme);
//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
// raceArr.push(title);

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


console.log(raceArr)
fs.writeFile("raceJSON.js", JSON.stringify(raceArr))

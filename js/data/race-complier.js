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

var booDash15 = new race("Boo Dash", "2015-10-03", "r5k", "Federal Way, WA", "Wild Waves Theme Park", "American Cancer Society", "http://www.eventbrite.com/e/boo-dash-at-wild-waves-tickets-17877030680", "", "", "Halloween");
	booDash15.addRace("5k", "3pm", "", ["Early Bird- until 9/16: $35", "Regular Price- after 9/16: $50"], ["admission to wild waves theme park & fright fest", "glow in the dark partcipant medal", "after party"]);
	raceArr.push(booDash15);

var mugsAndPugs15 =new race("Mugs and Pugs", "2015-10-03", "r5k", "Graham, WA", "Graham-Kapowsin High School", "rainierfamilypt", "http://rainierfamilypt.com/mugsandpugs/", "", "", "");
	mugsAndPugs15.addRace("5k Adult", "11am", "", ["$30"], [""]);
	mugsAndPugs15.addRace("5k Youth Ages 18 & Under", "11am", "", ["$20"], [""]);
	raceArr.push(mugsAndPugs15);

var pdxMarathon15= new race("Portland Maratahon", "2015-10-04", "full", "Portland, OR", "SW 4th and Taylor", "Portland Marathon", "http://portlandmarathon.org/", "", "No", "");

		pdxMarathon15.addRace("Half", "7am", "4hrs", ["Charity: $250"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);

		pdxMarathon15.addRace("Full", "7am", "8hrs", ["Indivdual: $145"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);

	raceArr.push(pdxMarathon15);

var eugeneRaceForTheCure15 = new race("Race for the Cure", "2015-10-04", "r5k", "Eugene, OR", "Valley River Center", "Susan G. Komen Foundation", "http://race.komenoregon.org/site/TR?fr_id=1281&pg=entry", "", "", "");
	eugeneRaceForTheCure15.addRace("5k Survivor", "8:30am", "", ["6/1-6/30: $25", "7/1-10/4: $30"], ["shirt", "pin"]);
	eugeneRaceForTheCure15.addRace("5k Adult", "8:30am", "", ["6/1-6/30: $30", "7/1-9/27: $35"], ["shirt"]);
	eugeneRaceForTheCure15.addRace("5k Children Ages 5-12", "8:30am", "", ["6/1-6/30: $5", "7/1-10/4: $10"], [""]);
	eugeneRaceForTheCure15.addRace("5k Kids Ages 4 & Under", "8:30am", "", ["$0"], [""]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Survivor", "8:45am", "", ["6/1-6/30: $30", "7/1-9/27: $35"], ["shirt", "pin"]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Adult", "8:45am", "", ["6/1-6/30: $30", "7/1-9/27: $35"], ["shirt"]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Children Ages 5-12", "8:45am", "", ["6/1-6/30: $5", "7/1-10/4: $10"], [""]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Children Kids Ages 4 & Under", "8:45am", "", ["$0"], [""]);

	raceArr.push(eugeneRaceForTheCure15);

var stepsToSafety15 = new race("Steps to Safety", "2015-10-10", "r10k", "Salem, OR", "Department of Public Safety: Standards and Training", "Eclectic Edge Racing", "http://www.mcdvcouncil.org/home.html", "", "", "");

	stepsToSafety15.addRace("5k", "9:30am", "" ["$30 \(Online Registration Ends 10/07\)"], ["shirt", "food", "drinks"]);
	stepsToSafety15.addRace("10k: Runners Only", "9am", "", ["$30 \(Online Registration Ends 10/07\)"], ["shirt ", "food ", "drinks"]);


	raceArr.push(stepsToSafety15);

var crabFest15 = new race("CrabFest 5k", "2015-10-10", "r5k", "Sequim, WA", "Dungeness Crab & Seafood Festival", "http://www.crabfestival.org/crab-fest-5k-runwalkscuttle/", "", "", "");

	crabFest15.addRace("5k", "11am", "", ["Until 9/30: $30", "10/1 – 10/10: $34"], ["shirt", "$4 discount coupon for crab dinner", "Beer/Wine/Soda", "Free Crab Derby Run"]);

	raceArr.push(crabFest15);

var monsterDash15 = new race("Monster Dash", "2015-10-10", "r10k", "St Helens, OR", "Columbia View Park", "Rotary Club of Columbia County", "http://www.sthelensmonsterdash.com/", "", "no", "Halloween/Run for Your Life/Zombies");

	monsterDash15.addRace("5k", "5pm", "", ["Before 9/15: $30", "9/16 – 10/1: $35 \(shirt not guaranteed\)",  "10/2 – 10/10: $40 \(shirt not guaranteed\)"], ["shirt", "food", "drinks"]);
	monsterDash15.addRace("10k", "5pm", "", ["Before 9/15: $40", "9/16 – 10/1: $45 \(shirt not guaranteed\)", "10/2 – 10/10: $50 \(shirt not guaranteed\)"], ["shirt", "food", "drinks"]);
	monsterDash15.addRace("Monster Mile", "5pm", "", ["$5"], ["food", "drinks"]);

	 raceArr.push(monsterDash15);


var girlfriends15 = new race("Girlfriends Run for a Cure Half & Quater Marathon", "2015-10-11", "half", "Vancouver, WA", "Northwest Personal Training 1011 Broadway", "Why Racing Events", "http://whyracingevents.com/event/693/" , "", "yes", "");
		girlfriends15.addRace("Quater", "9am", "", ["$80"], ["shirt", "finisher's necklace presented by a fireman", "food", "drinks", "chocolate", "massage", "chiropractic treatment", "stretching session", "acupuncture treatment"]);
		girlfriends15.addRace("Half", "9am", "4.5hrs", ["$80"], ["shirt", "finisher's necklace presented by a fireman", "food", "drinks", "chocolate", "massage", "chiropractic treatment", "stretching session", "acupuncture treatment"]);
		girlfriends15.addRace("Kids Mini-Marathon \(1.1 miles\)", "12:15pm", "", ["$30"], ["shirt", "goody bag", "medal"]);
	raceArr.push(girlfriends15);

var greatColumbiaCrossing15 = new race("The Great Columbia Crossing","2015-10-11","r10k","Astoria, OR", "Dismal Nitch, WA","Astoria Warrenton Area Chamber of Commerce","http://www.greatcolumbiacrossing.com/","3,500","yes","");

	greatColumbiaCrossing15.addRace("10k Run/Competitive Walk \(Timed\)","Runners: 8:45am,  Walkers: 9:00am","2hrs", ["$45"], ["shuttle bus service to start of race from the Port of Astoria (OR) or the Port of Chinook (WA)","light snacks" ," 5 Clam Bucks"]);
	greatColumbiaCrossing15.addRace("10k Walk \(untimed\) ","9am","2hrs", ["$40"], 
		["shuttle bus service to start of race from the Port of Astoria (OR) or the Port of Chinook (WA)","light snacks" , "5 Clam Bucks"]);
	raceArr.push(greatColumbiaCrossing15);

var stageCoach15 = new race("Stagecoach Run", "2015-10-17", "r10k", "Jacksonville, OR", "Oregon St. and West D St.", "Southern Oregon Runners", "https://secure.getmeregistered.com/get_information.php?event_id=122284", "", "", "");
	//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
	stageCoach15.addRace("10k Adult SOR Members", "8:30am", "", ["Before 10/14: $12", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("10k Adult Non-SOR Members", "8:30am", "", ["Before 10/14: $17", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("10k Youth Ages 18 & Under", "8:30am", "", ["Before 10/14: $7", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("5k Adult SOR Members", "", "8:30am", ["Before 10/14: $12", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("5k Adult Non-SOR Members", "8:30am", "", ["Before 10/14: $17", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("5k Youth Ages 18 & Under", "8:30am", "", ["Before 10/14: $7", "10/14-10/17: $20"], [""]);
	
	raceArr.push(stageCoach15);

var bayToBrews15 = new race("Bays to Brews", "2015-10-17", "half",  "Newport, OR", "Rogue Ales & Spirits", "Run with Palua Events", "http://runwithpaula.com/bay-to-brews-half-marathon-10k/", "", "", "");

	bayToBrews15.addRace("10k", "8am", "", ["Until 10/16: $49", "Race Day: $65  /(shirt not guaranteed/)"], ["shirt ", "finisher medal ", "beer ", "food ", "live music"]);

	bayToBrews15.addRace("Half", "8am", "", ["Until 10/16: $75", "Race Day: $90  /(shirt not guaranteed/)"], ["shirt ", "finisher medal ", "beer ", "food ", "live music"]);

	raceArr.push(bayToBrews15);



var  lakePaddenTrailHalf15 = new race("Lake Padden Trail Half Marathon", "2015-10-17", "half", "Bellingham, WA", "Lake Padden Park East Entrance" , "Lake Padden Trail Half", "http://www.lakepaddentrailhalf.org/", "", "", "");

	lakePaddenTrailHalf15.addRace("5k", "9am", "", ["$25"],["food", "drink", "post race party"]);

	lakePaddenTrailHalf15.addRace("Half", "10am", "4hrs", ["Until 9/30 $45", "After 9/30 $65"], ["food", "drink", "post race party"]);

	raceArr.push(lakePaddenTrailHalf15);

var dawgDash15 = new race("Dawg Dash", "2015-10-18", "r10k", "Seattle, WA", "Red Square on UW Campus",  "University of Washington", "http://depts.washington.edu/alumni/blogs/dawgdash/races/seattle/", "", "yes", "");

	dawgDash15.addRace("5k Student - Dog Friendly \(Student ID number required\)", "9am", "", ["Until 10/17: $20"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("5k UWAA & UWRA Members - Dog Friendly \(UWAA number required\)", "9am", "", ["Until 09/30: $25", "10/1 – 10/17: $30"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("5k  Faculty & Staff -Dog Friendly \(Faculty/Staff ID number required\)",  "9am", "",["Until 09/30: $25", "10/1 – 10/17: $30"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("5k Public -Dog Friendly ", "9am", "", ["Until 10/17: $35"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k Student - Dog Friendly \(Student ID number required\)", "9:20am", "", ["Until 10/17: $25"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k UWAA & UWRA Members  - Dog Friendly \(UWAA number required\)", "9:20am", "", ["Until 09/30: $30", "10/1 – 10/17: $35"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k  Faculty & Staff -Dog Friendly \(Faculty/Staff ID number required\)",  "", "9am", "", ["Until 09/30: $30", "10/1 – 10/17: $35"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k Public - Dog Friendly", "9:20am", "", ["Until 10/17:  $40"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("Husky Pups Run -Kids Dash – Ages 10 & Under", "10:30am", "", ["$0"], ["ribbon", "food"]);
	raceArr.push(dawgDash15);
var sekaniTrailRun15 = new race ("Sekani Trail Run", "2015-10-18",  "r10k", "Spokane, WA", "Camp Sekani Park", "Sekani Trail Run", "http://sekanitrailrun.com/", "", "", "Trail Run");

	sekaniTrailRun15.addRace("5k", "10am", "", ["Until 10/9: $20", "Race Day: $25"], ["caramel apple", "cider"]);
	sekaniTrailRun15.addRace("10k", "10:25am", "", ["Until 10/9: $20", "Race Day: $25"], ["caramel apple", "cider"]);
	sekaniTrailRun15.addRace("Running Kids 1k – Ages 12 & Under", "9:40am", "", ["$0"], ["caramel apple", "cider"]);

raceArr.push(sekaniTrailRun15);

var Charity15 = new race("4k 4Charity Fun Run", "2015-10-21", "", "Portland, OR", "Waterfront Park, West End of Hawthorne Bridge", "Energy Events", "http://4k4charity.com/run/pdx/", "", "", "");
	Charity15.addRace("4k Child - Ages 14 & Under", "3pm", "", ["$5"], ["medal", "grab bag", "snacks", "drinks", "live music"]);
	Charity15.addRace("4k Adult", "3pm", "", ["Level 1 Donation: $20", "Level 2 Donation: $35", "Level 3 Donation: $50", "Premiere Level Donation: >$50", "Vitural Donation: $15"], ["medal", "grab bag", "snacks", "drinks", "live music"]);
	raceArr.push(Charity15);

var dirtyDuck15 = new race("Dirty Duck", "2015-10-24", "r5k", "Eugene, OR", "University of Oregon", "Dirty Duck",  "http://dirtyduck5k.com/", "2,500",  "", "feather & color run");
	
	dirtyDuck15.addRace("5k Adult", "10am", "", ["Until 9/30: $45", "9/30-10/22: $50"], ["sunglasses", "snacks", "after party"]);
	dirtyDuck15.addRace("5k Youth – Ages 6-14", "10am", "", ["Until 10/22: $15"], ["sunglasses", "snacks", "after party"] );
	dirtyDuck15.addRace("5k Kids – Ages 5 & under", "10am",  "", ["$0"], ["sunglasses", "snacks", "after party"] );
	
raceArr.push(dirtyDuck15);

var happyGirlsSisters15 = new race("Happy Girls Run – Sisters", "2015-10-24", "half", "Sisters, OR",  "Five Pine Lodge Campus", "Lay It Out Events", "http://happygirlsrunsisters.com/race-info/event-schedule/", "", "", "trail run \(half only\)");

	happyGirlsSisters15.addRace("5k", "9:30am", "", ["8/25-9/24: $35", "9/25-10/22: $40"], ["shirt", "swag bag", "drinks", "food"]);

	happyGirlsSisters15.addRace("Half", "9am", "4hrs", ["8/25-9/24: $85" , "9/25-10/22: $90"], ["commemorative belt buckle", "shirt", "swag bag", "drinks", "food"]);

	raceArr.push(happyGirlsSisters15);


var columbiaGorge15 = new race("Columbia Gorge Marathon & Half", "2015-10-25", "full", "Hood River, OR", "Mark O. Hatfield West Trailhead", "Breakaway Promotions LLC", "http://www.columbiagorgemarathon.com/", "1500", "yes", ""); 

	columbiaGorge15.addRace("Half", "9:30am,  \(Early Start: All competitors who believe they will be on course longer than six hours are welcome to be at the start line at 8am and we will have an official start for you!\)", "", ["Before 1/1: $70" ," Before  4/1: $75 ", "Before: 10/1: $85 ", "After 10/1: $100 ", "**No Race WDay Registration**"], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	columbiaGorge15.addRace("Dog Leg Half Marathon \(Dog Friendly\)", "9:30am", "", ["Before 1/1: $80" , "Before  4/1:  $85" , "Before: 10/1: $90" , "After 10/1: $110 ", "**No Race Day Registration**"], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	columbiaGorge15.addRace("2 Person Half Relay", "9:30am \(Early Start: All competitors who believe they will be on course longer than six hours are welcome to be at the start line at 8am and we will have an official start for you!\)", "",["Before 1/1:  $85 ", "Before  4/1: $90  ", "Before: 10/1: $100 ",  "After 10/1: $115 ", "**No Race Day Registration** "], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	columbiaGorge15.addRace("Full", "9:00am \(Early Start: All competitors who believe they will be on course longer than six hours are welcome to be at the start line at 8am and we will have an official start for you!\)", "",["Before 1/1:  $85" , "Before  4/1:  $90" , "Before: 10/1: $100 ", "After 10/1: $115  ", "**No Race Day Registration** "], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	raceArr.push(columbiaGorge15);

	
var runLikeHell15 = new race("Run Like Hell", "2015-10-25", "half","Portland, OR", "Pioneer Courthouse Square", "Terrapin Events", "http://terrapinevents.com/event/run-like-hell-portland-half-marathon/", 5000, "Yes", "Halloween/Under the Big Top" );

		runLikeHell15.addRace("5k", "TBA", "3.5hrs", ["Tier 1: First 100 Registrants: $35", "Tier 2: $39", "Tier 3: $45", "Race Weekend: $49"],["shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("10k", "TBA", "3.5hrs",["Tier 1: First 100 Registrants: $39", "Tier 2: $45", "Tier 3: $49", "Race Weekend: $54"], ["shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("Half", "TBA", "15min/mi", ["Tier 1: First 100 Registrants: $79", "Tier 2: $89", "Tier 3: $99", "Race Weekend: $109"], ["finisher medal", "shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("Kid's Half Miler", "TBA", "N/A", ["Tier 1: $8", "Race Weekend: $12"],  ["food", "live music"]);

	raceArr.push(runLikeHell15);

var ashlandMonsterDash15 = new race("Monster Dash", "2015-10-31", "r10k", "Ashland, OR", "Ashland Schools Foundation", "http://www.ashlandmonsterdash.com/", "", "", "Halloween");

	ashlandMonsterDash15.addRace("Youth 1 Mile Fun Run Ages: 18 & Under", "10:30am", "", ["$10"], ["finisher medal"] );

	ashlandMonsterDash15.addRace("Adult 1 Mile Fun Run", "10:30am", "", ["Before 10/30: $15 ", "Race Weekend: $20"], [""]);

	ashlandMonsterDash15.addRace("Youth 5k Ages: 18 & Under", "11:15am", "", ["$10"], ["finisher medal"] );

		ashlandMonsterDash15.addRace("Adult 5k", "11:15am", "", [" Before 10/12: $20",  " Before 10/29: $25", " Race Weekend: $30"], [""]);

	ashlandMonsterDash15.addRace("Youth 10k Ages: 18 & Under", "11:15am", "", ["$10"], ["finisher medal"] );

		ashlandMonsterDash15.addRace("Adult 10k", "11:15am", "",["Before 10/12: $20",  " Before 10/29: $25", " Race Weekend: $30"], [""]);


	raceArr.push(ashlandMonsterDash15);
	

var zombieMudRun15 = new race("Zombie Mud Run", "2015-10-31", "", "Pendleton, OR", "Wildhorse Shelter at Community Park West", "Pendleton Parks & Recreation", "http://www.active.com/pendleton-or/running/zombie-mud-run-2015?cmp=39-34-156210&ltcmp=254301&ltclickid=10_24722494_620176de-e6e5-4309-8d05-fb2dd326e6ed&cmp=39-34", "", "", "Mud Run/Zombies/Halloween");
	zombieMudRun15.addRace("3k", "8am", "", ["$15"], [""]);
	raceArr.push(zombieMudRun15);

//November 2015 Races

var purpleStride15 = new race("PurpleStride Puget Sound", "2015-11-01", "r5k", "Seattle, WA", "Magnuson Park - Hangar 30", "Pancreatic Cancer Action Network", "http://purplestride.kintera.org/faf/home/default.asp?ievent=1136780&lis=1&kntae1136780=1F3F5806E8AC432DA54E18145E426A6C", "", "", "");

		purpleStride15.addRace("5K Survivor", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $0", "Race Day: $0"], ["shirt"]);
		purpleStride15.addRace("5K Adult Timed", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $30", "Race Day: $35"], ["shirt"]);
		purpleStride15.addRace("5K Adult Untimed", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $25", "Race Day: $30"], ["shirt"]);
		purpleStride15.addRace("5K Youth Timed (Ages 3-12)", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $15", "Race Day: $20"], ["shirt"]);
		purpleStride15.addRace("5K Youth Untimed (Ages 3-12)", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $10", "Race Day: $15"], ["shirt"]);
		purpleStride15.addRace("5K Vitrual Strider", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $0", "Race Day: N/A"], [""]);
		
	raceArr.push(purpleStride15);

var battleToThePacific15 = new race("Battle to the Pacific", "2015-11-01", "half", "Hammond, OR", "Fort Stevens State Park: Coffenbury Lake picnic area A", "Ascherl Industries", "http://www.ascherlindustries.com/pacificrun/index.html", "150", "", "");
	
	battleToThePacific15.addRace("5k", "10am", "", ["$25"], ["finisher ribbon", "beer"]);
	battleToThePacific15.addRace("10k", "10am", "", ["$35"], ["finisher ribbon", "beer"]);
	battleToThePacific15.addRace("Half", "9am", "", ["$45"], ["finisher ribbon", "beer"]);
	raceArr.push(battleToThePacific15);


var lithiaLoop15 = new race("Lithia Loop Trail Marathon", "2015-11-07", "full", "Ashland, OR", "Lithia Park", "Rouge Valley Runners", "http://www.roguevalleyrunners.com/LLTM/index.html", "300", "", "Trail Run");
	
	lithiaLoop15.addRace("Full", "8am", "6hrs", ["Before 10/21: $65", "Race Day Entry: $80 - no shirt"], ["shirt", "food", "drinks"]);
	raceArr.push(lithiaLoop15);

var sugarRush15 = new race("Sugar Rush", "2015-11-07", "r10k", "Spokane, WA", "", " Gonzaga University Campus: McCarthey Athletic Center", "RedPodium", "https://inlandnwbaby.webconnex.com/sugarrushspo15", "", "", "candy");
	sugarRush15.addRace("5k", "8:30am", "", ["$35"], ["hot cocoa", "chocolate truffles", "fruit with chocolate dipping sauce", "after party"]);
	sugarRush15.addRace("10k", "8:30am", "", ["$35"], ["hot cocoa", "chocolate truffles", "fruit with chocolate dipping sauce", "after party"]);
	raceArr.push(sugarRush15);

var runWithTheDuck15 = new race ("Run with the Duck", "2015-11-08", "r5k", "Eugene, OR", "Riverfront Field - south side of Autzen Footbridge", "University of Oregon: Healthy Oregon", "http://healthyoregon.uoregon.edu/Events/duckrun.aspx?q=DuckRun", "500", "", "");
	runWithTheDuck15.addRace("5k", "10am", "", ["UO Students, Faculty, Staff, Alumni & Family Members: $0", "$15 Community Members"], ["shirt"]);
	runWithTheDuck15.addRace("Kids Fun Run 1k Ages 4-12 \(kids under 7 years must have a chaperon runner\).", "9:30am", "", ["UO Students, Faculty, Staff, Alumni & Family Members: $0", "$15 Community Members"], [""]);

	raceArr.push(runWithTheDuck15);

var seaMustache15 = new race("Mustache Dash - Seattle", "2015-11-08", "r5k", "Seattle, WA", "Magnuson Park", "Mustache Dash", "http://mustachedache.com/seattle/", "", "", "Mustaches");
	
	seaMustache15.addRace("5k", "10am", "", ["Before Race Day: $44", "Race Day: $49.50"], ["shirt", "finisher medal", "photo booth", "modelo post-run bache", "food", "drinks", "mechanical bull"], "");
	seaMustache15.addRace("Kids Dash", "10am", "", ["$22"], ["shirt", "finisher medal", "photo booth","modelo post-run bache", "food", "drinks", "mechanical bull"]);
	raceArr.push(seaMustache15);

var pdxMustache15 = new race("Mustache Dash - Portland", "2015-11-14", "r5k", "Beaverton, OR", "Big Al's", "Mustache Dash", "http://mustachedache.com/portland/", "", "", "Mustaches");
	
	pdxMustache15.addRace("5k", "10am", "", ["Before Race Day: $40", "Race Day: $45"], ["shirt", "finisher medal", "photo booth", "modelo post-run bache", "food", "drinks", "mechanical bull"], "");
	pdxMustache15.addRace("Kids Dash", "10am", "", ["$20"], ["shirt", "finisher medal", "photo booth","modelo post-run bache", "food", "drinks", "mechanical bull"]);
	raceArr.push(pdxMustache15);

var eolaHillsWineCellarsHarvest15 = new race("Eola Hills Wine Cellars Harvest Run", "2015-11-14", "r10k", "Rickreall, OR", "Eola Hills Wine Cellars", "RunSignUp", "https://runsignup.com/Race/OR/Rickreall/nohills?", "", "", "");
	eolaHillsWineCellarsHarvest15.addRace("5k", "9am", "", ["Before 10/15: $25", "10/15 and After: $35"], ["pizza", "wine, beer or soda"]);
	eolaHillsWineCellarsHarvest15.addRace("10k", "9am", "", ["Before 10/15: $25", "10/15 and After: $35"], ["pizza", "wine, beer or soda"]);
	raceArr.push(eolaHillsWineCellarsHarvest15);

var pdxVetsDay15= new race("National Veterans Day Run - Portland", "2015-11-15", "r5k", "Portland, OR", "Mt. Tabor", "National Veterans Day Run", "http://www.veteransdayrun.com/register/portland", "", "", "Veterans Day");

	pdxVetsDay15.addRace("1 mile Adult", "8:15am /(Pre-Race Veterans Day Ceremony Begins at 7:50am/)", "", ["No Shirt: Until 11/07: $30", "No Shirt Until 11/07: Veterans and Active Duty Military: $11", "Cotton Shirt: Until 11/07: $41", "Tech Shirt: Until 11/07: $51", "$5 Discount for Military Spouses & Youth"], ["finisher pin", "finsiher ribbon", "goodie bag", "refreshments"]);

	pdxVetsDay15.addRace("1 mile Kids Ages 12 & Under", "8:15am /(Pre-Race Veterans Day Ceremony Begins at 7:50am/)", "", ["$5"], ["finisher pin", "finsiher ribbon", "goodie bag", "refreshments"]);

	pdxVetsDay15.addRace("5k Adult", "8:11am /(Pre-Race Veterans Day Ceremony Begins at 7:50am/)", "", ["No Shirt: Until 11/07: $35", "No Shirt Until 11/07: Veterans and Active Duty Military: $11", "Cotton Shirt: Until 11/07: $46", "Tech Shirt: Until 11/07: $56", "$5 Discount for Military Spouses & Youth"], ["finisher pin", "finsiher ribbon", "goodie bag", "refreshments"]);

	pdxVetsDay15.addRace("5k Adult Kids Ages 12 & Under", "8:11am /(Pre-Race Veterans Day Ceremony Begins at 7:50am/)", "", ["$10"], ["finisher pin", "finsiher ribbon", "goodie bag", "refreshments"]);

	raceArr.push(pdxVetsDay15);

var flyingHawaiian15 = new race("Flyin' Hawaiian", "2015-11-15", "r5k", "Eugene, OR", "Camp Harlow", "Eclectic Edge Events", "http://www.eclecticedgeracing.com/Flyin__Hawaiian_5K.html", "", "", "Hawaiian");

	flyingHawaiian15.addRace("Adult 5k Fun Run", "2:30pm", "", ["Until 11/14: $20"], [""]);
	flyingHawaiian15.addRace("Student 5k Fun Run", "2:30pm", "", ["Until 11/14: $15"], [""]);
	flyingHawaiian15.addRace("Adult 5k Competitive Run", "3pm", "", ["Until 11/14: $20"], [""]);
	flyingHawaiian15.addRace("Student 5k Competitive Run", "3pm", "", ["Until 11/14: $15"], [""]);
	raceArr.push(flyingHawaiian15);

var beaverBowl15 = new race("Beaver Bowl 5k", "2015-11-21", "r5k", "Corvallis, OR", "OSU Campus Women’s Building", "OSU College of Public Health and Human Sciences", "http://www.eventbrite.com/e/beaver-bowl-5k-and-kids-fun-run-tickets-16323587289", "", "", "Football / OSU Beavers");

	beaverBowl15.addRace("Beaver 1k Challenge", "1k", "9:30am", "", ["$15"], ["shirt", "pizza", "drinks", "tailgate party"]);

	beaverBowl15.addRace("Beaver 5k Student", "5k", "9:30am", "", ["$35"] ["shirt", "pizza", "drinks", "tailgate party"]);

	beaverBowl15.addRace("Beaver 5k Community Member", "5k", "9:30am", "", ["$45"], ["shirt", "pizza", "drinks", "tailgate party"]);

	raceArr.push(beaverBowl15);

var girlsOnTheRun15 = new race("Girls on the Run", "2015-11-21", "r5k", "Bellingham, WA", "Bloedel Donovan", "WHATCOM Family YMCA", "http://www.whatcomymca.org/gotr-5k.html", "", "", "");

	girlsOnTheRun15.addRace("5k", "9:30am", "", ["$15 \(Girls on the Run Participants and Coaches do NOT need to pay the registration fee\)"], [""]);

	raceArr.push(girlsOnTheRun15);

var redmondTurkeyTrot15 = new race("Redmond Turkey Trot", "2015-11-21", "r5k", "Redmond, WA", "Redmond Town Center", "Snohomish Running Company", "http://redmondturkeytrot.com/", "", "", "Thanksgiving");

	redmondTurkeyTrot15.addRace("Adult 5k", "8am", "1hr 15min", ["Until 10/31 $30", "11/01-11/20: $35", "Race Day: $40"], ["shirt, finisher medal"]);

	redmondTurkeyTrot15.addRace("High School Student 5k", "8am", "1hr 15min", ["$20"], ["finisher medal"]);

	raceArr.push(redmondTurkeyTrot15);

var ducksVsBeavers15 = new race("Ducks vs Beavers Rivalry Clash", "2015-11-22", "r10k", "Portland, OR", "Portland, International Raceway", "Rivalry Clash Events", "http://www.rivalryclash.com/event/details/portland/", "", "yes", "UO Ducks & OSU Beavers");

	ducksVsBeavers15.addRace("5k", "9:15am", "", ["$35"], ["shirt", "finisher medal", "after party"]);

	ducksVsBeavers15.addRace("10k", "8:30am", "", ["$45"], ["shirt", "finisher medal", "after party"] );

	raceArr.push(ducksVsBeavers15);

var runToStayWarm15 = new race("EWEB Run to Stay Warm", "2015-11-22", "half", "Eugene, OR", "Eugene Water & Electric Board", "http://www.eweb.org/runtostaywarm", "", "", "");

	runToStayWarm15.addRace("5k", "9:15am", "", ["$20", "no race day registration"], ["after party at tap and growler"]);

	runToStayWarm15.addRace("10k", "9:15am", "", ["$30", "no race day registration"], ["after party at tap and growler"]);

	runToStayWarm15.addRace("half", "9am", "16min/mile **course closes at 12:30pm**", ["$40", "no race day registration"], ["finisher medal", "after party at tap and growler"]);

	runToStayWarm15.addRace("kid’s 400 meter dash", "8:30am", "", ["$0"], ["goody bag ", "hot cocoa", "photo with Sluggo"]);

	raceArr.push(runToStayWarm15);

var keizerTurkeyDash15 = new race("Keizer’s Turkey Dash Fun Run", "2015-11-26", "r5k", "Keizer, OR", "Lowe’s Home Improvement", "Kiezer Chamber of Commerce", "http://chambermaster.keizerchamber.com/events/details/keizer-s-turkey-dash-5k-fun-run-walk-presented-by-salem-real-estate-group-11-26-2015-7965" , "1200", "", "Thanksgiving");

	keizerTurkeyDash15.addRace("5k Adult", "8am", "", ["Before 11/1: $25", "11/1-11/25: $30", "Race Day: $35 \(shit not guaranteed\)"], ["shirt", "finisher mug"]);

	keizerTurkeyDash15.addRace("5k Youth", "8am", ["Before 11/1: $12", "11/1-11/25: $15", "Race Day: $20 \(shit not guaranteed\)"], ["youth shirt", "finisher mug"]);

	raceArr.push(keizerTurkeyDash15);

var turkeyTrotZoo15 = new race("Turkey Trot at the Zoo", "2015-11-26", "", "Portland, OR", "Oregon Zoo", "Oregon Road Runner’s Club", "http://orrc.net/events/event-list/turkey-trot-4-mile-run-and-walk-with-kids-tot-trot/", "3500", "yes", "Thanksgiving");

	turkeyTrotZoo15.addRace("4mile Adult", "8am", "", ["$25"], ["zoo admission", "pumpkin pie"]);

	turkeyTrotZoo15.addRace("4mile Youth: Ages 11 & younger ", "8am", "", ["$10"], ["shirt if registered by 11/7", "zoo admission", "pumpkin pie"]);

	turkeyTrotZoo15.addRace("Tot Trot Youth: Ages 11 & younger" , "9:30am", "", ["$10"], ["shirt if registered by 11/7", "zoo admission", "pumpkin pie"]);

	raceArr.push(turkeyTrotZoo15);

var tofurkyTrot15 = new race("Tofurky Trot", "2015-11-26", "r5k", "Portland, OR", "Oaks Park Spring Water Trail", "The Tofurky Company", "http://www.eventbrite.com/e/tofurky-trot-2015-in-pdx-tickets-15023191771?aff=erelexporg" , "", "", "Thanksgiving");

	tofurkyTrot15.addRace("Adult 5k \(dog friendly event \)", "9am", "", ["Before 11/26: $30", "Race Day: $35 **shirt not guaranteed**"], ["shirt", "dog treats", "goodies"]);

	tofurkyTrot15.addRace("Youth 5K: Ages 18 & Under", "9am", "", ["Before 11/26: $15", "Race Day: $20 **shirt not guaranteed**", "Kids 6 & Under: $0"], ["shirt", "dog treats", "goodies"]);

	raceArr.push(tofurkyTrot15);

var seattleGhostMar15 = new race("Seattle Ghost Marahton", "2015-11-28", "ultra", "Seattle, WA", "Mt. Baker Park", "Databar Events", "https://www.databarevents.com/seattleghost", "400", "", "");
	seattleGhostMar15.addRace("half", "7am", "6hrs", ["$75"], ["hoodie ", "finisher medal"]);
	seattleGhostMar15.addRace("full", "Early: 6am Reg: 7am ", "7hrs", ["$75"], ["hoodie ", "finisher medal" ]);
	seattleGhostMar15.addRace("50k", "6am", "7hrs", ["$75"], ["hoodie ", "finisher medal"]);
	raceArr.push(seattleGhostMar15);

	var seattleMarathon15 = new race("Seattle Marathon", "2015-11-29", "full", "Seattle, WA", "Seattle Center", "Amica Insurance", "http://www.seattlemarathon.org/#marathon", "", "yes", "");
	seattleMarathon15.addRace("half", "runners: 7:30am, walkers: 7:45am", "", ["Until 11/17: $105 ", "11/27-11/28: $140 ", "No Race Day Registration"], ["shirt ", "finisher's medal ", "goodie bag ", " food", " drinks"]);
	seattleMarathon15.addRace("full", "runners: 8:15am, walkers: 7:15am", "7hrs", ["Until 11/17: $135 ", "11/27-11/28: $150 ", "No Race Day Registration"], ["shirt ", "finisher's medal ", "goodie bag ", " food", " drinks"]);
	raceArr.push(seattleMarathon15);

	// var name = new race(title, date, className(ie longest dist offered (r5k, r10k, half, full, ultra etc)) city, startLocation, organizer, orgLink, cap, bagCheck, theme);
//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
// raceArr.push(title);

var hotButteredRun15 = new race ("Hot Buttered Run", "2015-11-29", "half", "Vancouver, WA", "Esther Short Park", "Engery Events", "http://energyevents.com/hotbutteredrun", "", "", "", "Winter Holidays");
	hotButteredRun15.addRace("5k Adult", "10am", "", ["4/15 to 6/30: $30", "7/1 to 9/30:	$35", "10/1 to 10/31: $40", "11/1 to 11/14:	$45", "11/15 to 11/22: $45 \(No Shirt Included \), Race Day: $50 \(No Shirt Included \)"], ["shirt", "goodie bag", "food", "hot butter rum or hot cocoa", "after party: music & fun"]);
	hotButteredRun15.addRace("5k Youth Ages 8-18", "10am", "", ["4/15 to 11/14: $18", "11/15 to 11/22: $18 \(No Shirt Included \)", "Race Day: $50 \(No Shirt Included \)"], ["shirt", "goodie bag", "food", "hot cocoa", "after party: music & fun"]);
	hotButteredRun15.addRace("Half", "9am", "3hrs", ["4/15 to 6/30: $40", "7/1 to 7/30:	$45", "08/01 to 9/30: $50", "10/1 to 10/31: $60", "11/1 to 11/14: $65", "11/15 to 11/22: $65 \(No Shirt Included \), Race Day: $75 \(No Shirt Included \)"], ["shirt", "finisher medal", "goodie bag", "food", "hot butter rum or hot cocoa", "after party: music & fun"] );
	hotButteredRun15.addRace("Kid's Kandy Kane 1k Ages 5-12 \(No Parents\)", "11:45am", ["Ages 5-6 Pre-Event: $8", "Ages 7-12: $12", "All Ages Race Day: $15"], ["kid's shirt", "kid's medal", "hot cocoa"] );
	hotButteredRun15.addRace("Kid's Kandy Kane Fun Run Ages 3-8 \(kids under 6 must have a parent\)", "11:45am", ["Ages 3-6 Pre-Event: $8", "Ages 7-8: $12", "All Ages Race Day: $15"], ["kid's shirt", "kid's medal", "hot cocoa"]);

	raceArr.push(hotButteredRun15);

//December 2015 Races

var jingleBellRock15 = new race("Jingle Bell Rock", "2015-12-05", "r5k", "Lakewood, WA", "Fort Steilacoom Park", "City of Lakewood", "http://www.active.com/lakewood-wa/running/distance-running-races/jingle-bell-rock-5k-fun-run-2015?cmp=39-34&ltclickid=10_72218924_41293a1a-c0c6-42a8-9cf8-6b1400a71bcf&ltcmp=254301", "" , "", "Winter Holidays");
	jingleBellRock15.addRace("5k *dog friendly event*", "10am", "", ["$0"], ["shirt ", "bells ", "swag bag " , "s'mores ", "cider"]);
	raceArr.push(jingleBellRock15);


var blerchGreenLake15 = new race("Beat the Blerch Green Lake Fun Run", "2015-12-05", "r10k", "Seattle, WA", "Green Lake Park","The Oatmeal", "https://www.eventbrite.com/e/beat-the-blerch-green-lake-fun-run-registration-19071281717", "", "", "blerch/winter holidays" );
	
	blerchGreenLake15.addRace("5k", "5pm", "", ["$33"], ["medal", "mesh christmas stocking", "gobs of candy", "giant pixy stix", "blerch beanie", "blerch gloves"]);
	blerchGreenLake15.addRace("10k", "5pm", "", ["$33"], ["medal", "mesh christmas stocking", "gobs of candy", "giant pixy stix", "blerch beanie", "blerch gloves"]);;
	raceArr.push(blerchGreenLake15);

var hoHo15 = new race("Ho Ho 5k", "2015-12-06", "r5k", "Tigard, OR", "Cook Park", "X-Dog Events", "http://www.xdogevents.com/hoho.html", "", "", "Winter Holidays");
	hoHo15.addRace("5k Adult", "10am", "", ["Tier 1: $15", "Tier 2: $20"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	hoHo15.addRace("5k Kids Ages 6-12", "10am", "", ["Tier 1: $8", "Tier 2: $11"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	hoHo15.addRace("5k Kids Under 6", "10am", "", ["$5"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	raceArr.push(hoHo15);

var jingleBellPDX15 = new race("Jingle Bell 5k", "2015-12-06", "r5k", "Portland, OR", "World Trade Center", "The Arthritis, Foundation", "http://www.jbr.org/faf/home/default.asp?ievent=1138292", "", "", "Winter Holidays" );	
	jingleBellPDX15.addRace("5k Adult", "8:50am", "", ["Before 11/01: $30"], ["shirt", "jingle bells"]);
	jingleBellPDX15.addRace("5k Kid Ages 12 & Under", "8:50am", "", ["$20"], ["shirt", "jingle bells"]);
	jingleBellPDX15.addRace("1k Kid's Fun Run with the Elves Ages 10 & Under", "8:30am", "", ["$20"], ["shirt", "jingle bells"]);
	jingleBellPDX15.addRace("Jingle in Your Jammies (Vitrual)", "", "", ["Without Shipping: $25", "With Shipping: $31" ], ["shirt", "jingle bells"]);

	raceArr.push(jingleBellPDX15);


var holidayHustle15 = new race("Holiday Hustle", "2015-12-12", "r5k", "Central Point, OR", "Twin Peaks Park", "Junior League of Jackson County", "https://secure.getmeregistered.com/get_information.php?event_id=122692", "", "", "Winter Holidays");
	holidayHustle15.addRace("5k Adult", "5pm", "", ["$20"], [""]);
	holidayHustle15.addRace("5k Kids: Ages 12 & Under", "5pm", "", ["$10"], [""]);
	raceArr.push(holidayHustle15);

var santaRunsTacoma15 = new race("Santa Runs Tacoma", "2015-12-12", "half", "Tacoma, WA", "State Farm Building", "Tacoma City Marathon Association", "http://santarunstacoma.com/", "1000 for the Half", "yes", "Winter Holidays");
	santaRunsTacoma15.addRace("Tiny Tim's 1k: Ages 12 & Under", "10:30am", "", ["Before 11/30: $15 ", "12/1-12/9: $17.50 ", "12/10: $20 ", "No Race Day Registration"], ["ribbon"]);
	santaRunsTacoma15.addRace("Frosty's 5k", "9am", "", ["Before 10/31: $25 ", "11/1-11/30: $30 ", "12/1-12/9: $35", "12/10: $37", "No Race Day Registration"], ["hat"]);
	santaRunsTacoma15.addRace("The Scrooge 10k", "8:30am", "", ["Before 10/31: $30 ", "11/1-11/30: $35 ", "12/1-12/9: $40", "12/10: $45", "No Race Day Registration"], ["hat"]);
	santaRunsTacoma15.addRace("Donner and Blitzen's 21k", "8:30am", "4hrs", ["Before 10/31: $60 ", "11/1-11/30: $70 ", "12/1-12/9: $80", "12/10: $90", "No Race Day Registration"], ["hat ", "shirt ", "finsher's medal"]);
	raceArr.push(santaRunsTacoma15);

var naughtyOrNiceathon15 = new race("Naughty or Niceathon", "2015-12-12", "r5k", "Beaverton, OR", "Big Al's", "Uberthons", "http://www.uberthons.com/naughtyorniceathon", "Yes. But only with a ratio of 51% Nice people and 49% Naughty people.", "No","Winter Holidays");
	naughtyOrNiceathon15.addRace("5k Choose Naught or Nice", "9:00am", "", ["$30"], [
		"free game of bowling and shoes", "future uberthons race discounts", "$10 beer tube coupons", "free arcade play", "pancake breakfast", "finisher medal", "hot chocolate", "live music"]);
	naughtyOrNiceathon15.addRace("Kidathon 1/4-1/2 Mile", "10:30am", "", [""], ["uberkids medal avalible for $10"]);
	naughtyOrNiceathon15.addRace("Kids 1 Miler: 12 and under (timed)", "10:30am", "", ["$10"], ["kid's medal"]);
	raceArr.push(naughtyOrNiceathon15);

var holidayHalf15 = new race("Holiday Half & 5k", "2015-12-13", "half", "Portland, OR", "Addias North America Campus", "Foot Traffic", "http://foottraffic.us/the-races/holiday/", "", "", "Winter Holidays");
	
	holidayHalf15.addRace("5k","8:15am", "", ["7/15 to 9/1: $36", "9/2 to 10/15: $39", "10/16 to 11/1: $41", "11/2 to 11/9: $41 \(no name on bib\)", "11/10 until Full: $41 \(no name on bib and tech shirt subbed with cotton shirt\)", "Race Day: $45 \(no name on bib and shirt not guaranteed\)"], ["finisher medal", "shirt", "name on bib", "food", "beer", "music"] );

		holidayHalf15.addRace("Half", "8am", "15min/mi", ["7/15 to 9/1: $69", "9/2 to 10/15: $77", "10/16 to 11/1: $82", "11/2 to 11/9: $82 \(no name on bib\)", "11/10 until Full: $82 \(no name on bib and shirt not guaranteed\)", "Race Day: $90 \(no name on bib and shirt not guaranteed\)"], ["finisher medal", "shirt", "name on bib", "food", "beer", "music"]);

	raceArr.push(holidayHalf15);

var eugeneHolidayHalf15 = new race("Eugene Holiday Half & Hustle", "2015-12-19", "half", "Eugene, OR", "Lane Events Center", "Pink Buffalo Racing", "http://www.eugeneholidayhalf.com/Home.html", "", "", "Winter Holidays");
	eugeneHolidayHalf15.addRace("Holiday Hustle 5k", "9:15am", "course closes at 2pm", ["Before 12/19: $20", "Race Day: $25", "Seniors and Youth under 17 deduct $5"], []);
	eugeneHolidayHalf15.addRace("Holiday Hustle 10k", "9:15am", "course closes at 2pm", ["Before 12/19: $20", "Race Day: $25", "Seniors and Youth under 17 deduct $5"], []);
	eugeneHolidayHalf15.addRace("Holiday Half", "9:00am", "4hrs", ["Before 12/19: $55", "Race Day: $60", "Seniors and Youth under 17 deduct $5"], ["finisher medal"]);
	eugeneHolidayHalf15.addRace("GloryBee Kid's Fun Run - 12 and under", "8:45am", "", ["$0"], []);
	raceArr.push(eugeneHolidayHalf15); 

var medfordUglySweater15 = new race(
	"Medford Ugly Sweater 5k", "2015-12-19", "r5k", "Medford, OR", "Main St & S Bartlett St (Near RCC)", "Medford Ugly Sweater Run", "http://www.medforduglysweater5k.com/index2.php", "", "", "Winter Holidays");
		medfordUglySweater15.addRace("5k Adult", "9:00am", "", ["With Shirt: $30", "Without Shirt: $25"], ["pancake breakfast"]);
		medfordUglySweater15.addRace("5k Youth", "9:00am", ["With Shirt: $20", "Without Shirt: $15"], ["pancake breakfast"]);
	raceArr.push(medfordUglySweater15);

var uglyHolidaySweaterRun15 = new race("Ugly Holiday Sweater Run", "2015-12-19", "r5k", "Tualatin, OR", "7063 SW Nyberg St", "Ladybugt CDH Foundation", "https://runsignup.com/Race/OR/Tualatin/UglyHolidaySweaterRun?", "", "", "Winter Holidays");
	uglyHolidaySweaterRun15.addRace("5k", "9:00am", "", ["Suggested Donation $10"], []);
	raceArr.push("uglyHolidaySweaterRun15");

var sewardSolistice15 = new race("Seward Solistie", "2015-12-19", "r10k", "Seattle, WA", "Seward Park", "Northwest Trail Runs", "http://nwtrailruns.com/events/seward-solstice/", "", "", "trail run");
	sewardSolistice15.addRace("4.2 Mile Adult", "9:30am", "course closes at 12:00pm", ["Before 12/18: $26", "Race Day: $35"], ["snacks"]);
	sewardSolistice15.addRace("4.2 Mile Youth", "9:30am", "course closes at 12:00pm",  ["Before 12/18: $26", "Race Day: $35", "Use Code #YOUTH for $10 onlne discount or $5 in person discount"], ["snacks"]);
	sewardSolistice15.addRace("10k Adult", "9:30am", "course closes at 12:00pm", ["Before 12/18: $31", "Race Day: $40"], ["snacks"]);
	sewardSolistice15.addRace("10k Youth", "9:30am", "course closes at 12:00pm", ["Before 12/18: $31", "Race Day: $40", "Use Code #YOUTH for $10 onlne discount or $5 in person discount"], ["snacks"]);
	raceArr.push(sewardSolistice15);

var yukonDoit15 = new race("Yukon Do it Marathon & Half Marathon", "2015-12-27", "full", "Port Orchard, WA", "Totem Pole by the Downtown Library", "Databar Events", "http://www.databarevents.com/events/view/74", "", "", "");
	yukonDoit15.addRace("Half", "9:00am", "", ["12/1-12/23: $75", "Race Day: $100"], []);
	yukonDoit15.addRace("Full", "7:30am", "", ["12/1-12/23: $100", "No Race Day Registration"], []);
	raceArr.push(yukonDoit15);

var lastChance15 = new race("Last Chance Marathon", "2015-12-31", "full", "Bellingham, WA", "Fairhaven Park", "Databar Events", "http://www.databarevents.com/events/view/72", "250", "yes", "New Year's Eve");
	lastChance15.addRace("half", "Early Start: 8:00AM, Regular Start: 9:00am", "", [
		"$45", "No Race Day Registration"], ["snacks", "finisher medal/coin"]);
	lastChance15.addRace("full", "Early Start: 8:00AM, Regular Start: 9:00am", "", ["$45", "No Race Day Registration"], ["snacks", "finisher medal/coin"]);
	raceArr.push(lastChance15);
var firstRun15 = new race("First Run", "2015-12-31","r10k", "Portland, OR", "World Trade Center", "AA Sports", "http://aasportsltd.com/events/race/first-run-walk/", "", "", "New Year's Eve");
	firstRun15.addRace("10k", "12am", "", ["Until 12/30: $45", "Race Day: $50"], ["food", "beer", "music", "dancing", "photo op", "after party"]);
	firstRun15.addRace("5k");
	raceArr.push(firstRun15);

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

//October 2016 Races

//November 2016 Races

//December 2016 Races

// var name = new race(title, date, className(ie longest dist offered (r5k, r10k, half, full, ultra etc)) city, startLocation, organizer, orgLink, cap, bagCheck, theme);
//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
// raceArr.push(title);

console.log(raceArr)
fs.writeFile("raceJSON.js", JSON.stringify(raceArr))

var fs = require("fs");

function Race(name, date, location, start, organizer, orgLink, cap, bagCheck, theme) {
	this.name = name,
	this.date = new Date(date),
	this.location = location, 
	this.start = start,
	this.organizer = organizer,
	this.orgLink = orgLink,
	this.cap = cap,
	this.bagCheck = bagCheck,
	this.theme= theme,
	this.races = [],
	this.addRace = function(dist, startTime, limit, prices, swag) {
		var race = {
			distance: dist,
			startTime: startTime,
			timeLimit: limit,
			prices:{},
			swag: swag
		}
		//need to figure out how to add price increases
		for(var i=0;i<prices.length;i++) {
			var tier = "tier" + (i+1); 
			race.prices[tier] = prices[i];
		}
		this.races.push(race);
		//add tier date method
	}

};

var build = {}
build.Race = Race;


module.exports = build;
var fs = require("fs");

function Race(title, start, startLocation, city, organizer, orgLink, cap, bagCheck, theme) {
	this.title = title,
	this.start = start,
	this.city = city,
	this.startLocation = startLocation,
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
			prices: prices,
			swag: swag

		}
		this.races.push(race);
		//add tier date method
	}

};

var build = {}
build.Race = Race;


module.exports = build;
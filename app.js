var fs = require("fs");

function Race(name, date, location, start, organizer, orgLink, cap) {
	this.name = name,
	this.date = new Date(date),
	this.location = location, 
	this.start = start,
	this.organizer = organizer,
	this.orgLink = orgLink,
	this.cap = cap
	this.races = [],
	this.addDistances = function(dist, prices, limit, swag) {
		var race = {
			distance: dist,
			timeLimit: limit,
			prices:{},
			swag: swag
		}
		for(var i=0;i<prices.length;i++) {
			var tier = "tier" + (i+1); 
			race.prices[tier] = prices[i];
		}
		this.races.push(race);
	}
};

// Race(name, date, location, start, organizer, orgLink, cap)
// fs.writeFile("test.js", JSON.stringify(runLikeHell))



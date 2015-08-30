runLikeHell= {
	name: "Run Like Hell",
	date: "10-25-2015",
	location: "Portland, OR",
	start: "Pioneer Courthouse Square",
	organizer: "Terrapin Events", 
	orgLink: "http://terrapinevents.com/event/run-like-hell-portland-half-marathon/",
	cap:  5000,
	theme: "Halloween/Under the Big Top",
	priceIncreaseDates: {
		tier1: "first 100 registrants",
		tier2: "limited avalibilty",
		tier3: "limited avalibilty",
		tier4: "Day of Race"
	},
	races: [
		{distance: "5k",
				prices: {
					tier1:35,
					tier2:39,
					tier3:45,
					tier4:49 },
				timeLimit: "3.5hrs",
				swag: ["shirt", "beer", "food", "live music"] }, 
			{distance: "10k",
					prices: {
					tier1:39,
					tier2:45,
					tier3:49,
					tier4:54 },
				timeLimit: "3.5hrs",
				swag: ["shirt", "beer", "food", "live music"]},
				{distance: "Half",
					prices: {
						tier1:79,
						tier2:89,
						tier3:99,
						tier4:109 },
					timeLimit: "15min/mi",
					swag: ["finisher medal","shirt", "beer", "food", "live music"]},
					{distance: "Kid's Half Miler",
						prices: {
							tier3:8,
							tier4:12 },
						timeLimit: "",
						swag: []}
	]
}
console.log(runLikeHell)
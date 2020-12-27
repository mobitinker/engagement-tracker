// store the credential variables in .env file and retrieve the values here.

//require("dotenv").config();

//TODO probably not working
//console.log('Process.env', process.env);
// @ts-check

module.exports= {

  //NODE_ENV: process.env.NODE_ENV || 'development',
  //HOST: process.env.HOST || '127.0.0.1',
  //PORT: process.env.PORT || 3000,
  /* todo Use REACT_APP_ prefix
  DB_ENDPOINT: process.env.DB_ENDPOINT,
  DB_KEY: process.env.DB_KEY,
  DB_DATABASE_ID: process.env.DB_DATABASE_ID,
  */

  partitionKey: { kind: "Hash", paths: ["/ssdpk"] },
  
  staff: [
    {school: 'GBE', name: 'Alania Solada', dept: "2/3", meeting_id: '8652580903'},
    {school: 'GBE', name: 'Carlene Crossman', dept: "5", course: "Science", meeting_id: '4682427828'},
    {school: 'GBE', name: 'David Monson', dept: "C", meeting_id: '5676717067'},
    {school: 'GBE', name: 'Gail Bowers', dept: "Music", meeting_id: '2225508614'},
    {school: 'GBE', name: 'Kim Skadan', dept: "5", meeting_id: '9887799526'},
    {school: 'GBE', name: 'Leslie Best', dept: "5", course: "ELA", meeting_id: '6887151159'},
    {school: 'GBE', name: 'Leslie Neville', dept: "3", meeting_id: '3798415486'},
    {school: 'GBE', name: 'Lacey Blue', dept: "P", meeting_id: '9770935917'},
    {school: 'GBE', name: 'Linda Michael', dept: "SE", meeting_id: '3740908194 '},
    {school: 'GBE', name: 'Lindsey Haworth', dept: "ELA", course: "ELA", meeting_id: '9321149699'},
    {school: 'GBE', name: 'Lisa Thebo', dept: "P", meeting_id: '8372589523'},
    {school: 'GBE', name: 'Madison Berry', dept: "4", meeting_id: '9362066639'},
    {school: 'GBE', name: 'Margaret Frame', dept: "2", meeting_id: '9321149699'},
    {school: 'GBE', name: 'Meagan Hughes', dept: "K", meeting_id: '8357546134'},
    {school: 'GBE', name: 'Melisa Amundson', dept: "K", meeting_id: '2775969009'},
    {school: 'GBE', name: 'Melissa Jones', dept: "2", meeting_id: '9380236575'},
    {school: 'GBE', name: 'Nicole Comfort', dept: "P", meeting_id: '3610177132'},
    {school: 'GBE', name: 'Patti Bowers', dept: "1", meeting_id: '4800124624'},
    {school: 'GBE', name: 'Phyllis Tubbs', dept: "1", meeting_id: '9994515344'},
    {school: 'GBE', name: 'Rachel Gossett', dept: "3", meeting_id: '4273112841'},
    {school: 'GBE', name: 'Robin Morrill-Briganti', dept: "SE", meeting_id: '2461500739'},
    {school: 'GBE', name: 'Sandy Peers', dept: "P", meeting_id: '4854704398'},
    {school: 'GBE', name: 'Shannon Clune', dept: "P", meeting_id: '2185623350'},
    {school: 'GBE', name: 'Sheryl Klennert', dept: "4", meeting_id: '9399313327'},
    {school: 'GBE', name: 'Stormy Evans', dept: "Library", meeting_id: '3875245472'},
    {school: 'GBE', name: 'Tamara McNew', dept: "3", meeting_id: '5076650048'},
    {school: 'GBE', name: 'Tanya Christian', dept: "1", meeting_id: '9823336501'},
    {school: 'GBE', name: 'Tiffany Kerr', dept: "K", meeting_id: '7619200780'},
    {school: 'GBE', name: 'Tia LaLonde', dept: "P", meeting_id: ''},
    
    {school: 'SES', name: 'Aubrey VanOrden', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Adelia Franklin', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Allison Trichler', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Amy Smith', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Annie Philips', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Charles Knapp', dept: '', meeting_id: ''},
    {school: 'SES', name: 'David Pallo', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Dee Clarke', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Jasper Scott-Weis', dept: '', meeting_id: ''},
    {school: 'SES', name: 'John Brenning', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Kathleen Allen', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Kelli Fisher', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Kelly Flynn', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Kim Gee', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Laura Broughton', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Lesa Steppe', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Linda Madderra', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Lisa Hettel', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Lisa VanOrden', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Mackenzie Farmer', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Mary Sifferman', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Matthew Koehler', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Michele Mosca', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Michelle Matheson', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Rebecca Weide', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Sallie Ritzinger', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Summer Hudy', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Tamara Norton', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Tami McInroy', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Teresa Gustafson', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Teresa Keenen', dept: '', meeting_id: ''},
    {school: 'SES', name: 'Tiffany Norton', dept: '', meeting_id: ''},
    {school: 'SES', name: 'William Weide', dept: '', meeting_id: ''},

    {school: 'SHS', name: 'Amy Verner', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Andrea Fuller', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Andrea Garibay', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Ben Murphy', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Brandi Varnell', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Brent Buhler', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Cindy Randolph', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Glenn Frame', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'jackie harris', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Jason VanZant', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Jeff Brumley', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Jill Sumpter', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Julie Gress', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Karissa Kelley', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Katherine Power', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Kelsey Lupin', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Kevin Anderson', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Maurissa Lynch', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Melissa McNaughton', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Michael Sandberg', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Michelle Fuller', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Mr. Rudd', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'rick holloway', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Rosalyn Santerre', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Ryan Malone', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Sarah Harkins', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Sarita Whitmire', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Sashia Ambriz', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Scott Sifferman', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'sherry knox', dept: '', meeting_id: ''},
    {school: 'SHS', name: 'Zoie Miller', dept: '', meeting_id: ''},
    
    {school: 'SMS', name: 'Alexis Buchsbaum', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Amber Hoffman', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Angela Heath', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Angela Nelson', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Annie Barker', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Blair Broughton', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Brien Swift', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Brooke Lomans', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Darci Murphy', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Emily Suter', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Heather Andrews', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Heather Houseman', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Heidi Harder', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Jared Skeith', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Jody Schauer', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Kimbra Smith', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Lucille Motta', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Margaret Browder', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Michelle Vanhulle', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Nathan Plummer', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Peter Riehle', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Quinn Lambert', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Randall Bostic', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Robert Richert', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Russell Jones', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Shannon Munn', dept: '', meeting_id: ''},
    {school: 'SMS', name: 'Thomas Kearney', dept: '', meeting_id: ''},    
  ],

  // Zoom start times school
  schools: [
    {name: "GBE", 
      zoomTimesText: ["8:30a", "9:30a", "1:30p", "2:30p", "Fri"],
      startMinutes: [510, 570, 810, 870]
    },
    {name: "SES", 
      zoomTimesText: ["8:30a", "9:30a", "1:30p", "2:30p", "Fri"],
      startMinutes: [510, 570, 810, 870]
    },
    {name: "SMS", 
      zoomTimesText: ["10:00a", "11:00a", "12:30p", "2:00p", "Fri"],
      startMinutes: [600, 660, 750, 840]
    },
    {name: "SHS", 
      zoomTimesText: ["10:00a", "11:00a", "12:30p", "1:30p", "Fri"],
      startMinutes: [600, 660, 750, 810]
    },
  ],

  //Unused
  zoomTimes: [
      {
        dept: 3,
        zooms: [
            {topic: "Math", start: "08:30", minutes: 30},
            {topic: "Language Arts", start: "09:30", minutes: 30},
            {topic: "Math", start: "13:30", minutes: 30},
            {topic: "Language Arts", start: "14:30", minutes: 30},
            {topic: "Friday Office", start: "08:30", minutes: 90},
        ]
      },
      {
        dept: 4,
        zooms: [
            {topic: "Math", start: "08:30", minutes: 30},
            {topic: "Language Arts", start: "09:30", minutes: 30},
            {topic: "Math", start: "13:30", minutes: 30},
            {topic: "Math", start: "14:30", minutes: 30},
            {topic: "Friday Office", start: "08:30", minutes: 90},
        ]
      },
      {
        dept: 5,
        zooms: [
            {topic: "Reading", start: "08:30", minutes: 30},
            {topic: "Language Arts", start: "09:30", minutes: 30},
            {topic: "Math", start: "13:30", minutes: 30},
            {topic: "Math", start: "14:30", minutes: 30},
            {topic: "Friday Office", start: "08:30", minutes: 90},
        ]
      },
  ]   
  
};

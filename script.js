//I have no idea whats going on.  

function setup() {
    createCanvas(400, 200);
     loadJSON('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2018-11-06&endDate=2018-11-7&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R])),linescore,game(content(media(epg),highlights(scoreboard)),seriesSummary),=&site=en_nhl&teamId=&gameType=&timecode=', gotData);
}

function gotData(data) {
   println(data);
}

function draw() {
    background(0);
}



// link above has information needed 


//dates.games.teams.away.team.name
//dates.games.teams.home.team.name


//dates.games.teams.away.score
//dates.games.teams.home.score
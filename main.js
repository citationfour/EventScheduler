//var
var timeData = "";
var dateData = "";
var placeData = "";
var doingData = "";

var eventText = "";
var eventNumber = 1;

var darkWhiteBtnPressed = 0;

function updateEvent() {
    if (eventNumber == 1) {
        eventText = document.getElementById("eventText").insertAdjacentHTML("beforeend", "Event " + eventNumber + " is in " + timeData + ", " + dateData + " at " + placeData + ", " + doingData);
    }
    else {
        eventText = document.getElementById("eventText").insertAdjacentHTML("beforeend", "<br> Event " + eventNumber + " is in " + timeData + ", " + dateData + " at " + placeData + doingData);
    }
    eventNumber++;
}

function updateData() {
    timeData = ("time", document.getElementById("time").value);
    dateData = ("date", document.getElementById("date").value);
    placeData = ("text", document.getElementById("place").value);
    doingData = ("text", document.getElementById("doing").value);

    updateEvent();
}

function darkWhite() {
    if (darkWhiteBtnPressed == 0) {
        //change button colors
        document.getElementById("time").style.backgroundColor = "#2e2e2e";
        document.getElementById("date").style.backgroundColor = "#2e2e2e";
        document.getElementById("place").style.backgroundColor = "#2e2e2e";
        document.getElementById("doing").style.backgroundColor = "#2e2e2e";
        document.getElementById("submit").style.backgroundColor = "#2e2e2e";

        //change text colors
        document.getElementById("pageTitle").style.color = "white";
        document.getElementById("submit").style.color = "white";
        document.getElementById("eventText").style.color = "#00c43e";

        //change label colors
        document.getElementById("timeLabel").style.color = "white";
        document.getElementById("dateLabel").style.color = "white";
        document.getElementById("placeLabel").style.color = "white";
        document.getElementById("doinLabel").style.color = "white";
        document.getElementById("submit").style.color = "white";

        //background color change
        document.getElementById("html").style.backgroundColor = "black";

        //dark mode button
        document.getElementById("darkWhiteMode").style.color = "black";
        document.getElementById("darkWhiteMode").style.backgroundColor = "white";

        //white mode
        document.getElementById("darkWhiteMode").innerHTML = "White Mode (Are you crazy?)";
    
        darkWhiteBtnPressed ++;
    }
    else if(darkWhiteBtnPressed == 1)
    {
        //change button colors
        document.getElementById("time").style.backgroundColor = "white";
        document.getElementById("date").style.backgroundColor = "white";
        document.getElementById("place").style.backgroundColor = "white";
        document.getElementById("doing").style.backgroundColor = "white";
        document.getElementById("submit").style.backgroundColor = "white";

        //change text colors
        document.getElementById("pageTitle").style.color = "black";
        document.getElementById("submit").style.color = "white";
        document.getElementById("eventText").style.color = "crimson";

        //change label colors
        document.getElementById("timeLabel").style.color = "black";
        document.getElementById("dateLabel").style.color = "black";
        document.getElementById("placeLabel").style.color = "black";
        document.getElementById("doinLabel").style.color = "black";
        document.getElementById("submit").style.color = "black";

        //background color change
        document.getElementById("html").style.backgroundColor = "white";

        //dark mode button
        document.getElementById("darkWhiteMode").style.color = "white";
        document.getElementById("darkWhiteMode").style.backgroundColor = "black";

        //white mode
        document.getElementById("darkWhiteMode").innerHTML = "Dark Mode";
    
        darkWhiteBtnPressed -= 1;
    }

}
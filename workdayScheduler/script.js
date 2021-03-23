// I am using a daily planner to create a schedule

// the current day is displayed at the top of the calendar
// am presented with timeblocks for standard business hours
    // each timeblock is color coded to indicate whether it is in the past, present, or future
        // click into a timeblock
            //  can enter an event
            //  click the save button for that timeblock
                // the text for that event is saved in local storage
// refresh the page
    // saved events persist

// LOGIC
// getMoment time
//loop thorough time clocks
    // if time is before momentTime, set class to past
    // if time equals momentTime, set class to current
    // if time is after momentTim, set class to future
//when cliked on saveNoteButton, the text from that timeblock input is save to local storage
//loop though localStorage notes and display on time blocks text areas

//VARIABLES
// time

//FUNCTIONS
//getMoment
$(document).ready(function(){


const currentDay = $("#currentDay")

var date = moment().format('LL');
console.log("date: ", date)
currentDay.text(date);

var time = parseInt(moment().startOf('day').fromNow().substring(0,2));
console.log("time: ", time)

//loop through time-block
const timeBlock = 
$(".time-block").each( function() {
    var timestuff = ($(this).attr("id"))
    timestuff = Math.abs(timestuff.substring(timestuff.length - 2))
    console.log("timestuff: ", timestuff)
})


})
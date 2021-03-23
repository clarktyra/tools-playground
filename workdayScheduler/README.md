# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Psuedo Code 
```md
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
```
## Link
[Lets go to Day Scheduler](https://clarktyra.github.io/tools-playground/workdayScheduler/index.html)
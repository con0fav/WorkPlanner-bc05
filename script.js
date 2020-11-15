// use moments.js to display current date at the top of the page under jumbotron text
// single line each for hours between 9 AM and 5 PM
// timeblock rows can be built with bootstrap? textarea rows? text boxes? forms?
// grey: past red: now green: future
// timeblock rows are text where you can enter text
// text stored in timeblock rows are saved to local storage WHEN save button on the right is pressed
// 

var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
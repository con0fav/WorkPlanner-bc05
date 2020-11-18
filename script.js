// use moments.js to display current date at the top of the page under jumbotron text
// grey: past red: now green: future
// timeblock rows are text where you can enter text
// text stored in timeblock rows are saved to local storage WHEN save button on the right is pressed
// 

var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);





// use moments.js to display current date at the top of the page under jumbotron text
// grey: past red: now green: future
// timeblock rows are text where you can enter text
// text stored in timeblock rows are saved to local storage WHEN save button on the right is pressed
// 

var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);

var eventInput = $("#event");
var events = [];

function init() {
  var savedEvents = JSON.parse(localStorage.getItem("events"));

  if (savedEvent !== null){
    events = savedEvents
  }
}


function storeEvents() {
  localStorage.setItem("events", JSON.stringify(events));
}





// var event = [];

// init();

// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var events = JSON.parse(localStorage.getItem(".event"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }

//   }




// $(".save").click(function() {
//     $(".event").html();
//     localStorage.setItem(key, value);
// })

// function saveEvent() {
//     localStorage.event = $(".event").val();
// }

// function loadEvent() {
//     $(".event").val(localStorage.event);
// }

// for (let i = 0; i < array.length; i++) {
//     const event = array[i];
    
// }
// Initialized Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBem7aYPaG3WfP5gEA3yAcyRm9zk358x3k",
  authDomain: "train-scheduler-9ce14.firebaseapp.com",
  databaseURL: "https://train-scheduler-9ce14.firebaseio.com",
  projectId: "train-scheduler-9ce14",
  storageBucket: "train-scheduler-9ce14.appspot.com",
  messagingSenderId: "1029895528639",
  appId: "1:1029895528639:web:f54b5f68e5e535aeaee60a",
  measurementId: "G-0M98RCW99R"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
// Button to add new trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  var trainName = $("#train-name-input")
    .val()
    .trim();
  var trainDest = $("#destination-input")
    .val()
    .trim();
  var firstTrain = moment(
    $("#time-input")
      .val()
      .trim(),
    "HH:mm"
  ).format("HH:mm");
  var trainFreq = $("#frequency-input")
    .val()
    .trim();

  // Created local temporary object to hold the data
  var newTrain = {
    name: trainName,
    destination: trainDest,
    start: firstTrain,
    freq: trainFreq
  };
  database.ref().push(newTrain);

  // Supposed to log the data in the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.freq);

  //   Clears the text box
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  x;
  $("#frequency-input").val("");
});

// Created firebase event listener for added trains
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  

    var trainName = childSnapshot.val().train;
    var destination = childSnapshot.val().trainDest;
    var firstTrain = childSnapshot.val().trainArrival;
    var frequency = childSnapshot.val().everyMin;



    var trainTime = moment(firstTrain).format("hh:mm");

    var difference = moment().diff(moment(trainTime), "minutes");

    var firstTrain = difference % frequency;
    console.log(trainRemain);


    var minRemain = frequency - firstTrain;
    console.log(minRemain);


    var nextArrival = moment().add(minRemain, "minutes").format('hh:mm');
    console.log(nextArrival);

    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
        frequency + "</td><td>" + nextArrival + "</td><td>" + minRemain + "</td></tr>");

});


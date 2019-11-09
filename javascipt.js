// Initialized Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCgVs7nt2jvnJDymLCc03teYuE3-AvN8xI",
  authDomain: "test-project-utsa.firebaseapp.com",
  databaseURL: "https://test-project-utsa.firebaseio.com",
  projectId: "test-project-utsa",
  storageBucket: "test-project-utsa.appspot.com",
  messagingSenderId: "392920990156",
  appId: "1:392920990156:web:d9e0705f24fb1032db1d69",
  measurementId: "G-HMYCEMW4KE"
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

  // Logs data entered to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.freq);

  //   $("#train-name-input").val("");
  //   $("#destination-input").val("");
  //   $("#time-input").val("");x
  //   $("#rate-input").val("");
});

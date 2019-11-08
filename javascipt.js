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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train-btn").on("click",function(event){
    event.preventDefault();
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var firstTrain = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    var trainFreq = $("#rate-input").val().trim();
});

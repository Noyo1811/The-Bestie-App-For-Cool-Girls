var firebaseConfig = {
  apiKey: "AIzaSyCTJ5q-m0c9DfL9ZH2HCixnXb0TP-xk-TQ",
  authDomain: "kwitter-d84df.firebaseapp.com",
  databaseURL: "https://kwitter-d84df.firebaseio.com",
  projectId: "kwitter-d84df",
  storageBucket: "kwitter-d84df.appspot.com",
  messagingSenderId: "30907139429",
  appId: "1:30907139429:web:0941bd8c341ac1d4994d8c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) {
   document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


























function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

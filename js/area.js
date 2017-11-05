var config = {
    apiKey: "AIzaSyCkCcAZlkz7FpBVhtissjwLfd6aqURm1P4",
    authDomain: "swachh-india-5e4b9.firebaseapp.com",
    databaseURL: "https://swachh-india-5e4b9.firebaseio.com",
    projectId: "swachh-india-5e4b9",
    storageBucket: "swachh-india-5e4b9.appspot.com",
    messagingSenderId: "946892545995"
  };

  firebase.initializeApp(config);  

  function area(){



var ref = firebase.database().ref().child("Problem").orderByChild('Rating');
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var imgurl;


        ref.on("child_added", snap => {
    
   // var name  = snap.child("Name").val();
    var email = snap.child("Email").val();
    var desc = snap.child("Description").val();
    var lat = snap.child("Latitude").val();
    var long = snap.child("Longitude").val();
    var rating = snap.child("Rating").val();
   var image = snap.child("Image").val();
     
    
   
    

// firebase.auth().signInAnonymously().then(function() {

  // console.log('Before requesting download URL');
    storageRef.child(image).getDownloadURL().then(function(url) {
    console.log(imgurl=url);
  
    document.querySelector('img').src = url;
        
    }).catch(function(error) {
    // If anything goes wrong while getting the download URL, log the error
    console.error(error);
    });

    //console.log('After requesting download URL');

    //});

     
    
    $("#table_body").append("<tr><td><img src=" + imgurl + "/img></td><td>" + email + "</td><td>" + desc + "</td><td>" + rating + "</td><td>" + lat + "</td><td>" + long + "</td></tr>");
});
     
}

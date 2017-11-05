var fbRef = firebase.database().ref().child("Item Posts");
//removed the storage reference

fbRef.on("child_added", snap => {
    var name = snap.child("ItemName").val();
    var price = snap.child("Price").val();
    var category = snap.child("Category").val();
    var description = snap.child("Description").val();
    //got the string URL from the database
    var image = snap.child("Image").val();

    //concatenated the img tag using the image variable at the top
    $("#tableBody").append("<tr><td><img src=" + image + "/img></td><td>" + name + "</td><td>" + price + "</td><td>" + category + "</td><td>" + description + "</td></tr>" );
});
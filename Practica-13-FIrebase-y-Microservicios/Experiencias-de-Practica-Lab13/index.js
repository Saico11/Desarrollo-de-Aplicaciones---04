var admin = require("firebase-admin");
var serviceAccount = require("./da04-4e60b-firebase-adminsdk-mo5tt-1c531109e4.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://da04-4e60b-default-rtdb.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server/data");
var userRef = ref.child("nodejs");
userRef.set({
    usuarios: {
        name: "carlos reyes",
        age: 28,
        salary: 2304.54
    }
});
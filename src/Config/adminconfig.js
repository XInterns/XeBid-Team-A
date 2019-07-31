var admin = require("firebase-admin");

var serviceAccount = require("../xebid-team-a-firebase-adminsdk-ktggs-f839644a5f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://xebid-team-a.firebaseio.com"
});

export default admin;


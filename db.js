const admin = require('firebase-admin');

const serviceAccount = require('./FIRESTORE.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://discord-yesno.firebaseio.com"
})

admin.firestore().settings({timestampsInSnapshots: true})

const db = admin.firestore()

module.exports.db = db

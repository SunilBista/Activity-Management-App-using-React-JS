const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added'));
})



exports.activityCreated = functions.firestore
    .document('activity/{activityId}')
    .onCreate(doc => {

        const activity = doc.data();
        const notification = {
            content: 'added a new activity',
            user: `${activity.authorFirstName} ${activity.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)

    })

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then((doc) => {
                const newUser = doc.data();
                const notification = {
                    content: 'joined the App',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification)
            })

    })
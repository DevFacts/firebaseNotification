var config = {
    apiKey: "AIzaSyDjWsPHeua1_Aqeh5cVBwovHYnYONoiyy0",
    authDomain: "webpushnotification-b7bff.firebaseapp.com",
    databaseURL: "https://webpushnotification-b7bff.firebaseio.com",
    projectId: "webpushnotification-b7bff",
    storageBucket: "webpushnotification-b7bff.appspot.com",
    messagingSenderId: "29012639818"
  };
  firebase.initializeApp(config);

  var database  = firebase.database();
  var ref = database.ref('notification');
  var data = {}



//Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// messaging.onTokenRefresh(function(){
// 	messaging.getToken()
// 	.then(function(refreshedToken){
// 	console.log('Token refreshed');
// 	// sendToServer(token);
// 	}).catch(function(err){
// 		console.log('Unable to retrieve refreshed token ', err);
//     showToken('Unable to retrieve refreshed token ', err);
// 	});
// });

// messaging.onTokenRefresh(function() {
//   messaging.getToken()
//   .then(function(refreshedToken) {
//     console.log('Token refreshed.');
//     sendToServer(refreshedToken)
//   })
//   .catch(function(err) {
//     console.log('Unable to retrieve refreshed token ', err);
//     showToken('Unable to retrieve refreshed token ', err);
//   });
// });

messaging.requestPermission()
.then(function() {
  return messaging.getToken();
}).then(function(token){
	sendToServer(token);
	console.log(token);
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});



messaging.onMessage(function(payload){
		console.log("onMessage", payload);
});



// storing data to the firebase database
function sendToServer(token){
	data.userToken  = token;
	data.appUse = navigator.appCodeName;
	data.appVersion  = navigator.appVersion; 
  	ref.push(data);
}




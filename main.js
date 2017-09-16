var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "....",
    projectId: "....",
    storageBucket: ".....",
    messagingSenderId: "..."
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




importScripts("https://www.gstatic.com/firebasejs/4.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.3.1/firebase-messaging.js");

var config = {
    apiKey: "AIzaSyDjWsPHeua1_Aqeh5cVBwovHYnYONoiyy0",
    authDomain: "webpushnotification-b7bff.firebaseapp.com",
    databaseURL: "https://webpushnotification-b7bff.firebaseio.com",
    projectId: "webpushnotification-b7bff",
    storageBucket: "webpushnotification-b7bff.appspot.com",
    messagingSenderId: "29012639818"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload){
  	const title= 'Drivoi';
  	const options={
  	 body: payload.data.status
  	}
  	return self.registration.showNOtification(title, options);
  });
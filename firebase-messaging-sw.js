importScripts("https://www.gstatic.com/firebasejs/4.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.3.1/firebase-messaging.js");

var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: ".....",
    projectId: "....",
    storageBucket: "...",
    messagingSenderId: "..."
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload){
  	const title= 'Test';
  	const options={
  	 body: payload.data.status
  	}
  	return self.registration.showNOtification(title, options);
  });

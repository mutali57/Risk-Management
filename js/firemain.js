var valList= [];
var keyList =[];
var databaseRes;
function fireInit () {
	var  a=  {

		apiKey: "AIzaSyB5F9qY38724px4bwXULcrCwj8fCq_D58Y",
		authDomain: "projectrisk-1a0a1.firebaseapp.com",
		databaseURL: "https://projectrisk-1a0a1.firebaseio.com",
		projectId: "projectrisk-1a0a1",
		storageBucket: "projectrisk-1a0a1.appspot.com",
		messagingSenderId: "659506389580",
		appId: "1:659506389580:web:029194abbba2619576cae9"
	};
	 firebase.initializeApp(a);
	databaseRes= firebase.database();
}

function valRead(name) {


	


    databaseRes.ref().child(name). on('value', function(snapshot) {

									   if (snapshot.exists())
									   {
										   var i=0;
										  


										   snapshot.forEach(function(data) {

                                                      //alert(data.val ());
																valList[i] = data.val ();
																
																i++;

															
															});
										  
riskCounter();

										   
									   }










								   }

								   );




}




function keyRead(topic) {


	//var database = firebase.database();


    databaseRes.ref().child(topic). on('value', function(snapshot) {
		

									   if (snapshot.exists())
									   {
										   var i=0;



										   snapshot.forEach(function(data) {

											keyList [i]=data.key;		
											//alert(keyList);
										   valRead(topic+"/"+data.key);
										  
            
  
													i++;
															});
										   


									   }










								   }

								   );




}




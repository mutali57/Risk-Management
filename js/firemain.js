var snapData;
var valList=[];
var keyList =[];






function valRead(name) {


var	databaseRes= firebase.database();



    databaseRes.ref().child(name). on('value', function(snapshot) {

									   if (snapshot.exists())
									   {

                       snapData=snapshot.val();
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
	var databaseRes= firebase.database();


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

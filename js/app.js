/*var  a=  {
		apiKey: "AIzaSyB5F9qY38724px4bwXULcrCwj8fCq_D58Y",
		authDomain: "projectrisk-1a0a1.firebaseapp.com",
		databaseURL: "https://projectrisk-1a0a1.firebaseio.com",
		projectId: "projectrisk-1a0a1",
		storageBucket: "projectrisk-1a0a1.appspot.com",
		messagingSenderId: "659506389580",
		appId: "1:659506389580:web:029194abbba2619576cae9"
	};
 var keyList= [];
  
  function read(){
  /*firebase.initializeApp(a);
  alert('read');
  
  query = firebase.database().ref("message/Energy").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
	  $('#'+key).val(childData);
  });
});
  
	var database = firebase.database();


    database.ref().child ('messages/Energy/Site Data/'). on('value', function(snapshot) {
										   if (snapshot.exists())
										   {
											   var i=0;
											   snapshot.forEach(function(data) {
																	
																	var val=data.key;
																
																	keyList[i]=val;
																	i++;
																	
																});
											   
										 $('p').html(keyList.length);
																			
}});

  
 
  
 }
  
  
  

$(document).ready(function() {

            // read ();
					  if ($('#newContact').length > 0)
					  {
					
						  contactScript('forcontact');
						  
					  }
				  });
				  
//firebase
function contactScript(value) {
    
firebase.initializeApp(a);

var reference;
$("#heading").change(function (){
reference=$(this).val();});
$('p').html(reference);

    var databaseref = firebase.database().ref("messages/Energy/"+reference);
	$("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");

								var	b=$("#subtopic").val(),
									c =$("#duedelligence").val(),
									d=$("#observation").val(),
									e=$("#severityscore").val(),
									f=$("#severitydescription").val(),
									g=$("#probabilityscore").val(),
									h=$("#probabilitydescription").val(),
									dataModel= {subplot: b, 
									duedelligence: c,
									observation: d,
									severityscore: e,
									severitydescription: f,
									probabilityscore: g,
									probabilitydescription: h};
									alert(b);
								return databaseref.push(dataModel).then(function() { 
														  $(".sucess").css("display", "block"), 
															  $(".sucess-none").css("display", "none"); }), !1; });   


}







*/

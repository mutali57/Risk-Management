var valList= [];
var keyList =[];
var snapData;
var RiskArray= [];
var string=[];


function valRead(name) {



var	databaseRes= firebase.database();

    databaseRes.ref().child(name). on('value', function(snapshot) {

									   if (snapshot.exists())
									   {
										   var i=0;

snapData =snapshot.val();


										   snapshot.forEach(function(data) {


																valList[i] = data.val()

																i++;
															});



										   productUpdate();

										  // alert("my:"+RiskArray.length);
									   }










								   }

								   );




}




function keyRead(name) {


	//var database = firebase.database();
var	databaseRes= firebase.database();

    databaseRes.ref().child("My_data/"+name). on('value', function(snapshot) {


									   if (snapshot.exists())
									   {
										   var i=0;



										   snapshot.forEach(function(data) {

											keyList [i]=data.key;

										   valRead("My_data/"+name+"/" + data.key);

																i++;
															});
															try {
															    document.getElementById('productTable').id =name;
															    } catch(e) {
															        console.log(e);
															        // [Error: Uh oh!]
															    }
        ;

									   }










								   }

								   );




}




function contactScript() {
	var	databaseRes= firebase.database();

   databaseRes = firebase.database().ref("Energy");
$("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
var nhead=$('#heading').val(),
									b=$("#subtopic").val(),
									c =$("#duedelligence").val(),
									d=$("#observation").val(),
									e=$("#severityscore").val(),
									f=$("#severitydescription").val(),
									g=$("#probabilityscore").val(),
									h=$("#probabilitydescription").val(),
									k=$("#suggestion").val(),
									dataModel= {
									heading:nhead,
									subtopic: b,
									duedelligence: c,
									observation: d,
									severityscore: e,
									severitydescription: f,
									probabilityscore: g,
									probabilitydescription: h,
									suggestion: k};



return databaseRes.push(dataModel).then(function() {

window.location.href = 'container.html';

});});


			}

      function refresh(id ){

      var updates = {};
      var dataModel;

      var	databaseRes;


      	var str='';
      	//alert(RiskArray);


      	for ( x in RiskArray){

      		str+=','+RiskArray [x];



      	}



      var data=    {
          total:str

            };




      								var nhead=$('#heading').val(),
      									b=$("#subtopic").val(),
      									c =$("#duedelligence").val(),
      									d=$("#observation").val(),
      									e=$("#severityscore").val(),
      									f=$("#severitydescription").val(),
      									g=$("#probabilityscore").val(),
      									h=$("#probabilitydescription").val(),
      									k=$("#suggestion").val();
      						dataModel= {

      									heading:nhead,
      									subtopic: b,
      									duedelligence: c,
      									observation: d,
      									severityscore: e,
      									severitydescription: f,
      									probabilityscore: g,
      									probabilitydescription: h,
      									suggestion: k};

      updates["totalRisk/"+id] = data;


      //databaseRes = firebase.database().ref('totalRisk/').update ({energyRisk:str});




       return databaseRes = firebase.database().ref("My_data/").update(updates);




      }

function updateTotal (id){

var updates = {};
var dataModel;

var	databaseRes;

if(id=="Introduction"){



  var detail=$('#detail').val();

var key=$('#keyinfo').val();
  dataModel={

    details : detail,
  keyInfo: key
  }
  updates[id+"/"+ keyList [activeId-1]]= dataModel;



}else {





var dataModel;

var	databaseRes;


	var str='';
	//alert(RiskArray);

	for ( x in RiskArray){

		str+=','+RiskArray [x];



	}


var data=    {
    total:str

      };




								var nhead=$('#heading').val(),
									b=$("#subtopic").val(),
									c =$("#duedelligence").val(),
									d=$("#observation").val(),
									e=$("#severityscore").val(),
									f=$("#severitydescription").val(),
									g=$("#probabilityscore").val(),
									h=$("#probabilitydescription").val(),
									k=$("#suggestion").val();
						dataModel= {

									heading:nhead,
									subtopic: b,
									duedelligence: c,
									observation: d,
									severityscore: e,
									severitydescription: f,
									probabilityscore: g,
									probabilitydescription: h,
									suggestion: k};

updates["totalRisk/"+id] = data;
updates[id+"/"+ keyList [activeId-1]]= dataModel;
}//databaseRes = firebase.database().ref('totalRisk/').update ({energyRisk:str});




 return databaseRes = firebase.database().ref("My_data/").update(updates).then(function() {



window.location.href="container.html";

  });





}


function updateFile(name) {
var	dataModel;
	//alert(activeId);
	var	databaseRes= firebase.database();

	databaseRes = firebase.database().ref(name+"/"+keyList [activeId-1]);
	$("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");



	if (name=='Introduction'){
		var detail=$('#detail').val();


		dataModel={

	    details : detail


		};
	}else {

								var nhead=$('#heading').val(),
									b=$("#subtopic").val(),
									c =$("#duedelligence").val(),
									d=$("#observation").val(),
									e=$("#severityscore").val(),
									f=$("#severitydescription").val(),
									g=$("#probabilityscore").val(),
									h=$("#probabilitydescription").val(),
									k=$("#suggestion").val();
						dataModel= {

									heading:nhead,
									subtopic: b,
									duedelligence: c,
									observation: d,
									severityscore: e,
									severitydescription: f,
									probabilityscore: g,
									probabilitydescription: h,
									suggestion: k};
                }

								return databaseRes.update(dataModel). then(function() {


                  window.location.href = 'container.html';
//updateFile("My_data/"+localStorage.getItem("nameid"));

									});});
									}

var valList= [];
var keyList =[];
var snapData;
var RiskArray= [];



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

    databaseRes.ref().child(name). on('value', function(snapshot) {

									   if (snapshot.exists())
									   {
										   var i=0;



										   snapshot.forEach(function(data) {

											keyList [i]=data.key;

										   valRead(name+"/" + data.key);

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
alert(' Add successful');

window.location.href = 'index.html';

});});


			}

function updateTotal (id){


	var	databaseRes= firebase.database();
	if(id=="energyRisk"){
	var str='';
	//alert(RiskArray);
	for ( x in RiskArray){

		str+=','+RiskArray [x];
	}

databaseRes = firebase.database().ref('totalRisk/').update ({energyRisk:str});

}


if(id=="siteApp"){


	var str='';
	//alert(RiskArray);
	alert(RiskArray);
	for ( x in RiskArray){

		str+=','+RiskArray [x];

		}
databaseRes = firebase.database().ref('totalRisk/').update({siteApp:str});

}


}
function updateFile(name) {
	//alert(activeId);
	var	databaseRes= firebase.database();

	databaseRes = firebase.database().ref(name+"/"+keyList [activeId-1]);
	$("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
	var	dataModel;
alert(name);


	if (name=='Introduction'){
		var detail=$('#detail').val();

alert('hey');
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
									alert('Update success');

									window.location.reload();

									});});
									}


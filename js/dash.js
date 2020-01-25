//var activeId=0;
var high=0;
var medium=0;
var low=0;
var critical=0;
var a= [ "Introduction","Site Appreciation","Energy Yield Assessment",
	"Site Conditions and Turbine Suitability",
	"Contract Overview",
	"Programme",
	"OEM and Turbine Technology",
	"Balance of Plant Track Record",
	"Supply - Turbine Supply Agreement",
	"Supply - Balance of Plant",
	"Supply - Project Management Agreement",
	"Supply - Interface",
	"Supply - Service Agreement",
	"Asset Management",
	"Grid Connection Agreement",
	"Power Purchase Agreement",
	"Electrical Design",
	"Geotechnical Investigation",
	"Civil Design",
	"Environmental",
	"Permitting",
	"Operational Performance",
	"Financial Model"];

	function topic(name,id,totalRisk){
		//alert(totalRisk);
		 var energyRisk=totalRisk;
 var editRow=null;

 var my=[];
 my= energyRisk.split (',');

 for (var x in my){

  if (risk(my [x])=="H"){
	  high++;
  }
 if (risk(my [x])=="C"){
	  critical++;
  }
  if (risk(my [x])=="L"){

	  low++;
  }
  if (risk(my [x])=="M"){
	  medium++;
  }
 }

		var ref="";
	var textStr="";
  var num=id+1;
	  ref ="<tr>"+
	  "<td>"+num+
	  ".<div><button type='button' class='btn btn-info btn-lg'" +
			"onclick='asserts(this);' " +
			"class='btn btn-default'" +
			"data-id='" + num + "'>" +
			"<span class='glyphicon glyphicon-edit' />" +
			"</button></td>" +

	  "<td>"+name+"</td>"+
	  "<td></td>"+
	  "<td></td>"+
	  "<td></td>"+
	  "<td>"+low+"</td>"+
	  "<td>"+medium+"</td>"+
	  "<td>"+high+"</td>"+
	  "<td>"+critical+"</td></tr>";
	  textStr=  $('tbody').append(ref);


	}



function asserts (ctl){
	editRow = $(ctl).parents("tr");

	var cols = editRow.children("td");
	alert($($(cols[0]).children('button')[0]).data ('id'));
	var activeId = $($(cols[0]).children("button")[0]).data("id");
	alert(activeId);


		//window.location.href = 'energy.html';


}

function riskCounter (){
alert (valList[0]);

 //alert(valList.length);
 //topic(a [3],4,valList [1]);
topic(a[1],2,snapData.Site_Appreciation);
 topic(a [2],3, valList [0]);
 topic(a[3],4, valList[1]);






}


$(document).ready(function (){

//fireInit();
//readData();
valRead('totalRisk');
//valRead('totalRisk');






	 //
});

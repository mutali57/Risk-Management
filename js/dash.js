//var activeId=0;
var high=0;
var medium=0;
var low=0;
var critical=0;
var i=0;
var  negligible=0;

var arrLow=[];
var arrHigh=[];
var arrMedium=[];
var arrCritical=[];
var arrNegligible=[];
var heads=[];






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

	function topic(){
for (x in keyList){
heads[x]=	replaceAll(keyList[x],"_"," ");
}


		//alert(totalRisk);
		 var energyRisk=valList[0];
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
	if (risk(my [x])=="N"){
	  negligible++;
  }
 }
  arrLow[i]=low;
 arrHigh[i]=high;
arrMedium[i]=medium;
arrCritical[i]=critical;
 arrNegligible[i]=negligible;
var total=low+high+critical+medium;



		var ref="";
	var textStr="";

	  ref ="<tr>"+
	  "<td>"+heads[i]
	  +"<br><a type='button' class='btn btn-info btn-lg'" +
			"href='report.html#"+keyList[i]+ "ID'>" +
			"<i class='fas fa-edit'></i>" +
			"<a></td>" +

	  "<td>"+"</td>"+
	  "<td></td>"+
	  "<td>"+total+"</td>"+
	  "<td>"+negligible+"</td>"+
	  "<td>"+low+"</td>"+
	  "<td>"+medium+"</td>"
		+"<td>"+high+"</td>"+
	  "<td>"+critical+"</td>";


		i++;

return ref;
	}



 	 function asserts (ctl){
 	 	editRow = $(ctl).parents("tr");

 	 	var cols = editRow.children("td");
 	 	alert($($(cols[0]).children('button')[0]).data ('id'));
 	 	var activeId = $($(cols[0]).children("button")[0]).data("id");
 	 	//alert(activeId);


 	 		//window.location.href = 'energy.html';


 	 }
	 function replaceAll(str, find, replace) {
	 	return str.replace(new RegExp(find, 'g'), replace);
	 }




 	 function riskCounter (){


$("tbody").append(topic);


}



 	 $(document).ready(function (){

keyRead("My_data/totalRisk/");
 	 




 	 	 //
 	 });

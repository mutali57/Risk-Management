//var activeId=0;
var high=0;
var medium=0;
var low=0;
var critical=0;
var i=0;
var negligible=0;

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
};


		//alert(totalRisk);
		 var energyRisk=snapData.total;


 //var my=[1,2,9,9,9,0,0]
 my= energyRisk.split (',');
 for (var x=1;x<my.length;x++){
//alert(my[x]);
 if(isNaN(my[x])){


 }else{
  if (risk(my [x])=="H"){

	  high++;

  }
 else if (risk(my [x])=="C"){
	  critical++;
  }
  else if (risk(my [x])=="L"){

	  low++;

  }
else if (risk(my [x])=="M"){
	  medium++;
  }
else if(risk(my[x])=="N"){
negligible++;
  }

}}

 //alert(keyList[i]+" :"+"low:"+low+" high: "+ "medium :"+medium+ "crtical :"+critical);
  arrLow[i]=low;
 arrHigh[i]=high;
arrMedium[i]=medium;
arrCritical[i]=critical;
 arrNegligible[i]=negligible;
var total=low+high+critical+medium+negligible;




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
		low=0;
		medium=0;
		medium=0;
		high=0;
		critical=0;
		negligible=0;

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
		 var ctx = document.getElementById("myChart");
		 var myChart = new Chart(ctx, {
		 	type: 'bar',

		 	data: {
		 		labels:heads,
		 		datasets: [
		 {
		 label: 'Low',
		 data: arrLow,
		 backgroundColor: 'Green' // green

		 },
		 {
		 label: 'Medium',
		 data: arrMedium,
		 backgroundColor: 'Yellow' // yellow
		 },
		 {
		 label: 'High',
		 data:arrHigh,
		 backgroundColor: 'Red' // red
		 },{
		 label: 'Critical',
		 data:arrCritical,
		 backgroundColor: 'Black' // red
		 }
		 ]


		 	},
		 	options: {
		 		animation: {
		 				duration: 0 // general animation time
		 		},
		 		hover: {
		 				animationDuration: 0 // duration of animations when hovering an item
		 		},
		 		responsiveAnimationDuration: 0 ,// animation duration after a resize

		 		scales: {

		 			xAxes: [{ stacked: true }],
		 			yAxes: [{ stacked: true }]
		 		},
		 		legend: {
		 			//display: true,
		 		}
		 	}
		 });

keyRead("My_data/totalRisk/");





 	 	 //
 	 });

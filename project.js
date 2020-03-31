

function navigationbar(){

var results =  "<nav class='navbar  navbar-dark navbar-expand-lg sticky-top bg-dark  '>"

  +"<span id = 'user' class='navbar-brand fas fa-user'>user</span>"

  +"<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>"
  +"<span class='navbar-toggler-icon'></span>"
  +"</button>"

  +"<div class='collapse navbar-collapse' id='navbarSupportedContent'>"
  +"<ul class='navbar-nav mr-auto'>"
  +"<li class='nav-item active'>"
  +"<li class='nav-item'>"
    +"<a class='nav-link' href='dash2.html'>Home</a>"
  +"</li>"
  +"<a class='nav-link' href='report.html'>Report<span class='sr-only'>(current)</span></a>"
  +"</li>"

  +"<li class='nav-item dropdown'>"
  +"<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"
   +"Assessment"
  +"</a>"
  +"<div class='dropdown-menu' aria-labelledby='navbarDropdown'>"
  +"<a class='dropdown-item'  href='report.html#IntroductionID'>Introduction</a>"
  +"<a class='dropdown-item' href='report.html#Site_AppreciationID'>Site Appreciation</a>"
  +"<a class='dropdown-item' href='report.html#Energy_Analysis'>Energy Yield Assessment</a>"
  +"<a class='dropdown-item' href='report.html#Site_and_Turbine_SuitabilityID'>Site_and_Turbine_Suitability</a>"
  +"<a class='dropdown-item' href='report.html#Contract_OverviewID'>Contract Overview</a>"
  +"<a class='dropdown-item' href='report.html#ProgrammeID'>Programme</a>"
  +"<a class='dropdown-item' href='report.html#Original_Equipment_Manufacturer_and_Turbine_TechnologyID'>OEM and Turbine Technology</a>"
  +"<a class='dropdown-item' href='report.html#Balance_of_Plant_Track_RecordID'>Balance of Plant Track Record</a>"
  +"<a class='dropdown-item' href='report.html#Supply_Balance_of_PlantID'>Supply_Balance_of_Plant</a>"

  +"<a class='dropdown-item' href='report.html#Supply_Turbine_Supply_AgreementID'>Supply - Turbine Supply Agreement</a>"
  +"<a class='dropdown-item' href='report.html#Supply_Project_Management_AgreementID'>Supply - Project Management Agreement</a>"
  +"<a class='dropdown-item' href='report.html#Supply_InterfaceID'>Supply - Interface</a>"
  +"</div>"
  +"</li>"
  +"<li class='nav-item'>"
  +"<a class='nav-link disabled' href='#'>Disabled</a>"
  +"</li>"
  +"</ul>"
  +"<input class='form-control form-control-dark w-50' id='myInput' type='text' placeholder='Search' aria-label='Search'>"

  +"<li  id ='logout'   style='display:none;'class='nav-item text-nowrap'>"

  +"<button   class ='btn btn-primary' onclick='logout();'>"
  +"<span class='fas fa-sign-out-alt'>Logout</span>"
  +"</button>"


  +"</li>"
  +"<li id ='login' style='display:none;' class='nav-item text-nowrap'>"

  +"<button   class ='btn btn-primary' onclick='login();'>"
  +"<span class='fas fa-sign-out-alt'>Login</span>"
  +"</button>"


  +"</li>"

  +"</div>"


  +"</nav>";







/*var results =	"<div  class=' nav navbar  navbar-inverse navbar-fixed-top ' role='navigation'>"
      +"<div class='container nav-wrapper'>"
        +"<div id ='nav' class=' navbar-header '>"


          +"<button id='toggle' type='button' class='navbar-toggle collapsed  ' data-toggle='collapse' data-target='.navbar-collapse'>"
            +"<span class='sr-only navbar-left' >Toggle navigation</span>"
            +"<span class='icon-bar'></span>"
            +"<span class='icon-bar'></span>"
            +"<span class='icon-bar'></span>"

        +"</button>"

        +"</div>"

	  +"<div class='nav navbar  '>"
		+"<input class='form-control' id='myInput' type='text' placeholder='Search Table'>"
	  +"</div>"
        +"<div class='collapse navbar-collapse'>"
          +"<ul class='nav navbar-nav'>"
            +"<li class='active'><a href='#'>Home</a></li>"
            +"<li><a href='siteappreciation.html'>Site Appreciation</a></li>"
            +"<li><a href='#contact'>Contact</a></li>"
        +  "</ul>"

        +"</div>"
      +"</div>"
	+"</div>"
	;*/

	return results;
}









	function createTable(name){
    var results="";

 if (name=='Introduction'){

results="<iframe name='votar' style='display:none';></iframe>"+
"<br>"+
"<br>"+
   "<div id='source-html'>"+

   "<table  id='productTable'"+
   "class='table table-bordered table-condensed table-scroll w-auto'>"+
   "<thead >"
   +"<tr><th colspan='3'><h1>"+name+"</h1></th></tr>"
 +
   "<tr>"+
"<th class='topicid'>"+

   "<a role='button' class='btn btn-info btn-lg'  href='container.html'"
    +
   "data-id='mybutton'>" +
   "<i class='fas fa-edit'></i>" +

   "</a></th>"+
   "<th width='25%' scope='col'>Key Information</th>"+
   "<th scope='col'>Detail</th>"+
   "</tr></thead> </table>"+

   "<div>";


 }
 else{
results=


"<iframe name='votar' style='display:none;'></iframe>"+
"<br>"+
"<br>"+
"<div id='source-html'>"+"<div class='table mybody table-responsive-sm table-responsive-md table-responsive-xs table-responsive-xl''>"+

"<table  id='productTable'	class='table table-bordered table-condensed table-scroll w-auto '>"

		+"<thead>"

    +"<tr><th colspan='12'><h1>"+name+"</h1></th></tr>"
			  +"<tr>"
				+"<th class='topicid'>"+

        "<a role='button' class='btn btn-info btn-lg'  href='container.html'"
         +
        "data-id='mybutton'>" +
        "<i class='fas fa-edit'></i>" +

        "</a></th>"
				+"<th class='th-sm' scope='col'>Reference (and clause)</th>"
				+"<th class='th-sm' scope='col'>Sub topic</th>"
				+"<th class ='th-lg' scope='col'>Due diligence focus (hide this column)</th>"
				+"<th class ='th-sm' scope='col'>Observations, issues and specific risk description</th>"
				+"<th class='th-lg' scope='col'>"
				  +"Severity<br>of<br>impact"
				  +"<br>score</th>"
				+"<th class='th-lg'scope='col'>"
				  +"Severity<br>of<br>impact"
				  +"<br>description</th>"
				+"<th class='th-sm'scope='col'>Probability<br>of<br>occurrence<br>"
				  +"score</th>"
				+"<th  class='th-sm' scope='col'>Probability<br>of<br>occurrence<br>"+
				  "description</th>"
				+"<th class='th-sm' scope='col'>Risk<br>score</th>"
				+"<th  class='th-sm' scope='col'>Risk</th>"
				+"<th class='th-lg' scope='col'>Suggestion </th>"
			  +"</tr>"
			+"</thead>"
		  +"</table>"
			+"</div>";  };
return results;
}


function formInfo(){
var results;

if(localStorage.getItem("nameid")=="Introduction"){



results="<form  target='votar'   class='sucess-none was-validated  ' id='newContact' >"

  	  +"<div class='modal' id='myModal'>"

    +  "<div class='modal-dialog' role='document'>"+
      "<div class='modal-content'>"

      +"<div class='modal-header'>"+
    "<h5 class='modal-title' id='exampleModalLabel'>Project Risk</h5>"
        +"<button type='button' id='closebutton' data-dismiss='modal' aria-label='Close'>"
      +"<span aria-hidden='true'>&times;</span> </button>"

      +"</div>"


      	+"<div class='modal-body'>"
  			  +"<div class='row'>"
  				+"<div class='col-sm-12 col-md-12 col-lg-12'>"

  					  +"<div class='form-row '>"
  						+"<label for='keyinfo'>"
  						 +"Key Information"+
  					"</label>"
  						+"<input type='text'class='form-control'	  value='Site Data'id='keyinfo' />"
  					  +"</div>"

  					  +"<div class='form-row'>"
  						+"<label for='detail'>"+
  						  "Details"+
  					"</label>"
              +"<textarea id='detail' class='form-control' "
  						+"onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'>"
  						+"</textarea>"
  					  +"</div>"

  +"</div>"
  +"</div>"
  +"</div>"
  					+"<div class='modal-footer'>"
  					  +"<div class='row'>"
  						+"<div class='col-xs-12'>"
  						  +"<div style='position: absolute; left: -5000px;' aria-hidden='true'>"
  							+"<input type='text' name='b_96d9e6e519173af7bdbdab9d_23138bd741' tabindex='-1' value=''>"

  						  +"</div>"
  						  +"<button   aria-hidden='true'type='submit' class='btn btn-primary'  name='subscribe' id='submitContact'>Submit</button>"
  						+"</div>"



  +"</div>"
  +"</div>"
  					+"</div>"
  				  +"</div>"
  				+"</div>"
  			  +"</div>"
  			+"</div>"+
  "</form>";

}

else  {



results=	"<form  target='votar'   class='sucess-none was-validated  ' id='newContact' >"

	  +"<div class='modal' id='myModal'>"

  +  "<div class='modal-dialog' role='document'>"+
    "<div class='modal-content'>"

    +"<div class='modal-header'>"+
  "<h5 class='modal-title' id='exampleModalLabel'>Project Risk</h5>"
      +"<button type='button' id='closebutton' data-dismiss='modal' aria-label='Close'>"
    +"<span aria-hidden='true'>&times;</span> </button>"

    +"</div>"


    	+"<div class='modal-body'>"
			  +"<div class='row'>"
				+"<div class='col-sm-12 col-md-12 col-lg-12'>"

					  +"<div class='form-row '>"
						+"<label for='heading'>"
						 +"Heading"+
					"</label>"
						+"<input type='text'class='form-control'	  value='Site Data'id='heading' />"
					  +"</div>"

					  +"<div class='form-row'>"
						+"<label for='subtopic'>"+
						  "Sub Topic"+
						"</label>"
						+"<input type='text' class='form-control'  value='Extending Bootstrap with CSS, JavaScript and jQuery' id='subtopic' />"
					  +"</div>"
					  +"<div class='form-row'>"
						+"<label for='duedelligence'>"+
						  "Due Delligence"
				  	+"</label>"
						+"<textarea id='duedelligence' class='form-control' onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'></textarea>"
					  +"</div>"
					  +"<div class='form-row'>"
						+"<label for='Observation'>"+
						  "Observation"+
					"</label>"
            +"<textarea id='observation' class='form-control' "
						+"onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'>"
						+"</textarea>"
					  +"</div>"
					  +"<div class='form-row'>"
						+"<label for='severityscore'>"+
						  "Serverity of impact score </label>"
						+"<select  id ='severityscore' class='form-control'  >"
               +"<option value='Null'> NULL</option>"
						  +"<option value='Negligible'>NEGLIGIBLE</option>"
						  +"<option   value ='Low'>LOW</option>"
						  +"<option value='Medium'>MEDIUM</option>"
						  +"<option  value='High'>HIGH</option>"+
					"</select>"

					  +"</div>"
					  +"<div class='form-row'>"
						+"<label for='severitydescription'>"
						  +"Severity of impact description"
					+"</label>"
            +"<textarea id='severitydescription' class='form-control' onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'></textarea>"


					  +"</div>"
					  +"<div class='form-row'>"
						+"<label for='probabilityscore'> Probability of accurence score</label>"
						+"<select  id ='probabilityscore' class='form-control'  >"
              +"<option value='Null'> NULL</option>"
             +"<option value='Negligible'>NEGLIGIBLE</option>"
             +"<option   value ='Low'>LOW</option>"
             +"<option value='Medium'> MEDIUM</option>"
             +"<option  value='High'>HIGH</option>"
						+"</select>"

					  +"</div>"
					  +"<div class='form-row'>"
						+"<label for='probabilitydescription'>"+
						  "Probability of accurence description	</label>"
            +"<textarea id='probabilitydescription' class='form-control' onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'></textarea>"

						+"</div>"
					  +"<div class='form-row'>"
						+"<label for='suggestion'>"+
						  "Suggestion	</label>"
						+"<input type='text'class='form-control'  value='6/11/2015'		  id='suggestion' />"
					  +"</div>"
+"</div>"
+"</div>"
+"</div>"
					+"<div class='modal-footer'>"
					  +"<div class='row'>"
						+"<div class='col-xs-12'>"
						  +"<div style='position: absolute; left: -5000px;' aria-hidden='true'>"
							+"<input type='text' name='b_96d9e6e519173af7bdbdab9d_23138bd741' tabindex='-1' value=''>"

						  +"</div>"
						  +"<button   aria-hidden='true'type='submit' class='btn btn-primary'  name='subscribe' id='submitContact'>Submit</button>"
						+"</div>"



+"</div>"
+"</div>"
					+"</div>"
				  +"</div>"
				+"</div>"
			  +"</div>"
			+"</div>"+
"</form>";
}
	return  results;}

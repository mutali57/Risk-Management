

function navigationbar(){






var results="<nav class='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0'>"
  +"<a class='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>Company name</a>"+
  "<input class='form-control form-control-dark w-100' type='text' placeholder='Search' aria-label='Search'>"
  +"<ul class='navbar-nav px-3'>"+
  "<li class='nav-item text-nowrap'>"
  +"<button class ='btn btn-primary' onclick='logout();'>"+
  "Signout"+
    " </button>"
  +  "</li>"+
  "</ul>"+
"</nav>";

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
	;
	return results;
}









	function createTable(name){
    var results="";

 if (name=='Introduction'){

results="</div>"+"<iframe name='votar' style='display:none';></iframe>"+
   "<div class='container-fluid'>"+
   "<div class='row'>"+
   "<div class='col-sm-6'>"+
   "<h2>"+name+"</h2>"+
   "</div>"+
   "</div>"+
   "<div id='source-html'>"+
   "<div class='table-scroll'>"+
   "<table  id='productTable'"+
   "class='table table-bordered table-condensed table-scroll table-responsive'>"+
   "<thead >"
   +
   "<tr><th></th>"+
   "<th scope='col'>Key Information</th>"+
   "<th scope='col'>Detail</th>"+
   "</tr></thead></table>"+
   "</div></div>"+
   "</div>"+
   "<div>";


 }
 else{
results=

"<iframe name='votar' style='display:none;'></iframe>"+
"<div class='container-fluid my-3 p-3 bg-white rounded box-shadow'>"+
"<div class='row'>"+
"<div class='col-sm-6'>"+
"<h2>"+name+"</h2>"+
"</div>"+
 "</div>"
+"<div id='source-html'>"+"<div lass='table-scroll'>"+
"<table  id='productTable'	class='table table-bordered table-condensed table-scroll table-responsive'>"

		+"<thead >"
			  +"<tr>"
				+"<th class='topicid'>"+

        "<a role='button' class='btn btn-info btn-lg'  href='container.html'"
         +
        "data-id='mybutton'>" +
        "<span class='glyphicon glyphicon-edit' />" +


        "</button></th>"
				+"<th class='ref' scope='col'>Reference (and clause)</th>"
				+"<th class='sub' scope='col'>Sub topic</th>"
				+"<th class ='dil' scope='col'>Due diligence focus (hide this column)</th>"
				+"<th class ='obs' scope='col'>Observations, issues and specific risk description</th>"
				+"<th class='severityscr' scope='col'>"
				  +"<div>Severity of impact</div>"
				  +"<div>score</div></th>"
				+"<th scope='col'>"
				  +"<div>Severity</div><div>of</div><div>impact</div>"
				  +"<div>description</div></th>"
				+"<th scope='col'><div>Probability of occurrence</div>"
				  +"<div>score</div></th>"
				+"<th scope='col'><div>Probability of occurrence</div>"+
				  "<div>description</div></th>"
				+"<th scope='col'>Risk score</th>"
				+"<th scope='col'>Risk</th>"
				+"<th scope='col'>Suggestion </th>"
			  +"</tr>"
			+"</thead>"
		  +"</table>"
			+"</div>"+
			"</div>"+
			"</div>";  };
return results;
}


function formInfo(){

var results=	"<form  target='votar'   class='sucess-none was-validated  ' id='newContact' >"
	  +"<div class='modal fade modalPanel' id='myModal' role='dialog'>"
			+"<div class='modal-body'>"
			  +"<div class='row'>"
				+"<div class='col-sm-6'>"
				  +"<div class='panel panel-primary'>"

					+"<div class='panel-heading  modal-header'>"
					  +"<button type='button' id='closebutton' data-dismiss='modal'	class='btn btn-primary '>"
					+"	close  </button>"
					  +"Product Information"
					+"</div>"

					+"<div class='panel-body'>"
					  +"<div class='form-group'>"
						+"<label for='heading'>"
						 +"Heading"+
					"</label>"
						+"<input type='text'class='form-control'	  value='Site Data'id='heading' />"
					  +"</div>"

					  +"<div class='form-group'>"
						+"<label for='subtopic'>"+
						  "Sub Topic"+
						"</label>"
						+"<input type='text' class='form-control'  value='Extending Bootstrap with CSS, JavaScript and jQuery' id='subtopic' />"
					  +"</div>"
					  +"<div class='form-group'>"
						+"<label for='duedelligence'>"+
						  "Due Delligence"
				  	+"</label>"
						+"<textarea id='duedelligence' class='form-control' onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'></textarea>"
					  +"</div>"
					  +"<div class='form-group'>"
						+"<label for='Observation'>"+
						  "Observation"+
					"</label>"
            +"<textarea id='observation' class='form-control' "
						+"onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'>"
						+"</textarea>"
					  +"</div>"
					  +"<div class='form-group'>"
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
					  +"<div class='form-group'>"
						+"<label for='severitydescription'>"
						  +"Severity of impact description"
					+"</label>"
            +"<textarea id='severitydescription' class='form-control' onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'></textarea>"


					  +"</div>"
					  +"<div class='form-group'>"
						+"<label for='probabilityscore'> Probability of accurence score</label>"
						+"<select  id ='probabilityscore' class='form-control'  >"
              +"<option value='Null'> NULL</option>"
             +"<option value='Negligible'>NEGLIGIBLE</option>"
             +"<option   value ='Low'>LOW</option>"
             +"<option value='Medium'> MEDIUM</option>"
             +"<option  value='High'>HIGH</option>"
						+"</select>"

					  +"</div>"
					  +"<div class='form-group'>"
						+"<label for='probabilitydescription'>"+
						  "Probability of accurence description	</label>"
            +"<textarea id='probabilitydescription' class='form-control' onkeyup='new do_resize(this);' cols='20' rows='1' name='description_name'></textarea>"

						+"</div>"
					  +"<div class='form-group'>"
						+"<label for='suggestion'>"+
						  "Suggestion	</label>"
						+"<input type='text'class='form-control'  value='6/11/2015'		  id='suggestion' />"
					  +"</div>"

					+"</div>"

					+"<div class='panel-footer modal-footer'>"
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
			+"</div>"+
"</form>";
	return  results;}

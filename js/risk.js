
function risk(score) {

	var  result ="";
	var str= ["N","L","L","M","M","O","H","O","O","C"];
    ;

	if (str[score] == "H")
	{
		result = "H";

	}
	else if (str[score] == "M")
	{
		result = "M";

	}
	else if (str[score] == "L")
	{
		result = "L";

	}
	else if (str[score] == "C")
	{
		result = "C";

	}

	else
	{
		result = "N";

	}

	return result;
}

function riskScore(){


	var serverityRisk;


	if (valList[4] == "Low")
	{
		serverityRisk = 1;

	}
	else if (valList[4] == "Medium")
	{

		serverityRisk = 2;

	}
	else if (valList[4] == "High")
	{

		serverityRisk = 3;
	}
	else if (valList[4] == "Negligible")
	{
		serverityRisk = 0;

	}
	else {
		serverityRisk=null;
	}

	var ProbRisk;

	if (valList[6] == "Low")
	{
		ProbRisk = 1;

	}
	else if (valList[6] == "Medium")
	{

		ProbRisk = 2;

	}
	else if (valList[6] == "High")
	{

		ProbRisk = 3;

	}
	else if (valList[6] == "Negligible")
	{
		ProbRisk = 0;


	}
	else {
		ProbRisk=null;
	}

	 return ProbRisk * serverityRisk;
}

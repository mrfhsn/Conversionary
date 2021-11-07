// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="n")
	{	var n= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "n")
		{
			document.getElementById("result").value = n;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = n*100000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = n*0.224808943;
		}
		else if(oprt === "pl")
		{
			document.getElementById("result").value = n*7.2330138510;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = n*0.000101972;
		}
		
	}
	
	if(slct==="d")
	{	var d= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "n")
		{
			document.getElementById("result").value = d/100000;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (d/100000)*100000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (d/100000)*0.224808943;
		}
		else if(oprt === "pl")
		{
			document.getElementById("result").value = (d/100000)*7.2330138510;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (d/100000)*0.000101972;
		}
		
	}
	
	if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "n")
		{
			document.getElementById("result").value = p/0.224808943;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (p/0.224808943)*100000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (p/0.224808943)*0.224808943;
		}
		else if(oprt === "pl")
		{
			document.getElementById("result").value = (p/0.224808943)*7.2330138510;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (p/0.224808943)*0.000101972;
		}
		
	}
	
	if(slct==="pl")
	{	var pl= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "n")
		{
			document.getElementById("result").value = pl/7.2330138510;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (pl/7.2330138510)*100000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (pl/7.2330138510)*0.224808943;
		}
		else if(oprt === "pl")
		{
			document.getElementById("result").value = (pl/7.2330138510)*7.2330138510;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (pl/7.2330138510)*0.000101972;
		}
		
	}
	
	if(slct==="t")
	{	var t= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "n")
		{
			document.getElementById("result").value = t/0.000101972;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = ( t/0.000101972)*100000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = ( t/0.000101972)*0.224808943;
		}
		else if(oprt === "pl")
		{
			document.getElementById("result").value = ( t/0.000101972)*7.2330138510;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = ( t/0.000101972)*0.000101972;
		}
		
	}
}
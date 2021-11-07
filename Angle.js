// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="d")
	{	var d= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "d")
		{
			document.getElementById("result").value = d;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = d*(3.141592/180);
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = d/0.9;
		}
		
	}
	
	if(slct==="r")
	{	var r= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "d")
		{
			document.getElementById("result").value = r*(180/3.141592);
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = r;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (r*(180/3.141592))*1.11111;
		}
		
	}
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "d")
		{
			document.getElementById("result").value = g*0.9;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (g*0.9)*(3.141592/180);
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value =g;
		}
		
	}
}
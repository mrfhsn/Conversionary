// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt ==="g")
		{
			document.getElementById("result").value = g;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = g*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = g*1001.142303;
		}
		
	}
		
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "(m/1000)")
		{
			document.getElementById("result").value = m/10000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = m;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (m/1000)*1001.142303;
		}
	
	}
	
		if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt ==="p")
		{
			document.getElementById("result").value = (p/1001.142303);
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (p/1001.142303)*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = p;
		}
		
	}
}
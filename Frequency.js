// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="h")
	{	var h= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = h;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = h*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = h/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = h/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = h/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = h;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = h/60;
		}
		
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = m/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = m;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (m/1000)/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (m/1000)/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (m/1000)/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = (m/1000);
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (m/1000)/60;
		}
		
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = k*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (k*1000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (k*1000)/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (k*1000)/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (k*1000)/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = (k*1000);
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (k*1000)/60;
		}
		
	}
	
	if(slct==="mh")
	{	var mh= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = mh*1000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (mh*1000000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (mh*1000000)/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (mh*1000000)/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (mh*1000000)/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = (mh*1000000);
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (mh*1000000)/60;
		}
		
	}
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = g*1000000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (g*1000000000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (g*1000000000)/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (g*1000000000)/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (g*1000000000)/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = (g*1000000000);
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (g*1000000000)/60;
		}
		
	}
	
	if(slct==="cm")
	{	var cm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = cm*60;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (cm*60)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (cm*60)/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (cm*60)/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (cm*60)/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = (cm*60);
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (cm*60)/60;
		}
		
	}
	if(slct==="cs")
	{	var cs= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "h")
		{
			document.getElementById("result").value = cs;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = cs*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = cs/1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = cs/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = cs/1000000000;
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = cs;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = cs/60;
		}
		
	}
}
// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="l")
	{	var l= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = l;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = l;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = l*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = l*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = l*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = l*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = l*0.0001;
		}
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = m;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = m;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = m*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = m*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = m*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = m*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = m*0.0001;
		}
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = c/0.0001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (c/0.0001);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c/0.0001)*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (c/0.0001)*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = (c/0.0001)*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (c/0.0001)*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (c/0.0001)*0.0001;
		}
	}
	
	if(slct==="f")
	{	var f= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = f/0.09290304;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (f/0.09290304);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (f/0.09290304)*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (f/0.09290304)*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = (f/0.09290304)*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (f/0.09290304)*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (f/0.09290304)*0.0001;
		}
	}
	
	if(slct==="fl")
	{	var fl= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = fl/0.02322576;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (fl/0.02322576);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (fl/0.02322576)*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (fl/0.02322576)*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = (fl/0.02322576)*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (fl/0.02322576)*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (fl/0.02322576)*0.0001;
		}
	}
	
	if(slct==="n")
	{	var n= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = n/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (n/1000);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (n/1000)*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (n/1000)*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = (n/1000)*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (n/1000)*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (n/1000)*0.0001;
		}
	}
	
	if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "l")
		{
			document.getElementById("result").value = p/0.0001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (p/0.0001);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (p/0.0001)*0.0001;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (p/0.0001)*0.09290304;
		}
		else if(oprt === "fl")
		{
			document.getElementById("result").value = (p/0.0001)*0.02322576;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (p/0.0001)*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (p/0.0001)*0.0001;
		}
	}


}
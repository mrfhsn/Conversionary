// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="b")
	{	var b= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = b;
		}
		else if(oprt === "db")
		{
			document.getElementById("result").value = b*10;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = b*1.151277918;
		}
		
	}
	
	if(slct==="db")
	{	var db= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = db/10;
		}
		else if(oprt === "db")
		{
			document.getElementById("result").value = db;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = db*0.1151277918;
		}
		
	}
	
	if(slct==="n")
	{	var n= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = n/1.151277918;
		}
		else if(oprt === "db")
		{
			document.getElementById("result").value = n/0.1151277918;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = n;
		}
		
	}
}
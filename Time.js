// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="s")
	{	var s= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = s;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = s*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = s*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = s*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = s/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = s/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = s/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = s/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = s/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = s/31557600;
		}
	}
	
	if(slct==="n")
	{	var n= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = n/1000000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (n/1000000000)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (n/1000000000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (n/1000000000)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (n/1000000000)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (n/1000000000)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (n/1000000000)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (n/1000000000)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (n/1000000000)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (n/1000000000)/31557600;
		}
	}
	
	if(slct==="mi")
	{	var mi= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = mi/1000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (mi/1000000)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mi/1000000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (mi/1000000)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (mi/1000000)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (mi/1000000)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (mi/1000000)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (mi/1000000)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (mi/1000000)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (mi/1000000)/31557600;
		}
	}
	
	if(slct==="ml")
	{	var ml= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = ml/1000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (ml/1000)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (ml/1000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (ml/1000)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (ml/1000)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (ml/1000)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (ml/1000)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (ml/1000)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (ml/1000)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (ml/1000)/31557600;
		}
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = m*60;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (m*60)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (m*60)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (m*60)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (m*60)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (m*60)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (m*60)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (m*60)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (m*60)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (m*60)/31557600;
		}
	}
	
	if(slct==="h")
	{	var h= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = h*3600;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (h*3600)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (h*3600)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (h*3600)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (h*3600)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (h*3600)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (h*3600)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (h*3600)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (h*3600)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (h*3600)/31557600;
		}
	}
	
	if(slct==="d")
	{	var d= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = d*86400;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (d*86400)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (d*86400)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (d*86400)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (d*86400)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (d*86400)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (d*86400)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (d*86400)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (d*86400)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (d*86400)/31557600;
		}
	}
	
	if(slct==="w")
	{	var w= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = w*604800;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (w*604800)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (w*604800)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (w*604800)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (w*604800)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (w*604800)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (w*604800)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (w*604800)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (w*604800)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (w*604800)/31557600;
		}
	}
	
	if(slct==="mo")
	{	var mo= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = mo*2592000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (mo*2592000)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mo*2592000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (mo*2592000)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (mo*2592000)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (mo*2592000)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (mo*2592000)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (mo*2592000)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (mo*2592000)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (mo*2592000)/31557600;
		}
	}
	
	if(slct==="y")
	{	var y= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = y*31557600;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (y*31557600)*1000000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (y*31557600)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (y*31557600)*1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (y*31557600)/60;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (y*31557600)/3600;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (y*31557600)/86400;
		}
		else if(oprt === "w")
		{
			document.getElementById("result").value = (y*31557600)/604800;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = (y*31557600)/2592000;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (y*31557600)/31557600;
		}
	}
}
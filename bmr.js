// JavaScript Document
function convert()
{
	var slct = document.getElementById("selectors").value;
	var slct1 = document.getElementById("selectors1").value;
	var slct2 = document.getElementById("selectors2").value;
	var slct3 = document.getElementById("selectors3").value;
	
	if(slct2 ==="k")
	{	var w= parseFloat(document.getElementById("inpt2").value);
				
	}
	if(slct2 ==="p")
	{	var p= parseFloat(document.getElementById("inpt2").value);
	
		var w= p*0.454;				
	}
	
	
	if(slct1 ==="m")
	{	var m= parseFloat(document.getElementById("inpt1").value);
		var h= m*100;	
	}
	if(slct1 ==="c")
	{	var h= parseFloat(document.getElementById("inpt1").value);
			
	}
	if(slct1 ==="i")
	{	var i= parseFloat(document.getElementById("inpt1").value);
		
		var h= i*2.54;
	}
	
	var a = parseFloat(document.getElementById("inpt3").value);
	
	if(slct ==="m")
	{
		var ml = (66 + (13.7*w) + (5*h) )- (6.8*a) ;
		
			if(slct3 ==="1")
			{
				document.getElementById("result").value = ml*1.2;
			}
			if(slct3 ==="2")
			{
				document.getElementById("result").value = ml*1.375;
			}
			if(slct3 ==="3")
			{
				document.getElementById("result").value = ml*1.55;
			}
			if(slct3 ==="4")
			{
				document.getElementById("result").value = ml*1.725;
			}
			if(slct3 ==="5")
			{
				document.getElementById("result").value = ml*1.9;
			}
	}
	
	if(slct ==="f")
	{
		var fl = (655 + (9.6*w) + (1.8*h) )- (4.7*a) ;
		
		if(slct3 ==="1")
		{
			document.getElementById("result").value = fl*1.2;
		}
		if(slct3 ==="2")
		{
			document.getElementById("result").value = fl*1.375;
		}
		if(slct3 ==="3")
		{
			document.getElementById("result").value = fl*1.55;
		}
		if(slct3 ==="4")
		{
			document.getElementById("result").value = fl*1.725;
		}
		if(slct3 ==="5")
		{
			document.getElementById("result").value = fl*1.9;
		}
	
	}
}
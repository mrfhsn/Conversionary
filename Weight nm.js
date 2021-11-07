// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="kg")
	{	var kg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = kg;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = kg*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = kg*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = kg*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = kg*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = kg/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = kg*0.1763698136981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = kg*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = kg*602213665200000000000000000;
		}
		
	}
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = g/1000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (g/1000)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (g/1000)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (g/1000)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (g/1000)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (g/1000)/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (g/1000)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (g/1000)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (g/1000)*602213665200000000000000000;
		}
		
	}
	
	if(slct==="mg")
	{	var mg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = mg/1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (mg/1000000)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (mg/1000000)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (mg/1000000)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (mg/1000000)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (mg/1000000)/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (mg/1000000)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (mg/1000000)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (mg/1000000)*602213665200000000000000000;
		}
		
	}
	
	if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = p*0.454;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (p*0.454)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (p*0.454)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (p*0.454)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (p*0.454)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (p*0.454)/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (p*0.454)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (p*0.454)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (p*0.454)*602213665200000000000000000;
		}
		
	}
	
	if(slct==="o")
	{	var o= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = o*0.028;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (o*0.028)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (o*0.028)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (o*0.028)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (o*0.028)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (o*0.028)/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (o*0.028)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (o*0.028)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (o*0.028)*602213665200000000000000000;
		}
		
	}
	
	if(slct==="t")
	{	var t= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = t*1000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (t*1000)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (t*1000)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (t*1000)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (t*1000)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = t;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (t*1000)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (t*1000)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (t*1000)*602213665200000000000000000;
		}
		
	}
	
	if(slct==="s")
	{	var s= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = s*5.067;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (s*5.067)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (s*5.067)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (s*5.067)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (s*5.067)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (s*5.067)/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (s*5.067)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (s*5.067)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (s*5.067)*602213665200000000000000000;
		}
		
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = c*0.0002;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (c*0.0002)*1000;
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (c*0.0002)*1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (c*0.0002)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (c*0.0002)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (c*0.0002)/1000;
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (c*0.0002)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c*0.0002)*5000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (c*0.0002)*602213665200000000000000000;
		}
		
	}
	if(slct==="a")
	{	var a= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "kg")
		{
			document.getElementById("result").value = a/602213665200000000000000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (a/602213665200000000000000);
		}
		else if(oprt === "mg")
		{
			document.getElementById("result").value = (a/602213665200000000000);
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (a/602213665200000000000000000)*2.204622622;
		}
		else if(oprt === "o")
		{
			document.getElementById("result").value = (a/602213665200000000000000000)*35.27396195;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (a/602213665200000000000000000000);
		}
		else if(oprt === "s")
		{
			document.getElementById("result").value = (a/602213665200000000000000000)*0.17636981;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (a/602213665200000000000000)*5;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = a;
		}
		
	}
}

// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="mg")
	{	var mg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = mg;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = mg/10;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value =mg/100;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = mg/1000;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = mg/10000;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = mg/100000;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = mg/1000000;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = mg*1000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = mg/100000000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = mg/1000000000;
		}
	}
	
	if(slct==="cg")
	{	var cg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = cg*10;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = cg;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = cg/10;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = cg/100;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = cg/1000;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = cg/10000;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = cg/100000;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = cg*10000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = cg/10000000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = cg/100000000;
		}
	}
	
	if(slct==="dg")
	{	var dg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = dg*100;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = dg*10;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = dg;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = dg/10;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = dg/100;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = dg/1000;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = dg/10000;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = dg*100000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = dg/1000000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = dg/10000000;
		}
	}
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = g*1000;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = g*100;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = g*10;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = g;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = g/10;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = g/100;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = g/1000;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = g*1000000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = g/100000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = g/1000000;
		}
	}
	
	if(slct==="dcg")
	{	var dcg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = dcg*10000;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = dcg*1000;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = dcg*100;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = dcg*10;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = dcg;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = dcg/10;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = dcg/100;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = dcg*10000000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = dcg/10000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = dcg/100000;
		}
	}
	
	if(slct==="hg")
	{	var hg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = hg*100000;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = hg*10000;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = hg*1000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = hg*100;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = hg*10;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = hg;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = hg/10;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = hg*100000000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = hg/1000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = hg/10000;
		}
	}
	
	if(slct==="kg")
	{	var kg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = kg*1000000;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = kg*100000;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = kg*10000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = kg/1000;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = kg/100;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = kg/10;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = kg;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = kg*1000000000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = kg/100;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = kg/1000;
		}
	}
	
	if(slct==="q")
	{	var q= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = q*100000000;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = q*10000000;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = q*1000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = q/100000;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = q/10000;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = q/1000;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = q/100;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = q*100000000000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = q;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = q/10;
		}
	}
	
	if(slct==="t")
	{	var t= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = t*1000000000;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = t*100000000;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = t*10000000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = t/1000000;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = t/100000;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = t/10000;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = t/1000;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = t*1000000000000;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = t*10;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = t;
		}
	}
	
	if(slct==="mcg")
	{	var mcg= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "mg")
		{
			document.getElementById("result").value = mcg/10;
		}
		else if(oprt === "cg")
		{
			document.getElementById("result").value = mcg/100;
		}
		else if(oprt === "dg")
		{
			document.getElementById("result").value = mcg/1000;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = mcg/10000;
		}
		else if(oprt === "dcg")
		{
			document.getElementById("result").value = mcg/100000;
		}
		else if(oprt === "hg")
		{
			document.getElementById("result").value = mcg/1000000;
		}
		else if(oprt === "kg")
		{
			document.getElementById("result").value = mcg/10000000;
		}
		else if(oprt === "mcg")
		{
			document.getElementById("result").value = mcg;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = mcg/1000000000;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = cg/10000000000;
		}
	}
}
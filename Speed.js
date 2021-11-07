// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="ms")
	{	var ms= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = ms;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = ms*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = ms*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = ms/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = ms*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = ms*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = ms*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = ms*1.493844492;
		}
		
	}
	
	if(slct==="mh")
	{	var mh= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = mh/3600;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (mh/3600)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (mh/3600)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (mh/3600)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (mh/3600)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (mh/3600)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mh/3600)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (mh/3600)*1.493844492;
		}
		
	}
	
	if(slct==="kh")
	{	var kh= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = kh/3.6;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (kh/3.6)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (kh/3.6)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (kh/3.6)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (kh/3.6)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (kh/3.6)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (kh/3.6)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (kh/3.6)*1.493844492;
		}
		
	}
	
	if(slct==="ks")
	{	var ks= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = ks*1000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (ks*1000)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (ks*1000)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (ks*1000)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (ks*1000)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (ks*1000)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (ks*1000)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ks*1000)*1.493844492;
		}
		
	}
	
	if(slct==="fh")
	{	var fh= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = fh/11811.023622;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (fh/11811.023622)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (fh/11811.023622)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (fh/11811.023622)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (fh/11811.023622)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (fh/11811.023622)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (fh/11811.023622)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (fh/11811.023622)*1.493844492;
		}
		
	}
	
	if(slct==="fs")
	{	var fs= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = fs/3.280839895;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (fs/3.280839895)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (fs/3.280839895)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (fs/3.280839895)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (fs/3.280839895)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (fs/3.280839895)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (fs/3.280839895)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (fs/3.280839895)*1.493844492;
		}
		
	}
	
	if(slct==="mi")
	{	var mi= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = mi/2.236936192;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (mi/2.236936192)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (mi/2.236936192)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (mi/2.236936192)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (mi/2.236936192)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (mi/2.236936192)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mi/2.236936192)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (mi/2.236936192)*1.493844492;
		}
		
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "ms")
		{
			document.getElementById("result").value = k/1.493844492;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (k/1.493844492)*3600;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (k/1.493844492)*3.6;
		}
		else if(oprt === "ks")
		{
			document.getElementById("result").value = (k/1.493844492)/1000;
		}
		else if(oprt === "fh")
		{
			document.getElementById("result").value = (k/1.493844492)*11811.023622;
		}
		else if(oprt === "fs")
		{
			document.getElementById("result").value = (k/1.493844492)*3.280839895;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (k/1.493844492)*2.236936192;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (k/1.493844492)*1.493844492;
		}
		
	}
}
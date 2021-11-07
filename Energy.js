// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="j")
	{	var j= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = j;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = j/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = j/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = j*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = j*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = j*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = j/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = j/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = j*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = j/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = j/2684519.537;
		}
				
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = k*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (k*1000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (k*1000)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (k*1000)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (k*1000)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (k*1000)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (k*1000)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (k*1000)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (k*1000)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (k*1000)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (k*1000)/2684519.537;
		}
				
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = m*1000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (m*1000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (m*1000000)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (m*1000000)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (m*1000000)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (m*1000000)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (m*1000000)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (m*1000000)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (m*1000000)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (m*1000000)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (m*1000000)/2684519.537;
		}
				
	}
	
	if(slct==="e")
	{	var e= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = e/6241506363000000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (e/6241506363000000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (e/6241506363000000000)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = e;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (e/6241506363000000000)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (e/6241506363000000000)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (e/6241506363000000000)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (e/6241506363000000000)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (e/6241506363000000000)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (e/6241506363000000000)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (e/6241506363000000000)/2684519.537;
		}
				
	}

	if(slct==="me")
	{	var me= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = me/6241506363000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (me/6241506363000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (me/6241506363000)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (me/6241506363000)/ 6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (me/6241506363000)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (me/6241506363000)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (me/6241506363000)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (me/6241506363000)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (me/6241506363000)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (me/6241506363000)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (me/6241506363000)/2684519.537;
		}
				
	}
	
	if(slct==="ge")
	{	var ge= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = ge/6241506363;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ge/6241506363)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (ge/6241506363)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (ge/6241506363)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (ge/6241506363)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (ge/6241506363)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (ge/6241506363)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (ge/6241506363)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (ge/6241506363)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (ge/6241506363)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (ge/6241506363)/2684519.537;
		}
				
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = c*4.18;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (c*4.18)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (c*4.18)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (c*4.18)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (c*4.18)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (c*4.18)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c*4.18)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (c*4.18)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (c*4.18)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (c*4.18)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (c*4.18)/2684519.537;
		}
				
	}

	if(slct==="er")
	{	var er= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = er/10000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (er/10000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (er/10000000)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (er/10000000)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (er/10000000)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (er/10000000)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (er/10000000)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (er/10000000)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (er/10000000)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (er/10000000)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (er/10000000)/2684519.537;
		}
				
	}
	
	if(slct==="kh")
	{	var kh= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = kh*3600000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (kh*3600000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (kh*3600000)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (kh*3600000)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (kh*3600000)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (kh*3600000)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (kh*3600000)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (kh*3600000)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (kh*3600000)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (kh*3600000)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (kh*3600000)/2684519.537;
		}
				
	}
	
	if(slct==="h")
	{	var h= parseFloat(document.getElementById("inpt").value);
	
	    if(oprt === "j")
		{
			document.getElementById("result").value = h*2684519.537;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (h*2684519.537)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (h*2684519.537)/1000000;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (h*2684519.537)*6241506363000000000;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = (h*2684519.537)*6241506363000;
		}
		else if(oprt === "ge")
		{
			document.getElementById("result").value = (h*2684519.537)*6241506363;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (h*2684519.537)/4.18;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (h*2684519.537)/0.00418;
		}
		else if(oprt === "er")
		{
			document.getElementById("result").value = (h*2684519.537)*10000000;
		}
		else if(oprt === "kh")
		{
			document.getElementById("result").value = (h*2684519.537)/3600000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (h*2684519.537)/2684519.537;
		}
				
	}


}
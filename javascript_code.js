function call()
{
	var k=document.getElementById("input").value;
    document.getElementById("res").value=eval(k);

} 
function val(n){
	var k=document.getElementById("input").value;
	if(n=="del")
{ 
 document.getElementById("input").value = k.substr(0 , k.length-1);
}

else
{document.getElementById("input").value+=n;}

}


function radioButtons()
{
 var result=document.getElementById("res").checked;
 if(result==true)
 {
    document.getElementById("out").innerHTML="correct" ;
    document.getElementById("out").style.color="green";
    document.getElementById("out").style.textShadow="opx 0px 5px grren";
}
else
{
    document.getElementById("out").innerHTML="in-correct" ;
    document.getElementById("out").style.color="red";
    document.getElementById("out").style.textShadow="opx 0px 5px red";  
}
}
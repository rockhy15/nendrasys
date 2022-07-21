

function getName()
{
    var name=document.getElementById("name").value;
    document.getElementById("output").innerHTML="the name entered is:"+name;

}

function getNumber()
{
var number=document.getElementById("moblie").value;
document.getElementById("output1").innerHTML="the number is entered is:"+number;

}
function checkingEvenOrOdd()
{
var number =document.getElementById("num").value;
if(number%2==0)
{
    document.getElementById("res").innerHTML="the number is even";
    document.getElementById("res").style.color="green";

}
else
{
    document.getElementById("res").innerHTML="the number is odd";
    document.getElementById("res").style.color="blue";
}
}
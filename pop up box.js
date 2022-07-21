function alteringUser(){
    alert("the web page contains application form");

}
alteringUser();

function verifyUsername()
{
    var username=document.getElementById("user").Value;
    var username=document.getElementById("user").Value;

 if(username=="")
 {
    alert("enter the username");
 }
 }
 function verifyBoth()
 {
    var username=document.getElementById("user").Value;
    var password=document.getElementById("pwd").Value;
    if(username==""&& password=="")
    {
        alert("before clicking register,first go and fill thhe form");
    }
    }
    function otp()
    {
        var mobile=document.getElementById("mob").value;
        var mobile=mobile.length;
        if(mobile==10)
        {
            var status=confirm("otp wil be generated soon");
            if(status==true)
            {
                document.write("otp generated successfully");

            }
        
        else
        {
            document.write("otp not generated");

        }
        }
        else
        {
        alert("invalid moblile number");
        }
        }
    
 


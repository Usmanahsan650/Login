document.addEventListener("DOMContentLoaded",function(event){
   $('.signup').hide();
   $('.welcome').hide();
document.querySelector("#submit").addEventListener("click",function(event){
    let xhttp= new XMLHttpRequest();
    let obj={};
    obj.id=document.querySelector("#id").value;
    obj.pass=document.querySelector("#pass").value;
    xhttp.onreadystatechange=function(){
        console.log("here");
        if(this.readyState==4 && this.status==200)
        {
                let res=this.response;
                console.log(res);
                if(res == "success")
                {
                    $('.login').hide();
                    $('.welcome').show();
                    //document.querySelector('h1').textContent='Logged in';
                }
        }
        };
        xhttp.open("POST","my.php",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("x="+JSON.stringify(obj));
    

})
})
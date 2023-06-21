var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

// num2.addEventListener("focusin",function(){
//     if(num1.value==``)
//     {
//       var para1=document.getElementById("p1")
//       para1.style.display="block"
      
//     }
// })

function add(){
    a=empty();
 if(a==true){
    var res = Number(num1.value)+Number(num2.value)

    var div2 = document.getElementById("main_div2")
    div2.style.display="block"
    // var p1 = document.createElement("p")
    // p1.textContent=`the result is ${res}`
    // var div3 = document.getElementById("re-btn")
    // div3.append(p1)

    var p1 = document.getElementById("r")
    p1.textContent=`The result is:: ${res}` 
}
}

function sub(){
    a=empty();
 if(a==true){
    var res = Number(num1.value)-Number(num2.value)

    var div2 = document.getElementById("main_div2")
    div2.style.display="block"
    // var p1 = document.createElement("p")
    // p1.textContent=`the result is ${res}`
    // var div3 = document.getElementById("re-btn")
    // div3.append(p1)

    var p1 = document.getElementById("r")
    p1.textContent=`The result is::${res}` 
}
}

function mul(){
    a=empty();
 if(a==true){
    var res = Number(num1.value)*Number(num2.value)

    var div2 = document.getElementById("main_div2")
    div2.style.display="block"
    // var p1 = document.createElement("p")
    // p1.textContent=`the result is ${res}`
    // var div3 = document.getElementById("re-btn")
    // div3.append(p1)

    var p1 = document.getElementById("r")
    p1.textContent=`The result is::${res}` 
}
}
function div(){
    a=empty();
 if(a==true){
    var res = Number(num1.value)/Number(num2.value)

    var div2 = document.getElementById("main_div2")
    div2.style.display="block"
    // var p1 = document.createElement("p")
    // p1.textContent=`the result is ${res}`
    // var div3 = document.getElementById("re-btn")
    // div3.append(p1)

    var p1 = document.getElementById("r")
    p1.textContent=`The result is:: ${res}` 
}
}

function btn(){

    num1.value=``
    num2.value=``

    var div2 = document.getElementById("main_div2")
    div2.style.display="none"
}

function empty()
{
    var flag = true;
    if(num1.value==``)
    {
      var para1=document.getElementById("p1")
      para1.style.display="block"
      flag=false
    }
    
    if(num2.value==``)
    {
      var para2=document.getElementById("p2")
      para2.style.display="block"
      flag=false;
    }
    
    return flag;
}
var hello=document.getElementById("hello");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var submit=document.getElementById("submit");
var grabscore=document.getElementById("grabscore");
var showscore=document.getElementById("showscore");
var arr=[{q:"Q1. How many oops concepts are there", op1:"6",op2:"3",op3:"4",op4:"1",ans:"4"},
{q:"Q2. Which of these keywords is used to make a class?", op1:"class",op2:"struct",op3:"int",op4:"float",ans:"class"},
{q:"Q3. Which of these operators is used to allocate memory for an object?", op1:"malloc",op2:"alloc",op3:"new",op4:"none",ans:"new"},
{q:"Q4. Among the keywords below, which one is not a statement?", op1:"debugger",op2:"with",op3:"if",op4:"usestrict",ans:"usestrict"},
{q:"Q5. What is = operator called", op1:"assignment",op2:"comparision",op3:"arithmetic",op4:"none",ans:"assignment"}];

function display(){
    var input=document.getElementById("input").value;
    hello.innerHTML=arr[0].q;
    btn1.innerHTML=arr[0].op1;
    btn2.innerHTML=arr[0].op2;
    btn3.innerHTML=arr[0].op3;
    btn4.innerHTML=arr[0].op4;
}

i=0;
score=0;
submit.addEventListener("click",function(){
    var input=document.getElementById("input");
        if(i<arr.length-1){
        hello.innerHTML=arr[i+1].q;
        btn1.innerHTML=arr[i+1].op1;
        btn2.innerHTML=arr[i+1].op2;
        btn3.innerHTML=arr[i+1].op3;
        btn4.innerHTML=arr[i+1].op4;
        if(arr[i].ans===input.value){
            score=score+1;
            console.log(score)
            i=i+1;
            input.value="";
        }
        else{
            console.log("hello")
            i=i+1;
        }
}
else{
    if(arr[i].ans===input.value){
        score=score+1;
        console.log(score)
        i=i+1;
    }
    grabscore.innerHTML="Score is : ";
    showscore.innerHTML=score;
}})
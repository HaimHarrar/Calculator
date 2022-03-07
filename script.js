let result=0
const resDisplay=document.getElementById("res")
const opDisplay=document.getElementById("op")
const equDisplay=document.getElementById("equ")

let dotFlag=true
let FlagOp=true
let equalOp=true
let flagOpAfterEqual=true
let num
const setResult=()=>{
    if(!FlagOp&&resDisplay.innerHTML!=="-"){
        resDisplay.innerHTML="";
        FlagOp=true;
    }
    if(resDisplay.innerHTML==="-"){
        FlagOp=true;
    }
    if(!equalOp&&event.target.innerHTML === "."){
        resDisplay.innerHTML=result
        result=0
    }
    if(event.target.innerHTML === "." && dotFlag){
        resDisplay.innerHTML+=event.target.innerHTML;
        dotFlag=false;
    }else if(event.target.innerHTML==="."){

    }else if(!equalOp&&!flagOpAfterEqual){
        resDisplay.innerHTML=Number(resDisplay.innerHTML + event.target.innerHTML);
        equalOp=true;
        result=0
    }else{
        resDisplay.innerHTML=Number(resDisplay.innerHTML + event.target.innerHTML);
        equalOp=true;   
    }
}
//1
// const setOp=()=>{
//     if(dotFlagOp){
//         result=Number(resDisplay.innerHTML);
//         opDisplay.innerHTML= event.target.innerHTML;
//         dotFlag=true;
//         resDisplay.innerHTML="";
//         dotFlagOp=false;
//     }else{
//         result=calc(result,Number(resDisplay.innerHTML),opDisplay.innerHTML);
//         opDisplay.innerHTML= event.target.innerHTML;
//         resDisplay.innerHTML="";
//     }
// }

//2
// const setOp=()=>{
//     if(event.target.innerHTML==="-" && !FlagOp){
//         resDisplay.innerHTML=event.target.innerHTML;

//     }else if(!FlagOp){
//         opDisplay.innerHTML= event.target.innerHTML;
//     }else{
//         result=calc(result,Number(resDisplay.innerHTML),opDisplay.innerHTML==undefined?"+":opDisplay.innerHTML);
//         resDisplay.innerHTML=result;
//         opDisplay.innerHTML= event.target.innerHTML;
//         dotFlag=true;
//         FlagOp= false;
//     }
// }

const setOp=()=>{

    if(!equalOp){
        equDisplay.innerHTML+=event.target.innerHTML;
        flagOpAfterEqual=true;
    }
    if(event.target.innerHTML==="-" && !FlagOp){
        resDisplay.innerHTML=event.target.innerHTML;

    }else if(!FlagOp){
        opDisplay.innerHTML= event.target.innerHTML;
    }else{
        num=resDisplay.innerHTML
        result=calc(result,Number(resDisplay.innerHTML),opDisplay.innerHTML==undefined?"+":opDisplay.innerHTML);
        resDisplay.innerHTML=0;
        opDisplay.innerHTML= event.target.innerHTML;
        equDisplay.innerHTML=equDisplay.innerHTML==='0'?num+opDisplay.innerHTML:equDisplay.innerHTML+num+opDisplay.innerHTML
        dotFlag=true;
        FlagOp= false;
    }
}

const equationDisplay=(num,op)=>{
    equDisplay.innerHTML+=num+op

}

const setTotal=()=>{
    if(!FlagOp||opDisplay.innerHTML==""){
       // resDisplay.innerHTML="";
       console.log(FlagOp)
    }else if(equalOp){
    equDisplay.innerHTML+=resDisplay.innerHTML;
    result=calc(result,Number(resDisplay.innerHTML),opDisplay.innerHTML);
    resDisplay.innerHTML=result;
    equDisplay.innerHTML+='='+resDisplay.innerHTML+', ';
    dotFlag=true;
    opDisplay.innerHTML="";
    equalOp=false
    FlagOp=false
    flagOpAfterEqual=false
    }

}

const calc=(a,b,op)=>{
    let res=0
    switch(op){
        case "+":{
            res =a+b;
            break;
        }
        case "-":{
            res =a-b;
            break;
        }
        case "*":{
            res =a*b;
            break;
        }
        case "/":{
            res = b===0?"error":a/b;
            break;
        }
        default:{
            res=a+b;
        }
    }
    return res;
}

const clr=()=>{
    opDisplay.innerHTML=""
    resDisplay.innerHTML=0
    equDisplay.innerHTML=""
    result=0
    dotFlag=true
    FlagOp=true
}

const deleat=()=>{
   // resDisplay.innerHTML=delDig(Number(resDisplay.innerHTML));
   
    if(!equalOp){
        result=delDig(resDisplay.innerHTML);
        resDisplay.innerHTML=result==0?'0':result;
        result=0
        FlagOp=true
    }else{
        let num=delDig(resDisplay.innerHTML);
        resDisplay.innerHTML=num==0?'0':num;
    }
}

const delDig=(num)=>{
    let type1 = Number(num)%1==0?"int":"double";
    num= String(num).substring(0,String(num).length-1);
    let type2 = Number(num)%1==0?"int":"double";
    if(type1.localeCompare(type2)==0){
        dotFlag=true;
    }
    return num;
}

const deleatEqu=()=>{
    resDisplay.innerHTML='0'
}
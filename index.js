const inputEle=document.querySelector('input')
const go=document.querySelector('.go')
const copy=document.querySelector('.copy')
const output=document.querySelector('.output')
go.addEventListener("click",()=>{
    output.innerHTML=""
    const input=inputEle.value
    let inputArr=input.split("")
    for(let i=1;i<inputArr.length+1;i++){
    let newArr=inputArr.toSpliced(i)
    if(newArr[newArr.length-1]!=" "){
        //????
    output.innerHTML+=newArr.join("")+'<br>'
    }
    }
})
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(output.innerText);
    alert("Text Copied!")
})
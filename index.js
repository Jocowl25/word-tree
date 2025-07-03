const inputEle=document.querySelector('input')
const button=document.querySelector('button')
const output=document.querySelector('.output')
button.addEventListener("click",()=>{
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

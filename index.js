const inputEle=document.querySelector('input')
const go=document.querySelector('.go')
const copy=document.querySelector('.copy')
const output=document.querySelector('.output')
const charset="qwertyuiopasdfghjklzxcvbnm1234567890".split("")
const precedingCharset=` @#"{[(`.split("") //set of characters that are connected to the next character in the tree
go.addEventListener("click",()=>{
    output.innerHTML=""
    const input=inputEle.value
    let inputArr=input.split("")
    for(let i=1;i<inputArr.length+1;i++){
        let newArr=inputArr.toSpliced(i)
        let additChar=""
        const currentChar=newArr[newArr.length-1]
        const nextChar=inputArr[i]
        const prevChar=inputArr[i-2]
        if(!charset.includes(currentChar.toLowerCase())){
            if(precedingCharset.includes(currentChar)||(i>2&&charset.includes(prevChar.toLowerCase()))){
                continue
            }
        }
        else if(!precedingCharset.includes(currentChar)&&i<inputArr.length&&!charset.includes(nextChar.toLowerCase())){
            additChar=nextChar
        }
        output.innerHTML+=newArr.join("")+additChar+'<br>'
    }
})
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(output.innerText);
    alert("Text Copied!")
})
var inpGp=document.getElementsByClassName("inpgp")
var valGp=document.getElementsByClassName("validgp")
var fm1=document.getElementById("fm1")
var val1=document.getElementById("valid")

fm1.addEventListener("submit",(elm)=>{
    elm.preventDefault()
    val1.innerText=""

    for(let inp of inpGp)
    {
        if(inp.value==="")
        {
            val1.innerText="*Please fill data"
            val1.style.color="red"
            break
        }
    }
})

var data=["name","age","password","mobilno","email"]
var patterns={
    name:/^[a-z][A-Z]{2,}$/,
    age:/^([1-9]\d)$/,
    password:/^[A-Z][a-z]{2,4}$/,
    email:/^[a-z][A-Z]+@gamil+\.{2,3}$/,
    mobile:/^[0-9]\d{10}$/}
for(let x=0; x<inpGp.length;x++)
{
    if(inpGp[x].getAttribute("placeholder")==="AGE")
    {
        continue
    }

    inpGp[x].addEventListener("focusout",(elm)=>{

        if(elm.target.value===""){
            valGp[x].style.color="red"
            valGp[x].innerText="*required"+data[x]

        }
        else{
            valGp[x].style.color="green"
            valGp[x].innerText="*OK"
        }
    })
    inpGp[x].addEventListener("focusout",(elm)=>{
        value=elm.target.value
        key=data[x].toLowerCase().replace("","")
        pattern=patterns[key]

        if(value===""|| (pattern && !pattern.test(value))){
            valGp[x]=style.color="red"
            valGp[x]=innerText="invalid"+data[x]
        }
        else{
            valGp[x]=style.color="green"
            valGp[x]=innerText="*Ok"
        }
    })
}
    

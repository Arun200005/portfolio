const user=document.getElementById("user")
const error=document.querySelector(".error")
const pass1=document.getElementById("password")
const ero=document.querySelector(".ero")
const email=document.getElementById("Email")
const err=document.querySelector(".err")
var valid=[{
    element:user,
    regex:/^[a-z A-Z ]+[\d]+$/,
    sucMsg:"Valid",
    errorMsg:"Please fill correclty",
    targetElement:error
},
{
    element:pass1,
    regex:/^[A-Z]+[a-z 0-9]+$/,
    sucMsg:"Valid",
    errorMsg:"First letter must be caps use numbers",
    targetElement:ero
},
{
    element:email,
    regex:/^[a-z A-Z 0-9]+@[a-z ]+\.[a-z A-Z 0-9]{1,4}$/,
    sucMsg:"Email valid",
    errorMsg:"Please Correct Email",
    targetElement:err
}
]

valid.forEach (v=>{
    v.element.addEventListener("input",(e)=>{
        val=v.regex.test(e.target.value)
        if(val){
            v.targetElement.innerText=v.sucMsg
            v.targetElement.style.color="green"
        }
        else{
            v.targetElement.innerText=v.errorMsg
            v.targetElement.style.color="red"
        }
    })
})
console.log("Hello World!")
let buttons= document.getElementsByClassName("btn");
let btnarray= Array.from(buttons);
console.log(btnarray);
btnarray.forEach(button => {
    button.addEventListener("click",(e)=>{
        let inputField= document.getElementById("input");
        inputField.value += button.innerHTML;
        if(button.innerHTML==="AC"){
            
            Array.from(inputField).pop();
        }
    })
});
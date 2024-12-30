let string=''
let buttons = document.querySelectorAll('button');

buttons.forEach(element =>{
    element.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            string=eval(string)
            inputbox.value = string;
        }
        else if(e.target.innerText == 'AC'){
            string=''
            inputbox.value = string;
        }
        else if(e.target.innerText == 'DEL'){
            string= string.substring(0,string.length-1)
            inputbox.value = string;
        }
        else{
            string += e.target.innerText
            inputbox.value = string
        }
    })
})

var calculator=document.getElementById("calc");
// function getRandomColor(){
//     var letters= '0123456789ABCDEF';
//     var color ='#';
//     for(var i=0; i<6; i++){
//         color+=letters[Math.floor(Math.random()*16)];
//     }
//     return color;
// }

// function changeColor(){
//     calculator.style.backgroundColor= getRandomColor();
// }

// setInterval(changeColor, 1000);




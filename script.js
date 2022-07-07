const input_1 = document.querySelector('.nome')
const input_2 = document.querySelector('.senha')
const botaos = document.querySelector('button')

input_1.addEventListener('input',jp)
input_2.addEventListener('input',jp)


function jp(){
    if(input_1.value && input_2.value.length >=8 ){
        botaos.classList.add('botones')
    }else{
        botaos.classList.remove('botones')
    }
}



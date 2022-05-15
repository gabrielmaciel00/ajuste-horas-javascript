
function atualizaHora(){
    const hora = document.querySelector('.hora')
    let horaAtual = new Date().getHours()
    let minutoAtual = new Date().getMinutes()
    let secondoAtual = new Date().getSeconds()
    let minutoEhora =`${horaAtual.toString().padStart(2,'0')}:${ minutoAtual.toString().padStart(2,'0')}:${secondoAtual.toString().padStart(2,'0')} ` 
    hora.innerHTML = minutoEhora
}
setInterval(()=>{
    atualizaHora()
}, 1000)


const dia = document.querySelector('.data')
let diaAtual = new Date().getDay()
switch(diaAtual){
    case 1 :
    diaAtual = 'Segunda-feira'
    break;

    case 2:
        diaAtual ='Terça-feira'
        break;

    case 3:
        diaAtual = 'Quarta-feira'
        break;
    case 4:
        diaAtual = 'Quinta-feira'
        break;
    case 5:
        diaAtual = 'Sexta-feira'
        break;
    case 6:
        diaAtual =' Sábado'
        break;
    case 7:
            diaAtual ='Domingo'
         break;
}
dia.innerHTML = diaAtual

const bater = document.querySelector('#bater')

const tabela = document.getElementById('configuracoes')
bater.onclick =()=>{

    let toast = new Toast({
        text:'Sucesso!'
    })

    console.log(toast)
}








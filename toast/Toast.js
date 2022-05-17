class Toast{
    constructor(params){
        this.params = params

         return this.toast()
    }

    toast(){

        let body = document.body
        let elemento = document.createElement('div')
        elemento.classList.add('toast')
        elemento.innerHTML = this.params.text
        body.append(elemento)
    
        elemento.animate([
            { transform:'translateX(300px)'},
            { transform:'translateX(0px)'},
         ], {
             duration:400,
             iteration:2
         })
        setTimeout(function(){
            elemento.animate([
               { transform:'translateY(0px)'},
               { transform:'translateY(-300px)'},
            ], {
                duration:400,
                iteration:2
            })
        }, 3000)

        setTimeout(()=>{
            elemento.style.display='none'
        }, 3100)
        return elemento



    }


}
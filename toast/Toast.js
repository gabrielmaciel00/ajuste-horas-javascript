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

        return elemento

    }


}
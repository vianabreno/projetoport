class time{

    constructor(){
        this._displayData = document.querySelector('#displayData')
        this._displayHora = document.querySelector('#displayHora')
        this._time;
        this.inicial()
    }

    inicial(){
        setInterval(()=>{
            
            this.displayData = this.time.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
            this.displayHora = this.time.toLocaleTimeString('pt-BR')
        }, 1000)

        this.displayData = this.time.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        this.displayHora = this.time.toLocaleTimeString('pt-BR')

    }

    get displayData(){
       return this._displayData.innerHTML;
    }

    set displayData(valor){
        this._displayData.innerHTML = valor;
    }

    get displayHora(){
        return this._displayHora.innerHTML;
    }
    
    set displayHora(valor){
        this._displayHora.innerHTML = valor;
    }

    get time(){
        return new Date();
    }

    set time(valor){
        this._timer.innerHTML = valor;
    }
}
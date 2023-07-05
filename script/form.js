class form{
    constructor(){
        this.forms = document.querySelector("#myForm")
        this.pauseForms()
    }

    pauseForms(){
        this.forms.addEventListener("submit", sub=>{
            sub.preventDefault()

            alert('ok')
        })
    }

}
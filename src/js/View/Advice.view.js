export class AdviceView{
    
    constructor(container){
        this.container = container
    }

    render(advice){
        this.clear()
        const html = `${advice}`
        this.container.innerHTML = html
    }

    clear(){
        this.container.innerHTML = ""
    }
}
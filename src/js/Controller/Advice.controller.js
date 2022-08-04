export class AdviceController{

    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getAdvice(){
        await this.service.getAdvice()
        console.log(this.service.advice)
        this.view.render(this.service.advice.advice_text)
    }
}
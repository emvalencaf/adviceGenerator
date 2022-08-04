import { AdviceModel } from "../Model/Advice.model.js"
import { PATH } from "../config.js"
import { createFetch } from "../createFetch.js"


export class AdviceService{

    constructor(){
        this.advice = {}
    }

    async getAdvice(){

        await createFetch(PATH)
            .then(response=>{
                this.advice = new AdviceModel(response.slip.advice)
            })
    }
}
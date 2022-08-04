import { AdviceView } from "./View/Advice.view.js"
import { AdviceService } from "./Service/Advice.service.js"
import { AdviceController } from "./Controller/Advice.controller.js"
console.log("TESTE")
//DOM
    const text = document.querySelector("#adviceText")
    const btn = document.querySelector("#adviceButton")

//módulos
    const adviceView = new AdviceView(text)
    const adviceService = new AdviceService()
    const adviceController = new AdviceController(adviceView, adviceService)

btn.addEventListener("click", () => adviceController.getAdvice())
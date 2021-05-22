import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import GoldenMessage from "../../Models/GoldenMessage";
import StoreValidator from "../../Validators/goldenmessages/StoreValidator";

export default class GoldenMessagesController {

  public async index () {
    return GoldenMessage.query().orderBy('created_at', 'desc')
  }

  public async store ({request}: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    return await GoldenMessage.create(data)
  }

  public async show ({params}: HttpContextContract) {
    return await GoldenMessage.findOrFail(params.id)
  }

}

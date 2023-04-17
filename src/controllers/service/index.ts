import {Client, Message} from "whatsapp-web.js";
import { MessageType } from "../../types/types";

class ServiceClass {
  private client:Client;
  private messageInstance: Message;
  private who: MessageType;
  constructor(client: Client , messageInstance: Message, who: MessageType) {
    this.client = client;
    this.messageInstance = messageInstance;
    this.who = who;
  }



}

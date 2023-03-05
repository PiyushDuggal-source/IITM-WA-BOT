import * as WAWebJS from 'whatsapp-web.js';
import { BOT, WA_BOT_ID } from '../..';
import { react } from '../../actions/messageActions';
import { sendAndDeleteMsg } from '../../actions/sendAndDeleteMsg';
import { UserModel } from '../../models/models';
import { MessageType, WA_Grp } from '../../types/types';

interface Message extends WAWebJS.Message {
  _data?: {
    notifyName?: string;
  };
}
type Options = {
  client: WAWebJS.Client;
  messageInstance: Message;
};

export class WhatsAppBot {
  private client: WAWebJS.Client;
  private messageInstance: Message;
  private waBot: WA_Grp;
  private chats: WAWebJS.Chat[];

  private setBot = async () => {
    this.chats = await this.client.getChats();
    this.waBot = this.chats[BOT];
  };

  constructor(options: Options) {
    this.messageInstance = options.messageInstance;
    this.client = options.client;
    this.setBot();
  }

  checkMessage = async (): Promise<MessageType> => {
    if (
      (this.messageInstance.fromMe || this.messageInstance.id.fromMe) &&
      String(this.messageInstance.to) === String(WA_BOT_ID)
    ) {
      return {
        name: this.messageInstance._data?.notifyName,
        role: 'OWNER',
        chatId: this.messageInstance.from,
      };
    } else if (String(this.messageInstance.from) === String(WA_BOT_ID)) {
      const grpAdmins = await UserModel.find({ roles: 'ADMIN' });
      const isAdmin = grpAdmins.some(
        (admin) => admin.recipitantId === this.messageInstance.author
      );
      if (!isAdmin) {
        return {
          name: this.messageInstance._data?.notifyName,
          role: 'STUDENT',
          chatId: this.messageInstance.author || '',
        };
      } else {
        return {
          name: this.messageInstance._data?.notifyName,
          role: 'ADMIN',
          chatId: this.messageInstance.author || '',
        };
      }
    } else {
      return {
        role: 'NONE',
        chatId: this.messageInstance.author || '',
      };
    }
  };

  sendMessage = async (
    messageToSend: WAWebJS.MessageContent,
    classMsg?: boolean,
    admin?: boolean
  ) => {
    const userObj = await this.checkMessage();
    console.log(userObj)
    if (userObj.role === 'OWNER') {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      this.waBot.sendMessage(msg);
      react(this.messageInstance);
    } else if (userObj.role === 'ADMIN' && admin) {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      this.waBot.sendMessage(msg);
      react(this.messageInstance);
    } else if (userObj.role !== 'NONE') {
      if (classMsg) {
        this.waBot.sendMessage(messageToSend);
        react(this.messageInstance);
      } else {
        sendAndDeleteMsg(
          this.client,
          this.messageInstance,
          userObj.chatId,
          messageToSend
        );
      }
    }
  };
}

// const clnt: WAWebJS.Client;
// const msg: WAWebJS.Message;
//
// const wabt = new WhatsAppBot({
//   client: clnt,
//   messageInstance: msg,
// });
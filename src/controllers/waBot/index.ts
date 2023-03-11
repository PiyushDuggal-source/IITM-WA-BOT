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
    if (this.messageInstance.fromMe) {
      return {
        name: this.messageInstance._data?.notifyName,
        role: 'OWNER',
        chatId: this.messageInstance.from,
      };
    } else {
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
    }
  };

  sendMessage = async (
    messageToSend: WAWebJS.MessageContent,
    classMsg?: boolean
  ) => {
    const userObj = await this.checkMessage();
    if (userObj.role === 'STUDENT') {
      return sendAndDeleteMsg(
        this.client,
        this.messageInstance,
        userObj.chatId,
        messageToSend
      );
    } else if (userObj.role === 'ADMIN') {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      this.waBot.sendMessage(msg);
      react(this.messageInstance);
    } else {
      if (classMsg) {
        this.waBot.sendMessage(messageToSend);
        react(this.messageInstance);
      } else {
        const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
        this.waBot.sendMessage(msg);
        react(this.messageInstance);
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

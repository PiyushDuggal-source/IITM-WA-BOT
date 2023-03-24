import * as WAWebJS from 'whatsapp-web.js';
import { BOT } from '../..';
import { react } from '../../actions/messageActions';
import { sendAndDeleteMsg } from '../../actions/sendAndDeleteMsg';
import { HelperClass } from '../../helper';
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
    if (this.messageInstance.fromMe || this.messageInstance.id.fromMe) {
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
    const msg = HelperClass.messageResponse(userObj, messageToSend);

    switch (userObj.role) {
      case 'STUDENT':
        return await sendAndDeleteMsg(
          this.client,
          this.messageInstance,
          userObj.chatId,
          messageToSend
        );

      case 'ADMIN':
        return await sendAndDeleteMsg(
          this.client,
          this.messageInstance,
          userObj.chatId,
          messageToSend
        );

      case 'OWNER':
        this.waBot.sendMessage(msg);
        return await react(this.messageInstance);

      default:
        if (classMsg) {
          this.waBot.sendMessage(messageToSend);
          await react(this.messageInstance);
        }
        break;
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

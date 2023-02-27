import * as WAWebJS from 'whatsapp-web.js';
import { BOT, WA_BOT_ID } from '../..';
import { react } from '../../actions/messageActions';
import { sendAndDeleteMsg } from '../../actions/sendAndDeleteMsg';
import { random } from '../../actions/sendMessage';
import { UserModel } from '../../models/models';
import { MessageType, WA_Grp } from '../../types/types';
import { FOOTERS } from '../../utils/reply/footers';

interface Message extends WAWebJS.Message {
  _data?: {
    notifyName?: string;
  };
}
type Options = {
  client: WAWebJS.Client;
  messageInstance: Message;
};

class WaBot {
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
    classMsg?: {
      classMsg: boolean;
    },
    help?: boolean
  ) => {
    const userObj = await this.checkMessage();
    if (userObj.role === 'OWNER') {
      if (help) {
        const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${
          FOOTERS.footers[random(FOOTERS.footerMsgLength)]
        }`;
        this.waBot.sendMessage(msg);
        react(this.messageInstance);
      } else {
        console.log('reaching here');
        const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
        this.waBot.sendMessage(msg);
        react(this.messageInstance);
      }
    } else if (userObj.role !== 'NONE') {
      console.log('reached');
      if (classMsg?.classMsg) {
        this.waBot.sendMessage(messageToSend);
        react(this.messageInstance);
      } else if (help) {
        const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${
          FOOTERS.footers[random(FOOTERS.footerMsgLength)]
        }`;
        sendAndDeleteMsg(
          this.client,
          this.messageInstance,
          userObj.chatId,
          msg
        );
      } else {
        console.log('endly reaching here');
        const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
        sendAndDeleteMsg(
          this.client,
          this.messageInstance,
          userObj.chatId,
          msg
        );
      }
    }
  };
}

// const clnt: WAWebJS.Client;
// const msg: WAWebJS.Message;
//
// const wabt = new WaBot({
//   client: clnt,
//   messageInstance: msg,
// });
//

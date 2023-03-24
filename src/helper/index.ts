import { MessageContent } from 'whatsapp-web.js';
import { random } from '../actions/sendMessage';
import { MessageType } from '../types/types';
import { FOOTERS } from '../utils/reply/footers';
import { GREETINGS } from '../utils/reply/replies';

export class HelperClass {
  // private userObj: MessageType;
  // constructor(userObj: MessageType) {
  //   this.userObj = userObj;
  // }
  static messageResponse = (userObj: MessageType, message: MessageContent) => {
    const adminMessage =
      `Hey, ${GREETINGS.admin[random(GREETINGS.adminLen)]}` +
      message +
      FOOTERS.footers[random(FOOTERS.footerMsgLength)];
    const userMessage =
      `Hey, ${GREETINGS.member[random(GREETINGS.memLen)]}` +
      message +
      FOOTERS.footers[random(FOOTERS.footerMsgLength)];

    switch (userObj.role) {
      case 'ADMIN':
        return adminMessage;

      case 'OWNER':
        return adminMessage;

      default:
        return userMessage;
    }
  };
}

// const helper = new HelperClass()

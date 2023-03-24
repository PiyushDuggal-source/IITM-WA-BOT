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

  /**
   * @param { MessageType } userObj
   * @param { MessageContent } message
   * @returns { string } message response with `header` and `footer`
   */
  static messageResponse = (
    userObj: MessageType,
    message: MessageContent
  ): string => {
    const adminMessage =
      `Hey, ${GREETINGS.admin[random(GREETINGS.adminLen)]}` +
      message +
      FOOTERS.footers[random(FOOTERS.footerMsgLength)];
    const userMessage =
      `Hey, ${GREETINGS.member[random(GREETINGS.memLen)]}` +
      message +
      FOOTERS.footers[random(FOOTERS.footerMsgLength)];

    switch (userObj.role) {
      case 'STUDENT':
        return userMessage;

      case 'OWNER':
        return adminMessage;

      default:
        return adminMessage;
    }
  };
}

// const helper = new HelperClass()

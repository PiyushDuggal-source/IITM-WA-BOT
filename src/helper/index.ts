import { Message, MessageContent } from 'whatsapp-web.js';
import { WA_BOT_ID } from '..';
import { random } from '../actions/sendMessage';
import { AlwaysGroupMessage, CommandType, MessageType } from '../types/types';
import { NOTES_CMD } from '../utils/Commands/instructions';
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

export const isMention = (messageInstance: Message): boolean => {
  const str: string[] = messageInstance.mentionedIds;
  return (
    (messageInstance.body.split(' ').length === 1 &&
      messageInstance.body[0] === '@' &&
      str.includes('919871453667@c.us')) ||
    (messageInstance.body
      .toLowerCase()
      .split(' ')
      .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`) &&
      messageInstance.from === WA_BOT_ID)
  );
};

export const distributor = (message: string): CommandType | AlwaysGroupMessage => {

  // remove first word from message
  const messageBody = message.slice(1);

  if(NOTES_CMD.includes(messageBody) || )

} 
// const helper = new HelperClass()

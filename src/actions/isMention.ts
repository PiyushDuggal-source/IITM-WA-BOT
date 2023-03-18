import { Message } from 'whatsapp-web.js';

export const isMention = (messageInstance: Message): boolean => {
  const str: string[] = messageInstance.mentionedIds;
  return (
    (messageInstance.body.split(' ').length === 1 &&
      str.includes('919871453667@c.us')) ||
    messageInstance.body
      .toLowerCase()
      .split(' ')
      .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`)
  );
};

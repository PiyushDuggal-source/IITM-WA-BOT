export type MessageTypeOfWA = {}
// Message {
//   _data: {
//     id: {
//       fromMe: false,
//       remote: '120363044220670475@g.us',
//       id: '3EB0CBB0D8CA7EC90068',
//       participant: '919990254656@c.us',
//       _serialized: 'false_120363044220670475@g.us_3EB0CBB0D8CA7EC90068_919990254656@c.us'
//     },
//     body: '!remove @919650692465',
//     type: 'chat',
//     t: 1674655819,
//     notifyName: 'Poonam Duggal',
//     from: '120363044220670475@g.us',
//     to: '919871453667@c.us',
//     author: '919990254656@c.us',
//     self: 'in',
//     ack: 1,
//     isNewMsg: true,
//     star: false,
//     kicNotified: false,
//     recvFresh: true,
//     isFromTemplate: false,
//     thumbnail: '',
//     pollInvalidated: false,
//     isSentCagPollCreation: false,
//     latestEditMsgKey: null,
//     latestEditSenderTimestampMs: null,
//     broadcast: false,
//     mentionedJidList: [ '919650692465@c.us' ],
//     isVcardOverMmsDocument: false,
//     hasReaction: false,
//     inviteGrpType: 'DEFAULT',
//     productHeaderImageRejected: false,
//     lastPlaybackProgress: 0,
//     isDynamicReplyButtonsMsg: false,
//     isMdHistoryMsg: false,
//     stickerSentTs: 0,
//     isAvatar: false,
//     requiresDirectConnection: false,
//     pttForwardedFeaturesEnabled: true,
//     isEphemeral: false,
//     isStatusV3: false,
//     links: []
//   },
//   mediaKey: undefined,
//   id: {
//     fromMe: false,
//     remote: '120363044220670475@g.us',
//     id: '3EB0CBB0D8CA7EC90068',
//     participant: '919990254656@c.us',
//     _serialized: 'false_120363044220670475@g.us_3EB0CBB0D8CA7EC90068_919990254656@c.us'
//   },
//   ack: 1,
//   hasMedia: false,
//   body: '!remove @919650692465',
//   type: 'chat',
//   timestamp: 1674655819,
//   from: '120363044220670475@g.us',
//   to: '919871453667@c.us',
//   author: '919990254656@c.us',
//   deviceType: 'web',
//   isForwarded: undefined,
//   forwardingScore: 0,
//   isStatus: false,
//   isStarred: false,
//   broadcast: false,
//   fromMe: false,
//   hasQuotedMsg: false,
//   duration: undefined,
//   location: undefined,
//   vCards: [],
//   inviteV4: undefined,
//   mentionedIds: [ '919650692465@c.us' ],
//   orderId: undefined,
//   token: undefined,
//   isGif: false,
//   isEphemeral: false,
//   links: []
// }


export type GrpJoinNotification = {}
//  ---------- RESPONSE WHEN SOMEBODY JOINS THE GROUP ----------- //
//  GroupNotification {
//   id: {
//     fromMe: false,
//     remote: '1203630xxxxxxx0475@g.us', // Group ID
//     id: '4125308xxxxxxxxxx28',
//     participant: '91988xxxxx92@c.us',
//     _serialized: 'false_12036xxxxxxxx670475@g.us_41xxxxxxxxxxxxxxx3374128_9198xxxxxxxxxxxx2@c.us'
//   },
//   body: '',
//   type: 'invite',
//   timestamp: 1673374128,
//   chatId: '120363044xxxxxxxx70475@g.us', // Group ID
//   author: undefined,
//   recipientIds: [ '919xxxxxxxxxx92@c.us' ]
//   }



export type GrpLeaveNotification = {}
// ---------- RESPONSE WHEN SOMEBODY LEAVES THE GROUP ----------- //
//  GroupNotification {
//   id: {
//     fromMe: false,
//     remote: '1203630xxxxxxxxxx75@g.us', // Group ID
//     id: '34145880xxxxxxxxxx99',
//     participant: '919xxxxxxxx92@c.us',
//     _serialized: 'false_1203xxxxxxxxxxx0670475@g.us_34145880xxxxxxxxxxxx9_919xxxxxxxxxx92@c.us'
//   },
//   body: '',
//   type: 'leave',
//   timestamp: 1673373799,
//   chatId: '12xxxxxxxxxxxx0475@g.us', // Group ID
//   author: '91988xxxxxxxx2@c.us',
//   recipientIds: [ '919xxxxxxxx2@c.us' ]
//   }

export type MessageTypeOfWA = {}
// Message {
//   _data: {
//     id: {
//       fromMe: false,
//       remote: '120363044xxxxxx475@g.us',
//       id: '3EB0CBB0D8Cxxxxxxxxx68',
//       participant: '91999xxxxxxx56@c.us',
//       _serialized: 'false_12036xxxxxxx70475@g.us_3EBxxxxxxxxxxA7EC90068_91xxxxx56@c.us'
//     },
//     body: '!remove @919xxxxxx465',
//     type: 'chat',
//     t: 1674655819,
//     notifyName: 'User Name',
//     from: '120363xxxxxxxx0475@g.us',
//     to: '919xxxxxxxx67@c.us',
//     author: '91999xxxxxx6@c.us',
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
//     mentionedJidList: [ '919xxxxxxxx45@c.us' ],
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
//     remote: '1203xxxxxxxx475@g.us',
//     id: '3EB0CBBxxxxxxxxxx90068',
//     participant: '9199xxxxxxxxx@c.us',
//     _serialized: 'false_120363xxxxxxxxxx70475@g.us_3EBxxxxxxxxxxC90068_91xxxxxxxx56@c.us'
//   },
//   ack: 1,
//   hasMedia: false,
//   body: '!remove @919xxxxxxxxx465',
//   type: 'chat',
//   timestamp: 1674655819,
//   from: '1203630xxxxxxxxx475@g.us',
//   to: '9198xxxxxxxx7@c.us',
//   author: '919xxxxxx56@c.us',
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
//   mentionedIds: [ '919xxxxxxxxx65@c.us' ],
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

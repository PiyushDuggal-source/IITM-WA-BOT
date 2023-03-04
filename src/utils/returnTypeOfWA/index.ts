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

export type GroupChat = {}
// GroupChat {
//   groupMetadata: {
//     id: {
//       server: 'g.us',
//       user: '120363xxxxxxxxx475',
//       _serialized: '12036xxxxxxxxxxx475@g.us'
//     },
//     creation: 1659366867,
//     owner: {
//       server: 'c.us',
//       user: '9198xxxxxxx67',
//       _serialized: '919xxxxxxxx7@c.us'
//     },
//     subject: 'IIT-M Bot - ELIZA - dev',
//     subjectTime: 1659594001,
//     descTime: 0,
//     restrict: false,
//     announce: false,
//     noFrequentlyForwarded: false,
//     ephemeralDuration: 0,
//     membershipApprovalMode: false,
//     size: 4,
//     support: false,
//     suspended: false,
//     terminated: false,
//     uniqueShortNameMap: {},
//     isParentGroup: false,
//     isParentGroupClosed: false,
//     defaultSubgroup: false,
//     lastActivityTimestamp: 0,
//     lastSeenActivityTimestamp: 0,
//     incognito: false,
//     participants: [ [Object], [Object], [Object], [Object] ],
//     pendingParticipants: [],
//     pastParticipants: [
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object]
//     ],
//     membershipApprovalRequests: []
//   },
//   id: {
//     server: 'g.us',
//     user: '12036xxxxxxxx475',
//     _serialized: '1203xxxxxxxx0475@g.us'
//   },
//   name: 'IIT-M Bot - ELIZA - dev',
//   isGroup: true,
//   isReadOnly: false,
//   unreadCount: 0,
//   timestamp: 1675171518,
//   archived: false,
//   pinned: true,
//   isMuted: false,
//   muteExpiration: 0
// }

export const GroupChatParticipants ={}

// [
//   {
//     id: {
//       server: 'c.us',
//       user: '916xxxxxxxxx760',
//       _serialized: '9163xxxxxxxxx60@c.us'
//     },
//     isAdmin: false,
//     isSuperAdmin: false
//   },
//   {
//     id: {
//       server: 'c.us',
//       user: '91988xxxxxxxx2',
//       _serialized: '9198xxxxxxxx92@c.us'
//     },
//     isAdmin: false,
//     isSuperAdmin: false
//   },
//   {
//     id: {
//       server: 'c.us',
//       user: '919xxxxxxxx783',
//       _serialized: '919xxxxxxxx783@c.us'
//     },
//     isAdmin: false,
//     isSuperAdmin: false
//   },
//   {
//     id: {
//       server: 'c.us',
//       user: '9198xxxxxxxx67',
//       _serialized: '919xxxxxxxx667@c.us'
//     },
//     isAdmin: true,
//     isSuperAdmin: true
//   }
// ]

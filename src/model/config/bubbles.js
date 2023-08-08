import * as oneToOneChatSourceCode from "../contracts/OneToOneBubble.json";
import * as publicChatSourceCode from "../contracts/PublicBubble.json";
import * as groupChatSourceCode from "../contracts/GroupBubble.json";
import simpleChatIcon from "../../assets/img/users.png";
import globeIcon from "../../assets/img/globe.png";
import groupIcon from "../../assets/img/group.png";


export const DEFAULT_BUBBLES = [
  {
    title: "Public Chat", // Original HushBubble Public Chat (cannot construct)
    description: "Anyone can join", 
    details: "Unencrypted public chat with no restrictions.\n\nNote, public chats are owned by the wallet that creates them, so until the wallet connectivity feature is released all users will have full control, including the power to delete the chat.", 
    id: {category: 'original-hushbubble-public-chat', bytecodeHash: '39bef1777deb3dfb14f64b9f81ced092c501fee72f90e93d03bb95ee89df9837'}, 
    classType: 'PublicChat', 
    sourceCode: publicChatSourceCode.default, 
    constructorParams: [], 
    metadata: {title: 'title', icon: 'icon'},
    actions: {},
    icon: simpleChatIcon
  },
  {
    title: "One-to-One Chat", 
    description: "Encrypted chat between two people", 
    details: "Two person, end-to-end encrypted chat. No-one, not even HushBubble, can read your messages.", 
    id: {category: 'one-to-one', bytecodeHash: '6a50777810fb784389b557b9058fd0d5eea28466d0711fca6a31a36252a356e9'}, 
    classType: 'PrivateChat', 
    sourceCode: oneToOneChatSourceCode.default, 
    constructorParams: ['member0.address', 'member1.address', 'terminateToken'],
    metadata: {member0: 'member0.publicKey', member1: 'member1.publicKey'},
    actions: {
      canConstruct: true,
    },
    icon: simpleChatIcon
  },
  {
    title: "Public Chat", 
    description: "Anyone can join", 
    details: "Unencrypted public chat with no restrictions.\n\nNote, public chats are owned by the wallet that creates them, so until the wallet connectivity feature is released all users will have full control, including the power to delete the chat.", 
    id: {category: 'public', bytecodeHash: '1cc04f1670339fb356fae402c8b20a69ec585d90526d4798a30d793102e2d776'}, 
    classType: 'PublicChat', 
    sourceCode: publicChatSourceCode.default, 
    constructorParams: [], 
    metadata: {title: 'title', icon: 'icon'},
    actions: {
      canConstruct: true,
      canLeave: true
    },
    icon: globeIcon
  },
  {
    title: "Group Chat", 
    description: "Group chat where everyone is equal", 
    id: {category: 'group', bytecodeHash: 'eca0e2dbb39f268cfff4c54f90d8c0d3e8e69aa731e7deee941cd08b47345d3b'},
    classType: 'PrivateChat', 
    sourceCode: groupChatSourceCode.default, 
    constructorParams: ['members.address', 'terminateToken'], 
    metadata: {title: 'title', icon: 'icon'},
    actions: {
      canConstruct: true,
      canLeave: true,
      addMembers: {method: 'setUsers', params: ['members.address', 'true']},
      removeMembers: {method: 'setUsers', params: ['members.address', 'false']},
    },
    icon: groupIcon
  },
  {id: {category: 'group', bytecodeHash: ''}, title: "Moderated Group Chat", description: "Group chat with admin controls", classType: 'PrivateChat', sourceCode: groupChatSourceCode.default, actions: {canConstruct: true}, disabled: true},
  {id: {category: 'group', bytecodeHash: ''}, title: "NFT Chat", description: "Chat with other NFT owners", sourceCode: groupChatSourceCode.default, actions: {canConstruct: true}, disabled: true},
  {id: {category: 'public', bytecodeHash: ''}, title: "Public Event", description: "Group chat with public read", sourceCode: groupChatSourceCode.default, actions: {canConstruct: true}, disabled: true},
  {id: {category: 'custom', bytecodeHash: ''}, title: "Custom Chat", description: "Your chat, your rules", sourceCode: groupChatSourceCode.default, actions: {canConstruct: true}, disabled: true},
]
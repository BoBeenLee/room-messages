import { chatRooms, chatRoomMessages } from '../../../../libs/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { ChatRoomMessage } from '@room-messages/features-chat-room-message';
import { generateUUID, todayTime } from '@room-messages/shared-utils';

const getRoomMessages = (roomId: string) => {
  const roomItem = chatRooms?.find((room) => room.id === roomId);
  if (roomItem) {
    roomItem.unreadCount = 0;
  }
  return chatRoomMessages[roomId];
};

const postRoomMessages = (
  roomId: string,
  message: Omit<ChatRoomMessage, 'id' | 'createdAt'>
) => {
  const newMessage = {
    id: `${generateUUID()}`,
    user: message.user,
    message: message.message,
    createdAt: todayTime(),
  };
  chatRoomMessages[roomId].push(newMessage);
  const roomItem = chatRooms?.find((room) => room.id === roomId);
  if (roomItem) {
    roomItem.lastestMessage = newMessage;
  }
  return newMessage;
};

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const roomId = req.query.id as string;

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  if (res.req.method === 'GET') {
    res.json({
      messages: getRoomMessages(roomId),
    });
    return;
  }
  const message = req.body as Omit<ChatRoomMessage, 'id' | 'createdAt'>;
  res.json({
    message: postRoomMessages(roomId, message),
  });
};

export default handler;

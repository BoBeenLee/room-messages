import { chatRooms } from '../../../libs/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { ChatRoom } from '@room-messages/features-chat-room';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    rooms: Object.values(chatRooms).sort(
      (room1: ChatRoom, room2: ChatRoom) =>
        (room2.lastestMessage?.createdAt ?? 0) -
        (room1.lastestMessage?.createdAt ?? 0)
    ),
  });
};

export default handler;

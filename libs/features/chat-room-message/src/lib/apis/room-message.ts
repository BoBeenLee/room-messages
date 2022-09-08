import axios from 'axios';
import { ChatRoomMessage } from '../interfaces';

export const getRoomMessages = async (roomId: string) => {
  const response = await axios.get<{ messages: ChatRoomMessage[] }>(
    `/api/room/message?id=${roomId}`
  );
  return response.data;
};

export const sendRoomMessage = async (
  request: Omit<ChatRoomMessage, 'id'> & { roomId: string }
) => {
  const { roomId, ...rest } = request;
  const response = await axios.post(`/api/room/message?id=${roomId}`, rest);
  return response.data;
};

import axios from 'axios';
import { ChatRoomMessage } from '../interfaces';

export const getRoomMessages = async (roomId: string) => {
  const response = await axios.get<{ messages: ChatRoomMessage[] }>(
    `/api/room/${roomId}/message`
  );
  return response.data;
};

export const sendRoomMessage = async (
  request: Omit<ChatRoomMessage, 'id' | 'createdAt'> & { roomId: string }
) => {
  const { roomId, ...rest } = request;
  const response = await axios.post(`/api/room/${roomId}/message`, rest);
  return response.data;
};

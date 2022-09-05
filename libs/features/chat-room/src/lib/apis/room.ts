import axios from 'axios';
import { ChatRoom } from '../interfaces';

export const getRooms = async () => {
  const response = await axios.get<{ rooms: ChatRoom[] }>(`/api/room`);
  return response.data;
};

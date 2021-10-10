import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'http://localhost:4000/notes';

export const getAll = async () => {
  const request = await axios.get(baseURL);
  return request.data; // notes
};

export const createNewNote = async (content) => {
  const note = {
    id: uuidv4(),
    content,
    importance: false,
  };

  const request = await axios.post(baseURL, note);
  return request.data;
};

export const updateImportance = async (note) => {
  const { id, content, importance } = note;

  const request = await axios.put(baseURL + `/${id}`, {
    content,
    importance: !importance,
  });
  return request.data;
};

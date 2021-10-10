import { createNewNote, getAll, updateImportance } from '../services/notes';

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case '@notes/init': {
      return action.payload;
    }

    case '@notes/created': {
      return [...state, action.payload];
    }
    case '@notes/toggle_importance': {
      return state.map((note) => {
        const { id } = action.payload;

        if (note.id === id) {
          return { ...note, importance: !note.importance };
        }
        return note;
      });
    }
    default:
      return state;
  }
};

// Actions
export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();

    dispatch({
      type: '@notes/init',
      payload: notes,
    });
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const note = await createNewNote(content);

    dispatch({
      type: '@notes/created',
      payload: note,
    });
  };
};

export const toggleImportanceOf = (note) => {
  return async (dispatch) => {
    updateImportance(note);

    dispatch({
      type: '@notes/toggle_importance',
      payload: {
        id: note.id,
      },
    });
  };
};

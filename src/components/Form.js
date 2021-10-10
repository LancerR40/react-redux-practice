import { createNote } from '../reducers/noteReducer';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();

    const content = event.target.note.value;

    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" placeholder="Note content..." />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;

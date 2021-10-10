import { useSelector, useDispatch } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

const List = () => {
  const notes = useSelector((state) => {
    const { notes, filter } = state;

    if (filter === 'ALL') {
      return notes;
    }

    if (filter === 'IMPORTANT') {
      return notes.filter((note) => note.importance === true);
    }

    if (filter === 'NOT_IMPORTANT') {
      return notes.filter((note) => note.importance === false);
    }
  });
  const dispatch = useDispatch();

  const toogleImportant = (note) => {
    dispatch(toggleImportanceOf(note));
  };

  return (
    <ul>
      {notes.map(({ id, content, importance }) => (
        <li
          key={id}
          onClick={() => toogleImportant({ id, content, importance })}
        >
          {content}
          <strong>
            {importance === true ? ' is important' : ' not important'}
          </strong>
        </li>
      ))}
    </ul>
  );
};

export default List;

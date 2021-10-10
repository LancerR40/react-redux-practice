import Form from './components/Form';
import List from './components/List';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from './reducers/filterReducer';
import { initNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNotes());
  }, [dispatch]);

  const filteredSelect = (value) => {
    dispatch(filter(value));
  };

  return (
    <div>
      <Form />

      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => filteredSelect('ALL')}
          defaultChecked={true}
        />
        All
        <input
          type="radio"
          name="filter"
          onChange={() => filteredSelect('IMPORTANT')}
        />
        Important
        <input
          type="radio"
          name="filter"
          onChange={() => filteredSelect('NOT_IMPORTANT')}
        />
        Not important
      </div>

      <List />
    </div>
  );
};

export default App;

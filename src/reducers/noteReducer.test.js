import { noteReducer } from './noteReducer';
import deepFreeze from 'deep-freeze';

describe('noteReducer', () => {
  test('returns new state after action with toggle importance', () => {
    const state = [
      {
        id: 1,
        content: 'note 1',
        importance: false,
      },
      {
        id: 2,
        content: 'note 2',
        importance: false,
      },
    ];

    const action = {
      type: '@notes/toggle_importance',
      payload: {
        id: 2,
      },
    };

    deepFreeze(state);
    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      id: 2,
      content: 'note 2',
      importance: true,
    });
  });
});

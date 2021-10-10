import { filterReducer } from './filterReducer';

describe('filterReducer', () => {
  test('Test description', () => {
    const state = 'ALL';

    const action = {
      type: '@filter/notes',
      payload: 'IMPORTANT',
    };

    const newState = filterReducer(state, action);

    // expect(newState).
  });
});

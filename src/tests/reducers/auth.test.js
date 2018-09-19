import authReducer from '../../reducers/auth';

test('should set uid of auth state on login action', () => {
  const uid = '123sdadfhds9823ghda6';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(uid);
});

test('should clear uid of auth state on logout action', () => {
  const state = {
    uid:'123sdadfhds9823ghda6'
  };
  const action = {
    type: 'LOGOUT'
  };
  const newState = authReducer(state, action);
  expect(newState.uid).toBe(undefined);
});

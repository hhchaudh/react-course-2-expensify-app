import {login, logout} from "../../actions/auth";

test('should setup login auth action object', () => {
  const uid = 'dsjkalh2j3141hj24k12h3';
  expect(login(uid)).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logout auth action object', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT'
  })
});

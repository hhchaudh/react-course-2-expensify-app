//grabbing the og version of moment
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};

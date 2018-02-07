const moment = require('moment');
export const relativeTime = time => moment(new Date(time * 1000)).fromNow();
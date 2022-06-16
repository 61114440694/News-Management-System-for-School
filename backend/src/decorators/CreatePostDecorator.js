// import moment from 'moment';
// import constants from '../configs/constants'
const moment = require('moment')
const constants = require('../configs/constants')

const Decorator = (item) => {

  if (!item)
    return {}

  return {
    id: item._id,
    header: item.header,
    description: item.description,
    imageURL: item.imageURL,
    start_time:item.start_time,
    end_time:item.end_time,
    seepost:item.seepost
    
    // createdAt: moment(user.createdAt).format(constants.DATETIME_FORMAT),
    // updatedAt: moment(user.updatedAt).format(constants.DATETIME_FORMAT),
  }
}

module.exports = { Decorator }

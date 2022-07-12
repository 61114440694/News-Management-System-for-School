const Decorator = (item) => {

  if (!item)
    return {}

  return {
    id: item._id,
    header: item.header,
    description: item.description,
    imageURL: item.imageURL,
    start_time:item.start_time,
    seepost:item.seepost,
    useridpost:item.useridpost,
  }
}

module.exports = { Decorator }

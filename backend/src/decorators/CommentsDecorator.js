const Decorator = (item) => {

  if (!item)
    return {}

  return {
    id: item._id,
    id_post: item.id_post,
    fullname:item.fullname,
    comment:item.comment,
    date_time:item.date_time,
    position : item.position
  }
}

module.exports = { Decorator }

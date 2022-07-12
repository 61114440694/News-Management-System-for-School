const Decorator = (item) => {

  if (!item)
    return {}

  return {
    id: item._id,
    value: item.value,
    label: item.label
  }
}

module.exports = { Decorator }

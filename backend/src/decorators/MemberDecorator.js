const Decorator = (item) => {

    if (!item) 
        return {}


    


    return {
        id: item._id,
        fullname: item.fullname,
        email: item.email,
        password: item.password,
        status: item.status,
        position: item.position
    }
}

module.exports = {
    Decorator
}

exports.create = (rep, res) => {
    res.send({ message: "create handler"});
}

exports.findOne = (rep, res) => {
    res.send({ message: "findOne handler"});
}

exports.findAll = (rep, res) => {
    res.send({ message: "findAll handler"});
}

exports.update = (rep, res) => {
    res.send({ message: "update handler"});
}

exports.deleteAll = (rep, res) => {
    res.send({ message: "deleteAll handler"});
}

exports.findAllFavorite = (rep, res) => {
    res.send({ message: "findAllFavorite handler"});
}

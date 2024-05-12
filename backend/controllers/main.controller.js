const Main = require('../models/Main')
module.exports.index = (request, response) => {
    response.json({message: "Hello Western Gravel!"});
}
// create
module.exports.createMain = (request, response) => {
    
    Main.create(request.body)
        .then(Main => response.status(200).json(main))
        .catch(err => response.status(404).json(err))
}
// findone
module.exports.getOneMain = (request, response) => {
    Main.findOne({_id:request.params.id})
        .then(main => response.json(main))
        .catch(err => response.json(err));
}
// find all
module.exports.getAllMain = (request, response) => {
    Main.find({})
        .then(mains => {
            console.log(mains)
            response.json(mains)})
        .catch(err => {
            console.log(err)
            response.json(err)
        });
}
// // update
// module.exports.updateMain = (request, response) => {
//     Main.updateOne({
//         _id: request.params.id},
//         request.body, {new:true})
//         .then(updatedMain => response.json(updatedMain))
//         .catch(err => response.json(err))
// }
// // delete
// module.exports.deleteMain = (request, response) => {
//     Main.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }
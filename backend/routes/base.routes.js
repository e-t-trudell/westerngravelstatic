const Main = require('../controllers/main.controller.js');
module.exports = (app) => {
    app.get('/api', Main.index);
    app.get('/api/main', Main.getAllMain);
    app.get('/api/main/concretes', Main.getAllConcretes);
    app.get('/api/main/aggregates', Main.getAllAggregates);
    app.get('/api/main/:id', Main.getOneMain );
    app.post('api/main', Main.create);
    app.put('/api/main/:id', Main.update);
    app.delete('/api/main/:id', Main.delete);
}
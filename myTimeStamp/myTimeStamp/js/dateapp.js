var moment = require('moment');

module.exports = function (app) {

    function processInput(input) {

        if (moment(input, "MMMM D, YYYY").isValid()) {
            return " The natural language format: " + moment.unix(input).format("MMMM D, YYYY") + " and the unix format: " + moment(input).unix();
        }
        else {
            console.log("not a date");
        }
    }

    app.get('/:query', function (request, response) {

        var date = request.param.query;
        var output = processInput(date);
        response.send(output);
    });
    app.listen(process.env.PORT, process.env.IP);
};

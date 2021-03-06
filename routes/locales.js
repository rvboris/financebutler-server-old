module.exports = function(app) {
    app.namespace('/:apiType(api|api-mobile)/:apiKey/locale', function() {

        app.get('/', app.get('restRestrict'), function(req, res) {
            app.get('models').Locale
                .findAll()
                .success(function(locales) {
                    res.send(locales);
                })
                .error(function(err) {
                    app.get('log').error(err.stack);
                    res.send(500);
                });
        });

    });
};
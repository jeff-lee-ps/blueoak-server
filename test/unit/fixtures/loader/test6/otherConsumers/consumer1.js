/*
 * Copyright 2015-2016 PointSource, LLC.
 * MIT Licensed
 */
exports.init = function(service20, callback) {
    service20.add('otherConsumer1');
    callback();
};
let server = (primus, options) => {
    let pingInterval = options.pingInterval;

    if (typeof pingInterval !== 'number') {
        return;
    }

    clearInterval(primus.heartbeatInterval);

    primus.on('connection', (spark) => {
        spark.myHeartbeatInterval = setInterval(spark.heartbeat.bind(spark), pingInterval);
    });

    primus.on('disconnection', (spark) => {
        clearInterval(spark.myHeartbeatInterval);
    });
};

module.exports = {server};
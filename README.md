# primus-spark-heartbeat

Primus-Spark-Heartbeat is a [Primus](https://github.com/primus/primus) plugin used to change how the heartbeat system works. The current version of Primus uses only one cycle on the server to broadcast all ping messages to the connected clients.

In some scenarions, like having hundreds/thousands of connected clients and/or having event listeners attached to the spark _heartbeat_ event, you may prefer to not have all heartbeats starting exactly at the same time.

This plugin runs an individual cycle for each connected client, always starting when each connection is up, and not when the Primus server did start. If you disable the heartbeat mechanism, the plugin will detect that and have no effect.

# Installation
```bash
npm install primus-spark-heartbeat
```

# Usage

```js
const Primus = require('primus');
const SparkHeartbeat = require('primus-spark-heartbeat');

const primusServer = new Primus(/*http server*/);
primusServer.plugin('spark-heartbeat', SparkHeartbeat);
```
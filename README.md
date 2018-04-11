# wss-recorder
Record all data from a wss stream into a mongodb.

Sometimes you might want to record live event data (e.g. trading data) and later process it.

# Requirements

* docker
* docker-compose
* node
* npm

# Usage

```bash
# Example WSS URL
export WSS_URL=wss://www.bitmex.com/realtime?subscribe=orderBookL2:XBTUSD,quote:XBTUSD,trade:XBTUSD

npm install # or yarn install to install required deps

docker-compose up
```

You can use a tool like `robomongo` and connect to localhost:27017 to see your recorded data.

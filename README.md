# Musical Events

##!!! THE APP IS NOT COMPLETED YET !!!

This is _NodeJS+MongoDB_ app. The main goal is to use it as a database of varuious musical events.
You can add new event, turn on email notification, make notes about visited events, email friends about interesting events

### How to configure and run
1. Install [node.js](https://nodejs.org).
2. Install [mongodb](https://www.mongodb.com/download-center?jmp=nav#community).
3. Run mongodb deamon, check the port it uses.
4. Clone and prepare app:
```
git clone https://github/Rekotek/musical-events
cd musical-events
npm install
```
5. Check parameters in **./config/config.js**.

6. Correct file **./config/db-seeder.js** and create first user for access:

`node ./config/db-seeder.js`

7. Launch the app:

```npm start```

8. Login with the user credentials mentioned at **seed.js** file and change the password.

### How to use


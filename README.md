A Socket.io Chat Example Using TypeScript
=========================================

This repository contains server & client side code using `TypeScript` language.

![](https://luixaviles.com/assets/images/posts/typescript-chat/typescript-chat.gif?raw=true)

## Running Server and Client locally

### Prerequisites

First, ensure you have the following installed:

1. NodeJS - Download and Install latest version of Node: [NodeJS](https://nodejs.org)
2. Git - Download and Install [Git](https://git-scm.com)
3. Angular CLI - Install Command Line Interface for Angular [https://cli.angular.io/](https://cli.angular.io/)

Check prerequisites' status:
```bash
git --version
node --version
npm --version 
google-chrome --version
npm list -g --depth 0 2>&1 | grep @angular/cli
```

### Clone repository

In order to start the project use:

```bash
git clone https://github.com/atao60/socket-io-typescript-chat.git

cd socket-io-typescript-chat
```
> All the npm scripts should work under Windows and Linux.

### Run

To run server locally, just install dependencies and run the npm script `start`:

```bash
npm install
npm start
```

The `socket.io` server will be running on port `3000`.

Your browser will open in the following URL: [http://localhost:4200](http://localhost:4200/)

## Contribution

Contributions are greatly appreciated. You can contribute by adding `i18n` support with your language, the testing section or any other feature.

## Credits

This project is a fork of [A Socket.io Chat Example Using TypeScript](https://github.com/luixaviles/socket-io-typescript-chat). A post and a live demo are available: 

* [Real Time Apps with TypeScript: Integrating Web Sockets, Node & Angular](https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1), Luis Aviles, Jan 9, 2018
* [live demo](https://typescript-chat.firebaseapp.com) and a .

## License

MIT

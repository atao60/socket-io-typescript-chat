A Socket.io Chat Example Using TypeScript
=========================================

This repository contains server & client side code using `TypeScript` language.

![](https://luixaviles.com/assets/images/posts/typescript-chat/typescript-chat.gif?raw=true)

## Running Server and Client locally

### Prerequisites<sup>(1)</sup>

First, ensure you have the following installed:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/download/)
* [Npm](https://www.npmjs.com/) - comes with Node.js
* [Chrome](https://www.google.com/chrome/)
* [Angular-CLI](https://cli.angular.io/)

Check prerequisites' status:
```bash
git --version
node --version # (2)
npm --version 
google-chrome --version # (2)
npm list -g --depth 0 2>&1 | grep @angular/cli # (3)
```
> <sup>(1)</sup> About installing Git, see [How to Install Git on Linux, Mac or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/), January 29, 2019 by Linode.  
About installing Node.js, Npm, Node & Angular-CLI, see e.g. [How to Install and Setup Angular 7 on Ubuntu 18.04.1](https://www.techomoro.com/how-to-install-and-setup-angular-7-on-ubuntu-18-04-1/), October 31, 2018 by Syamlal CM. For others OS, suitable similar articles are available on the net.

> <sup>(2)</sup> To avoid trouble with Protractor 5.4.2, Node version should be at least 10.15.3 and Chrome version at least 75. Check that `webdriver-manager` is in version 12.1.4. If needed, run `npm i -D protractor`: with Node 10.15.3+, it will update `webdriver-manager` with the requiered version.

> <sup>(3)</sup> See below about rechecking Angular-CLI's status under the project's folder.

### Clone repository

In order to start the project use:

```bash
git clone https://github.com/atao60/socket-io-typescript-chat.git

cd socket-io-typescript-chat

npm install

```
> All the npm scripts should now work as it under Windows and Linux.

Check @angular/cli and npm packages' status:

```bash
npm outdated # See notes below
npm audit
ng --version
```

> About `typescript`: its version is constrained to ">=3.4 <3.5" to please @angular/compiler-cli and @angular-devkit/build-angular.

### Run - Development mode

Launch the application with:

```bash
npm start
```

Your browser will open a view with the following URL: [http://localhost:4200](http://localhost:4200/).

With [concurrently](https://github.com/kimmobrunfeldt/concurrently), both client and server sides are launched with Angular build, TypeScript compiler and Express server.

The `socket.io` server will be running on port `3000`.

Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

## Contribution

Contributions are greatly appreciated. You can contribute by adding `i18n` support with your language, the testing section or any other feature.

## Credits

This project is a fork of [A Socket.io Chat Example Using TypeScript](https://github.com/luixaviles/socket-io-typescript-chat). A post and a live demo are available: 

* [Real Time Apps with TypeScript: Integrating Web Sockets, Node & Angular](https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1), Luis Aviles, Jan 9, 2018
* [live demo](https://typescript-chat.firebaseapp.com).

## License

MIT

Dante over WebSockets
===

This is a sample node.js application that streams Dante's Divine Comedy, Canto 1, to the browser client over WebSockets,
one stanza every 2 seconds. 

**Instructions for self-hosting**

Install dependencies:

```
npm install
```

Start a server using socket.io:

```
node server-socketio.js
```

or start a server using faye-websockets:

```
node server-faye.js
```

Then open your browser and navigate to:

```
http://localhost:8888
```

**Instructions for hosting in IIS 8.0**

You must be running [Windows 8](http://windows.microsoft.com/en-US/windows-8/download) or [Windows Server 2012](http://technet.microsoft.com/en-us/evalcenter/hh670538.aspx) with IIS 8.0 and [iisnode v0.2.x](https://github.com/tjanczuk/iisnode) or later installed. WebSocket functionality is not available in prior versions of Windows, IIS, or iisnode. 

Install dependencies:

```
npm install
```

Next, you must set up an IIS application pointing to the location of the code:

```
setup.bat
```

To see the demo using socket.io, open your browser and navigate to:

```
http://localhost/dante/server-socketio.js
```

To see the demo using faye-websockets, navigate to:

```
http://localhost/dante/server-faye.js
```

Enjoy!
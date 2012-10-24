Dante over WebSockets
===

This is a sample node.js application that streams Dante's Divine Comedy, Canto 1, to the browser client over WebSockets,
one stanza every 2 seconds. 

**Instructions for self-hosting**

First:

```
node server.js
```

Then open your browser and navigate to:

```
http://localhost:8888
```

**Instructions for hosting in IIS 8.0**

You must be running [Windows 8](http://windows.microsoft.com/en-US/windows-8/download) or [Windows Server 2012](http://technet.microsoft.com/en-us/evalcenter/hh670538.aspx) with IIS 8.0 and [iisnode v0.2.0](https://github.com/tjanczuk/iisnode) or later installed. WebSocket functionality is not available in prior versions of Windows, IIS, or iisnode. 

Next, you must set up an IIS application pointing to the location of the code:

```
setup.bat
```

Then open your browser and navigate to:

```
http://localhost/dante/server.js
```

Enjoy!
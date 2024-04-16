# Path

### basename
The path.basename() method in Node.js is used to get the filename part of a path. Here's an example:

```typescript
import * as path from "path";
// Get the filename from a path
const filename = path.basename('/Users/test/Documents/file.txt');
console.log(filename); // Outputs: file.txt
```
### dirname
The path.dirname() method in Node.js is used to get the directory name of a path. Here's an example:

```typescript
import * as path from "path";
// Get the directory name from a path
const dirname = path.dirname('/Users/test/Documents/file.txt');
console.log(dirname); // Outputs: /Users/test/Documents
```

### extname
return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

```typescript
import * as path from "path";
console.log(path.extname("index.html"));
// Returns: .html
```
### parse
The path.parse() method in Node.js is used to return an object whose properties represent significant elements of the path. Trailing directory separators are ignored. Here's an example:

```typescript
import * as path from "path";
// Parse a path
const parsedPath = path.parse('/Users/test/Documents/file.txt');
console.log(parsedPath);
// Outputs: { root: '/', dir: '/Users/test/Documents', base: 'file.txt', ext: '.txt', name: 'file' }
```

# fs

### readFile
Reads the entire contents of a file.

```typescript
import * as fs from "fs";
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### writeFile
Write data to a file, replacing the file if it already exists.

```typescript
import * as fs from "fs";
fs.writeFile("message.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
```

### appendFile
Asynchronously append data to a file, creating the file if it does not yet exist.

```typescript
import * as fs from "fs";
fs.appendFile("message.txt", "data to append", (err) => {
  if (err) throw err;
  console.log("The data was appended to file!");
});
```

### unlink
Deletes a file.

```typescript
import * as fs from "fs";
fs.unlink("message.txt", (err) => {
  if (err) throw err;
  console.log("The file has been deleted!");
});
```

### rename
Rename a file.

```typescript
import * as fs from "fs";
fs.rename("message.txt", "newMessage.txt", (err) => {
  if (err) throw err;
  console.log("The file has been renamed!");
});
```

### stat
Get file status.

```typescript
import * as fs from "fs";
fs.stat("message.txt", (err, stats) => {
  if (err) throw err;
  console.log(stats);
});
```

### mkdir
Create a directory.

```typescript
import * as fs from "fs";
fs.mkdir("newDir", (err) => {
  if (err) throw err;
  console.log("The directory has been created!");
});
```

### rmdir / rm
Remove a directory.

```typescript
import * as fs from "fs";
fs.rmdir("newDir", (err) => {
  if (err) throw err;
  console.log("The directory has been removed!");
});
```

### readdir
Read the contents of a directory.

```typescript
import * as fs from "fs";
fs.readdir("newDir", (err, files) => {
  if (err) throw err;
  console.log(files);
});
```

### copyFile
Copy a file.

```typescript
import * as fs from "fs";
fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) throw err;
  console.log("The file has been copied!");
});
```
# os

### hostname
The hostname is a label that is assigned to a device connected to a computer network. It is used to identify the device in various forms of electronic communication. In the context of operating systems, the hostname is used to identify the machine in the network.

```typescript
import * as os from "os";
console.log(os.hostname());
```

### type
Get the operating system name. Examples of operating systems include Windows, macOS, and Linux.

```typescript
import * as os from "os";
console.log(os.type());
```

### platform
Get the operating system platform. Examples of platforms include win32, darwin, and linux.

```typescript
import * as os from "os";
console.log(os.platform());
```

### arch
Get the operating system architecture. Examples of architectures include x64, arm, and ia32.

```typescript
import * as os from "os";
console.log(os.arch());
```

### release
Get the operating system release version.

```typescript
import * as os from "os";
console.log(os.release());
```

### uptime
Get the system uptime in seconds.

```typescript
import * as os from "os";
console.log(os.uptime());
```

### userInfo
Get information about the current user.

```typescript
import * as os from "os";
console.log(os.userInfo());
```

### loadavg
Get the average system load over the last 1, 5, and 15 minutes.

```typescript
import * as os from "os";
console.log(os.loadavg());
```

### totalmem
Get the total system memory in bytes.

```typescript
import * as os from "os";
console.log(os.totalmem());
```

### freemem
Get the amount of free system memory in bytes.

```typescript
import * as os from "os";
console.log(os.freemem());
```

### cpus
Get information about the CPUs on the system.

```typescript
import * as os from "os";
console.log(os.cpus());
```

### networkInterfaces
A network interface is the point of interconnection between a computer and a private or public network. A network interface is generally a network interface card (NIC), but does not have to have a physical form. Instead, the network interface can exist in software, such as within an operating system kernel, in a virtual space, like a virtual switch, or elsewhere.

In Node.js, you can use the os module's networkInterfaces() method to get information about the network interfaces on your system. This method returns an object containing network interfaces that have been assigned a network address.

Here's an example:

```typescript
import * as os from "os";
console.log(os.networkInterfaces());
```
# http

### createServer
Create an HTTP server.

```typescript
import * as http from "http";
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}).listen(8080);
```

### get
Make an HTTP GET request.

```typescript
import * as http from "http";
http.get("http://example.com", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});
```

### request
Make an HTTP request.

```typescript
import * as http from "http";
const options = {
  hostname: "example.com",
  port: 80,
  path: "/",
  method: "GET",
};
const req = http.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});
req.end();
```

### IncomingMessage
The IncomingMessage class is a readable stream that represents an incoming HTTP request. It is created internally by an HTTP server, not by the user.

```typescript
import * as http from "http";
http.createServer((req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk);
  });
  req.on("end", () => {
    res.end("Received data");
  });
}).listen(8080);
```

### ServerResponse
The ServerResponse class is a writable stream that represents an outgoing HTTP response. It is created internally by an HTTP server, not by the user.

```typescript
import * as http from "http";
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}).listen(8080);
```

### Agent
The Agent class is used to manage connection persistence and reuse for HTTP clients. It is used internally by the http and https modules.

```typescript
import * as http from "http";
const agent = new http.Agent({ keepAlive: true });
http.get("http://example.com", { agent }, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});
```

### Server
The Server class is used to create an HTTP server. It is a subclass of net.Server.

```typescript
import * as http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});
server.listen(8080);
```

### ClientRequest
The ClientRequest class is used to make an HTTP request. It is a writable stream that represents an outgoing request.

```typescript
import * as http from "http";
const req = http.request("http://example.com", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});
req.end();
```

### ServerResponse
The ServerResponse class is a writable stream that represents an outgoing HTTP response. It is created internally by an HTTP server, not by the user.

```typescript
import * as http from "http";
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}).listen(8080);
```

### http.STATUS_CODES
The http.STATUS_CODES object contains a mapping of HTTP status codes to their respective messages.

```typescript
import * as http from "http";
console.log(http.STATUS_CODES);
```

### http.METHODS
The http.METHODS array contains a list of HTTP methods that are supported by the http module.

```typescript
import * as http from "http";
console.log(http.METHODS);
```



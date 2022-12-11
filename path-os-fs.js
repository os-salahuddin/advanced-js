import * as os from "os";
import * as path from "path";
import * as fs from "fs";

const file = fs.readdirSync('./');
console.log(file);
console.log(os.totalmem());
console.log(path.parse("http://google.com"));
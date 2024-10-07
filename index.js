import { createInterface } from "readline";
import { messages } from "./utils/const.js";
import { homedir } from "os";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(messages.greeting);
process.chdir(homedir());
console.log(messages.currentPath);

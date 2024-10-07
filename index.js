import { createInterface } from "readline";
import { messages } from "./utils/const.js";
import { homedir } from "os";
import { finishProcess, handleCommand } from "./utils/utils.js";

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Your command > ",
});

console.log(messages.greeting);
process.chdir(homedir());
console.log(`You are currently in ${process.cwd()}`);
rl.prompt();
rl.on("line", (line) => {
  const command = line.trim();
  switch (command) {
    case ".exit":
    case "close":
      finishProcess();
      return;
    default:
      handleCommand(command);
      rl.prompt();
  }
}).on("SIGINT", () => {
  finishProcess();
});

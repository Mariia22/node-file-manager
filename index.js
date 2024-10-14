import { createInterface } from "node:readline";
import { messages } from "./utils/const.js";
import { homedir } from "node:os";
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
rl.on("line", (arg) => {
  const command = arg.split(" ");
  switch (command[0].trim()) {
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

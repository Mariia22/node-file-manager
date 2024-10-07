import { rl } from "../index.js";
import { messages, commands } from "./const.js";
import { cwd, exit, argv } from "process";

export const getArgByName = (name) => {
  const args = Object.fromEntries(
    argv.slice(2).map((arg) => {
      const [key, value] = arg.split("=");
      return [key, value];
    }),
  );
  return args[name] || "Unknown";
};

export const finishProcess = () => {
  console.log(messages.farewell);
  exit();
};

export const handleCommand = async (command) => {
  try {
    if (Object.keys(commands).includes(command)) {
      try {
        await commands[command]();
        console.log(`You are currently in ${cwd()}`);
      } catch (error) {
        console.log(messages.failedMessage);
      }
    } else {
      console.log(messages.invalidMessage);
    }
  } catch (error) {
    console.log(error.message);
  }
  await rl.prompt();
};

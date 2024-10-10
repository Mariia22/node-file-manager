import { rl } from "../index.js";
import { messages, commands } from "./const.js";
import { cwd, exit, argv } from "node:process";

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
  const arg = command.splice(1).join();
  const func = command[0].trim();
  try {
    if (Object.keys(commands).includes(func)) {
      try {
        await commands[func](arg);
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

export const sortByNameAsc = (arr) => {
  return arr.sort((a, b) => a.name - b.name);
};

export const useStreams = async (
  sourceFile,
  destinationPath,
  compressionFunc,
) => {
  const readStream = createReadStream(sourceFile);
  const writableStream = createWriteStream(destinationPath);
  await pipeline(readStream, compressionFunc, writableStream);
};

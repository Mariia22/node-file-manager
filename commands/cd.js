import { up } from "./up.js";
import { homedir } from "node:os";
import { chdir } from "node:process";
import { resolve } from "node:path";
import { messages } from "../utils/const.js";

export const cd = (pathToDirectory) => {
  try {
    switch (pathToDirectory) {
      case "..":
        up();
        break;
      case "~":
        chdir(homedir());
        break;
      default:
        const resolvedPath = resolve(pathToDirectory);
        chdir(resolvedPath);
    }
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

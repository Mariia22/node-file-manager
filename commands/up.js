import { cwd, chdir } from "process";
import { sep, resolve } from "path";
import { messages } from "../utils/const.js";

export const up = () => {
  try {
    const currentPath = cwd();
    const rootDir = resolve(sep);
    if (currentPath !== rootDir) {
      chdir("..");
    } else {
      console.log(messages.rootMessage);
    }
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

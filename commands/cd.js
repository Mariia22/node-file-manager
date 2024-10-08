import { up } from "./up.js";
import { homedir } from "os";
import { chdir } from "process";
import { resolve } from "path";

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
    console.log(error.message);
  }
};

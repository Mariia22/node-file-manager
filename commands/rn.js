import { dirname, resolve } from "node:path";
import { rename } from "node:fs/promises";
import { messages } from "../utils/const.js";

export const rn = async (args) => {
  try {
    const [path, newFileName] = args.split(",");
    const dirnameFromPath = dirname(path);
    await rename(resolve(path), resolve(dirnameFromPath, newFileName));
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

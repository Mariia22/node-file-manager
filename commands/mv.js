import { cp } from "./cp.js";
import { unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { messages } from "../utils/const.js";

export const mv = async (paths) => {
  try {
    const [oldPath] = paths.split(",");
    await cp(paths);
    await unlink(resolve(oldPath));
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

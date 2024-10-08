import { unlink } from "fs/promises";
import { resolve } from "path";
import { messages } from "../utils/const.js";

export const rm = async (path) => {
  try {
    await unlink(resolve(path));
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

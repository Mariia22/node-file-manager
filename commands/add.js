import { writeFile } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";
import { messages } from "../utils/const.js";

export const add = async (fileName) => {
  try {
    const pathToFile = resolve(cwd(), fileName);
    await writeFile(pathToFile, "");
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

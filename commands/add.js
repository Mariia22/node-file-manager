import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { cwd } from "node:process";
import { messages } from "../utils/const.js";

export const add = async (fileName) => {
  try {
    const pathToFile = resolve(cwd(), fileName);
    await writeFile(pathToFile, "");
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

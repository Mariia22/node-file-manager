import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { basename, resolve } from "node:path";
import { messages } from "../utils/const.js";

export const cp = async (paths) => {
  try {
    const [oldPath, newPath] = paths.split(",");
    const fileName = basename(oldPath);
    const newPathToFile = resolve(newPath, fileName);
    const readableStream = createReadStream(oldPath);
    const writableStream = createWriteStream(newPathToFile);
    await pipeline(readableStream, writableStream);
  } catch (error) {
    console.log(messages.failedMessage);
  }
};

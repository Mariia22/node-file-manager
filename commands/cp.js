import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { basename, resolve } from "path";

export const cp = async (paths) => {
  try {
    const [oldPath, newPath] = paths.split(",");
    const fileName = basename(oldPath);
    const newPathToFile = resolve(newPath, fileName);
    const readableStream = createReadStream(oldPath);
    const writableStream = createWriteStream(newPathToFile);
    await pipeline(readableStream, writableStream);
  } catch (error) {
    console.log(error);
  }
};

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { Writable } from "node:stream";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { messages } from "../utils/const.js";

export const hash = async (path) => {
  try {
    const content = createReadStream(resolve(path));
    const hash = createHash("sha256").setEncoding("hex");
    const output = new Writable({
      decodeStrings: false,
      write(chunk, _, callback) {
        console.log(chunk);
        callback();
      },
    });
    await pipeline(content, hash.setEncoding("hex"), output);
  } catch (error) {
    console.error(messages.failedMessage);
  }
};

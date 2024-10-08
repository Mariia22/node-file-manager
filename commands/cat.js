import { createReadStream } from "fs";
import { resolve } from "path";
import { rl } from "../index.js";

export const cat = async (pathToFile) => {
  try {
    const content = createReadStream(resolve(pathToFile), {
      encoding: "utf-8",
    });
    content.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
    content.on("end", () => {
      rl.prompt();
    });
    content.on("error", (error) => {
      console.error("Error reading file:", error.message);
    });
  } catch (error) {
    console.error(error.message);
  }
};

import { writeFile } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";

export const add = async (fileName) => {
  try {
    const pathToFile = resolve(cwd(), fileName);
    await writeFile(pathToFile, "");
  } catch (error) {
    console.log(error);
  }
};

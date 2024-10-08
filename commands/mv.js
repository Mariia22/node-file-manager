import { cp } from "./cp.js";
import { unlink } from "fs/promises";
import { resolve } from "path";

export const mv = async (paths) => {
  try {
    const [oldPath] = paths.split(",");
    await cp(paths);
    await unlink(resolve(oldPath));
  } catch (error) {
    console.log(error);
  }
};

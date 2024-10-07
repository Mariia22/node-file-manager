import { cwd, chdir } from "process";
import { sep, resolve } from "path";

export const up = () => {
  try {
    const currentPath = cwd();
    console.log("current", currentPath);
    const rootDir = resolve(sep);
    if (currentPath !== rootDir) {
      chdir("..");
    }
  } catch (error) {
    console.log(error.message);
  }
};

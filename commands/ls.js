import { cwd } from "process";
import { readdir } from "fs/promises";
import { sortByNameAsc } from "../utils/utils.js";
import { rl } from "../index.js";

export const ls = () => {
  readdir(cwd(), { withFileTypes: true })
    .then((items) => {
      let directories = [];
      let files = [];
      items.forEach((item) =>
        item.isFile() ? files.push(item) : directories.push(item),
      );
      console.table([...sortByNameAsc(directories), ...sortByNameAsc(files)]);
    })
    .catch((error) => console.log(error))
    .finally(() => rl.prompt());
};

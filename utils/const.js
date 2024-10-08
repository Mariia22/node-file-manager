import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { up } from "../commands/up.js";
import { getArgByName } from "./utils.js";

const username = getArgByName("--username");

export const messages = {
  greeting: `Welcome to the File Manager, ${username}!`,
  farewell: `Thank you for using File Manager, ${username}, goodbye!`,
  invalidMessage: "Invalid input",
  failedMessage: "Operation failed",
  rootMessage:
    "You are in the root folder. This operation doesn't change working directory",
};

export const commands = {
  up,
  cd,
  ls,
};

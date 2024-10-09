import { add } from "../commands/add.js";
import { cat } from "../commands/cat.js";
import { cd } from "../commands/cd.js";
import { cp } from "../commands/cp.js";
import { hash } from "../commands/hash.js";
import { ls } from "../commands/ls.js";
import { mv } from "../commands/mv.js";
import { os } from "../commands/os.js";
import { rm } from "../commands/rm.js";
import { rn } from "../commands/rn.js";
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
  osError: "Command is not recognize. Try again",
};

export const commands = {
  up,
  cd,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
};

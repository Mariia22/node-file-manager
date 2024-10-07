import { up } from "../commands/up.js";
import { getArgByName } from "./utils.js";

const username = getArgByName("--username");

export const messages = {
  greeting: `Welcome to the File Manager, ${username}!`,
  farewell: `Thank you for using File Manager, ${username}, goodbye!`,
  currentPath: `You are currently in ${process.cwd()}`,
  invalidMessage: "Invalid input",
  failedMessage: "Operation failed",
};

export const commands = {
  up: up,
};

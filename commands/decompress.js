import { resolve, parse } from "node:path";
import { createBrotliDecompress } from "node:zlib";
import { useStreams } from "../utils/utils.js";

export const decompress = async (paths) => {
  const [source, destination] = paths.split(",");
  const sourceFile = resolve(source);
  const { name } = parse(sourceFile);
  const destinationPath = resolve(destination, name);
  const brotliDecompress = createBrotliDecompress();
  useStreams(sourceFile, destinationPath, brotliDecompress);
};

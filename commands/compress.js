import { createBrotliCompress } from "node:zlib";
import { resolve, parse } from "node:path";
import { useStreams } from "../utils/utils.js";

export const compress = async (paths) => {
  const [source, destination] = paths.split(",");
  const { base } = parse(resolve(source));
  const fileName = `${base}.br`;
  const destinationPath = resolve(destination, fileName);
  const brotliCompress = createBrotliCompress();
  useStreams(sourceFile, destinationPath, brotliCompress);
};

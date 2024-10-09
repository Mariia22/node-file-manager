import { resolve, parse } from "path";
import { createBrotliDecompress } from "zlib";
import { useStreams } from "../utils/utils.js";

export const decompress = async (paths) => {
  const [source, destination] = paths.split(",");
  const { name } = parse(resolve(source));
  const destinationPath = resolve(destination, name);
  const brotliDecompress = createBrotliDecompress();
  useStreams(sourceFile, destinationPath, brotliDecompress);
};

import path from "node:path";
import type webpack from "webpack";
import { isProd } from "./otherFile";

const root = process.cwd();

export default {
  mode: isProd() ? "production" : "development",
  entry: "./index.js",
  output: {
    path: path.join(root, 'build')
  }
} satisfies webpack.Configuration;

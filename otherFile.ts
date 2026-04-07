import * as process from "node:process";

export function isProd() {
  return process.env.NODE_ENV === 'production';
}

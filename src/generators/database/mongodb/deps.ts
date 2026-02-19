import { Engine } from "../../../types/config.js";

export function mongodbDeps(engine: Engine) {
  if (engine === "authjs") {
    return ["@auth/mongodb-adapter", "mongodb"];
  } else {
    return ["@next-auth/mongodb-adapter", "mongodb"];
  }
}
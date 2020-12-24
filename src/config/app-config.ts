import { assert } from "console";

import { config } from "dotenv";

export interface AppConfig {
  connectionString: string;
  database: string;
  secret: string;
  envType: string;
}

config({ debug: !!process.env.DEBUG });

assert(process.env.CONNECTION_STRING !== undefined, "Missing CONNECTION_STRING env var");
assert(process.env.DATABASE !== undefined, "Missing DATABASE env var");
assert(process.env.SECRET !== undefined, "Missing SECRET env var");
assert(process.env.ENV_TYPE !== undefined, "Missing ENV_TYPE env var");

const appConfig: AppConfig = {
  connectionString: process.env.CONNECTION_STRING,
  database: process.env.DATABASE,
  envType: process.env.ENV_TYPE,
  secret: process.env.KEY_VAULT_NAME
};
export { appConfig };

declare module "i18next-fs-backend";
declare module "promised-handlebars";

declare namespace NodeJS {
  export interface ProcessEnv {
    DEBUG?: boolean;
    NODE_ENV: string;
    CONNECTION_STRING: string;
    DATABASE: string;
    SECRET: string;
    ENV_TYPE: string;
  }
}

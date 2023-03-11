import { EntityManager } from "typeorm";

export type MyContext = {
  em: EntityManager;
};

export const validationEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

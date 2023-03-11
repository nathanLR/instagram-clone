import "reflect-metadata";
import { DataSource } from "typeorm";
import { _DEV_ } from "./constants";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "sp",
  database: "instagram",
  synchronize: true,
  logging: _DEV_,
  entities: [User],
  migrations: ["dist/migrations/**/*.js"],
  subscribers: [],
});

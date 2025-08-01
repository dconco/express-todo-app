import "reflect-metadata";
import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,  // auto-create tables (only for dev)
  logging: false,
  entities: [Todo],   // add your entities here
  migrations: [],
  subscribers: [],
});

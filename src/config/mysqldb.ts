import { createPool, Pool } from 'mysql2/promise';  

export async function connect(): Promise<Pool> {
    const connection = await createPool({
          connectionLimit : 10,
          host: "localhost",
          user: "root",
          password: "",
          database: "quranwbw"
    });
    return connection;
}
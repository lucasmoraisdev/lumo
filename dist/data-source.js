"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: +(process.env.POSTGRES_PORT || 5432),
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'lumo',
    entities: ['libs/core/src/entities/*.entity.{ts,js}'],
    migrations: ['libs/core/src/migrations/*.{ts,js}'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map
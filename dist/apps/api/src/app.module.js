"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const postgres_module_1 = require("@lumo/infrastructure/database/postgres/postgres.module");
const mongodb_module_1 = require("@lumo/infrastructure/database/mongodb/mongodb.module");
const redis_module_1 = require("@lumo/infrastructure/database/redis/redis.module");
const jwt_module_1 = require("@lumo/infrastructure/auth/jwt/jwt.module");
const rabbitmq_module_1 = require("@lumo/infrastructure/messaging/rabbitmq/rabbitmq.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            postgres_module_1.PostgresModule,
            mongodb_module_1.MongoModule,
            redis_module_1.RedisModule,
            jwt_module_1.JwtAuthModule,
            rabbitmq_module_1.RabbitMQModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
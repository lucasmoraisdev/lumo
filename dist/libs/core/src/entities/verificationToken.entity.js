"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationToken = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
let VerificationToken = class VerificationToken extends base_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.is_system = false;
    }
};
exports.VerificationToken = VerificationToken;
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsJWT)({ message: 'Invalid refresh token' }),
    __metadata("design:type", String)
], VerificationToken.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsJWT)({ message: 'Token needs to be a JWT token' }),
    __metadata("design:type", String)
], VerificationToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)({ message: 'Type needs to be a string' }),
    __metadata("design:type", String)
], VerificationToken.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'expires_at' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], VerificationToken.prototype, "expires_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Is system needs to be a boolean' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], VerificationToken.prototype, "is_system", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    __metadata("design:type", Array)
], VerificationToken.prototype, "user", void 0);
exports.VerificationToken = VerificationToken = __decorate([
    (0, typeorm_1.Entity)('tokens')
], VerificationToken);
//# sourceMappingURL=verificationToken.entity.js.map
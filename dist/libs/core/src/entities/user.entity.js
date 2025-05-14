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
exports.User = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const workspace_entity_1 = require("./workspace.entity");
const userWorkspace_entity_1 = require("./userWorkspace.entity");
let User = class User extends base_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.is_verified = false;
        this.mfa_enabled = false;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The email is required' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The password is required' }),
    (0, class_validator_1.IsString)({ message: 'Password needs to be a string' }),
    __metadata("design:type", String)
], User.prototype, "password_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Is verified needs to be a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], User.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, class_validator_1.IsBoolean)({ message: 'MFA Enabled needs to be a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], User.prototype, "mfa_enabled", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workspace_entity_1.Workspace, workspace => workspace.owner_id),
    __metadata("design:type", Array)
], User.prototype, "workspaces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userWorkspace_entity_1.UserToWorkspaces, userToWorkspaces => userToWorkspaces.user_id),
    __metadata("design:type", Array)
], User.prototype, "user_workspaces", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.entity.js.map
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
exports.UserToWorkspaces = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const workspace_entity_1 = require("./workspace.entity");
const role_entity_1 = require("./role.entity");
let UserToWorkspaces = class UserToWorkspaces {
};
exports.UserToWorkspaces = UserToWorkspaces;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserToWorkspaces.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserToWorkspaces.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserToWorkspaces.prototype, "workspace_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserToWorkspaces.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'joined_at', default: () => 'CURRENT_TIMESTAMP' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserToWorkspaces.prototype, "joined_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UserToWorkspaces.prototype, "left_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.user_workspaces, { nullable: false }),
    __metadata("design:type", user_entity_1.User)
], UserToWorkspaces.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, workspace => workspace.user_workspaces, { nullable: false }),
    __metadata("design:type", workspace_entity_1.Workspace)
], UserToWorkspaces.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, role => role.id, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.Role)
], UserToWorkspaces.prototype, "role", void 0);
exports.UserToWorkspaces = UserToWorkspaces = __decorate([
    (0, typeorm_1.Entity)('userWorkspaces')
], UserToWorkspaces);
//# sourceMappingURL=userWorkspace.entity.js.map
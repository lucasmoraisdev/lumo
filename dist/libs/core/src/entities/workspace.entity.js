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
exports.Workspace = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
const userWorkspace_entity_1 = require("./userWorkspace.entity");
let Workspace = class Workspace extends base_entity_1.BaseEntity {
};
exports.Workspace = Workspace;
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { nullable: false }),
    __metadata("design:type", user_entity_1.User)
], Workspace.prototype, "owner_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The password is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Workspace.prototype, "password_hash", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userWorkspace_entity_1.UserToWorkspaces, userToWorkspaces => userToWorkspaces.workspace_id),
    __metadata("design:type", Array)
], Workspace.prototype, "user_workspaces", void 0);
exports.Workspace = Workspace = __decorate([
    (0, typeorm_1.Entity)('workspaces')
], Workspace);
//# sourceMappingURL=workspace.entity.js.map
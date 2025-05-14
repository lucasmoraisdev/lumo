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
exports.Role = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const workspace_entity_1 = require("./workspace.entity");
const userWorkspace_entity_1 = require("./userWorkspace.entity");
const role_enum_1 = require("../enums/role.enum");
let Role = class Role extends base_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.is_system = false;
    }
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: role_enum_1.RoleEnum }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Role name is required' }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Is system needs to be a boolean' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], Role.prototype, "is_system", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workspace_entity_1.Workspace, workspace => workspace.owner_id),
    __metadata("design:type", Array)
], Role.prototype, "workspaces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userWorkspace_entity_1.UserToWorkspaces, userToWorkspaces => userToWorkspaces.user_id),
    __metadata("design:type", Array)
], Role.prototype, "user_workspaces", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)('roles')
], Role);
//# sourceMappingURL=role.entity.js.map
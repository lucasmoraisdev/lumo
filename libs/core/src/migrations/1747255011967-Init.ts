import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1747255011967 implements MigrationInterface {
    name = 'Init1747255011967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."roles_name_enum" AS ENUM('SYSTEM_ADMIN', 'USER_ADMIN', 'USER')`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" "public"."roles_name_enum" NOT NULL, "is_system" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userWorkspaces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "workspace_id" character varying NOT NULL, "role_id" uuid NOT NULL, "joined_at" TIMESTAMP NOT NULL DEFAULT now(), "left_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid NOT NULL, "workspaceId" uuid NOT NULL, CONSTRAINT "PK_5ffdd4f630b6b5371a3e717f9ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(100) NOT NULL, "email" character varying NOT NULL, "password_hash" character varying(100) NOT NULL, "is_verified" boolean NOT NULL DEFAULT false, "mfa_enabled" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workspaces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(100) NOT NULL, "password_hash" character varying(100) NOT NULL, "ownerIdId" uuid NOT NULL, CONSTRAINT "PK_098656ae401f3e1a4586f47fd8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "refresh_token" character varying(100) NOT NULL, "user_agent" character varying(100) NOT NULL, "ip_address" character varying(100) NOT NULL, "expires_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "refresh_token" character varying(100) NOT NULL, "token" character varying(100) NOT NULL, "type" character varying(100) NOT NULL, "expires_at" TIMESTAMP NOT NULL DEFAULT now(), "is_system" boolean NOT NULL DEFAULT false, "userId" uuid, CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "userWorkspaces" ADD CONSTRAINT "FK_0bf4eafd8f73e53ee6b6ee3672f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userWorkspaces" ADD CONSTRAINT "FK_f73a46728dda3e3dcf4e80b941e" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userWorkspaces" ADD CONSTRAINT "FK_8b292cc4f88d3b2883ede48c941" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workspaces" ADD CONSTRAINT "FK_00eaf96e50aa766eea8fd0aa0f9" FOREIGN KEY ("ownerIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tokens" ADD CONSTRAINT "FK_d417e5d35f2434afc4bd48cb4d2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tokens" DROP CONSTRAINT "FK_d417e5d35f2434afc4bd48cb4d2"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`ALTER TABLE "workspaces" DROP CONSTRAINT "FK_00eaf96e50aa766eea8fd0aa0f9"`);
        await queryRunner.query(`ALTER TABLE "userWorkspaces" DROP CONSTRAINT "FK_8b292cc4f88d3b2883ede48c941"`);
        await queryRunner.query(`ALTER TABLE "userWorkspaces" DROP CONSTRAINT "FK_f73a46728dda3e3dcf4e80b941e"`);
        await queryRunner.query(`ALTER TABLE "userWorkspaces" DROP CONSTRAINT "FK_0bf4eafd8f73e53ee6b6ee3672f"`);
        await queryRunner.query(`DROP TABLE "tokens"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "workspaces"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "userWorkspaces"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TYPE "public"."roles_name_enum"`);
    }

}

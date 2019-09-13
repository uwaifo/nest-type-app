import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserFullName1568205396301 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" RENAME "name" to "fullName"`);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" RENAME "fullName" to "name"`);
  }
}

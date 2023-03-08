import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field(() => String)
  @Column({ name: "user_name", nullable: false, length: 100 })
  public userName: string;

  @Field(() => String)
  @Column({ name: "user_email", nullable: false, length: 100 })
  public email: string;

  @Field(() => String)
  @Column({ name: "user_password", nullable: false })
  public password: string;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  private createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at", type: "timestamptz" })
  private updatedAt: Date;

  public getId = (): number => {
    return this.id;
  };
  public setId = (newId: number): void => {
    this.id = newId;
  };

  public getUserName = (): string => {
    return this.userName;
  };
  public setUserName = (newUserName: string): void => {
    this.userName = newUserName;
  };

  public getEmail = (): string => {
    return this.email;
  };
  public setEmail = (newEmail: string): void => {
    this.email = newEmail;
  };
  public getPassword = (): string => {
    return this.password;
  };
  public setPassword = (newPassword: string): void => {
    this.password = newPassword;
  };

  public getDateOfCreation = (): Date => {
    return this.createdAt;
  };

  public getDateOfUpdate = (): Date => {
    return this.updatedAt;
  };
}

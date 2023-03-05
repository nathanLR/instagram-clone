import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ name: "user_name", nullable: false, length: 100 })
  private userName: string;

  @Column({ name: "user_email", nullable: false, length: 100 })
  private email: string;

  @Column({ name: "user_password", nullable: false })
  private password: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  private createdAt: Date;

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

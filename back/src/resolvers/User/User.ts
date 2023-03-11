import { User } from "../../entity";
import { Resolver, Ctx, Arg, Mutation, Query } from "type-graphql";
import { MyContext, validationEmail } from "../../types";
import argon2 from "argon2";
import {
  FieldError,
  UserInputLoginType,
  UserInputRegisterType,
  UserReturnType,
} from "./UtilityTypes";

@Resolver()
export class UserResolver {
  //register a new account
  @Mutation(() => UserReturnType)
  async register(
    @Arg("userData", () => UserInputRegisterType) userData: UserInputRegisterType,
    @Ctx() { em }: MyContext
  ): Promise<UserReturnType> {
    let errors: FieldError[] = [];
    const userAlreadyExist = await em.findOne(User, { where: { email: userData.email } });

    if (userAlreadyExist) {
      errors.push({
        field: "email",
        message: "This email address is already used.",
      });
    }
    if (!validationEmail.test(userData.email)) {
      errors.push({
        field: "email",
        message: "The email address provided is not correct",
      });
    }
    if (userData.userName.length <= 3) {
      errors.push({
        field: "userName",
        message: "Your username length must be greater then 3 characters.",
      });
    }
    if (userData.password.length <= 3) {
      errors.push({
        field: "password",
        message: "Your password is too short.",
      });
    }
    if (errors.length != 0) {
      return {
        error: errors,
      };
    }
    const newUser: User = new User();
    newUser.setUserName(userData.userName);
    newUser.setEmail(userData.email);

    const hashedPassword = await argon2.hash(userData.password);
    newUser.setPassword(hashedPassword);

    await em.save(newUser);
    return {
      user: newUser,
    };
  }

  @Mutation(() => UserReturnType)
  async login(
    @Arg("loginOptions", () => UserInputLoginType) loginOptions: UserInputLoginType,
    @Ctx() { em }: MyContext
  ): Promise<UserReturnType> {
    let errors: FieldError[] = [];

    const userExist = await em.findOne(User, { where: { email: loginOptions.email } });
    if (!userExist) {
      errors.push({
        field: "email",
        message: "This account doesn't exist.",
      });
      return {
        error: errors,
      };
    }
    const isPwValid = await argon2.verify(userExist.getPassword(), loginOptions.password);
    if (!isPwValid) {
      errors.push({
        field: "password",
        message: "The password is incorrect.",
      });
      return {
        error: errors,
      };
    }
    return {
      user: userExist,
    };
  }

  @Query(() => [User])
  getAllUsers(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User);
  }
}

import { User } from "../entity";
import { Resolver, Query, Ctx, Arg, Int, Mutation } from "type-graphql";
import { MyContext } from "src/types";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User);
  }

  @Query(() => User, { nullable: true })
  user(@Arg("id", () => Int) id: number, @Ctx() { em }: MyContext): Promise<User | null> {
    return em.findOne(User, {
      where: {
        id: id,
      },
    });
  }

  @Mutation(() => User)
  async createUser(
    @Arg("userName", () => String) userName: string,
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string,
    @Ctx() { em }: MyContext
  ): Promise<User> {
    const newUser = new User();
    newUser.setUserName(userName);
    newUser.setEmail(email);
    newUser.setPassword(password);
    await em.save(newUser);
    return newUser;
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(
    @Arg("id", () => Int) id: number,
    @Arg("userName", () => String, { nullable: true }) userName: string,
    @Arg("email", () => String, { nullable: true }) email: string,
    @Arg("password", () => String, { nullable: true }) password: string,
    @Ctx() { em }: MyContext
  ): Promise<User | null> {
    const userToUpdate = await em.findOne(User, { where: { id: id } });
    if (!userToUpdate) {
      return null;
    }
    if (typeof userName !== "undefined") {
      userToUpdate.setUserName(userName);
    }
    if (typeof email !== "undefined") {
      userToUpdate.setEmail(email);
    }
    if (typeof password !== "undefined") {
      userToUpdate.setPassword(password);
    }
    await em.save(userToUpdate);

    return userToUpdate;
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<User | null> {
    const userToDelete = await em.findOne(User, { where: { id: id } });
    if (!userToDelete) {
      return null;
    }
    return em.remove(userToDelete);
  }
}

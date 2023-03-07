import { User } from "../entity";
import { Resolver, Query, Ctx, Arg, Int } from "type-graphql";
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
}

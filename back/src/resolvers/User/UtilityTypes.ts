import { User } from "../../entity";
import { InputType, Field, ObjectType } from "type-graphql";

@ObjectType()
class FieldError {
  @Field(() => String)
  field: string;

  @Field(() => String)
  message: string;
}

@ObjectType()
class UserReturnType {
  @Field(() => [FieldError], { nullable: true })
  error?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
class UserInputRegisterType {
  @Field(() => String)
  userName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
class UserInputLoginType {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
export { UserInputRegisterType, UserInputLoginType, UserReturnType, FieldError };

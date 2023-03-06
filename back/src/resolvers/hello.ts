import { Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return "bonjour nathan";
  }
}
export default HelloResolver;

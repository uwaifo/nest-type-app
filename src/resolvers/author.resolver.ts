import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import Author from '../db/models/author.entity';
import AuthorInput from './input/author.input';

@Resolver()
class AuthorResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Author])
  public async authors(): Promise<Author[]> {
    return this.repoService.authorRepo.find();
  }
  @Query(() => Author, { nullable: true })
  public async author(@Args('id') id: string): Promise<Author> {
    // changed
    return this.repoService.authorRepo.findOne({ where: { id } });
  }

  @Mutation(() => Author)
  public async createAuthor(@Args('data') input: AuthorInput): Promise<Author> {
    const author = this.repoService.authorRepo.create({ name: input.name });
    return this.repoService.authorRepo.save(author);
  }
}
export default AuthorResolver;

/*
-----------------------
query{
  authors{
    id
    name
  }
}
------------------------
query{
  author(id:"ab0c246e-a404-47a5-a555-0a528105ded4"){
    id
    name
    createdAt
  }
}
---
query{
  author(id: "bfdcdf64-b157-4ddb-af64-ab8476a16b3a"){
    name
    updatedAt
  }
}
-----------------------
mutation {
  createAuthor(data: {
    name: "pzell alex"
  }) {
    id
    name
    createdAt
    updatedAt
  }
}
-------------------
*/

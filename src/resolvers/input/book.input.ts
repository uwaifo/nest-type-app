import { Field, InputType } from 'type-graphql';
import AuthorInput from './author.input';
//added for genre
import GenreInput from './genre.input';

@InputType()
class BookAuthorConnectInput {
  @Field()
  readonly id: string;
}

@InputType()
class BookAuthorInput {
  @Field({ nullable: true })
  readonly connect: BookAuthorConnectInput;

  @Field({ nullable: true })
  readonly create: AuthorInput;
}
// begin genre
/*
@InputType()
class BookGenreConnectInput {
  @Field()
  readonly id: number;
}

@InputType()
class BookGenreInput {
  @Field({ nullable: true })
  readonly connect: BookGenreConnectInput;

  @Field({ nullable: true })
  readonly create: GenreInput;
}
*/
//end genre

@InputType()
class BookInput {
  @Field()
  readonly title: string;

  @Field()
  readonly author: BookAuthorInput;

  @Field({nullable:true})
  readonly genre: number;
}

export default BookInput;

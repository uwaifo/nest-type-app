import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import RepoModule from './repo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import resolvers
import AuthorResolver from './resolvers/author.resolver';
import BookResolver from './resolvers/book.resolver';
import GenreResolver from './resolvers/genre.resolver';
import BookGenreResolver from './resolvers/book-genre.resolver';

//
const graphqlImports = [
  AuthorResolver,
  BookResolver,
  BookGenreResolver,
  GenreResolver,
];
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    ...graphqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'scheme.qql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import BookGenre from './book-genre.entity';
import Author from './author.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'books' })
export default class Book {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ name: 'author_id' })
  authorId: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // added genre field
  @Field({ nullable: true })
  @Column({ name: 'genre_id' })
  genre: number;

  @Field(() => Author)
  author: Author;
  // Associations

  @ManyToOne(() => Author, author => author.bookConnection, { primary: true })
  @JoinColumn({ name: 'author_id' })
  authorConnection: Promise<Author>;

  @OneToMany(() => BookGenre, bookGenre => bookGenre.genre)
  genreConnection: Promise<BookGenre[]>;
}

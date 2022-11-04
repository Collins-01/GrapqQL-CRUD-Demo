
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAuthorInput {
    username: string;
}

export class UpdateAuthorInput {
    id: string;
    username: string;
}

export class CreateBookInput {
    name: string;
    page: number;
}

export class UpdateBookInput {
    id: string;
    name: string;
    page: number;
}

export class Author {
    id: string;
    username: string;
}

export abstract class IQuery {
    abstract authors(): Nullable<Author>[] | Promise<Nullable<Author>[]>;

    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createAuthor(createAuthorInput: CreateAuthorInput): Author | Promise<Author>;

    abstract updateAuthor(updateAuthorInput: UpdateAuthorInput): Author | Promise<Author>;

    abstract removeAuthor(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract updateBook(updateBookInput: UpdateBookInput): Book | Promise<Book>;

    abstract removeBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export class Book {
    id: string;
    name: string;
    page: number;
}

type Nullable<T> = T | null;

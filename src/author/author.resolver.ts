import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAuthorInput, UpdateAuthorInput } from 'src/types/graphql';
import { AuthorService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation('createAuthor')
  create(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.create(createAuthorInput);
  }

  @Query('authors')
  findAll() {
    return this.authorService.findAll();
  }

  @Query('author')
  findOne(@Args('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Mutation('updateAuthor')
  update(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorService.update(updateAuthorInput);
  }

  @Mutation('removeAuthor')
  remove(@Args('id') id: string) {
    return this.authorService.remove(id);
  }
}

/*
# Write your query or mutation here
* Create an Author
mutation {
  createAuthor (createAuthorInput: {username: "Collins"}) {
    username,
    id
  }
}
* Get Single Author with Id
query {
  author (id: "cla1uo0tp0000icw23yta1a0k") {
    username,
    id
  }
}
* Update an Author
# Write your query or mutation here
mutation {
  updateAuthor (updateAuthorInput: {id: "cla1uozzk0002icgmjavspqqx", username: "Iron Mike"}) {
    username,
    id
  }
}
* Delete Author
# Write your query or mutation here
mutation {
  removeAuthor ( id: "cla1uozzk0002icgmjavspqqx") {
    username,
    id
  }
}
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthorInput, UpdateAuthorInput } from 'src/types/graphql';
// import { CreateAuthorInput } from './dto/create-author.input';
// import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}
  create({ username }: CreateAuthorInput) {
    return this.prisma.author.create({
      data: {
        username,
      },
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(id: string) {
    return this.prisma.author.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        username: true,
      },
    });
  }

  update({ id, username }: UpdateAuthorInput) {
    return this.prisma.author.update({
      data: {
        username: username,
      },
      where: {
        id: id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.author.delete({
      where: {
        id,
      },
    });
  }
}

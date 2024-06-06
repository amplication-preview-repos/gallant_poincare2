/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Comment as PrismaComment,
  Ticket as PrismaTicket,
} from "@prisma/client";

export class CommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CommentCountArgs, "select">): Promise<number> {
    return this.prisma.comment.count(args);
  }

  async comments<T extends Prisma.CommentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentFindManyArgs>
  ): Promise<PrismaComment[]> {
    return this.prisma.comment.findMany<Prisma.CommentFindManyArgs>(args);
  }
  async comment<T extends Prisma.CommentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentFindUniqueArgs>
  ): Promise<PrismaComment | null> {
    return this.prisma.comment.findUnique(args);
  }
  async createComment<T extends Prisma.CommentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentCreateArgs>
  ): Promise<PrismaComment> {
    return this.prisma.comment.create<T>(args);
  }
  async updateComment<T extends Prisma.CommentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentUpdateArgs>
  ): Promise<PrismaComment> {
    return this.prisma.comment.update<T>(args);
  }
  async deleteComment<T extends Prisma.CommentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentDeleteArgs>
  ): Promise<PrismaComment> {
    return this.prisma.comment.delete(args);
  }

  async getTicket(parentId: string): Promise<PrismaTicket | null> {
    return this.prisma.comment
      .findUnique({
        where: { id: parentId },
      })
      .ticket();
  }
}

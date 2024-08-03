import { prismaClient } from '../lib/prisma';

interface ICreateDTO {
  accountId: string;
  token: string;
}

export class RefreshTokenRepository {
  static async create({ accountId, token }: ICreateDTO) {
    return prismaClient.refreshToken.create({
      data: {
        accountId,
        token
      }
    });
  }

  static delete(token: string) {
    return prismaClient.refreshToken.deleteMany({
      where: { token }
    });
  }

  static findByToken(token: string) {
    return prismaClient.refreshToken.findFirst({
      where: { token }
    });
  }
  static deleteAllByAccountId(accountId: string) {
    return prismaClient.refreshToken.deleteMany({
      where: { accountId }
    });
  }
}

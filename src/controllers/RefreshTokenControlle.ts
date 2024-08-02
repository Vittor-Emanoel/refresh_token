import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';


export class RefreshTokenController {
  static schema = z.object({
    refreshToken: z.string(),
  });

  static handle = async (request: FastifyRequest, reply: FastifyReply) => {
    //segue o fluxo
  }
}

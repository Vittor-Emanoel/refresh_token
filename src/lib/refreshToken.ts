import { sign } from "jsonwebtoken";

import { env } from "../config/env";

export class RefreshToken {
  static generate(accountId: string) {
      return sign(
        {sub: accountId},
        env.REFRESH_TOKEN_SECRET, {
          expiresIn: '10d'
        }
      )
  }

  static validate() {

  }
}

import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  async getUser() {
    const user = {
      email: 'bodunrindavidbond@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/masterchief-Dave/hng-12-stage-0',
    }
    return user
  }
}

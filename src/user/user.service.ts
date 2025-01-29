import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  async getUser() {
    const user = {
      email: 'bodunrindavidbond@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: '',
    }
    return user
  }
}

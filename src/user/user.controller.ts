import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  getUser() {
    const response = this.userService.getUser()
    return response
  }
}

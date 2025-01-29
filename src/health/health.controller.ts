import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { HealthService } from './health.service'

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  getHealth() {
    const response = this.healthService.getHealth()
    return response
  }
}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthController } from './health/health.controller'
import { HealthService } from './health/health.service'
import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'

@Module({
  imports: [],
  controllers: [AppController, HealthController, UserController],
  providers: [AppService, HealthService, UserService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common'

@Injectable()
export class HealthService {
  async getHealth() {
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()

    const newDate = `${day}/${month}/${year}`
    const backend_health = {
      timestamp: newDate,
      message: 'Server is up and running',
    }

    return backend_health
  }
}

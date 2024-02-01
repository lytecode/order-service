import { Controller, Get } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) { }

  @Get()
  findAll() {
    return this.pharmacyService.findAll();
  }
}

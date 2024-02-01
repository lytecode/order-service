import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PharmacyService {
  async findAll() {
    const pharmacyUrls = [
      'http://pharmacy-mock-service-env.eba-xzj3bbnm.us-east-1.elasticbeanstalk.com/pharmacy',
    ];

    const requests = pharmacyUrls.map((url) => axios.get(url));

    const pharmacies = [];
    const results = await Promise.allSettled(requests);
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        pharmacies.push(...result.value.data);
      }
    });

    return pharmacies;
  }
}

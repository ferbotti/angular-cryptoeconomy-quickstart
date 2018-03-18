import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Bitcoin' },
      { id: 12, name: 'Ethereum' },
      { id: 13, name: 'Ripple' },
      { id: 14, name: 'Bitcoin Cash' },
      { id: 15, name: 'Litecoin' },
      { id: 16, name: 'Neo' },
      { id: 17, name: 'Cardano' },
      { id: 18, name: 'Stellar' },
      { id: 19, name: 'Iota' },
      { id: 20, name: 'EOS' }
    ];
    return {heroes};
  }
}
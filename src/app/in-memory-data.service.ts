import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 2481002741, departamentID: 1, secondname: 'ХАМСЬКА', firstname: 'ЛЮДМИЛА', lastname: 'ОЛЕКСАНДРІВНА', sex: false, status: '', birthdate: new Date(1967, 12, 5), date: null  },
      { id: 2332404442, departamentID: 2, secondname: 'ВАЛЄЄВА', firstname: 'АНТОНІНА', lastname: 'ВАСИЛІВНА', sex: false, status: '', birthdate: new Date(1963, 11, 10), date: new Date(2017, 5, 3) },
      { id: 2656603544, departamentID: 1, secondname: 'ПАСТУХОВА', firstname: 'ЛАРИСА', lastname: 'МИКОЛАЇВНА', sex: false, status: '', birthdate: new Date(1972, 9, 25), date: null },
      { id: 2285006085, departamentID: 1, secondname: 'ПРИЛУЦЬКА', firstname: 'ЛЮДМИЛА', lastname: 'БЕРНАТІВНА', sex: false, status: '', birthdate: new Date(1962, 7, 24), date: null },
      { id: 3141915525, departamentID: 3, secondname: 'НЕЧИПОРУК', firstname: 'ЛЮДМИЛА', lastname: 'БРОНІСЛАВІВНА', sex: false, status: '', birthdate: new Date(1986, 1, 8), date: new Date(2017, 5, 3) },
      { id: 2983012348, departamentID: 3, secondname: 'СУХОВЕЦЬКА', firstname: 'НАТАЛІЯ', lastname: 'МИКОЛАЇВНА', sex: false, status: '', birthdate: new Date(1981, 9, 2), date: new Date(2017, 5, 3) },
      { id: 2863616923, departamentID: 4, secondname: 'ВОРОНКА', firstname: 'ЛЮДМИЛА', lastname: 'МИКОЛАЇВНА', sex: false, status: '', birthdate: new Date(1978, 5, 27), date: new Date(2017, 5, 3) },
      { id: 2365305301, departamentID: 4, secondname: 'ЗОРИХІНА', firstname: 'СВІТЛАНА', lastname: 'ГЕННАДІЇВНА', sex: false, status: '', birthdate: new Date(1964, 10, 4), date: new Date(2017, 5, 3) },
      { id: 2899323801, departamentID: 4, secondname: 'БАСОК', firstname: 'НАТАЛІЯ', lastname: 'АНАТОЛІЇВНА', sex: false, status: '', birthdate: new Date(1979, 5, 19), date: new Date(2017, 5, 3) },
      { id: 3116421247, departamentID: 1, secondname: 'ДМИТРЮК', firstname: 'НАТАЛІЯ', lastname: 'ВІКТОРІВНА', sex: false, status: '', birthdate: new Date(1985, 4, 28), date: new Date(2017, 5, 3) }
    ];
    return {members};
  }
}
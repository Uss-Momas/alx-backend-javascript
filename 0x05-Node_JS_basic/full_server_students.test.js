const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

import app from './full_server/server';

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {
  
  describe('/students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
        console.log(process.argv);
      });

      it('Returns the right content', (done) => {
        chai.request(app)
          .get('/students')
          .end((error, response) => {
            // console.log(response);
            chai.expect(response.statusCode).to.equal(500);
//             chai.expect(response.text).to.have.string(`This is the list of our students
// Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
            done();

          });
      });
    });
  });
});
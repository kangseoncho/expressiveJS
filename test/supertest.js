const usingExpressive = true;

// const request = require('supertest');
// const express = usingExpressive ? require('./../expressive.js') : require('express');

// const app = express();





// Comment out above and uncomment below to run tests with npm test

const request = require('supertest');
// app = require('./../test-servers/mary-server.js')

// app.get('/user', function(req, res) {
//   res.status(800).json({ name: 'tobi' });
// });

// app.get('/user', function(req, res) {
//   res.status(800).json({ name: 'tobi' });
// });

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });


// //TESTS BASIC GET FUNCTIONALITY
// describe('GET /user', function () {
//   it('respond with json', function (done) {
//     request(app)
//       .get('/')
//       // .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });

// describe("GET/redirect", function () {
//   it('gets status code 302', function (done) {
//     request(app)
//       .get('/redirect')
//       .expect(function (res) {
//         res.body.methodRoute = res.body.methodRoute.toLowerCase();
//       })
//       .expect(302, {
//         methodRoute: 'redirect2'
//       }, done);
//   });
// });

// describe("Get /", function () {
//   it('home name should be a match to "venogram"', function (done) {
//     request(app)
//       .get('/')
//       .expect(function (res) {
//         res.body.name = res.body.name.toLowerCase();
//       })
//       .expect(200, {
//         name: 'venogram'
//       }, done)
//   })
// })




// const request = require('supertest');
const path = require('path');
//  const express = require('./../expressive.js');
const express = usingExpressive ? require('./../expressive.js') : require('express');
// console.log(express)
const app = express();
// const app = require('./mary-server.js')
// const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:8080`
const expect = require('expect')

app.get('/', function (req, res) {
  // res.send(200)
  res.json({ name: 'mary' })
})
describe('Get/', function () {
  it('should respond with status code 200', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      // .expect(200, done)
    done();
  });
});


describe('GET/redirect', function () {
  it('should keep redirecting until res.body.name = "venogram"', function (done) {
    request(HOST)
      .get('/redirect')
      .expect(function (res) {
        res.body.name = 'venogram';
      })
    done();
  });
});

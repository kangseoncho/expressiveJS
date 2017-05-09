/*
  TODO: Should config file control what is written to expressive.json
  or should config file control how client parses expressive.json
*/

const config = {
  entry: './test-servers/glenn-server.js', //relative path to server file to test
  host: 'http://localhost:3000', // port the dev server listens to
  testRoutes: [
    {method: "GET", uri:"/", jar: true}
  ], // specify routes to test. objects must be formatted according to the request module options
  useDefaults: true, // if false, default config will not augment provided config
  silentServer: false, // if false, xpr command will log server's log statements
  wipeCookies: false, // if true, cookies are cleared in between each request

  //Should test with database calls
  abandonRequest: 3, // time (per request) to wait before abandoning the request

  // YET TO IMPLEMENT CONFIG SETTINGS
  watch: ['headers', 'response body', 'request data'], // flag certain things in req/res objects to follow
}

module.exports = config;

const setCorsHeaders = (response, config) => {
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Headers', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('X-Content-Type-Options', 'nosniff');
}

module.exports = setCorsHeaders

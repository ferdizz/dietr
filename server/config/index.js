let db_uri = 'mongodb://localhost:27017/db';
if (typeof global.it === 'function')
  db_uri = 'mongodb://localhost:27017/testdb';

module.exports = {
  'port': process.env.PORT || 3001,
  'db_uri': db_uri
}

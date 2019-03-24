const dbUser = "admin";
const dbPassword = "Posol2512";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@foody-cluster-tbz7x.mongodb.net/test?retryWrites=true`
};

module.exports = config;

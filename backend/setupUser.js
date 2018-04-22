const User = require("./data");

module.exports = function(app) {
  const starterUsers = [
    {
      id: "5c752ca2533390c691372ace",
      firstName: "John",
      lastName: "Doe",
      sex: "Male",
      age: 44,

      password: "123",
      repeatPassword: "123"
    },
    {
      id: "5c752cb6533390c691372acf",
      firstName: "Jack",
      lastName: "Jones",
      sex: "Male",
      age: 28,
      password: "123",
      repeatPassword: "123"
    },
    {
      d: "5c752cc7533390c691372ad0",
      firstName: "Peter",
      lastName: "Pan",
      sex: "Male",
      age: 37,
      password: "123",
      repeatPassword: "123"
    },
    {
      d: "5c752ce4533390c691372ad1",
      firstName: "Peter",
      lastName: "Pan",
      sex: "Male",
      age: 37,
      password: "123",
      repeatPassword: "123"
    }
  ];
  User.create(starterUsers, function(err, results) {
    if (err) console.log(err);
    console.log(results);
  });
};

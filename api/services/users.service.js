const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: faker.person.gender(),
      });
    }
  }

  create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('User Not Found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('User Not Found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;

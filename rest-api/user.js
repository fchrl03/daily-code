const users = require('./utils/api.json');

let records = users;
class User {
  constructor(params) {
    this.id = this._lastId();
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.isActive = params.isActive;
  }

  _lastId() {
    return users.length + 1;
  }

  static update(body, params) {
    records = records.filter((i) => i.id === parseInt(params.id));

    body.name && (this.name = body.name);
    body.email && (this.email = body.email);
    body.password && (this.password = body.password);
    body.isActive && (this.isActive = body.isActive);

    records = this;
    // const updatedUser = records.map((user) => {
    //   if (user.id === parseInt(params.id)) {
    //     user.name = body.name;
    //     user.email = body.email;
    //     user.password = body.password;
    //     user.isActive = body.isActive;
    //   }

    //   return user;
    // });
    console.log(params.id);

    return this;
  }

  static delete(id) {
    records = records.filter((i) => i.id !== parseInt(id));
  }

  static create(params) {
    const user = new this(params);

    records.push(user);

    return user;
  }

  static find(id) {
    const user = records.find((i) => i.id === Number(id));
    if (!user) {
      return null;
    }

    return user;
  }

  static list() {
    return records;
  }
}

module.exports = User;

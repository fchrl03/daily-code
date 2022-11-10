const users = require('./utils/api.json');

class User {
  static records = users;

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

  update(params) {
    const idx = this.constructor.records.findIndex((i) => i.id === this.id);

    params.name && (this.name = params.name);
    params.email && (this.email = params.email);
    params.password && (this.password = params.password);
    params.isActive && (this.isActive = params.isActive);

    this.constructor.records[idx] = this;

    return this;
  }

  delete() {
    this.constructor.records = this.constructor.records.filter((i) => i.id !== this.id);
  }

  static create(params) {
    const user = new this(params);

    this.records.push(user);

    return user;
  }

  static find(id) {
    const user = this.records.find((i) => i.id === Number(id));
    if (!user) {
      return null;
    }

    return user;
  }

  static list() {
    return this.records;
  }
}

module.exports = User;

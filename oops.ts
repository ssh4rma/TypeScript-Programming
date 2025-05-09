//getter setter
class User {
  private _email : string;
  constructor(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    if(newEmail.includes('@')) {
      this._email = newEmail;
    } else {
      throw new Error('Email is not valid');
    }
  }
}

const user = new User("alice@example.com");
console.log(user.email);
user.email = "bob@example.com";
console.log(user.email);
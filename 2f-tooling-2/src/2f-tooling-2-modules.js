const _secret = new WeakMap(); // iterable dictionary key:value data structure

//export
export class Locker {
  constructor(secret) {
    _secret.set(this, secret);
  }

  unlock() {
    console.log(`The secret is ${_secret.get(this)}!`);
  }
}

// let s = new Locker('cwdv');
// s.unlock();

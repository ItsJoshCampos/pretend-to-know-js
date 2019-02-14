import { Locker } from './2f-tooling-2-modules';

const secret = new Locker('password');
secret.unlock();

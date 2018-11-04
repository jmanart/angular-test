import { UserCredentials } from './user-credentials.model';

describe('UserCredentials', () => {
  describe('empty', () => {
    it('should be true with no values', () => {
      const userCredentials = new UserCredentials();
      expect(userCredentials.empty).toBeTruthy();
    });
    it('should be false with any value', () => {
      const userCredentials = new UserCredentials();
      userCredentials.email = 'email';
      expect(userCredentials.empty).toBeFalsy();
      userCredentials.password = 'password';
      expect(userCredentials.empty).toBeFalsy();
      userCredentials.email = '';
      userCredentials.password = null;
      expect(userCredentials.empty).toBeTruthy();
    });
  });
});

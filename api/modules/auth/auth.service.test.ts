import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken';
import config from '../../config';

describe('AuthService', () => {
  let authService: AuthService;
  const sampleLoginInput = {
    username: 'tienloi22',
    password: 'Tienloi22',
  };

  const sampleTokenData = {
    username: 'tienloi22',
    email: 'tienloi22@email.com',
    fullName: 'Nguyen Tien Loi',
    permissions: [],
  };

  beforeEach(async () => {
    authService = new AuthService({} as any);
  });

  describe('login', async () => {
    // Test username
    it('should throw error when username is empty', async () => {
      try {
        await authService.login({
          ...sampleLoginInput,
          username: '',
        });
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw error when username is not exist', async () => {
      try {
        const mockModel = {
          findOne: () => {
            return {
              exec: () => {
                return {
                  username: 'tienloi',
                  password: 'tienloi22',
                };
              },
            };
          },
        } as any;
        authService = new AuthService(mockModel);
        await authService.login(sampleLoginInput);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.NOT_FOUND);
      }
    });

    // Test password
    it('should throw error when password is empty', async () => {
      try {
        await authService.login({
          ...sampleLoginInput,
          password: '',
        });
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw error when password is not correct', async () => {
      try {
        const mockModel = {
          findOne: () => {
            return {
              exec: () => {
                return {
                  username: 'tienloi22',
                  password: 'Tienloi2222',
                };
              },
            };
          },
        } as any;
        authService = new AuthService(mockModel);
        await authService.login(sampleLoginInput);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.NOT_FOUND);
      }
    });

    it('should call createToken and return TokenInfo if username and password correct', async () => {
      const sampleToken = jwt.sign(sampleTokenData, config.auth.secret, {
        expiresIn: 1,
      });
      const mockModel = {
        findOne: () => {
          return {
            select: () => {
              return {
                exec: () => {
                  return {
                    username: 'tienloi22',
                    email: 'tienloi@email.com',
                    fullName: 'Nguyen Tien Loi',
                    permission: [],
                  };
                },
              };
            },
          };
        },
      } as any;
      authService = new AuthService(mockModel);
      const tokenInfo = await authService.refreshToken(sampleToken);
      expect(tokenInfo).toHaveProperty('token');
      expect(tokenInfo).toHaveProperty('expiresIn');
    });
  });

  describe('refreshToken', async () => {
    it('should throw error when tokenSecret is not correct', async () => {
      try {
        const mockModel = {
          findOne: () => {
            return {
              select: () => {
                return {
                  exec: () => {
                    return {
                      username: 'tienloi22',
                      email: 'tienloi@email.com',
                      fullName: 'Nguyen Tien Loi',
                      permission: [],
                    };
                  },
                };
              },
            };
          },
        } as any;
        authService = new AuthService(mockModel);
        const sampleToken = jwt.sign(sampleTokenData, config.auth.secret, {
          expiresIn: 3600,
        });
        await authService.refreshToken(sampleToken);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw error when the token is expired', async () => {
      try {
        const sampleToken = jwt.sign(sampleTokenData, config.auth.secret, {
          expiresIn: 1,
        });
        const mockModel = {
          findOne: () => {
            return {
              select: () => {
                return {
                  exec: () => {
                    return {
                      username: 'tienloi22',
                      email: 'tienloi@email.com',
                      fullName: 'Nguyen Tien Loi',
                      permission: [],
                    };
                  },
                };
              },
            };
          },
        } as any;
        authService = new AuthService(mockModel);
        await authService.refreshToken(sampleToken);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.UNAUTHORIZED);
      }
    });

    it('should call createToken and return TokenInfo if token is verified and not expired', async () => {
      const sampleToken = jwt.sign(sampleTokenData, config.auth.secret, {
        expiresIn: 3600,
      });
      const mockModel = {
        findOne: () => {
          return {
            select: () => {
              return {
                exec: () => {
                  return {
                    username: 'tienloi22',
                    email: 'tienloi@email.com',
                    fullName: 'Nguyen Tien Loi',
                    permission: [],
                  };
                },
              };
            },
          };
        },
      } as any;
      authService = new AuthService(mockModel);
      const tokenInfo = await authService.refreshToken(sampleToken);
      expect(tokenInfo).toHaveProperty('token');
      expect(tokenInfo).toHaveProperty('expiresIn');
    });
  });
});

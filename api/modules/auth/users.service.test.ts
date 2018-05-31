import { HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces';

describe('UsersService', () => {
  let usersService: UsersService;
  const sampleUser = {
    email: 'quangthinhtran3588@gmail.com',
    firstName: 'Thinh',
    lastName: 'tran',
    middleName: 'Quang',
    password: 'Abc@12345!',
    username: 'bongusagi',
  };

  beforeEach(async () => {
    usersService = new UsersService({} as any);
  });

  describe('create', () => {
    it('should throw exception when user name is blank', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          username: '',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when user name is null', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          username: null,
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when username is too short (less than 6 characters)', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          username: 'a',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when username is too long (more than 30 characters)', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          username: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when username contains forbidden charaters', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          username: 'thinh tran',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when username has been used already', async () => {
      try {
        const mockModel = {
          findOne: () => {
            return {
              exec: () => ({
                ...sampleUser,
                username: 'tienloi22',
              }),
            };
          },
        } as any;
        usersService = new UsersService(mockModel);
        await usersService.create({
          ...sampleUser,
          username: 'tienloi22',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.UNPROCESSABLE_ENTITY);
      }
    });

    // test password
    it('should throw exception when password is blank', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: '',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when password is null', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: null,
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when password is too short (less than 6 characters)', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: 'q',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when password isnt follow the pattern (contain at leat 1 uppercase letter)', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: 'qqqqqqq',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when password isnt follow the pattern (contain at leat 1 lowercase letter)', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: 'QQQQQQQQ',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when password isnt follow the pattern (contain at leat 1 number)', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: 'TIENloi',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when password contain forbidden characters', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          password: ' #$%',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    // test email address
    it('should throw exception when email is empty', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          email: '',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when email is null', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          email: null,
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when email is not a valid email address', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          email: 'abcezgmail.com',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    // test lastName
    it('should throw exception when lastName is blank', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          lastName: '',
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should throw exception when lastName is null', async () => {
      try {
        await usersService.create({
          ...sampleUser,
          lastName: null,
        } as User);
      } catch (e) {
        expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });

    it('should run ok when input is valid', async () => {
      try {
        const saveMock = jest.fn();
        function mockModel(): void {
          this.save = saveMock;
        }
        (mockModel as any).findOne = () => {
          return {
            exec: () => null,
          };
        };

        usersService = new UsersService(mockModel as any);
        await usersService.create(sampleUser as User);
        expect(saveMock).toBeCalled();
      } catch (e) {
        throw e;
      }
    });
  });
});

import { Component } from '@nestjs/common';
import * as passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import { UsersService } from '../users.service';
import { User } from '../interfaces';
import config from '../../../config';

@Component()
export class GoogleAuthService extends Strategy {
  constructor(private readonly usersService: UsersService) {
    super(
      {
        clientID: config.auth.googleOauth.clientID,
        clientSecret: config.auth.googleOauth.clientSecret,
        callbackURL: config.auth.googleOauth.callbackURL,
      },
      async (_token, _refreshToken, profile, done) => {
        const authInfo = await this.usersService.createWithExternalCredentials(
          profile,
          '',
        );
        return done(null, authInfo.user, authInfo.info);
      },
    );

    passport.use(this as any);

    passport.serializeUser((user: User, done) => {
      done(null, user.id);
    });

    passport.deserializeUser(async (id: string, done) => {
      const user = await this.usersService.findById(id);
      done(null, user);
    });

    // tslint:disable-next-line:no-console
    console.log(config.swagger.title);
  }
}

import { Component } from '@nestjs/common';
import * as passport from 'passport';
import { Strategy } from 'passport-facebook';
import { UsersService } from '../users.service';
import { User } from '../interfaces';
import config from '../../../config';

@Component()
export class FacebookAuthService extends Strategy {
  constructor(private readonly usersService: UsersService) {
    super(
      {
        clientID: config.auth.facebookOauth.clientID,
        clientSecret: config.auth.facebookOauth.clientSecret,
        callbackURL: config.auth.facebookOauth.callbackURL,
        profileFields: ['email'],
      },
      async (_token, _refreshToken, profile, done) => {
        const authInfo = await this.usersService.createWithExternalCredentials(
          profile,
          '',
        );
        return done(null, authInfo.user, authInfo.info);
      },
    );

    passport.use(this);

    passport.serializeUser((user: User, done) => {
      done(null, user.id);
    });

    passport.deserializeUser(async (id: string, done) => {
      const user = await this.usersService.findById(id);
      done(null, user);
    });
  }
}

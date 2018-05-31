import {
  Module,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RolesService } from './roles.service';
import { usersProviders } from './providers/users.provider';
import { rolesProviders } from './providers/roles.provider';
import * as passport from 'passport';
import * as session from 'express-session';
import { FacebookAuthService } from './oauth-services/facebook.strategy';
import { GoogleAuthService } from './oauth-services/google.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../../core/databases/database.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { RolesController } from './roles.controller';

@Module({
  components: [
    ...usersProviders,
    ...rolesProviders,
    UsersService,
    RolesService,
    AuthService,
    FacebookAuthService,
    GoogleAuthService,
    ProfileService,
  ],
  controllers: [
    UsersController,
    AuthController,
    ProfileController,
    RolesController,
  ],
  imports: [DatabaseModule],
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(
        session({
          secret: 'duyanhv',
          resave: false,
          saveUninitialized: true,
          cookie: { secure: true },
        }),
      )
      .forRoutes(UsersController)
      .apply([passport.initialize(), passport.session()])
      .forRoutes(UsersController)
      .apply(passport.authenticate('facebook'))
      .forRoutes('/users/auth/facebook') // { path: '/users/auth/facebook', method: RequestMethod.GET })
      .apply((req, res, next) => {
        passport.authenticate('facebook', (_error, _user, _info) => {
          res.send('Success');
        })(req, res, next);
      })
      .forRoutes('/users/auth/facebookCallback')
      // {
      //   path: '/users/auth/facebookCallback',
      //   method: RequestMethod.GET,
      // })
      .apply(passport.authenticate('google', { scope: ['profile', 'email'] }))
      .forRoutes('/users/auth/google') // { path: '/users/auth/google', method: RequestMethod.GET })
      .apply((req, res, next) => {
        passport.authenticate('google', (_error, _user, _info) => {
          res.send('Success');
        })(req, res, next);
      })
      .forRoutes('/users/auth/googleCallback');
      // {
      //   path: '/users/auth/googleCallback',
      //   method: RequestMethod.GET,
      // });
  }
}

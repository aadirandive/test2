import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/app/configuration';
import { validationSchema } from './config/app/validation.schema';
import { TypeOrmConfigService } from './config/databse/mysql.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/env/${process.env.APP_ENV}.env`,
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),

    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ContactModule,
  ],
})
export class AppModule {}

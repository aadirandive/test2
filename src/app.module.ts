import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact/contact.entity';

import * as cors from 'cors';
import { Connection } from 'typeorm';

@Module({
  imports: [
    ContactModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Harsh@123',
      database: 'arttheme',
      entities: [Contact],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Contact } from './contact.entity';
import { ContactController } from './controllers/contact/contact.controller';
import { ContactService } from './services/contact/contact.service';
import { EmailService } from 'src/email/services/email/email.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService , EmailService],
})
export class ContactModule {}

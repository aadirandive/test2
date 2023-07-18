import { Controller, Post, Body } from '@nestjs/common';
import { Contact } from 'src/contact/contact.entity';
import { ContactService } from 'src/contact/services/contact/contact.service';
import { EmailService } from 'src/email/services/email/email.service';

@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  createContact(@Body() contact: Contact) {
    this.contactService.createContact(contact);

    const { name, email, contact1, message } = contact;
    this.emailService.sendContactForm(name, email, contact1, message);

    return 'Contact created and email sent';
  }
}

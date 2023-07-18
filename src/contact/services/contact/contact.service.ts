import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/contact/contact.entity';
import { CreateContactDto } from 'src/contact/dto/CreateContact.dto';

import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  createContact(createContactDto: CreateContactDto) {
    const { name, email, contact1 ,message } = createContactDto;
    const contact = new Contact();
    contact.name = name;
    contact.email = email;
    contact.contact1 = contact1;
    contact.message = message;
    return this.contactRepository.save(contact);
  }

  getContacts() {
    return this.contactRepository.find();
  }
}

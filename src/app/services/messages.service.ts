import {Injectable} from '@angular/core';
import {Message} from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  // tslint:disable-next-line:ban-types
  messages: Message[];

  constructor() {
    this.messages = [];
    this.messages.push(
      {
        type: 'CREATE',
        message: 'دانش آموز با موفقیت ایجاد شد.'
      },
      {
        type: 'EDIT',
        message: 'دانش آموز با موفقیت ویرایش شد.'
      },
      {
        type: 'VIEW',
        message: 'دانش آموز با موفقیت نمایش داده شد.'
      }
    );
  }

  // tslint:disable-next-line:typedef
  add(message: string, type: 'VIEW' | 'CREATE' | 'EDIT') {
    this.messages.push(
      {message, type}
    );
  }

  showMessage(type: 'VIEW' | 'CREATE' | 'EDIT'): string {
    const filteredMessages = this.messages.filter(message => {
      return message.type === type;
    });
    return filteredMessages[0].message;
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.messages = [];
  }
}

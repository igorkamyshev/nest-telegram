import { Injectable, Inject } from '@nestjs/common';
import { Chat } from 'telegraf/typings/telegram-types';
import { merge } from 'lodash';

import { TokenInjectionToken } from './TokenInjectionToken';
import { TelegramModuleOptionsFactory } from './TelegramModuleOptionsFactory';

const Telegram = require('telegraf/telegram');

@Injectable()
export class TelegramClient {
  private telegram: any;

  public constructor(
    @Inject(TokenInjectionToken) factory: TelegramModuleOptionsFactory,
  ) {
    const { token } = factory.createOptions();

    this.telegram = new Telegram(token);
  }

  public async sendMessage(
    chatId: string | number,
    text: string,
    options?: object,
  ): Promise<void> {
    await this.telegram.sendMessage(chatId, text, options);
  }

  public async sendMarkdown(
    chatId: string | number,
    markdown: string,
    options?: object,
  ): Promise<void> {
    await this.telegram.sendMessage(
      chatId,
      markdown,
      merge(
        {
          parse_mode: 'Markdown',
        },
        options,
      ),
    );
  }

  public async getChat(chatId: string | number): Promise<Chat> {
    return this.telegram.getChat(chatId);
  }
}

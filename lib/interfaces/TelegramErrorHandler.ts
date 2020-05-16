import { Context } from 'telegraf'

export interface TelegramErrorHandler<E = any> {
  catch(ctx: Context, error: E): Promise<void>
}

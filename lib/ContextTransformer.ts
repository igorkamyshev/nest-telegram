import { Context } from 'telegraf'

export interface ContextTransformer<T = any> {
  transform: (ctx: Context) => Promise<T>
}

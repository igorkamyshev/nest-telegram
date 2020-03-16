import { ChatPhoto } from './ChatPhoto'
import { ChatPermissions } from './ChatPermissions';
import { Message } from './Message';

export interface TelegramChat {
  id: number
  type: string
  title?: string
  username?: string
  first_name?: string
  last_name?: string
  photo?: ChatPhoto
  description?: string
  invite_link?: string
  pinned_message?: Message
  permissions?: ChatPermissions
  slow_mode_delay?: number
  sticker_set_name?: string
  can_set_sticker_set?: boolean
  [key: string]: any
}
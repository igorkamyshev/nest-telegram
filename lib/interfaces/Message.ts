import { TelegramChat } from './TelegramChat'

export interface Message {
  message_id: number
  date: number
  chat: TelegramChat
  caption_entities?: any[]
  from?: any
  entities?: any[]
  forward_from?: any
  forward_from_chat?: TelegramChat
  forward_from_message_id?: number
  forward_signature?: string
  forward_sender_name?: string
  forward_date?: number
  reply_to_message?: Message
  edit_date?: number
  media_group_id?: string
  author_signature?: string
  text?: string
  audio?: any
  document?: any
  animation?: any
  game?: any
  photo: any[]
  sticker?: any
  video?: any
  voice?: any
  video_note?: any
  caption?: string
  contact?: any
  location?: any
  venue?: any
  poll?: any
  new_chat_members?: any[]
  left_chat_member?: any
  new_chat_title?: string
  new_chat_photo?: any[]
  delete_chat_photo?: true
  group_chat_created?: true
  supergroup_chat_created?: true
  channel_chat_created?: true
  migrate_to_chat_id?: number
  migrate_from_chat_id?: number
  pinned_message?: Message
  invoice?: any
  successful_payment?: any
  connected_website?: string
  passport_data?: any
  reply_markup?: any
  [key: string]: any
}
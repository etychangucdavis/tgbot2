import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { findChat } from '../models/chat'
import { loc } from '../helpers/locale'
import { getChatIdForConfig } from '../helpers/getChatIdForConfig'

export function setupSubscribe(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(['handsomecarry', 'imsohandsome'], async (ctx) => {
    // Check if admin
    const isAdmin = await checkIfAdmin(ctx)
    if (!isAdmin) return
    // Get chat
    const chat = await findChat(ctx.chat.id)
    // Reply
    const text = "handsome";
    ctx.reply(loc(text, chat.language), {
    disable_notification: true,})
    ctx.replyWithPhoto('https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-golden-fashion-shiny-cosmetics-display-background-image_210474.jpg')
  })
}

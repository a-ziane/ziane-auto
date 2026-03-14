export async function sendTelegramOrder(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return { ok: false, error: 'Missing Telegram credentials' }
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    }
  )

  if (!response.ok) {
    return { ok: false, error: 'Telegram request failed' }
  }

  return { ok: true }
}

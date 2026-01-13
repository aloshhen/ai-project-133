export const isTelegramContext = () => {
  return typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp;
}
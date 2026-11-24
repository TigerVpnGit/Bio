const LINKS_DATA = [
  {
    id: 'telegram-channel',
    name: { fa: 'کانال تلگرام', en: 'Telegram Channel' },
    desc: { fa: 'اخبار، آپدیت و اطلاع‌رسانی‌ها', en: 'News, updates & announcements' },
    url: 'https://t.me/TigerVPN',
    handle: '@TigerVPN',
    cat: 'channel',
    brand: '#229ED9',
    badge: { fa: 'رسمی', en: 'Official' },
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 3 2 10.5l6 2L18.5 5 9 14l1 6 4.5-4.5L20 20z"/></svg>'
  },
  {
    id: 'telegram-support',
    name: { fa: 'پشتیبانی تلگرام', en: 'Telegram Support' },
    desc: { fa: 'پاسخگویی ۲۴ ساعته به سوالات', en: '24/7 answers to your questions' },
    url: 'https://t.me/TigerVPNSupport',
    handle: '@TigerVPNSupport',
    cat: 'support',
    brand: '#229ED9',
    badge: { fa: '۲۴/۷', en: '24/7' },
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 3 2 10.5l6 2L18.5 5 9 14l1 6 4.5-4.5L20 20z"/></svg>'
  },
  {
    id: 'telegram-bot',
    name: { fa: 'ربات فروش', en: 'Sales Bot' },
    desc: { fa: 'خرید آنی و خودکار اشتراک', en: 'Instant & automatic subscription purchase' },
    url: 'https://t.me/TigerVPNBot',
    handle: '@TigerVPNBot',
    cat: 'support',
    brand: '#4CAF50',
    badge: { fa: 'بات', en: 'Bot' },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="12" rx="3"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M12 8V4M9 4h6"/></svg>'
  },
  {
    id: 'instagram',
    name: { fa: 'اینستاگرام', en: 'Instagram' },
    desc: { fa: 'پست‌ها، استوری و ریلز', en: 'Posts, stories & reels' },
    url: 'https://instagram.com/tigervpn',
    handle: '@tigervpn',
    cat: 'social',
    brand: '#E1306C',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
  },
  {
    id: 'twitter',
    name: { fa: 'توییتر / X', en: 'Twitter / X' },
    desc: { fa: 'اطلاعیه‌های سریع و تیکت', en: 'Quick announcements & tickets' },
    url: 'https://x.com/tigervpn',
    handle: '@tigervpn',
    cat: 'social',
    brand: '#1DA1F2',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6z"/></svg>'
  },
  {
    id: 'youtube',
    name: { fa: 'یوتیوب', en: 'YouTube' },
    desc: { fa: 'آموزش اتصال و تنظیمات', en: 'Setup & connection tutorials' },
    url: 'https://youtube.com/@TigerVPN',
    handle: '@TigerVPN',
    cat: 'channel',
    brand: '#FF0000',
    badge: { fa: 'آموزش', en: 'Tutorial' },
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C17.2 3.7 12 3.7 12 3.7s-5.2 0-8.1.2c-.4.1-1.3.1-2.1.9C1.2 5.5 1 7 1 7S.8 8.8.8 10.6v1.8C.8 14.2 1 16 1 16s.2 1.5.8 2.2c.8.8 1.8.8 2.2.9 1.6.2 6.8.2 6.8.2s5.2 0 8.1-.2c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-1.8C23.2 8.8 23 7 23 7zM9.8 14.6V8.4l5.4 3.1z"/></svg>'
  },
  {
    id: 'whatsapp',
    name: { fa: 'واتساپ', en: 'WhatsApp' },
    desc: { fa: 'پشتیبانی سریع و مستقیم', en: 'Fast & direct support' },
    url: 'https://wa.me/989120000000',
    handle: 'wa.me/98912...',
    cat: 'support',
    brand: '#25D366',
    badge: { fa: 'پشتیبانی', en: 'Support' },
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.5-5.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.5-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.7.7-.9 1.6-.6 2.6.4 1.4 1.4 2.7 1.6 2.9.2.2 2.7 4.2 6.6 5.9.9.4 1.7.6 2.2.8.9.3 1.8.2 2.5.1.7-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2z"/></svg>'
  },
  {
    id: 'website',
    name: { fa: 'وب‌سایت رسمی', en: 'Official Website' },
    desc: { fa: 'خرید، تمدید و راهنما', en: 'Purchase, renew & guides' },
    url: 'https://tigervpn.com',
    handle: 'tigervpn.com',
    cat: 'channel',
    brand: '#38bdf8',
    badge: { fa: 'اصلی', en: 'Main' },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>'
  },
  {
    id: 'email',
    name: { fa: 'ایمیل', en: 'Email' },
    desc: { fa: 'ارسال تیکت و پیشنهادات', en: 'Send tickets & suggestions' },
    url: 'mailto:support@tigervpn.com',
    handle: 'support@tigervpn.com',
    cat: 'support',
    brand: '#EA4335',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>'
  },
  {
    id: 'tiktok',
    name: { fa: 'تیک‌تاک', en: 'TikTok' },
    desc: { fa: 'کلیپ‌های کوتاه و ترند', en: 'Short clips & trending' },
    url: 'https://tiktok.com/@tigervpn',
    handle: '@tigervpn',
    cat: 'social',
    brand: '#ff0050',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3v3.5a5 5 0 0 0 4 4V14a8 8 0 0 1-4-1.2V15a5 5 0 1 1-5-5v3.3a1.8 1.8 0 1 0 1.8 1.8V3z"/></svg>'
  },
  {
    id: 'facebook',
    name: { fa: 'فیسبوک', en: 'Facebook' },
    desc: { fa: 'صفحه رسمی Tiger VPN', en: 'Official Tiger VPN page' },
    url: 'https://facebook.com/tigervpn',
    handle: '/tigervpn',
    cat: 'social',
    brand: '#1877F2',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v3H7v4h3v9h4v-9h3l1-4z"/></svg>'
  }
];
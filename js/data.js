const LINKS_DATA = [
  {
    id: 'telegram-channel',
    name: { fa: 'کانال تلگرام', en: 'Telegram Channel' },
    desc: { fa: 'اخبار، آپدیت و اطلاع‌رسانی‌ها', en: 'News, updates & announcements' },
    url: 'https://t.me/TigerVPNChannel',
    handle: '@TigerVPNChannel',
    cat: 'channel',
    brand: '#229ED9',
    badge: { fa: 'رسمی', en: 'Official' },
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 3 2 10.5l6 2L18.5 5 9 14l1 6 4.5-4.5L20 20z"/></svg>'
  },
  {
    id: 'telegram-support',
    name: { fa: 'پشتیبانی تلگرام', en: 'Telegram Support' },
    desc: { fa: 'پاسخگویی ۲۴ ساعته به سوالات', en: '24/7 answers to your questions' },
    url: 'https://t.me/SupAllVpn',
    handle: '@SupAllVpn',
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
    id: 'free-sub',
    name: { fa: 'دریافت اشتراک رایگان', en: 'Get Free Subscription' },
    desc: { fa: 'دریافت تست هدیه از کانال ما', en: 'Get a free trial from our channel' },
    url: 'https://supfree.tigervpn-gmail.workers.dev/', 
    handle: 'Free Trial',
    cat: 'support',
    brand: '#F59E0B',
    badge: { fa: 'هدیه', en: 'Gift' },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>'
  },
  {
    id: 'tutorial',
    name: { fa: 'سایت آموزش اتصال', en: 'Setup Tutorial' },
    desc: { fa: 'راهنمای قدم به قدم برای تمام دستگاه‌ها', en: 'Step by step guide for all devices' },
    url: 'https://tigervpngit.github.io/TigerVpnGuid/',
    handle: 'tigervpngit.github.io/TigerVpnGuid',
    cat: 'channel',
    brand: '#3B82F6',
    badge: { fa: 'آموزش', en: 'Guide' },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="m10 10 5 3-5 3v-6z"/></svg>'
  },
  {
    id: 'threads',
    name: { fa: 'تردز', en: 'Threads' },
    desc: { fa: 'صفحه رسمی ما در تردز', en: 'Our official Threads page' },
    url: 'https://threads.net/@Tiger.Vpn',
    handle: '@Tiger.Vpn',
    cat: 'social',
    brand: '#000000',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 8.5c-.5-.7-1.3-1.2-2.5-1.2-2.5 0-4.2 1.8-4.2 4.7 0 2.9 1.7 4.7 4.2 4.7 1.2 0 2-.5 2.5-1.2m0-7V15a3 3 0 0 0 3 3h1V8h-1a3 3 0 0 0-3 3v4m-10-5.3c0-3.7 2.8-6.2 6.5-6.2 3.3 0 5.5 1.7 6.2 4.5M6.5 14.7c0 3.7 2.8 6.2 6.5 6.2 3.3 0 5.5-1.7 6.2-4.5"/></svg>'
  },
  {
    id: 'instagram',
    name: { fa: 'اینستاگرام', en: 'Instagram' },
    desc: { fa: 'پست‌ها، استوری و ریلز', en: 'Posts, stories & reels' },
    url: 'https://instagram.com/TigerVpn',
    handle: '@TigerVpn',
    cat: 'social',
    brand: '#E1306C',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
  },
  {
    id: 'twitter',
    name: { fa: 'توییتر / X', en: 'Twitter / X' },
    desc: { fa: 'اطلاعیه‌های سریع و تیکت', en: 'Quick announcements & tickets' },
    url: 'https://x.com/TigerVpnX',
    handle: '@TigerVpnX',
    cat: 'social',
    brand: '#1DA1F2',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6z"/></svg>'
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
    url: 'mailto:tigervpn.gmail@gmail.com',
    handle: 'tigervpn.gmail@gmail.com',
    cat: 'support',
    brand: '#EA4335',
    badge: null,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>'
  }
];

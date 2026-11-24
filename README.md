<div align="center">

# 🐯 Tiger VPN - Social Links Hub

**مرکز ارتباطات و لینک‌های رسمی تایگر وی پی ان**

[![PWA](https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[مشاهده دموی زنده 🌐](https://your-username.github.io/tiger-vpn-links/) • [گزارش مشکل 🐛](https://github.com/your-username/tiger-vpn-links/issues) • [درخواست ویژگی 💡](https://github.com/your-username/tiger-vpn-links/issues)

</div>

---

## 📖 درباره پروژه (About)

**Tiger VPN Social Hub** یک وب‌اپلیکیشن مدرن، سبک و فوق‌العاده سریع است که تمامی لینک‌های ارتباطی، شبکه‌های اجتماعی، ربات‌های فروش و پشتیبانی تایگر وی پی ان را در یک صفحه جمع‌آوری کرده است. 

این پروژه با استفاده از جدیدترین تکنولوژی‌های وب (HTML, CSS, Vanilla JS) و بدون نیاز به فریم‌ورک‌های سنگین ساخته شده و به صورت **PWA (Progressive Web App)** طراحی شده است. کاربران می‌توانند این سایت را مستقیماً روی گوشی یا کامپیوتر خود نصب کنند و حتی در حالت آفلاین نیز به لینک‌ها دسترسی داشته باشند.

---

## ✨ ویژگی‌های کلیدی (Features)

- 🎨 **طراحی مدرن Glassmorphism**: استفاده از افکت شیشه‌ای، هاله‌های نئونی و پس‌زمینه‌های گرادیانتی جذاب.
- 📱 **قابلیت نصب (PWA)**: قابلیت نصب روی اندروید، iOS و ویندوز به عنوان یک اپلیکیشن مستقل.
- 🌗 **تم هوشمند (Dark/Light Mode)**: پشتیبانی از تم تاریک و روشن با قابلیت تشخیص خودکار سیستم‌عامل و زمان محلی.
- 🌍 **دو زبانه (Bilingual)**: پشتیبانی کامل از زبان‌های فارسی (RTL) و انگلیسی (LTR) با قابلیت تغییر آنی.
- 📸 **ساخت QR Code اختصاصی**: با کلیک روی هر کارت، می‌توانید کد QR مربوط به آن لینک را برای اسکن کردن دریافت کنید.
- 📋 **کپی سریع لینک**: دکمه اختصاصی برای کپی کردن لینک هر شبکه با یک کلیک و نمایش پیام Toast.
- 🔍 **جستجوی زنده**: جستجوی لحظه‌ای بین تمام لینک‌ها با قابلیت فیلتر بر اساس دسته‌بندی (شبکه‌ها، پشتیبانی، کانال‌ها).
- ⚡ **عملکرد آفلاین**: مجهز به Service Worker برای کش کردن فایل‌ها و کارکرد بدون اینترنت.
- 🖋️ **فونت اختصاصی**: استفاده از فونت سفارشی `Black Future` برای لوگو و برندینگ.

---

## 🛠 تکنولوژی‌های استفاده شده (Tech Stack)

- **Frontend**: HTML5, CSS3 (Custom Properties, Flexbox, Grid, Backdrop-filter), Vanilla JavaScript (ES6+)
- **PWA**: Web App Manifest, Service Workers
- **Tools**: [QR Server API](https://goqr.me/api/) (برای تولید کدهای QR)

---

## 📂 ساختار پروژه (Folder Structure)

```text
tiger-vpn-links/
├── index.html              # صفحه اصلی
├── manifest.json           # تنظیمات PWA (نام، آیکون، رنگ)
├── service-worker.js       # کدهای آفلاین‌سازی و کش
├── README.md               # این فایل
├── assets/                 # فایل‌های گرافیکی اصلی
│   └── logo.png            # لوگوی بزرگ سایت
├── css/
│   └── style.css           # استایل‌های اصلی و انیمیشن‌ها
├── fonts/
│   └── BlackFuture.otf     # فونت اختصاصی برند
├── js/
│   ├── data.js             # داده‌های لینک‌ها (قابل ویرایش)
│   ├── i18n.js             # فایل ترجمه‌ها (فارسی/انگلیسی)
│   └── app.js              # منطق اصلی، تم، زبان و مودال QR
└── icons/                  # آیکون‌های PWA و فاویکن
    ├── icon-192.png
    ├── icon-512.png
    ├── favicon-32.png
    └── ...

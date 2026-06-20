# LinguaVerse · 多语种沉浸式学习平台

> 英语 · 日本語 · 한국어 · Español · Français — 分级课程、互动练习、社区激励，终身会员仅 ¥299。

---

## 项目结构

```
/workspace/
├── index.html        # 主入口（已含 PWA meta / SEO / GA 占位）
├── styles.css        # 全站样式（含定价页、会员 UI）
├── bundle.js         # 全部业务逻辑（课程/单词/语法/听力/社区）
├── manifest.json      # PWA 配置（iPhone 主屏安装）
├── sw.js             # Service Worker（离线缓存）
├── icon.svg          # SVG 图标
├── icon-192.png      # PWA 192px 图标
├── icon-512.png      # PWA 512px 图标
└── vercel.json       # ✅ Vercel 部署配置
```

---

## 快速上线（推荐：Vercel · 免费）

### 步骤 1：上传到 GitHub

```bash
cd /workspace
git init
git add index.html styles.css bundle.js manifest.json sw.js icon.svg icon-192.png icon-512.png vercel.json
git commit -m "LinguaVerse v1.0 — 多语种学习平台，含会员体系"
git remote add origin https://github.com/你的用户名/linguaverse.git
git push -u origin main
```

### 步骤 2：在 Vercel 导入并部署

1. 访问 [vercel.com](https://vercel.com) → 用 GitHub 登录
2. 点击 **Add New → Project**
3. 选择 `linguaverse` 仓库
4. **Framework Preset** 保持默认（Other）
5. **Build Command** 和 **Output Directory** 留空（Vercel 会自动读取 `vercel.json`）
6. 点击 **Deploy**，约 30 秒后获得 `https://linguaverse.vercel.app`

---

## 替代部署方案

### Cloudflare Pages（免费）

1. 上传仓库到 GitHub
2. 访问 [pages.cloudflare.com](https://pages.cloudflare.com) → Connect to Git → 选择仓库
3. Build command 留空，Output directory 填 `.`
4. 部署后获得 `https://yourname.pages.dev`

### 阿里云/腾讯云轻量服务器（约 ¥20/月）

```bash
# 在服务器上
cd /var/www/linguaverse
# 把项目文件上传到此目录

# 用 nginx 托管
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/linguaverse;
    index index.html;
}
```

---

## 接入真实支付（Stripe）

### 前端（已完成占位，只需填入 Key）

在 `bundle.js` 中找到 `showPaymentModal` 函数，替换占位符：

```javascript
// 1. 在 bundle.js 顶部添加：
const STRIPE_PUBLISHABLE_KEY = 'pk_test_xxxxxxxxxxxxxx'; // 来自 Stripe Dashboard

// 2. 修改演示按钮为真实支付：
card.querySelector('#btnPayDemo').onclick = async () => {
  const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: 'price_xxxxxxxxxxxxxx', quantity: 1 }],
    mode: 'payment',
    successUrl: window.location.origin + '/?payment=success',
    cancelUrl: window.location.origin + '/?payment=cancel',
  });
};
```

### 后端（Node.js + Express 示例）

```javascript
// server.js
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_xxxxxxxxxxxxxx'); // Stripe Secret Key

app.use(express.json());

// Webhook：支付成功后更新用户 membership
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(req.body, sig, 'whsec_xxxx');

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;
    // 在数据库中将 userId 的 membership 设为 'lifetime'
    await db.setMembership(userId, 'lifetime');
  }
  res.json({ received: true });
});

app.listen(3000);
```

### 接入微信/支付宝（国内方案）

国内推荐使用 [Ping++](https://www.pingxx.com) 或 [Xorpay](https://xorpay.com)，
它们封装了微信支付、支付宝、银联，统一一个接口接入，文档完善。

---

## 接入 Google Analytics

1. 访问 [analytics.google.com](https://analytics.google.com) → 创建账号 → 获取 **G-XXXXXXXXXX**
2. 打开 `index.html`，将 `G-YOUR-GA-ID` 替换为你的真实 ID
3. 重新部署即可

---

## 购买域名（可选）

1. 在 [阿里云](https://wanwang.aliyun.com) 或 [Namecheap](https://namecheap.com) 购买 `.com` 域名（约 ¥50/年）
2. 在 Vercel 项目 Settings → Domains 添加你的域名
3. DNS 解析指向 Vercel 的 CNAME 记录

---

## 定价方案说明

| 方案 | 价格 | 权益 |
|------|------|------|
| 免费版 | ¥0 | A1/A2 全部 10 门基础课程 |
| 月费会员 | ¥29/月 | 全部 30 门课程（按月付）|
| 终身会员 | ¥299 | 全部 30 门课程 + 终身免费更新 |

**收入预估（月）：**
- 500 注册用户 × 2% 转化月费 = 10 人 × ¥29 = **¥290/月**
- 500 注册用户 × 5% 转化终身 = 25 人 = **¥7,475**（一次性）

---

## 本地开发预览

```bash
cd /workspace
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/index.html
```

## 技术栈

- **前端**：原生 HTML/CSS/JS（零依赖），PWA + Service Worker
- **数据**：localStorage（可无缝迁移到 IndexedDB 或后端）
- **支付**：Stripe（全球）/ Ping++（国内）
- **部署**：Vercel / Cloudflare Pages / 任意静态托管

---

*© 2026 LinguaVerse · Made with 🌏*

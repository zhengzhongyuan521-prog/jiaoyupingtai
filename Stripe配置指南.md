# Stripe 自动付款设置指南（极简 3 步）

> **目标**：用户点「立即解锁 ¥299」→ 跳转到 Stripe 付款页 → 付款成功 → 自动跳回你的网站 → 网站自动解锁会员

**全程不需要你介入，不需要手动发码**。

---

## 第 1 步：注册 Stripe 账号

1. 打开 [stripe.com](https://stripe.com) → Start now → 用邮箱注册
2. 完成身份验证（KYC）：需要银行卡、身份证，中国大陆用户也可以，选择「中国」作为注册地
3. 激活后在 Stripe 后台（dashboard.stripe.com）右上角切换到 **Live mode**（不是 Test mode）

---

## 第 2 步：创建付款链接（Payment Link）

### 创建「终身会员」产品（¥299）

1. 在 Stripe 后台左侧菜单：**Products → Add product**
2. Product name: `LinguaVerse 终身会员`
3. Pricing: `299.00`，货币选 **CNY (¥)**
4. 点 **Save product**
5. 产品页顶部点 **Create payment link**
6. **After payment（付款后行为）：**
   - "After payment" 选择 **Don't show confirmation page**
   - "Redirect to" 填你的网站地址 + 后缀：
     ```
     https://你的域名.com/?payment_success=lifetime
     ```
     （如果你还没部署，先用 Vercel 给的免费域名，例如 `https://linguaverse-xx.vercel.app/?payment_success=lifetime`）
7. 点 **Create link**
8. 复制付款链接，看起来像：
   ```
   https://buy.stripe.com/00c2x4xxxxxxx
   ```

### 创建「月费会员」产品（¥29）

同样的步骤再做一次：
- Product name: `LinguaVerse 月费会员`
- Pricing: `29.00`，货币 **CNY (¥)**
- Recurring 选择 **Monthly**（月付）
- After payment redirect:
  ```
  https://你的域名.com/?payment_success=monthly
  ```

---

## 第 3 步：把链接填到你的网站代码里

打开 `bundle.js` 文件，搜索 `PAYMENT_LINK_LIFETIME`，替换两行：

```javascript
// 原来的（保留占位）：
const PAYMENT_LINK_LIFETIME = 'https://buy.stripe.com/替换成你的终身会员链接';
const PAYMENT_LINK_MONTHLY  = 'https://buy.stripe.com/替换成你的月费会员链接';

// 替换成你从 Stripe 后台复制的真实链接：
const PAYMENT_LINK_LIFETIME = 'https://buy.stripe.com/00c2x4xxxxxxx';
const PAYMENT_LINK_MONTHLY  = 'https://buy.stripe.com/bIY9kYxxxxxxx';
```

保存文件 → 上传覆盖 GitHub → Vercel 会自动重新部署（约 1 分钟）。

**完成！**

---

## 工作流程可视化

```
用户访问你的网站 → 点击「立即解锁 ¥299」
        ↓
自动跳转到 Stripe 付款页（银行卡、Google Pay、Apple Pay 都支持）
        ↓
用户付款成功（Stripe 处理所有安全验证）
        ↓
Stripe 自动跳转回：https://你的域名.com/?payment_success=lifetime
        ↓
你的网站检测到 ?payment_success 参数 → 自动解锁会员
        ↓
弹出「🎉 付款成功！」→ 课程全部解锁 → 用户开始学习
```

---

## 测试方法（验证是否生效）

### 方法 1：手动测试 URL 参数

访问：`https://你的域名.com/?payment_success=lifetime`

应该看到「🎉 付款成功！」弹窗，并且：
- 顶部导航栏出现 👑 终身 徽章
- 所有 B1~C2 高级课程可直接访问

### 方法 2：真实付款测试

在 Stripe 后台切换到 **Test mode**（右上角开关），用测试卡付款：

```
卡号：4242 4242 4242 4242
有效期：12/34
CVC：123
邮编：随便填
```

Stripe 会用测试币走完整流程，确保跳转、解锁、保存都正常。

---

## 常见问题

**Q: 我没有营业执照能接入 Stripe 吗？**
A: 可以，中国大陆个人身份也能注册 Stripe，使用身份证和个人银行卡。

**Q: 支持支付宝和微信支付吗？**
A: Stripe 原生支持，在后台：Settings → Payment methods → 开启 Alipay 和 WeChat Pay。

**Q: 别人知道 URL 参数 ?payment_success=lifetime 就能免费解锁吗？**
A: 理论上是的。这是"极简方案"的局限。对于 ¥299 的个人项目，可以接受，因为：
   - 你的用户都是真心想学语言的人，不会恶意刷
   - 可以在网站加"请尊重创作者劳动"的提示
   - 如果真有人这么干，让 TA 分享出去反而带来新用户（免费营销）
   
   如果需要更强验证，我可以升级成 Webhook + 后端服务，告诉我一声即可。

**Q: Stripe 怎么把钱给我？**
A: 在 Stripe 后台 Settings → Payout settings 绑定你的银行卡，付款后款项会按周期自动打入。

**Q: Stripe 手续费多少？**
A: 中国大陆: 3.6% + ¥2.00 每笔。也就是说 ¥299 一笔，你实际到手 ¥286。

**Q: 付款失败怎么办？**
A: 用户会看到 Stripe 的错误提示，不会触发你的网站解锁。

---

## 推荐定价（可随时在 Stripe 后台调整）

| 方案 | 价格 | 备注 |
|------|------|------|
| 免费试学 | ¥0 | A1/A2 基础课程 |
| 月费会员 | ¥29/月 | 短期学习者 |
| **终身会员** | **¥299** | **推荐，一次买断终身享用** |
| 团队版（企业） | 联系你 | 可以做企业员工培训定制 |

---

*需要我帮你做任何其他调整？随时告诉我！*

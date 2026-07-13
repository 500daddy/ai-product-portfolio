# AI 产品运营作品集实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 构建一个面向 AI 产品运营求职的单页作品集网站，完整展示“养娃新手村”和“宝宝食材小管家”两个已上线微信小程序案例。

**架构：** 使用静态 HTML/CSS/JS，首页即作品集主体。内容数据直接写在页面中，视觉资产放在 `assets/projects/`，避免额外构建链路。

**技术栈：** HTML5、CSS3、原生 JavaScript、本地静态预览。

---

## 文件结构

- 创建：`index.html`，负责页面语义结构、作品集文案、项目案例内容。
- 创建：`styles.css`，负责 Animal Island 风格转译、响应式布局、手机样机、卡片、时间线和可访问状态。
- 创建：`script.js`，负责导航高亮、滚动入场和回到顶部等轻交互。
- 创建：`assets/projects/parenting-village.png`，养娃新手村项目视觉资产。
- 创建：`assets/projects/can-you-eat-home.png`，宝宝食材小管家项目视觉资产。
- 创建：`assets/projects/can-you-eat-prototype.png`，宝宝食材小管家原型/视觉资产。

## 任务 1：准备项目资产

- [x] 从公开 GitHub API 获取 `parenting-consensus-miniprogram` 的 `village-hero.png`。
- [x] 从 `/Users/a500/Documents/宝宝食材小管家` 复制本地截图与原型图。
- [x] 验证资产可被浏览器相对路径加载。

## 任务 2：创建作品集页面

- [x] 编写 `index.html`，包含首屏、能力地图、两个 Case Study、AI 工作流、求职转化区。
- [x] 文案必须明确服务 AI 产品运营求职，而不是泛泛展示代码项目。
- [x] 两个案例都展示问题、方案、能力证明和项目链接。

## 任务 3：实现视觉系统

- [x] 编写 `styles.css`，使用奶油底、暖棕文字、薄荷青、草绿和像素/纸质卡片元素。
- [x] 首屏在桌面端展示双手机样机，移动端保持无重叠和可读。
- [x] 控制可爱程度，整体保持 70% 求职专业表达和 30% 温暖记忆点。

## 任务 4：添加轻交互

- [x] 编写 `script.js`，支持锚点导航、当前区块高亮、滚动 reveal、回到顶部。
- [x] 交互不依赖第三方库，不阻塞页面内容阅读。

## 任务 5：验证

- [x] 使用本地静态服务器预览页面。
- [x] 检查桌面端首屏、项目案例、移动端布局。
- [x] 运行基础文件检查，确认 HTML/CSS/JS 文件存在且无明显路径错误。

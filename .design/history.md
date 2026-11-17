:# 项目历史

## retro-musician — 独立音乐人网站

### 第 1 轮：首页
- **目标**：Hero + 最新发行 + 下一场演出 + 邮件订阅
- **完成**：
  - 创建 Vite + React + Tailwind 项目
  - 实现磁带卷轴动画、扫描线纹理、故障艺术标题
  - 非对称 Hero 布局
- **验证**：`npm run build` 通过

### 第 2 轮：作品页
- **目标**：作品网格 `/works`
- **完成**：
  - 4 张作品数据
  - 桌面 3 列错落式网格
  - 悬停交互
- **验证**：`npm run build` 通过

### 第 3 轮：演出页
- **目标**：时间线式演出列表 `/shows`
- **完成**：
  - 5 条演出记录
  - 1/3 错位时间线 + 菱形状态点
  - 购票状态标签
- **验证**：`npm run build` 通过

### 第 4 轮：联系页
- **目标**：完整联系页 `/contact`
- **完成**：
  - 邮箱 + 社交媒体文字链接
  - 订阅/留言表单 + 状态反馈
- **验证**：`npm run build` 通过

### 最终产物
- 代码：`projects/retro-musician/site/`
- 构建输出：`projects/retro-musician/site/dist/`
- 设计文档：`projects/retro-musician/.design/`

### 视觉独特性检查
- ✅ 非默认字体（Oswald + Inter + Space Mono + Caveat）
- ✅ 非默认色彩（黑底 + 霓虹橙红 + 磁带色）
- ✅ 非对称/破格布局（Hero、作品网格偏移、时间线错位）
- ✅ 无 glassmorphism / 大圆角卡片 / 默认阴影

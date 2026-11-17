# 视觉系统

## 色彩

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg-primary` | `#0a0a0a` | 主背景 |
| `--bg-secondary` | `#141414` | 卡片/区块背景 |
| `--bg-tertiary` | `#1f1f1f` | 悬停/次要表面 |
| `--text-primary` | `#f2f0e9` | 主文字（暖白） |
| `--text-secondary` | `#8a8580` | 次要文字 |
| `--accent` | `#ff4d00` | 强调色（霓虹橙红） |
| `--accent-dim` | `#b33600` | 强调色悬停 |
| `--tape` | `#c4b9a8` | 磁带/复古元素色 |
| `--scanline` | `rgba(255,255,255,0.03)` | 扫描线 |

**配色原则**：
- 70% 深黑背景
- 20% 暖灰文字与磁带色
- 10% 霓虹橙红强调
- 不使用蓝紫渐变、glassmorphism

## 字体

| 用途 | 字体 | Fallback |
|------|------|----------|
| 标题/Display | `Oswald` | `Impact, Haettenschweiler, sans-serif` |
| 正文 | `Inter` | `system-ui, sans-serif` |
| 等宽/小标签 | `Space Mono` | `Courier New, monospace` |
| 装饰/手写感 | `Caveat` | `cursive` |

**字体加载策略**：
- 在线字体通过 Google Fonts 引入
- 本地 fallback 必须存在
- `font-display: swap`

## 间距系统

| Token | 值 |
|-------|-----|
| `space-xs` | 4px |
| `space-sm` | 8px |
| `space-md` | 16px |
| `space-lg` | 32px |
| `space-xl` | 64px |
| `space-2xl` | 128px |

## 圆角与边框

- 主按钮：`2px`（锐利，避免大圆角）
- 卡片：`0px`（硬边）
- 输入框：`0px` 底部边框
- 图片：`0px`
- 磁带装饰框：`4px`

## 网格与布局

- 桌面：12 列网格，最大宽度 1280px
- Hero：非对称布局，左侧大标题，右侧磁带视觉
- 移动端：单列堆叠，但保留非对称文字断行

## 组件规范

### Button

- 主按钮：黑底 + 霓虹橙红边框 + 霓虹橙红文字，hover 时填充霓虹橙红、文字变黑
- 次按钮：透明底 + 暖白边框
- 幽灵按钮：仅文字 + 下划线动画

### Card（作品/演出）

- 硬边矩形
- 左上角小标签用等宽字体
- hover：图片轻微放大（1.02），边框变为霓虹橙红
- 无阴影，用边框和背景色区分层级

### Navigation

- 固定顶部，透明背景
- 左侧 logo，右侧锚点链接
- 移动端：汉堡菜单，全屏覆盖

### 演出列表项

- 时间线式：左侧日期（等宽），右侧信息
- 日期用霓虹橙红
- 分隔线用 1px 暖灰

## 难忘元素

**磁带卷轴动画 Hero**：
- Hero 右侧放置一个抽象磁带卷轴 SVG
- 卷轴缓慢旋转（CSS animation，非 JS 循环）
- 配合细微的扫描线纹理覆盖整个页面

**故障艺术标题**：
- 主标题 hover 时有轻微 glitch 位移（纯 CSS）
- 不滥用，仅在 Hero 主标题使用

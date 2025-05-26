# 养老院管理系统 - 前端

基于 Vue 3 + TypeScript + Element Plus 开发的养老院管理系统前端。

## 技术栈

- Vue 3.2.13
- TypeScript 4.5.5
- Element Plus 2.2.28
- Vue Router 4.0
- Vuex 4.0
- Axios
- ECharts 5.4.1
- Tailwind CSS 3.2.7

## 项目结构

```
src/
├── views/              # 页面组件
│   ├── home/          # 首页
│   ├── sale/          # 营销管理
│   ├── live/          # 入住管理
│   ├── people/        # 人员管理
│   ├── serve/         # 服务管理
│   ├── resource/      # 物资管理
│   ├── diet/          # 餐饮管理
│   ├── charge/        # 费用管理
│   └── base/          # 基础数据配置
├── components/        # 公共组件
├── apis/             # API接口
├── store/            # 状态管理
├── router/           # 路由配置
├── utils/            # 工具函数
├── styles/           # 样式文件
├── assets/           # 静态资源
└── types/            # TypeScript类型定义
```

## 快速启动

### 环境要求
- Node.js 14+
- npm 6+ 或 yarn 1.22+

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm run serve
# 或
yarn serve
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 代码检查和修复
```bash
npm run lint
# 或
yarn lint
```

## 功能模块

### 营销管理
- 咨询管理：客户咨询记录
- 意向客户：潜在客户管理
- 预定管理：床位预定

### 入住管理
- 床位全景：床位状态可视化
- 入住签约：合同签署管理
- 外出登记：外出记录管理
- 来访登记：访客管理
- 事故登记：安全事故记录
- 退住申请：退住流程

### 人员管理
- 长者档案：老人信息管理
- 员工管理：员工档案管理
- 活动管理：活动组织管理

### 服务管理
- 服务项目：护理项目管理
- 护理等级：护理级别设置
- 服务预定：服务预约管理

### 物资管理
- 物资信息：物资档案管理
- 仓库设置：仓库配置
- 入库管理：采购入库
- 出库管理：物资出库
- 库存查询：库存统计

### 餐饮管理
- 菜品管理：菜品信息管理
- 餐饮套餐：套餐配置
- 点餐：订餐管理

### 费用管理
- 预存充值：账户充值
- 消费记录：消费明细
- 退住费用审核：退费流程

### 基础数据配置
- 营销配置：渠道和标签配置
- 入住配置：房间和楼栋设置
- 活动配置：活动类型管理

## 开发规范

### 代码规范
- 使用 ESLint + Prettier 进行代码格式化
- 组件使用 Composition API
- 统一的 API 接口调用
- TypeScript 类型安全

### 组件规范
- 页面组件放在 views 目录
- 公共组件放在 components 目录
- 组件名使用 PascalCase
- 文件名使用 kebab-case

### 样式规范
- 使用 Tailwind CSS 工具类
- 自定义样式使用 SCSS
- 响应式设计适配

## 配置说明

### 环境配置
- 开发环境：`env.development`
- 生产环境：`env.production`
- 测试环境：`env.test`

### API配置
修改对应环境配置文件中的 `VUE_APP_BASE_API` 字段。

## 浏览器支持

支持现代浏览器，建议使用：
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

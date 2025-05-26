# 养老院管理系统 - 后端

基于 Spring Boot 2.6.1 开发的养老院管理系统后端服务。

## 技术栈

- Spring Boot 2.6.1
- Spring Security + JWT
- MyBatis Plus 3.4.3.4
- MySQL 8.0
- Redis (Jedis)
- Swagger + Knife4j
- Lombok
- HuTool

## 项目结构

```
src/
├── main/
│   ├── java/com/ew/gerocomium/
│   │   ├── controller/     # 控制器层
│   │   ├── service/        # 业务服务层
│   │   ├── dao/           # 数据访问层
│   │   ├── common/        # 公共组件
│   │   └── GerocomiumApplication.java
│   └── resources/
│       ├── application.yml
│       └── mapper/        # MyBatis XML文件
└── test/                  # 测试代码
```

## 快速启动

### 环境要求
- JDK 1.8+
- Maven 3.6+
- MySQL 5.7+
- Redis 5.0+

### 配置数据库
1. 创建数据库 `db_gerocomium`
2. 导入数据库脚本: `../database/db_gerocomium.sql`
3. 修改 `application.yml` 中的数据库连接配置

### 启动服务
```bash
# 安装依赖
mvn clean install

# 启动服务
mvn spring-boot:run
```

### 访问API文档
- Swagger UI: http://localhost:9001/doc.html
- API Base URL: http://localhost:9001/api

## 主要功能模块

### Controller层
- **AccountController**: 账户管理
- **ElderRecordController**: 老人档案管理
- **StaffController**: 员工管理
- **ReserveController**: 预约管理
- **BuildController**: 床位房间管理
- **MaterialController**: 物资管理
- **DishesController**: 餐饮管理
- **OrderController**: 订单管理
- **InventoryController**: 库存管理
- **ActiveController**: 活动管理

### 核心特性
- JWT身份认证
- 基于注解的权限控制
- 统一异常处理
- 请求响应日志
- 数据分页查询
- 文件上传下载
- 数据导出功能

## 开发规范

### 代码规范
- 遵循阿里巴巴Java开发规范
- 使用Lombok简化代码
- 统一的返回结果封装
- RESTful API设计

### 数据库规范
- 统一使用逻辑删除 (del_flag)
- 创建和更新字段 (create_time, update_time, create_id, update_id)
- 主键使用自增ID策略 
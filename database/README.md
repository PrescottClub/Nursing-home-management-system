# 养老院管理系统 - 数据库

本目录包含养老院管理系统的数据库初始化脚本和相关文档。

## 数据库信息

- **数据库名称**: `db_gerocomium`
- **字符编码**: UTF-8
- **数据库引擎**: InnoDB
- **MySQL版本**: 5.7+

## 文件说明

- `db_gerocomium.sql`: 完整的数据库初始化脚本，包含表结构和测试数据

## 数据库初始化

### 1. 创建数据库
```sql
CREATE DATABASE db_gerocomium CHARACTER SET utf8 COLLATE utf8_general_ci;
```

### 2. 导入数据
```bash
mysql -u root -p db_gerocomium < db_gerocomium.sql
```

或在MySQL命令行中：
```sql
USE db_gerocomium;
SOURCE db_gerocomium.sql;
```

## 主要数据表

### 用户权限相关
- `auth`: 权限表
- `role`: 角色表 
- `role_auth`: 角色权限关联表

### 营销管理
- `consult`: 咨询记录表
- `reserve`: 预约表
- `source`: 来源渠道表
- `label`: 客户标签表

### 入住管理
- `elder`: 老人信息表
- `contract`: 合同表
- `bed`: 床位表
- `room`: 房间表
- `building`: 楼栋表
- `outward`: 外出记录表
- `visit`: 来访记录表
- `accident`: 事故记录表

### 人员管理
- `staff`: 员工表
- `active`: 活动表
- `active_type`: 活动类型表

### 服务管理
- `service_item`: 服务项目表
- `nurse_grade`: 护理等级表
- `nurse_reserve`: 服务预约表

### 物资管理
- `material`: 物资信息表
- `warehouse`: 仓库表
- `warehouse_record`: 入库记录表
- `outbound_record`: 出库记录表

### 餐饮管理
- `dishes`: 菜品表
- `catering_set`: 餐饮套餐表
- `order`: 订单表

### 费用管理
- `deposit_info`: 预存信息表
- `consume`: 消费记录表

## 数据库设计规范

### 字段命名规范
- 主键统一使用 `id`
- 外键使用 `表名_id` 格式
- 时间字段使用 `create_time`、`update_time`
- 逻辑删除字段使用 `del_flag`

### 公共字段
所有业务表都包含以下公共字段：
- `del_flag`: 删除标志（Y/N）
- `create_id`: 创建人ID
- `create_time`: 创建时间
- `update_id`: 更新人ID
- `update_time`: 更新时间

### 数据类型规范
- 主键: `bigint(20) AUTO_INCREMENT`
- 字符串: `varchar(n)` 根据实际需要设置长度
- 时间: `datetime`
- 状态标志: `varchar(2)` 使用Y/N表示

## 默认数据

数据库脚本包含基础的测试数据，包括：
- 权限菜单数据
- 角色数据
- 基础配置数据
- 示例业务数据

## 注意事项

1. 导入前请确保MySQL版本兼容
2. 建议在测试环境先验证脚本
3. 生产环境部署前请备份现有数据
4. 检查字符编码设置是否正确 
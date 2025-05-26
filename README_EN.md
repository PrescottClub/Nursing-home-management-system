# 🏥 Nursing Home Management System

![logo](docs/logo.png)

## 📋 Project Overview

This is a modern nursing home management system developed with **Spring Boot + Vue3**, designed to provide comprehensive digital management solutions for nursing homes. The system covers core business modules including marketing management, admission management, personnel management, service management, material management, catering management, and fee management.

## ✨ Key Features

- 🎯 **Comprehensive Business Coverage**: Covers all core business processes of nursing home operations
- 🔐 **Complete Permission System**: Role-based access control (RBAC)
- 📱 **Modern Interface**: Responsive user interface based on Element Plus
- 🔄 **Real-time Data**: Supports real-time data updates and status synchronization
- 📊 **Data Visualization**: Rich charts and statistical analysis functions
- 🔒 **Security & Reliability**: JWT authentication and data encryption
- 📈 **High Performance**: Redis caching and database optimization

## 🛠️ Technology Stack

### Backend Technologies
- **Framework**: Spring Boot 2.6.1
- **Data Access**: MyBatis Plus 3.4.3.4
- **Database**: MySQL 8.0
- **Cache**: Redis (Jedis)
- **Security**: Spring Security + JWT
- **Utility Libraries**: HuTool, Lombok
- **Task Scheduling**: Quartz
- **Data Export**: EasyExcel
- **API Documentation**: Swagger + Knife4j

### Frontend Technologies
- **Framework**: Vue 3.2.13
- **UI Components**: Element Plus 2.2.28
- **Build Tool**: Vue CLI 5.0
- **Language**: TypeScript 4.5.5
- **State Management**: Vuex 4.0
- **Routing**: Vue Router 4.0
- **HTTP Client**: Axios
- **Code Standards**: ESLint + Prettier
- **Charts**: ECharts 5.4.1
- **Styling**: Tailwind CSS 3.2.7

## 🏗️ Project Structure

```
Nursing Home Management System/
├── backend/                 # Spring Boot Backend Project
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/ew/gerocomium/
│   │   │   │       ├── controller/      # Controller Layer
│   │   │   │       ├── service/         # Service Layer
│   │   │   │       ├── dao/             # Data Access Layer
│   │   │   │       └── common/          # Common Components
│   │   │   └── resources/               # Configuration Files
│   │   └── test/                        # Test Code
│   ├── pom.xml                          # Maven Configuration
│   └── README.md                        # Backend Documentation
├── frontend/                # Vue3 Frontend Project
│   ├── src/
│   │   ├── views/                       # Page Components
│   │   │   ├── home/                    # Home
│   │   │   ├── sale/                    # Marketing Management
│   │   │   ├── live/                    # Admission Management
│   │   │   ├── people/                  # Personnel Management
│   │   │   ├── serve/                   # Service Management
│   │   │   ├── resource/                # Material Management
│   │   │   ├── diet/                    # Catering Management
│   │   │   ├── charge/                  # Fee Management
│   │   │   └── base/                    # Basic Data Configuration
│   │   ├── components/                  # Common Components
│   │   ├── apis/                        # API Interfaces
│   │   ├── store/                       # State Management
│   │   ├── router/                      # Route Configuration
│   │   └── utils/                       # Utility Functions
│   ├── package.json                     # Dependency Configuration
│   └── README.md                        # Frontend Documentation
├── database/                # Database Related
│   └── db_gerocomium.sql               # Database Initialization Script
├── docs/                    # Project Documentation
│   └── logo.png                        # Project Logo
└── README.md                # Main Project Documentation
```

## 🎯 Functional Modules

### 1. Marketing Management
- **Consultation Management**: Customer consultation records and follow-up
- **Prospective Customers**: Potential customer information management
- **Reservation Management**: Bed reservation and confirmation

### 2. Admission Management
- **Bed Overview**: Bed status visualization
- **Admission Contract**: Admission contract management
- **Outing Registration**: Elderly outing records
- **Visit Registration**: Visitor information registration
- **Accident Registration**: Incident records
- **Discharge Application**: Discharge process management

### 3. Personnel Management
- **Elder Records**: Basic information and health records of elderly residents
- **Staff Management**: Employee information and shift management
- **Activity Management**: Nursing home activity organization

### 4. Service Management
- **Service Items**: Nursing service item configuration
- **Care Levels**: Care level definition
- **Service Reservation**: Personalized service appointments

### 5. Material Management
- **Material Information**: Basic material information maintenance
- **Warehouse Settings**: Warehouse and storage location management
- **Inbound Management**: Material procurement and warehousing
- **Outbound Management**: Material requisition and outbound
- **Inventory Query**: Real-time inventory query

### 6. Catering Management
- **Dish Management**: Dish information and nutrition configuration
- **Meal Packages**: Meal combination settings
- **Ordering**: Elderly meal order management

### 7. Fee Management
- **Prepaid Recharge**: Elderly account recharge management
- **Consumption Records**: Consumption detail inquiry
- **Discharge Fee Audit**: Refund audit process

### 8. Basic Data Configuration
- **Marketing Configuration**: Source channels, customer labels
- **Admission Configuration**: Room types, building management
- **Activity Configuration**: Activity type settings

## 🚀 Quick Start

### Environment Requirements
- Java 1.8+
- Node.js 14+
- MySQL 5.7+
- Redis 5.0+
- Maven 3.6+

### 1. Database Initialization
```sql
-- Create database
CREATE DATABASE db_gerocomium CHARACTER SET utf8;

-- Import database script
mysql -u root -p db_gerocomium < database/db_gerocomium.sql
```

### 2. Backend Startup
```bash
# Enter backend directory
cd backend

# Install dependencies
mvn clean install

# Start service
mvn spring-boot:run
```

### 3. Frontend Startup
```bash
# Enter frontend directory
cd frontend

# Install dependencies
npm install
# or use yarn
yarn install

# Start development server
npm run serve
# or use yarn
yarn serve
```

### 4. Access System
- Frontend: http://localhost:8080
- Backend API: http://localhost:9001
- API Documentation: http://localhost:9001/doc.html

## 📝 Configuration

### Backend Configuration
Edit `backend/src/main/resources/application.yml`:
```yaml
# Database configuration
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db_gerocomium
    username: your_username
    password: your_password

# Redis configuration
  redis:
    host: localhost
    port: 6379
    password: your_redis_password
```

### Frontend Configuration
Edit environment-specific configuration files:
- Development: `frontend/env.development`
- Production: `frontend/env.production`

## 🔧 Development Guide

### Code Standards
- Backend follows Alibaba Java Development Guidelines
- Frontend uses ESLint + Prettier for code formatting
- Run code checks before committing

### API Interfaces
- All API interfaces use RESTful style
- Unified return format and error handling
- Complete Swagger documentation

### Database Standards
- Unified use of logical deletion (del_flag)
- Create and update time fields (create_time, update_time)
- Unified primary key strategy (auto_increment)

## 🤝 Contributing

We welcome contributions in any form! Please read [CONTRIBUTING.md](CONTRIBUTING.md) to learn how to participate in project development.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues while using the system, please contact us through:

- 📧 Email: support@example.com
- 💬 Issues: [GitHub Issues](https://github.com/PrescottClub/Nursing-home-management-system/issues)
- 📖 Documentation: [Project Wiki](https://github.com/PrescottClub/Nursing-home-management-system/wiki)

## 🌟 Acknowledgments

- Thanks to all contributors who participated in this project
- Special thanks to the open source community for providing excellent tools and libraries
- Inspired by modern nursing home management practices

---

⭐ If this project helps you, please give us a star!

**Enjoy Smart Elderly Care - Making Every Elder's Life Better!** 🌟

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/PrescottClub/Nursing-home-management-system?style=social)
![GitHub forks](https://img.shields.io/github/forks/PrescottClub/Nursing-home-management-system?style=social)
![GitHub issues](https://img.shields.io/github/issues/PrescottClub/Nursing-home-management-system)
![GitHub license](https://img.shields.io/github/license/PrescottClub/Nursing-home-management-system)

## 🔗 Related Links

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [Vue.js Documentation](https://vuejs.org/guide/)
- [Element Plus Documentation](https://element-plus.org/en-US/)
- [MyBatis Plus Documentation](https://mybatis.plus/en/) 
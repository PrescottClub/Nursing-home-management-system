# Contributing to Nursing Home Management System

Thank you for your interest in contributing to our Nursing Home Management System! We welcome contributions from the community and are pleased to have them.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Issues

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the problem
- **Describe the exact steps which reproduce the problem** in as many details as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs** if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title** for the issue to identify the suggestion
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful** to most users

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

1. Follow the [styleguides](#styleguides)
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

#### Before Submitting a Pull Request

- Make sure you have tested your changes thoroughly
- Update the README.md if necessary
- Add or update tests as needed
- Ensure your code follows the project's coding standards

## Development Setup

### Prerequisites

- Java 1.8+
- Node.js 14+
- MySQL 5.7+
- Redis 5.0+
- Maven 3.6+

### Local Setup

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Nursing-home-management-system.git
   cd Nursing-home-management-system
   ```

3. **Set up the database**
   ```bash
   mysql -u root -p < database/db_gerocomium.sql
   ```

4. **Start the backend**
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

5. **Start the frontend**
   ```bash
   cd frontend
   npm install
   npm run serve
   ```

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add bed status visualization feature

- Implement real-time bed occupancy display
- Add color-coded status indicators
- Update database schema for bed status tracking

Fixes #123
```

### Java Styleguide

- Follow [Alibaba Java Coding Guidelines](https://github.com/alibaba/p3c)
- Use meaningful variable and method names
- Add Javadoc comments for public methods
- Ensure proper exception handling

### JavaScript/TypeScript Styleguide

- Use ES6+ features where appropriate
- Follow [Vue.js Style Guide](https://vuejs.org/style-guide/)
- Use TypeScript for type safety
- Use ESLint and Prettier for code formatting

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown/) for documentation
- Keep line length to 80 characters when possible
- Use clear and concise language

## Testing

### Backend Testing
```bash
cd backend
mvn test
```

### Frontend Testing
```bash
cd frontend
npm run test
```

## Questions?

Don't hesitate to ask questions by opening an issue with the label `question`.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License. 
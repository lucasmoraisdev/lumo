# Lumo - Personal & Family Financial Planner

## Overview

Lumo is a comprehensive financial planning platform designed to help individuals and families take control of their financial journey. With intuitive dashboards, intelligent insights, and collaborative features, Lumo transforms the way you manage your finances, track goals, and plan for the future.

Whether you're saving for a dream vacation, planning a wedding, tracking investments, or simply wanting to gain better visibility into your spending habits, Lumo provides the tools you need to make informed financial decisions.

## Key Features

- **Expense & Income Tracking**: Easily track and categorize all your financial transactions
- **Goal Achievement Dashboard**: Visualize progress toward your financial goals with customizable milestones
- **AI-Powered Insights**: Receive personalized recommendations and forecasts based on your financial behavior
- **Investment Monitoring**: Real-time tracking of diverse investment portfolios (stocks, crypto, bonds, ETFs)
- **Multi-user Workspaces**: Collaborate with family members or financial advisors on shared financial plans
- **Gamification**: Stay motivated with achievement badges and progress rewards
- **Subscription Tiers**: Access different feature sets based on your subscription level

## Project Setup

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/lumo.git
   cd lumo
   ```

2. Install dependencies
   ```
   npm install
   ```
   
3. Configure environment variables
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file with your database credentials and other configuration values.

4. Run database migrations
   ```
   npm run migration:run
   ```

5. Seed initial data (roles, default categories, etc.)
   ```
   npm run seed
   ```

## Compile and Run

### Development Mode

```
npm run start:dev
```

The application will be available at `http://localhost:3000`

### Production Build

```
npm run build
npm run start:prod
```

## Project Structure

```
src/
├── config/           # Configuration files 
├── controllers/      # Request handlers
├── entities/         # Database models
│   ├── base.entity.ts
│   ├── role.entity.ts
│   ├── role.enum.ts
│   ├── user.entity.ts
│   ├── workspace.entity.ts
│   └── user-workspace.entity.ts
├── services/         # Business logic
├── repositories/     # Data access layer
├── middlewares/      # Custom middleware
├── dto/              # Data transfer objects
└── utils/            # Helper functions
```

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
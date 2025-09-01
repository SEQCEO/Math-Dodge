# Math Dodge - Educational Math Game

An engaging educational game where players dodge obstacles while solving math problems to progress through levels.

## Features

- 🎮 Smooth gameplay with arrow key/WASD controls
- 🧮 Dynamic math question generation (addition, subtraction, multiplication, division)
- 📈 Progressive difficulty system
- 💎 Power-ups (shield, slow time, double points)
- 🏆 High score tracking
- 📱 Responsive design for desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SEQCEO/Math-Dodge.git
cd Math-Dodge
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repository
3. Configure project settings (defaults work fine)
4. Click "Deploy"

## Game Controls

- **Arrow Keys / WASD**: Move player
- **Mouse**: Click answer options during math questions

## Project Structure

```
math-dodge/
├── app/              # Next.js app directory
├── components/       # React components
│   └── game/        # Game-specific components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and types
│   ├── types/       # TypeScript type definitions
│   └── utils/       # Helper functions
└── public/          # Static assets
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Canvas API**: Game rendering
- **Vercel**: Deployment platform
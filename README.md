# Contoso Agent Prototype

A high-fidelity React implementation of the Agentic Intranet design from Figma, featuring the Weekly Wrapped and Audio Summary features.

## Features

- **Vertical Navigation Bar**: Displays agent threads with visual indicators
- **Home Screen**: Features search bar, prompt starters, Weekly Wrapped card, and people section
- **Weekly Wrapped**: Complete flow showing AI highlights, top news, and upcoming events
- **Audio Summary**: Interactive audio player with news briefing controls
- **Exact Design Match**: Implements the Figma design with pixel-perfect accuracy using extracted theme variables

## Tech Stack

- React 18
- Vite
- CSS Variables (from Figma design system)
- No external UI libraries (pure CSS implementation)

## Design System

The theme is extracted from Figma and stored in `theme.json`, including:
- Colors (brand, neutral, gradients)
- Typography (Segoe UI font family, sizes, weights)
- Spacing (consistent 4px grid system)
- Border radius values
- Shadows
- Component sizes

## Project Structure

```
contoso-agent-proto/
├── src/
│   ├── components/
│   │   ├── NavigationBar.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── WeeklyWrappedCard.jsx
│   │   ├── WeeklyWrappedResponse.jsx
│   │   └── AudioSummary.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── theme.json
├── package.json
└── README.md
```

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## User Flow

1. **Home Screen**: User sees the Contoso Agent home page with search bar and Weekly Wrapped card
2. **Click "View Wrap"**: Navigates to the full Weekly Wrapped response with video, top news, and events
3. **Click "Create an audio summary"**: Navigates to the audio player with an AI-generated news briefing
4. **Audio Controls**: User can play/pause, skip, and control the audio summary

## Component Details

### NavigationBar
- Vertical sidebar with agent threads
- Active state indicator
- Settings button at the bottom

### HomeScreen
- Agent header with actions
- Agent lockup (avatar, name, description)
- Chat input with tools and sources
- Prompt starter cards
- Weekly Wrapped preview card
- People section

### WeeklyWrappedCard
- Multi-image hero with gradient placeholders
- "Play AI Highlights" button
- Card content with title, date, description
- "View Wrap" action button

### WeeklyWrappedResponse
- Full copilot response text
- Video recap card with play overlay
- Top news section with 3 main articles
- More news grid with additional articles
- Upcoming events calendar
- Action buttons (Create audio summary, etc.)

### AudioSummary
- Upcoming events carousel at top
- Sources section with icons
- Action icons (export, copy, refresh, like, dislike)
- Audio player card with progress bar
- Play/pause and skip controls
- Response text section
- Message input at bottom

## Figma Integration

This prototype was built directly from the Figma design file:
- File: `Agentic-Intranet`
- Node: `283-43424` (Weekly Wrap)
- All colors, typography, spacing, and component styles were extracted from Figma variables
- Design system documented in `theme.json`

## Future Enhancements

- [ ] Replace gradient placeholders with actual images from Figma
- [ ] Implement actual audio playback functionality
- [ ] Add routing library (React Router) for URL navigation
- [ ] Implement real data fetching
- [ ] Add animations and transitions
- [ ] Responsive design for mobile devices
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

## Notes

- All images are currently gradient placeholders. Actual images should be exported from Figma.
- Icons are implemented as inline SVGs for simplicity.
- The audio player has UI controls but no actual audio file.
- This is a high-fidelity prototype focused on visual accuracy.

## License

This is a prototype for demonstration purposes.

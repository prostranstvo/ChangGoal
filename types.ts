import type React from 'react';

export interface Goal {
  id: string;
  title: string;
  description: string;
  // FIX: Updated the icon type to be more specific. This allows `React.cloneElement` to pass a `className` prop in `GoalCard.tsx` without a TypeScript error.
  icon: React.ReactElement<{ className?: string }>;
  color: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  tasks: string[];
}

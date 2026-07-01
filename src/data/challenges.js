/*
To add a new challenge:
1. Add a new object to this array.
2. Set startDate and endDate.
3. Set featured: true if it should appear in the homepage popup.
4. Set status: "upcoming" or "active".
5. Old challenges automatically hide after endDate.
*/

export const challenges = [
  {
    id: 'plank-queen-june-2026',
    name: 'Plank Queen Challenge',
    type: 'Core Strength',
    category: 'week',
    startDate: '2026-06-24',
    endDate: '2026-06-30',
    displayDates: 'June 24 - June 30',
    difficulty: 'Beginner Friendly',
    trainer: 'Aarohi',
    reward: 'Member Spotlight',
    progress: 68,
    featured: true,
    status: 'active',
    shortDescription: 'Complete your daily plank goal and get featured on our Member Spotlight board.'
  },
  {
    id: 'zumba-energy-week-june-2026',
    name: 'Zumba Energy Week',
    type: 'Dance Fitness',
    category: 'week',
    startDate: '2026-06-24',
    endDate: '2026-06-30',
    displayDates: 'June 24 - June 30',
    difficulty: 'All Levels',
    trainer: 'Nisha',
    reward: 'Free Group Class Pass',
    progress: 52,
    featured: false,
    status: 'active',
    shortDescription: 'Dance, sweat, and stay consistent with our high-energy Zumba challenge.'
  },
  {
    id: 'friday-fat-burn-july-2026',
    name: 'Friday Fat Burn Challenge',
    type: 'Weight Loss',
    category: 'week',
    startDate: '2026-07-10',
    endDate: '2026-07-10',
    displayDates: 'July 10',
    difficulty: 'All Levels',
    trainer: 'Karthiga Devi Prakash',
    reward: 'Free Fitness Consultation',
    progress: 0,
    featured: true,
    status: 'upcoming',
    shortDescription: 'Join our special Friday challenge to burn calories, build energy, and stay motivated.'
  },
  {
    id: 'healthy-meal-routine-july-2026',
    name: 'Healthy Meal Routine Challenge',
    type: 'Nutrition',
    category: 'month',
    startDate: '2026-07-01',
    endDate: '2026-07-31',
    displayDates: 'July 1 - July 31',
    difficulty: 'Beginner Friendly',
    trainer: 'Karthiga Devi Prakash',
    reward: 'Nutrition Guide PDF',
    progress: 18,
    featured: false,
    status: 'active',
    shortDescription: 'Build a simple, consistent meal routine with practical nutrition guidance.'
  },
  {
    id: 'july-strength-reset-2026',
    name: '30-Day Strength Reset',
    type: 'Strength',
    category: 'month',
    startDate: '2026-07-01',
    endDate: '2026-07-31',
    displayDates: 'July 1 - July 31',
    difficulty: 'Intermediate',
    trainer: 'Kayathri Murugan',
    reward: 'Free Progress Consultation',
    progress: 24,
    featured: false,
    status: 'active',
    shortDescription: 'Reset your strength routine with guided weekly progress checkpoints.'
  }
];

export const getToday = () => new Date();

export const isChallengeActiveOrUpcoming = (challenge, today = getToday()) => {
  const endDate = new Date(challenge.endDate);
  endDate.setHours(23, 59, 59, 999);
  return endDate >= today && challenge.status !== 'archived';
};

export const getVisibleChallenges = (category, today = getToday()) => challenges
  .filter((challenge) => challenge.category === category)
  .filter((challenge) => isChallengeActiveOrUpcoming(challenge, today))
  .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

export const getFeaturedChallenge = (today = getToday()) => {
  const visible = challenges
    .filter((challenge) => isChallengeActiveOrUpcoming(challenge, today))
    .sort((a, b) => {
      if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
      return new Date(a.startDate) - new Date(b.startDate);
    });

  return visible[0] || null;
};

export const getCountdownLabel = (challenge, today = getToday()) => {
  const startDate = new Date(challenge.startDate);
  const endDate = new Date(challenge.endDate);
  endDate.setHours(23, 59, 59, 999);

  const oneDay = 1000 * 60 * 60 * 24;

  if (today < startDate) {
    const days = Math.ceil((startDate - today) / oneDay);
    return days === 1 ? 'Starts tomorrow' : `Starts in ${days} days`;
  }

  if (today <= endDate) {
    const days = Math.ceil((endDate - today) / oneDay);
    return days <= 1 ? 'Ends today' : `${days} days left`;
  }

  return 'Completed';
};

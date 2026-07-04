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
  },
    {
    id: 'july-strength-reset-2026',
    name: '30-Day Strength point Reset',
    type: 'Strength',
    category: 'month',
    startDate: '2026-07-07',
    endDate: '2026-07-07',
    displayDates: 'July 1 - July 31',
    difficulty: 'Intermediate',
    trainer: 'Kayathri Murugan',
    reward: 'Free Progress Consultation',
    progress: 24,
    featured: false,
    status: 'upcoming',
    shortDescription: 'Reset your strength routine with guided weekly progress checkpoints.'
  },
  {
    id: 'queens-conversation-circle-august-2026',
    name: 'Queens Conversation Circle',
    type: 'Community Wellness',
    category: 'week',
    startDate: '2026-08-03',
    endDate: '2026-08-03',
    displayDates: 'August 3',
    difficulty: 'All Levels',
    trainer: 'Femme Fit Hub Team',
    reward: 'Member Spotlight',
    progress: 0,
    featured: false,
    status: 'upcoming',
    shortDescription: 'Start August with a supportive women-only conversation circle focused on confidence, routine, and wellness.'
  },
  {
    id: 'queens-healthy-treat-august-2026',
    name: 'Queens Healthy Treat',
    type: 'Nutrition & Wellness',
    category: 'week',
    startDate: '2026-08-19',
    endDate: '2026-08-19',
    displayDates: 'August 19',
    difficulty: 'Beginner Friendly',
    trainer: 'Femme Fit Hub Team',
    reward: 'Healthy Treat Guide',
    progress: 0,
    featured: false,
    status: 'upcoming',
    shortDescription: 'Discover simple healthy treat ideas that support fitness goals without making wellness feel restrictive.'
  },
  {
    id: 'fun-activity-dance-august-2026',
    name: 'Fun Activity & Dance',
    type: 'Dance Fitness',
    category: 'week',
    startDate: '2026-08-28',
    endDate: '2026-08-28',
    displayDates: 'August 28',
    difficulty: 'All Levels',
    trainer: 'Femme Fit Hub Team',
    reward: 'Challenge Winner Shoutout',
    progress: 0,
    featured: false,
    status: 'upcoming',
    shortDescription: 'Close the month with an energetic dance session and fun studio activity for members.'
  }
];

export const getToday = () => new Date();

const parseChallengeDate = (value) => new Date(`${value}T00:00:00`);

const getWeekRange = (date) => {
  const start = new Date(date);
  const dayFromMonday = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - dayFromMonday);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

const getMonthRange = (date) => ({
  start: new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
  end: new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
});

const overlapsRange = (challenge, range) => {
  const startDate = parseChallengeDate(challenge.startDate);
  const endDate = parseChallengeDate(challenge.endDate);
  endDate.setHours(23, 59, 59, 999);

  return startDate <= range.end && endDate >= range.start;
};

export const isChallengeActiveOrUpcoming = (challenge, today = getToday()) => {
  const endDate = parseChallengeDate(challenge.endDate);
  endDate.setHours(23, 59, 59, 999);
  return endDate >= today && challenge.status !== 'archived';
};

export const getVisibleChallenges = (category, today = getToday()) => {
  const range = category === 'week' ? getWeekRange(today) : getMonthRange(today);

  return challenges
    .filter((challenge) => isChallengeActiveOrUpcoming(challenge, today))
    .filter((challenge) => {
      if (category === 'week' || category === 'month') {
        return overlapsRange(challenge, range);
      }

      return challenge.category === category;
    })
    .sort((a, b) => parseChallengeDate(a.startDate) - parseChallengeDate(b.startDate));
};

export const getFeaturedChallenge = (today = getToday()) => {
  const visible = challenges
    .filter((challenge) => isChallengeActiveOrUpcoming(challenge, today))
    .sort((a, b) => {
      if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
      return parseChallengeDate(a.startDate) - parseChallengeDate(b.startDate);
    });

  return visible[0] || null;
};

export const getCountdownLabel = (challenge, today = getToday()) => {
  const startDate = parseChallengeDate(challenge.startDate);
  const endDate = parseChallengeDate(challenge.endDate);
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

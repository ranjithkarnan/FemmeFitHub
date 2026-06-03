export const ACTIVE_CHALLENGE_KEY = 'ffhActiveChallenge';

export const defaultActiveChallenge = {
  title: 'Plank Queen Challenge',
  type: 'Core Strength',
  description: 'Complete your daily plank goal and get featured on our Member Spotlight board.',
  daysLeft: '4 days left',
  reward: 'Member Spotlight',
  trainer: 'Aarohi'
};

export function getActiveChallenge() {
  if (typeof window === 'undefined') {
    return defaultActiveChallenge;
  }

  try {
    const savedChallenge = window.localStorage.getItem(ACTIVE_CHALLENGE_KEY);

    if (!savedChallenge) {
      return defaultActiveChallenge;
    }

    return {
      ...defaultActiveChallenge,
      ...JSON.parse(savedChallenge)
    };
  } catch {
    return defaultActiveChallenge;
  }
}

export function saveActiveChallenge(challenge) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(
    ACTIVE_CHALLENGE_KEY,
    JSON.stringify({
      ...defaultActiveChallenge,
      ...challenge
    })
  );
}

export function resetActiveChallenge() {
  saveActiveChallenge(defaultActiveChallenge);
  return defaultActiveChallenge;
}

import { Activity, Baby, Dumbbell, Flame, HeartPulse, Salad, Sparkles, UserRoundCheck } from 'lucide-react';
import floorImage from '../assets/images/Floor-960.webp';
import treadmillImage from '../assets/images/TreadMils-960.webp';
import treadmillPortraitImage from '../assets/images/TreadMils2-960.webp';
import equipmentImage from '../assets/images/GymEquipment-960.webp';

export const programs = [
  {
    title: 'Weight Loss Training',
    icon: Flame,
    image: treadmillImage,
    description: 'Structured fat-loss workouts with habit coaching, weekly tracking, and energizing group support.',
    duration: '45 min',
    difficulty: 'Intermediate',
    calories: '420 kcal',
    highlights: ['Metabolic circuits', 'Weekly check-ins', 'Habit coaching']
  },
  {
    title: 'Strength Training',
    icon: Dumbbell,
    image: equipmentImage,
    description: 'Progressive resistance sessions for lean muscle, posture, bone health, and everyday confidence.',
    duration: '50 min',
    difficulty: 'All levels',
    calories: '360 kcal',
    highlights: ['Form coaching', 'Progressive lifts', 'Posture work']
  },
  {
    title: 'Weight Gain Training',
    icon: Dumbbell,
    image: equipmentImage,
    description: 'Guided strength and nutrition support for healthy weight gain, muscle development, and confident progress.',
    duration: '50 min',
    difficulty: 'Intermediate',
    calories: 'Goal based',
    highlights: ['Muscle gain', 'Strength progression', 'Nutrition support']
  },
  {
    title: 'CrossFit',
    icon: Activity,
    image: treadmillPortraitImage,
    description: 'Scalable high-energy strength and conditioning sessions for stamina, power, and full-body performance.',
    duration: '60 min',
    difficulty: 'Scalable',
    calories: '520 kcal',
    highlights: ['Functional strength', 'Conditioning', 'Team energy']
  },
  {
    title: 'Zumba',
    icon: Sparkles,
    image: floorImage,
    description: 'High-energy dance fitness with upbeat playlists, joyful movement, and serious calorie burn.',
    duration: '45 min',
    difficulty: 'All levels',
    calories: '500 kcal',
    highlights: ['Dance cardio', 'Mood boost', 'Community energy']
  },
  {
    title: 'Yoga',
    icon: HeartPulse,
    image: floorImage,
    description: 'Mobility, breathwork, flexibility, and recovery sessions designed for calm strength.',
    duration: '60 min',
    difficulty: 'Beginner',
    calories: '220 kcal',
    highlights: ['Mobility', 'Breathwork', 'Recovery']
  },
  {
    title: 'Personal Training',
    icon: UserRoundCheck,
    image: equipmentImage,
    description: 'One-on-one coaching with custom plans, form correction, and goal-specific accountability.',
    duration: '60 min',
    difficulty: 'Custom',
    calories: 'Goal based',
    highlights: ['1:1 coaching', 'Form audit', 'Custom plan']
  },
  {
    title: 'Cardio Fitness',
    icon: Activity,
    image: treadmillImage,
    description: 'Heart-healthy treadmill, cycling, HIIT, and circuit sessions for stamina and endurance.',
    duration: '40 min',
    difficulty: 'Intermediate',
    calories: '450 kcal',
    highlights: ['Intervals', 'Endurance', 'Heart health']
  },
  {
    title: 'Postnatal Fitness',
    icon: Baby,
    image: treadmillPortraitImage,
    description: 'Gentle, guided rebuilding for core stability, mobility, strength, and renewed energy.',
    duration: '45 min',
    difficulty: 'Gentle',
    calories: '240 kcal',
    highlights: ['Core stability', 'Mobility', 'Safe rebuild']
  },
  {
    title: 'Nutrition Guidance',
    icon: Salad,
    image: floorImage,
    description: 'Balanced meal guidance that supports fitness goals without crash diets or confusion.',
    duration: 'Consult',
    difficulty: 'Personalized',
    calories: 'Lifestyle based',
    highlights: ['Meal structure', 'Protein targets', 'Routine design']
  }
];

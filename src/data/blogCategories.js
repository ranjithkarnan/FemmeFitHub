export const blogCategories = [
  {
    slug: 'strength-training',
    title: 'Strength Training',
    description: 'Practical strength education for women who want better posture, lean muscle, confidence, and long-term fitness.',
    seoTitle: 'Strength Training Blog for Women | Femme Fit Hub',
    metaDescription: 'Read strength training tips for women covering safe lifting, posture, beginner workouts, and confidence-building fitness routines.'
  },
  {
    slug: 'weight-loss',
    title: 'Weight Loss',
    description: 'Sustainable fat-loss guidance built around training, nutrition, consistency, and healthy lifestyle habits.',
    seoTitle: 'Weight Loss Tips for Women | Femme Fit Hub',
    metaDescription: 'Explore weight loss training tips for women, including workouts, nutrition habits, coaching guidance, and realistic progress strategies.'
  },
  {
    slug: 'nutrition',
    title: 'Nutrition',
    description: 'Simple nutrition guidance for women who want energy, recovery, strength, and steady progress without crash dieting.',
    seoTitle: 'Women Fitness Nutrition Guide | Femme Fit Hub',
    metaDescription: 'Nutrition articles for women covering healthy eating, protein, hydration, weight management, and sustainable fitness routines.'
  },
  {
    slug: 'womens-health',
    title: "Women's Health",
    description: 'Wellness guidance for women across life stages, including recovery, mobility, confidence, and supportive training.',
    seoTitle: "Women's Health and Fitness Articles | Femme Fit Hub",
    metaDescription: 'Women-focused health and fitness articles about recovery, mobility, confidence, postnatal fitness, and supportive gym routines.'
  },
  {
    slug: 'success-stories',
    title: 'Success Stories',
    description: 'Realistic transformation stories and member progress lessons from a supportive women-only fitness studio.',
    seoTitle: 'Women Fitness Success Stories | Femme Fit Hub',
    metaDescription: 'Read inspiring women fitness success stories, transformation lessons, and confidence-building journeys from Femme Fit Hub.'
  },
  {
    slug: 'local-guides',
    title: 'Local Guides',
    description: 'Local fitness guides for women searching for trusted gyms, classes, memberships, and coaching in Chennai.',
    seoTitle: 'Ladies Gym Local Guides Chennai | Femme Fit Hub',
    metaDescription: 'Local guides for ladies gyms in Valasaravakkam and Chennai, including women-only fitness, weight loss training, and membership guidance.'
  },
  {
    slug: 'workout-tips',
    title: 'Workout Tips',
    description: 'Beginner-friendly workout ideas, gym habits, recovery tips, and practical routines for busy women.',
    seoTitle: 'Workout Tips for Women | Femme Fit Hub',
    metaDescription: 'Workout tips for women covering beginner routines, gym confidence, recovery, class planning, and consistent fitness habits.'
  },
  {
    slug: 'faq',
    title: 'FAQ',
    description: 'Helpful answers to common questions about women-only gyms, memberships, training, nutrition, and trial classes.',
    seoTitle: 'Fitness FAQ for Women | Femme Fit Hub',
    metaDescription: 'Answers to common questions about women-only gyms, memberships, trainers, nutrition guidance, and free trial classes.'
  }
];

export function getBlogCategory(slug) {
  return blogCategories.find((category) => category.slug === slug);
}

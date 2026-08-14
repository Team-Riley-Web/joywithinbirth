export interface Module {
  number: number;
  title: string;
  focus: string;
  description: string;
}

export const modules: Module[] = [
  {
    number: 1,
    title: 'Nourishing Your Body',
    focus: 'Pregnancy Nutrition',
    description:
      'What to eat, what to avoid, and how to nourish your body through every trimester, without diet culture or fear-based rules.',
  },
  {
    number: 2,
    title: 'Holistic Pregnancy',
    focus: 'Activity, Exercise & Natural Remedies',
    description:
      'Gentle movement, natural remedies for common discomforts, and ways to keep your body strong and ready for labor.',
  },
  {
    number: 3,
    title: 'Nourishing Your Mind',
    focus: 'Mindset Training & Emotional Health',
    description:
      'Fear-release work, emotional health, and the mindset practices that carry you from anxious uncertainty into calm confidence.',
  },
  {
    number: 4,
    title: 'Joy Within Birth',
    focus: 'Energy, Flow & Goals for Labor',
    description:
      'Understanding your body’s energy through labor, and setting clear, personal goals for the birth you’re working toward.',
  },
  {
    number: 5,
    title: 'Planning for Your Natural Birth',
    focus: 'Birth Planning & Interventions',
    description:
      'Build a birth plan you actually understand, so you can advocate for yourself with clarity, whatever your birth setting.',
  },
  {
    number: 6,
    title: 'Joy Within Postpartum',
    focus: 'Preparing for the Fourth Trimester',
    description:
      'Preparing for recovery, rest, and the emotional reality of postpartum, before the baby arrives, not after.',
  },
  {
    number: 7,
    title: 'Nourishing Your Baby',
    focus: 'Introduction to Lactation',
    description:
      'The fundamentals of feeding your baby, so you walk into those first days with a plan instead of a panic.',
  },
  {
    number: 8,
    title: 'The Birth Partner',
    focus: 'Training for Dads & Support Persons',
    description:
      'A dedicated module built for your partner, so they walk into the room as a true teammate, not a bystander.',
  },
  {
    number: 9,
    title: 'Holistic Fertility',
    focus: 'Preparing Your Body to Conceive',
    description:
      'For those still trying to conceive: holistic preparation for your body, mind, and spirit before that positive test ever appears.',
  },
];

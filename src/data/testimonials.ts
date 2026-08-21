export interface Testimonial {
  quote: string;
  name: string;
  /**
   * The specific outcome this mother names in her own quote, used as a tag so a
   * reader scanning the page can find her own situation ("I've had a c-section
   * too").
   *
   * Only set where the quote itself states it — this is a label for her words,
   * never an inference about her birth.
   */
  context?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'After my first birth ended in a c-section, Hailey built belief in my body. I had a VBAC with joy throughout pregnancy, labor, delivery, and postpartum.',
    name: 'Kari L.',
    context: 'VBAC after c-section',
  },
  {
    quote:
      'Learning from Hailey instilled confidence to trust my body. We did fear release work and prayed together. I recently had my joyful HBAC.',
    name: 'Caroline S.',
    context: 'HBAC',
  },
  {
    quote:
      'The Joy Within Birth course was so absolutely wonderful during my fifth pregnancy. I recommend this course to any mama looking for holistic guidance.',
    name: 'Lauren Thomas',
    context: 'Fifth pregnancy',
  },
  {
    quote:
      'Hailey brings research and faith-based information. I experienced joy in labor and delivery, overcoming fear through her guidance.',
    name: 'Lindsay L.',
    context: 'Overcoming fear',
  },
  {
    quote:
      'The simple and succinct trainings and resources were key to my empowerment and preparation.',
    name: 'Sacha S.',
  },
  {
    quote:
      'Cannot recommend this course enough! So easy to watch on the go. Hailey is wise, generous, and thorough.',
    name: 'Abigail G.',
  },
  {
    quote:
      "I took Hailey's incredible birth class and cannot recommend it enough. She is so Spirit led and reminds us of birth's beauty.",
    name: 'Bryson S.',
  },
];

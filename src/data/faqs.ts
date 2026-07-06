export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What is Zaviah?",
    a: "Zaviah is a youth-driven platform in Pakistan that connects students with mentors, workshops, and community programs to build skills, confidence, and career direction.",
  },
  {
    q: "Who can join Zaviah?",
    a: "Any student in Pakistan looking for guidance, skill-building, or community support can join as a member.",
  },
  {
    q: "Is Zaviah free to join?",
    a: "Yes. Our mentorship sessions, workshops, and community programs are free for students. We believe access should never be a barrier.",
  },
  {
    q: "How do I become a member?",
    a: "Fill out the Member form from our Join Us menu. Our team will review your profile and connect you with programs based on your interests.",
  },
  {
    q: "How can my organization partner with Zaviah?",
    a: "Email us at zaviahorg@gmail.com or download our Organization Profile from the Partnerships section. We collaborate with youth-led and education-focused organizations nationwide.",
  },
];

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

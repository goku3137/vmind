export interface CatalogItem {
  id: string;
  title: string;
  category: "webinar" | "course" | "booking";
  categoryLabel: string;
  price: number; // in INR
  originalPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  features: string[];
  duration?: string;
  language?: string;
  tagmangoServiceId?: string;
}

export const CATALOG: CatalogItem[] = [
  // --- WEBINARS ---
  {
    id: "marrywise-webinar",
    title: "MarryWise Webinar",
    category: "webinar",
    categoryLabel: "Live Webinar",
    price: 10, // Testing mode: changed to 10 INR
    originalPrice: 499,
    badge: "Most Popular",
    tagmangoServiceId: "6ad86d03aa1a5b2f036ee3d9",
    shortDescription: "Marriage & Relationship Transformation Masterclass with Senior Psychologist Ranjini Vijith.",
    description: "Learn essential psychology frameworks to rebuild trust, improve emotional intimacy, and understand if the complete MarryWise program is right for your relationship.",
    features: [
      "Live 2-hour interactive deep-dive session",
      "Direct Q&A with Senior Psychologist Ranjini Vijith",
      "Actionable communication & emotional reconnect frameworks",
      "Lifetime access to session recording via TagMango",
      "Confidential & safe learning environment"
    ],
    duration: "2 Hours Live",
    language: "Malayalam / English"
  },

  // --- 1-ON-1 GUIDANCE & CONSULTATIONS ---
  {
    id: "marrywise-session",
    title: "MarryWise 1-to-1 Guidance Session",
    category: "booking",
    categoryLabel: "1-on-1 Consultation",
    price: 1999,
    originalPrice: 3500,
    badge: "Personalized",
    shortDescription: "Private 1-on-1 marriage & relationship guidance session with psychologist Ranjini Vijith.",
    description: "Discuss your personal relationship situation in a confidential 1-to-1 setting and receive tailored, actionable guidance designed specifically for your marriage.",
    features: [
      "60-minute confidential 1-to-1 video/voice consultation",
      "Personalized relationship assessment & root cause analysis",
      "Customized relationship roadmap & action steps",
      "Direct follow-up guidance & priority support on WhatsApp"
    ],
    duration: "60 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "couple-counselling",
    title: "Couple Counselling Session",
    category: "booking",
    categoryLabel: "Counselling Booking",
    price: 1999,
    originalPrice: 3000,
    badge: "Couples",
    shortDescription: "Strengthen communication and rebuild emotional connection with your partner.",
    description: "A neutral, supportive space for couples to address recurring conflicts, emotional distance, and rebuild a healthy partnership.",
    features: [
      "60-minute joint consultation for both partners",
      "Mediation & active listening frameworks",
      "Practical exercises to practice at home",
      "Flexible online scheduling"
    ],
    duration: "60 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "individual-therapy",
    title: "Individual Therapy Session",
    category: "booking",
    categoryLabel: "Therapy Booking",
    price: 1499,
    originalPrice: 2500,
    badge: "1-on-1 Therapy",
    shortDescription: "Guiding you towards clarity, inner peace, and emotional balance.",
    description: "Dedicated one-on-one psychological therapy for managing stress, anxiety, emotional burnout, and life transitions.",
    features: [
      "50-minute private one-on-one therapy",
      "Evidence-based cognitive & emotional techniques",
      "Completely confidential & non-judgmental space",
      "Personal growth roadmap"
    ],
    duration: "50 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "relationship-counselling",
    title: "Relationship Counselling Session",
    category: "booking",
    categoryLabel: "Counselling Booking",
    price: 1499,
    originalPrice: 2500,
    badge: "Relationships",
    shortDescription: "Support for singles, dating, or engaged individuals facing relationship dilemmas.",
    description: "Navigate complex emotional decisions, heal past relational wounds, and gain clarity on your future.",
    features: [
      "50-minute personal consultation",
      "Clarity on toxic patterns and relationship choices",
      "Attachment style insights",
      "Actionable coping strategies"
    ],
    duration: "50 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "teenage-parenting",
    title: "Teenage & Parenting Consultation",
    category: "booking",
    categoryLabel: "Parenting Booking",
    price: 1499,
    originalPrice: 2500,
    badge: "Parenting",
    shortDescription: "Helping teens build confidence and parents build stronger connections.",
    description: "Expert guidance for modern parenting challenges, teen emotional outbursts, academic stress, and behavioral difficulties.",
    features: [
      "50-minute consultation (parent or teen + parent)",
      "Strategies to bridge communication gaps",
      "Emotional resilience coaching",
      "Parenting action plan"
    ],
    duration: "50 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "nri-consultation",
    title: "NRI Online Global Consultation",
    category: "booking",
    categoryLabel: "Global Booking",
    price: 2499,
    originalPrice: 4000,
    badge: "NRI / Global",
    shortDescription: "Confidential online counselling from anywhere in the world across timezones.",
    description: "Tailored psychological support for non-resident Indians navigating cross-cultural challenges, long-distance marriage, and expat stress.",
    features: [
      "60-minute high-definition video consultation",
      "Flexible timezone scheduling (Middle East, Europe, US, UK, APAC)",
      "Secure encrypted video link",
      "Direct follow-up communication"
    ],
    duration: "60 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "postpartum-support",
    title: "Postpartum Support Session",
    category: "booking",
    categoryLabel: "Maternal Wellness",
    price: 1499,
    originalPrice: 2500,
    badge: "Maternal Care",
    shortDescription: "Empathetic emotional support for new mothers navigating postpartum changes.",
    description: "Compassionate therapy for postpartum baby blues, identity shifts, exhaustion, and partner adjustment after childbirth.",
    features: [
      "50-minute gentle, judgment-free consultation",
      "Emotional validation & self-care strategies",
      "Partner communication tips",
      "Ongoing reassurance & care"
    ],
    duration: "50 Minutes",
    language: "Malayalam / English"
  },
  {
    id: "sexual-wellness",
    title: "Intimacy & Sexual Wellness Session",
    category: "booking",
    categoryLabel: "Wellness Booking",
    price: 1999,
    originalPrice: 3500,
    badge: "Intimacy",
    shortDescription: "Safe, confidential support for physical & emotional intimacy.",
    description: "Clinical and compassionate guidance to overcome intimacy barriers, performance anxieties, and reconnect physically.",
    features: [
      "50-minute confidential consultation",
      "Clinical, shame-free guidance",
      "Couples or individual guidance",
      "Actionable comfort steps"
    ],
    duration: "50 Minutes",
    language: "Malayalam / English"
  },

  // --- SIGNATURE COURSES & PROGRAMS ---
  {
    id: "marrywise-complete",
    title: "MarryWise Complete Program",
    category: "course",
    categoryLabel: "Signature Program",
    price: 4999,
    originalPrice: 9999,
    badge: "Complete Journey",
    shortDescription: "Full marriage and relationship transformation journey with deep healing modules.",
    description: "Our comprehensive flagship program designed for couples committed to long-term harmony, trust revival, and enduring love.",
    features: [
      "Complete multi-week guided video modules",
      "Weekly live mentoring & Q&A sessions with Ranjini Vijith",
      "Practical workbooks & couple reflection exercises",
      "Exclusive community group access & priority assistance",
      "LMS portal access with lifetime updates"
    ],
    duration: "4 Weeks / Lifetime Access",
    language: "Malayalam / English"
  },
  {
    id: "dream-mind",
    title: "Dream Mind Reprogramming",
    category: "course",
    categoryLabel: "Mindset Program",
    price: 2999,
    originalPrice: 5999,
    badge: "Mindset",
    shortDescription: "Mind reprogramming & stress management program for professionals & entrepreneurs.",
    description: "Rewire your thought patterns, eliminate subconscious blocks, and build resilient mental focus.",
    features: [
      "Subconscious reprogramming audios & frameworks",
      "Stress relief & neuro-associative conditioning",
      "Daily 15-minute implementation drills",
      "Full digital course access"
    ],
    duration: "21 Days Program",
    language: "Malayalam / English"
  },
  {
    id: "stress-healing",
    title: "Stress Healing Journey",
    category: "course",
    categoryLabel: "Inner Healing",
    price: 1999,
    originalPrice: 3999,
    badge: "Healing",
    shortDescription: "Emotional stress, overthinking & inner healing program.",
    description: "Heal past emotional triggers, break free from catastrophic overthinking, and restore calm to your nervous system.",
    features: [
      "Somatic nervous system regulation exercises",
      "Guided emotional release meditations",
      "Overthinking interruption protocols",
      "Step-by-step healing guide"
    ],
    duration: "14 Days Guided",
    language: "Malayalam / English"
  },
  {
    id: "money-blocks",
    title: "Reset Your Money Blocks",
    category: "course",
    categoryLabel: "Abundance Mindset",
    price: 1999,
    originalPrice: 4999,
    badge: "Abundance",
    shortDescription: "Money mindset & financial confidence program to shatter limiting beliefs.",
    description: "Identify and eliminate deep-rooted money anxieties, subconscious guilt, and earning ceilings.",
    features: [
      "Root-cause money psychology audit",
      "Limiting belief reprogramming modules",
      "Wealth & confidence expansion exercises",
      "Lifetime access to materials"
    ],
    duration: "Self-Paced Course",
    language: "Malayalam / English"
  },
  {
    id: "shewise",
    title: "SheWise Program",
    category: "course",
    categoryLabel: "Women's Empowerment",
    price: 2499,
    originalPrice: 4999,
    badge: "Women",
    shortDescription: "Women's confidence, emotional independence & self-worth transformation.",
    description: "Empowering women to build unwavering self-esteem, set boundaries, and lead fulfilling personal and professional lives.",
    features: [
      "Self-worth & boundaries masterclass",
      "Navigating family & relationship expectations",
      "Financial & emotional confidence toolkit",
      "Sisterhood community circle"
    ],
    duration: "3 Weeks",
    language: "Malayalam / English"
  }
];

// Aliases mapping for user convenience and backward compatibility
export const ALIASES: Record<string, string> = {
  "marrywise": "marrywise-webinar",
  "webinar": "marrywise-webinar",
  "marrywise-webinar": "marrywise-webinar",
  "marrywise-session": "marrywise-session",
  "marrywise-1-on-1": "marrywise-session",
  "one-to-one": "marrywise-session",
  "session": "marrywise-session",
  "booking": "marrywise-session",
  "marrywise-program": "marrywise-complete",
  "marrywise-complete": "marrywise-complete",
  "complete": "marrywise-complete",
  "couple": "couple-counselling",
  "couples": "couple-counselling",
  "individual": "individual-therapy",
  "therapy": "individual-therapy",
  "nri": "nri-consultation",
  "parenting": "teenage-parenting",
  "teen": "teenage-parenting",
  "postpartum": "postpartum-support",
  "sexual": "sexual-wellness",
  "intimacy": "sexual-wellness",
  "dreammind": "dream-mind",
  "stress": "stress-healing",
  "money": "money-blocks",
  // TagMango Service ID aliases
  "6ad86d03aa1a5b2f036ee3d9": "marrywise-webinar",
  // Backwards compatibility with previous test IDs
  "future-program-1": "marrywise-session",
  "future-program-2": "marrywise-complete"
};

/**
 * Resolves a given query string / ID to a verified CatalogItem.
 * Defaults to 'marrywise-webinar' if not found or empty.
 */
export function getCatalogItem(idOrAlias?: string | null): CatalogItem {
  if (!idOrAlias) {
    return CATALOG[0];
  }

  const clean = idOrAlias.toLowerCase().trim();
  
  // Exact ID match
  const exact = CATALOG.find((c) => c.id.toLowerCase() === clean);
  if (exact) return exact;

  // Alias match
  const resolvedId = ALIASES[clean];
  if (resolvedId) {
    const aliased = CATALOG.find((c) => c.id === resolvedId);
    if (aliased) return aliased;
  }

  // Partial match fallback
  const partial = CATALOG.find((c) => c.id.includes(clean) || clean.includes(c.id));
  if (partial) return partial;

  // Default fallback
  return CATALOG[0];
}

/**
 * Returns prices map for backend order creation validation
 */
export function getProgramCatalogMap(): Record<string, number> {
  const map: Record<string, number> = {};
  CATALOG.forEach((item) => {
    map[item.id] = item.price;
  });
  // Also add aliases
  Object.entries(ALIASES).forEach(([alias, targetId]) => {
    const target = CATALOG.find((c) => c.id === targetId);
    if (target) {
      map[alias] = target.price;
    }
  });
  return map;
}

export type ThemeType = "marrywise" | "program" | "counselling";

/**
 * Returns the theme matching the item or alias ("marrywise" | "program" | "counselling")
 */
export function getThemeForItem(idOrAlias?: string | null): ThemeType {
  const item = getCatalogItem(idOrAlias);
  if (item.id.startsWith("marrywise") || item.id === "marrywise-webinar" || item.id === "marrywise-session" || item.id === "marrywise-complete") {
    return "marrywise";
  }
  if (item.category === "course") {
    return "program";
  }
  return "counselling";
}

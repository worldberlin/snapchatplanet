export interface Planet {
  slug: string;
  name: string;
  rank: number;
  emoji: string;
  color: string;
  hearts: string;
  shortMeaning: string;
  fullDescription: string;
}

export const planets: Planet[] = [
  {
    slug: "mercury",
    name: "Mercury",
    rank: 1,
    emoji: "🔴",
    color: "#FF6B6B",
    hearts: "💗❤️🩷",
    shortMeaning: "#1 best friend — most snaps exchanged",
    fullDescription:
      "Mercury is the innermost planet in Snapchat's Best Friends Solar System and represents your absolute number one best friend. When someone assigns you Mercury, it means you exchange more snaps with them than anyone else in their entire friend list. This prestigious position is reserved for the person they interact with most frequently — through direct snaps, chat messages, story replies, and daily conversations. Mercury friends typically display pink and red heart emojis alongside their name, signaling an intensely close bond. Earning Mercury status requires consistent, daily engagement: maintaining long snap streaks, responding quickly to messages, and being an active part of their Snapchat routine. Because rankings update dynamically based on recent activity, Mercury can shift if interaction patterns change. For many Snapchat Plus subscribers, seeing Mercury next to a friend's name is the ultimate validation of friendship priority within the solar system metaphor that Snap Inc. created for its premium Best Friends feature.",
  },
  {
    slug: "venus",
    name: "Venus",
    rank: 2,
    emoji: "🟡",
    color: "#F59E0B",
    hearts: "💛🩷",
    shortMeaning: "Second closest friend in the solar system",
    fullDescription:
      "Venus holds the second orbit in the Snapchat solar system, marking you as someone's runner-up best friend. While not the top spot, Venus is still an incredibly meaningful position — it means you are the second person they snap and chat with most often. Venus friends often appear with yellow and pink heart emojis, reflecting warmth and closeness just behind the Mercury rank. Reaching Venus requires strong daily interaction: regular snap exchanges, active chat participation, and consistent story engagement. Many users aspire to move from Venus to Mercury by increasing their interaction frequency and maintaining streaks. The Venus position demonstrates that you are a core part of their social circle on Snapchat, someone they turn to regularly for conversation and sharing moments. Like all planet rankings, Venus is recalculated based on recent activity, so staying engaged is key to holding this coveted second-place orbit in their Best Friends Solar System.",
  },
  {
    slug: "earth",
    name: "Earth",
    rank: 3,
    emoji: "🌍",
    color: "#10B981",
    hearts: "💚💙⭐",
    shortMeaning: "Third best friend on Snapchat",
    fullDescription:
      "Earth occupies the third position in Snapchat's planetary friendship ranking system. Being someone's Earth means you rank as their third most-interacted friend — a solid, dependable position in their inner social circle. Earth friends are characterized by green, blue, and star emojis that reflect a grounded, meaningful connection. You likely share regular snaps, participate in group conversations, and maintain active streaks with this person. While Earth is not the closest orbit, it still places you firmly among their top eight best friends, which is a significant achievement given how many connections most Snapchat users maintain. To reach or maintain Earth status, focus on daily snap exchanges, thoughtful story replies, and consistent chat activity. The recency algorithm weighs recent interactions heavily, so periodic bursts of activity help sustain your ranking. Earth represents stability in the friendship solar system — a trusted friend who is always in their orbit.",
  },
  {
    slug: "mars",
    name: "Mars",
    rank: 4,
    emoji: "🟠",
    color: "#EF4444",
    hearts: "❤️💜⭐",
    shortMeaning: "Fourth best friend on Snapchat",
    fullDescription:
      "Mars represents the fourth position in the Snapchat Best Friends Solar System. When you are someone's Mars, you are their fourth most-interacted friend — still well within their top eight and a meaningful part of their daily Snapchat experience. Mars friends often display red, purple, and star emojis alongside their names. This ranking reflects a strong but not dominant friendship dynamic: you snap regularly, maintain streaks, and engage through chats and stories, but other friends currently edge ahead in total interaction volume. Moving up from Mars to a higher planet requires increasing your snap frequency, being more responsive to messages, and engaging with their stories more actively. The Mars position is common among close friend groups where multiple people compete for top rankings. Because Snapchat recalculates planet positions based on recent activity patterns, consistent daily engagement is the best strategy for climbing the solar system ranks.",
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    rank: 5,
    emoji: "🤎",
    color: "#92400E",
    hearts: "💗💙",
    shortMeaning: "Fifth closest friend on Snapchat",
    fullDescription:
      "Jupiter is the fifth planet in Snapchat's friendship solar system, representing someone's fifth most-interacted best friend. Named after the largest planet in our real solar system, the Jupiter position on Snapchat signifies a substantial friendship that may not be daily but remains consistently active. Jupiter friends display pink and blue heart emojis, indicating warmth and connection. You likely share snaps several times a week, participate in occasional group chats, and maintain at least one streak with this person. While Jupiter is in the middle of the ranking, it still means you are among their eight closest Snapchat connections — a notable achievement. To improve your Jupiter ranking, increase your daily snap exchanges, reply to their stories more often, and initiate conversations proactively. Snapchat's algorithm prioritizes recency and frequency, so even a week of heightened interaction can shift your planet position upward in their solar system.",
  },
  {
    slug: "saturn",
    name: "Saturn",
    rank: 6,
    emoji: "🪐",
    color: "#D97706",
    hearts: "💛⭐",
    shortMeaning: "Sixth best friend on Snapchat",
    fullDescription:
      "Saturn holds the sixth orbit in the Snapchat Best Friends Solar System, marking you as someone's sixth most-interacted friend. Like its real-world namesake known for its distinctive rings, the Saturn position represents a friendship with defined boundaries — close enough to be in the top eight, but not among the most frequent daily interactors. Saturn friends typically show yellow heart and star emojis. You probably exchange snaps a few times per week and engage through stories and group chats periodically. Maintaining Saturn status requires at least moderate ongoing interaction; long periods of inactivity can push you out of the top eight entirely. To climb from Saturn to a higher planet, focus on daily snap streaks, quick chat responses, and regular story engagement. The Snapchat recency algorithm means that renewed effort can quickly improve your ranking, potentially moving you to Uranus, Mars, or even higher depending on how your activity compares to other friends in their solar system.",
  },
  {
    slug: "uranus",
    name: "Uranus",
    rank: 7,
    emoji: "🔵",
    color: "#60A5FA",
    hearts: "💙💚",
    shortMeaning: "Seventh best friend on Snapchat",
    fullDescription:
      "Uranus is the seventh planet in Snapchat's friendship ranking system, placing you as someone's seventh most-interacted best friend. This outer orbit position means you are still within their top eight — the cutoff for appearing in the Best Friends Solar System — but your interaction frequency is lower than the six friends ranked above you. Uranus friends display blue and green heart emojis, reflecting a cool but genuine connection. You likely snap occasionally, reply to stories from time to time, and may share a streak that you both try to maintain. Falling to Neptune or dropping out of the top eight is a risk if interaction decreases, so consistent engagement is important even at this rank. To move up from Uranus, increase your daily snap count with this person, initiate more conversations, and engage with their content regularly. Snapchat's dynamic algorithm rewards recent activity, making it possible to climb several ranks with sustained effort over a week or two.",
  },
  {
    slug: "neptune",
    name: "Neptune",
    rank: 8,
    emoji: "🌑",
    color: "#3B82F6",
    hearts: "💙",
    shortMeaning: "Eighth best friend — outermost orbit",
    fullDescription:
      "Neptune is the outermost and final planet in Snapchat's Best Friends Solar System, representing someone's eighth and last ranked best friend. Being Neptune means you are at the edge of their top eight — still included in the solar system, but with the lowest interaction frequency among visible friends. Neptune friends display a single blue heart emoji, signaling a connection that exists but is not among the most active daily relationships. This position is often precarious: a small decrease in snaps or chats can push you out of the top eight entirely, removing your planet from their solar system view. To maintain Neptune or climb higher, prioritize daily snap exchanges, respond promptly to messages, and engage with their stories consistently. Many users who find themselves at Neptune use it as motivation to increase their interaction and move inward toward Uranus, Saturn, or beyond. Despite being the last rank, Neptune still confirms you are among their eight closest Snapchat friends.",
  },
];

export function getPlanetBySlug(slug: string): Planet | undefined {
  return planets.find((p) => p.slug === slug);
}

export function getAdjacentPlanets(slug: string): {
  prev: Planet | null;
  next: Planet | null;
} {
  const index = planets.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? planets[index - 1] : null,
    next: index < planets.length - 1 ? planets[index + 1] : null,
  };
}

export interface Planet {
  id: string;
  name: string;
  rank: number;
  emoji: string;
  color: string;
  meaning: string;
  description: string;
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    rank: 1,
    emoji: "☿️",
    color: "#b5b5b5",
    meaning: "Your #1 Best Friend",
    description:
      "Mercury is the closest planet to the Sun in your Snapchat solar system — meaning this person is your absolute top best friend. You snap each other more than anyone else.",
  },
  {
    id: "venus",
    name: "Venus",
    rank: 2,
    emoji: "♀️",
    color: "#e8cda0",
    meaning: "Your #2 Best Friend",
    description:
      "Venus holds the second orbit. This friend is your runner-up bestie — you interact with them constantly, just behind your Mercury friend.",
  },
  {
    id: "earth",
    name: "Earth",
    rank: 3,
    emoji: "🌍",
    color: "#6b93d6",
    meaning: "Your #3 Best Friend",
    description:
      "Earth sits in third place. A solid, close friendship with frequent snaps and chats that keeps your solar system thriving.",
  },
  {
    id: "mars",
    name: "Mars",
    rank: 4,
    emoji: "♂️",
    color: "#c1440e",
    meaning: "Your #4 Best Friend",
    description:
      "Mars represents your fourth closest friend. Still a key part of your orbit — you share plenty of streaks and memories together.",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    rank: 5,
    emoji: "♃",
    color: "#c88b3a",
    meaning: "Your #5 Best Friend",
    description:
      "Jupiter is the largest planet and your fifth-ranked friend. A meaningful connection that keeps growing with every snap.",
  },
  {
    id: "saturn",
    name: "Saturn",
    rank: 6,
    emoji: "♄",
    color: "#f4d59e",
    meaning: "Your #6 Best Friend",
    description:
      "Saturn, famous for its rings, marks your sixth closest friend. A steady presence in your Snapchat universe.",
  },
  {
    id: "uranus",
    name: "Uranus",
    rank: 7,
    emoji: "♅",
    color: "#93b8c4",
    meaning: "Your #7 Best Friend",
    description:
      "Uranus orbits at position seven. This friend is still part of your inner circle of best friends on Snapchat.",
  },
  {
    id: "neptune",
    name: "Neptune",
    rank: 8,
    emoji: "♆",
    color: "#5b5ddf",
    meaning: "Your #8 Best Friend",
    description:
      "Neptune is the outermost planet in your solar system — your eighth best friend. The final spot in Snapchat's planetary best friends list.",
  },
];

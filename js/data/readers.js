/* ================================================================
   TADOKU READER — BOOK DATA
   ================================================================

   HOW TO ADD A BOOK
   -----------------
   Add one line to the READERS array below:

     { title: "Book Title", level: 0, base: "Level-0-Book-Base" }

   - title : shown on the card (English or Japanese, your choice)
   - level : 0–4 (used for the video subfolder + level badge)
   - base  : filename WITHOUT extension. The same base is used for:
               video → ../n5-study-app/videos/reading/level{L}/{base}.mp4
               pdf   → ../n5-study-app/pdf/reading/{base}.pdf
               cover → ../n5-study-app/images/reading/{base}.png

   OPTIONAL: hide a missing asset for a specific book
   ---------------------------------------------------
   By default all three assets are assumed to exist.
   To hide a missing one, add a `has` object:

     { title: "X", level: 1, base: "Level-1-X", has: { pdf: false } }
     { title: "Y", level: 2, base: "Level-2-Y", has: { cover: false, pdf: false } }

   Then remove/flip the flag once the file is uploaded — no rebuild needed.
   ================================================================ */

const READERS = [
  // ─── Level 0 ────────────────────────────────────────────────
  { title: "A Little Bit", level: 0, base: "Level-0-A-Little-Bit" },
  {
    title: "Anko-chan: Seasonal Sweets",
    level: 0,
    base: "Level-0-Anko-Chan-Seasonal-Sweets",
  },
  { title: "Chrysanthemum", level: 0, base: "Level-0-Chrysanthemum" },
  { title: "Egg", level: 0, base: "Level-0-Egg" },
  { title: "Flowers & Colors", level: 0, base: "Level-0-Flowers-and-Colors" },
  { title: "Full", level: 0, base: "Level-0-Full" },
  {
    title: "Hanasuke: Walk With Shadow",
    level: 0,
    base: "Level-0-Hanasuke-The-Chihuahua-A-Walk-With-His-Shadow",
  },
  {
    title: "Hanasuke: Amazing",
    level: 0,
    base: "Level-0-Hanasuke-The-Chihuahua-Amazing",
  },
  {
    title: "Hanasuke: Cherry Blossom",
    level: 0,
    base: "Level-0-Hanasuke-The-Chihuahua-Cherry-Blossom-Viewing",
  },
  {
    title: "Hanasuke: Sorry Big Sister",
    level: 0,
    base: "Level-0-Hanasuke-The-Chihuahua-Im-Sorry-Big-Sister",
  },
  {
    title: "Hot Pot on a Cold Day",
    level: 0,
    base: "Level-0-Hot-Pot-On-A-Cold-Day",
  },
  { title: "I Want a Boyfriend", level: 0, base: "Level-0-I-Want-A-Boyfriend" },
  { title: "I Was There", level: 0, base: "Level-0-I-Was-There" },
  { title: "In the Night Sky", level: 0, base: "Level-0-In-The-Night-Sky" },
  { title: "It's Fine", level: 0, base: "Level-0-Its-Fine" },
  {
    title: "Ai-chan 1",
    level: 0,
    base: "Level-0-Japanese-Picture-Book-Ai-chan-1",
  },
  {
    title: "Ai-chan 2",
    level: 0,
    base: "Level-0-Japanese-Picture-Book-Ai-chan-2",
  },
  {
    title: "Hiroshima & Miyajima",
    level: 0,
    base: "Level-0-Lets-Go-To-Hiroshima-and-Miyajima",
  },
  { title: "Let's Make Tea", level: 0, base: "Level-0-Lets-Make-Some-Tea" },
  { title: "My Dad", level: 0, base: "Level-0-My-Dad" },
  { title: "Nikujaga", level: 0, base: "Level-0-Nikujaga" },
  { title: "Oden", level: 0, base: "Level-0-Oden" },
  { title: "Praying Mantis", level: 0, base: "Level-0-Praying-Mantis" },
  { title: "Snowman", level: 0, base: "Level-0-Snowman" },
  { title: "Still", level: 0, base: "Level-0-Still" },
  {
    title: "The Crow & the Pitcher",
    level: 0,
    base: "Level-0-The-Crow-and-the-Pitcher",
  },
  { title: "The Shepherd Boy", level: 0, base: "Level-0-The-Shepherd-Boy" },
  { title: "Two Frogs", level: 0, base: "Level-0-Two-Frogs" },
  { title: "Wanna Read It", level: 0, base: "Level-0-Wanna-Read-It" },
  { title: "What Is This", level: 0, base: "Level-0-What-Is-This" },

  // ─── Level 1 (PDF + cover pending) ─────────────────────────
  {
    title: "Big Apple",
    level: 1,
    base: "Level-1-big-apple",
  },
  {
    title: "Hanasuke: Hat & Muffler",
    level: 1,
    base: "Level-1-chihuahua-hanasuke-hat-and-muffler",
  },
  {
    title: "Hanasuke: Snowman",
    level: 1,
    base: "Level-1-chihuahua-hanasuke-snowman",
  },
  {
    title: "Crying Woman",
    level: 1,
    base: "Level-1-crying-woman",
  },
  {
    title: "Dia's Winter Vacation",
    level: 1,
    base: "Level-1-dias-winter-vacation",
  },
  {
    title: "Grandma Is Missing",
    level: 1,
    base: "Level-1-grandma-is-missing",
  },
  {
    title: "Mexican Dog",
    level: 1,
    base: "Level-1-mexican-dog",
  },
  {
    title: "My Family",
    level: 1,
    base: "Level-1-my-family",
  },
  {
    title: "Peanuts Are Interesting",
    level: 1,
    base: "Level-1-peanuts-are-interesting",
  },
  {
    title: "Peter Rabbit: Benjamin Bunny",
    level: 1,
    base: "Level-1-peter-rabbit-series-the-story-of-benjamin-bunny",
  },
  {
    title: "Peter Rabbit Story",
    level: 1,
    base: "Level-1-peter-rabbit-story",
  },
  {
    title: "Pumpkin to Autumn in Japan",
    level: 1,
    base: "Level-1-pumpkin-to-autumn-in-japan",
  },
  {
    title: "Schmoe House",
    level: 1,
    base: "Level-1-schmoe-house",
  },
  {
    title: "Dina: Going to Kyoto",
    level: 1,
    base: "Level-1-shiba-inu-dina-is-going-to-kyoto-in-autumn",
  },
  {
    title: "Vietnamese Spring Rolls",
    level: 1,
    base: "Level-1-vietnamese-spring-rolls",
  },
  {
    title: "Went to the Mountain",
    level: 1,
    base: "Level-1-went-to-the-mountain",
  },
  {
    title: "What Is This",
    level: 1,
    base: "Level-1-what-is-this",
  },

  // ─── Level 2 (PDF + cover pending) ─────────────────────────
  {
    title: "Dormitory Mother",
    level: 2,
    base: "Level-2-dormitory-mother-with-round-glasses",
  },
  {
    title: "Hokkaido",
    level: 2,
    base: "Level-2-hokkaido",
  },
  {
    title: "Lazy Huan",
    level: 2,
    base: "Level-2-lazy-huan",
  },
  {
    title: "Library at Night",
    level: 2,
    base: "Level-2-library-at-night",
  },
  {
    title: "My Boyfriend Likes Fried Tofu",
    level: 2,
    base: "Level-2-my-boyfriend-likes-fried-tofu",
  },
  {
    title: "Vitoria Resia",
    level: 2,
    base: "Level-2-vitoria-resia-stories-from-the-indigenous-people-of-brazil",
  },
  {
    title: "Welcome to Beppu",
    level: 2,
    base: "Level-2-welcome-to-beppu",
  },
  {
    title: "Yamada's Big Problem",
    level: 2,
    base: "Level-2-yamadas-big-problem",
  },

  // ─── Level 3 (PDF + cover pending) ─────────────────────────
  {
    title: "Black Bat and White Bat",
    level: 3,
    base: "Level-3-black-bat-and-white-bat",
  },
  {
    title: "Bullet Into Ball",
    level: 3,
    base: "Level-3-bullet-into-ball",
  },
  {
    title: "Emperor's Birthday",
    level: 3,
    base: "Level-3-emperors-birthday",
  },
  {
    title: "Felipa",
    level: 3,
    base: "Level-3-felipa",
  },
  {
    title: "Fox Dance",
    level: 3,
    base: "Level-3-fox-dance-the-day-when-the-children-of-himejima-become-foxes",
  },
  {
    title: "Frog",
    level: 3,
    base: "Level-3-frog",
  },
  {
    title: "Grandma's Uchinaguchi",
    level: 3,
    base: "Level-3-grandmas-uchinaguchi-okinawa-words",
  },
  {
    title: "Hot Spring Town Beppu",
    level: 3,
    base: "Level-3-hot-spring-town-beppu",
  },
  {
    title: "Iida-kun",
    level: 3,
    base: "Level-3-iida-kun",
  },
  {
    title: "Mysterious Things I Felt 2",
    level: 3,
    base: "Level-3-its-strange-mysterious-things-i-felt-2",
  },
  {
    title: "The Strange Thing I Felt",
    level: 3,
    base: "Level-3-its-strange-the-strange-thing-i-felt",
  },
  {
    title: "Science of Hot Springs",
    level: 3,
    base: "Level-3-science-of-hot-springs",
  },
  {
    title: "Shiitake Mushroom",
    level: 3,
    base: "Level-3-shiiitake-mushroom",
  },
  {
    title: "Mr. Kichishiroku",
    level: 3,
    base: "Level-3-the-story-of-mr-kichishiroku-a-fish-called-babakuro",
  },
  {
    title: "Tsureruzegusa",
    level: 3,
    base: "Level-3-tsureruzegusa",
  },
  {
    title: "Wild Rose",
    level: 3,
    base: "Level-3-wild-rose",
  },

  // ─── Level 4 (PDF + cover pending) ─────────────────────────
  {
    title: "Ali Baba",
    level: 4,
    base: "Level-4-ali-baba-and-the-forty-thieves-from-arabian-nights",
  },
  {
    title: "Cherry Blossoms and Whistle",
    level: 4,
    base: "Level-4-cherry-blossoms-and-whistle-from-osamu-dazais-the-cherry-blossoms-and-the-magic-flute",
  },
  {
    title: "Crow and Hedgehog",
    level: 4,
    base: "Level-4-crow-and-hedgehog",
  },
  {
    title: "Father of Beppu Tourism",
    level: 4,
    base: "Level-4-father-of-beppu-tourism",
  },
  {
    title: "Girl and Polar Bear",
    level: 4,
    base: "Level-4-girl-and-polar-bear",
  },
  {
    title: "Surprised by the Poster",
    level: 4,
    base: "Level-4-i-was-surprised-by-the-poster",
  },
  {
    title: "Valentine's Day in Japan",
    level: 4,
    base: "Level-4-valentines-day-in-japan",
  },

  // ─── Level 5 (PDF + cover pending) ─────────────────────────
  {
    title: "Sosekis Ten Nights of Dreams",
    level: 5,
    base: "Level-5-Sosekis-Ten-Nights-of-Dreams",
    has: { video: false }, // Hides the Watch button and cover link until the MP4 is ready
  },
];

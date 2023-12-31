const collection = [
    {
        name: "Dune",
        author: "Frank Herbert",
        synopsis: "This epic book takes place on the desert planet of Arrakis, where the most valuable substance in the universe - melange - is mined. The novel follows the story of Paul Atreides, a young nobleman, as he navigates the complex political and ecological landscape of Dune, facing power struggles, environmental challenges, and the prophecy of a messiah.",
        adaptations: "Dune (movie) - 1984 / Dune (movie) - 2021",
        cover: "/images/dune.jpg",
        altText: "An orange cover displaying a man alone in the desert",
        rating: "4.26",
        goodreads: "https://www.goodreads.com/book/show/44767458-dune?ac=1&from_search=true&qid=0YJw1L6xmD&rank=1",
    },
    {
        name: "The Word for World is Forest",
        author: "Ursula K Le Guin",
        synopsis: "In this novel, Ursula K. Le Guin explores themes of colonization and environmentalism. It's set on a distant planet called Athshe, where Earthlings exploit the native population and their lush forest, leading to a clash of cultures and a battle for freedom.",
        adaptations: "none",
        cover: "/images/forest.jfif",
        altText: "A green cover with a moon viewed from the forest",
        rating: "4.03",
        goodreads: "https://www.goodreads.com/book/show/276767.The_Word_for_World_Is_Forest?ref=nav_sb_ss_1_18",
    },
    {
        name: "Foundation",
        author: "Isaac Asimov",
        synopsis: "Foundation is the first book in Isaac Asimov's Foundation series. It revolves around the concept of 'psychohistory', a mathematical science that predicts the future of large populations. The story follows Hari Seldon, who predicts the fall of the Galactic Empire and works to establish a foundation to reduce the ensuing dark age.",
        adaptations: "Foundation (AppleTv+ series) - 2021",
        cover: "/images/foundation.jpg",
        altText: "A black and gold cover with geometric symbols",
        rating: "4.17",
        goodreads: "https://www.goodreads.com/book/show/29579.Foundation?ref=nav_sb_ss_1_10",
    },
    {
        name: "Roadside Picnic",
        author: "Arkady and Boris Strugatsky",
        synopsis: "Roadside Picnic is a Soviet science fiction novel that takes place in a mysterious, dangerous zone where extraterrestrial artifacts have been left behind. The story follows a 'stalker' who ventures into the zone to recover these strange objects.",
        adaptations: "Stalker (movie) - 1979",
        cover: "/images/roadside.jpg",
        altText: "A man using a protection cover while smoking a cigarrete. The cover also display some objects, like bolts and nuts",
        rating: "4.15",
        goodreads: "https://www.goodreads.com/book/show/331256.Roadside_Picnic?ref=nav_sb_ss_1_8",
    },
    {
        name: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        synopsis: "This humorous and absurd series begins with the accidental hero, Arthur Dent, who is saved from the destruction of Earth by Ford Prefect, an alien writer for the titular guidebook. The story follows their intergalactic adventures and the bizarre characters they encounter.",
        adaptations: "The Hitchhiker's Guide to the Galaxy (movie) - 2005",
        cover: "/images/hitchhikers.jpg",
        altText: "A blue cover with some fun symbols: a planet, a mouse, a thumbs up, a TV displaying the number 42, a sign saying 'Don't Panic' in big letters and a round green alien",
        rating: "4.23",
        goodreads: "https://www.goodreads.com/book/show/11.The_Hitchhiker_s_Guide_to_the_Galaxy?ref=nav_sb_ss_1_5",
    },
    {
        name: "Kindred",
        author: "Octavia E. Butler",
        synopsis: "Kindred is a time-travel novel that follows the journey of Dana, a modern Black woman who is inexplicably transported back in time to the antebellum South. She must confront the challenges and brutal realities of slavery while trying to survive and make sense of her situation.",
        adaptations: "Kindred (FX-Hulu series) - 2022",
        cover: "/images/kindred.jpg",
        altText: "An old farm house in red, and a line of slaves on front of it. On first plane, a girl with her chains broken",
        rating: "4.30",
        goodreads: "https://www.goodreads.com/book/show/60931.Kindred?ref=nav_sb_ss_1_7",
    },
    {
        name: "1984",
        author: "George Orwell",
        synopsis: "George Orwell's dystopian masterpiece is set in a totalitarian society under the constant surveillance of Big Brother. It follows the story of Winston Smith, who rebels against the oppressive regime and falls in love with Julia, leading to dire consequences.",
        adaptations: "1984 (movie) - 1956 / 1984 (movie) - 1984",
        cover: "/images/1984.jpg",
        altText: "A man wearing a uniform and with his hands chained, he looks at a television with a big eye",
        rating: "4.19",
        goodreads: "https://www.goodreads.com/book/show/61439040-1984?ref=nav_sb_ss_3_4",
    },
    {
        name: "Flowers for Algernon",
        author: "Daniel Keyes",
        synopsis: "This touching novel is written as a series of progress reports by Charlie Gordon, a man with intellectual disabilities who undergoes an experimental procedure to increase his intelligence. The book explores themes of intelligence, empathy, and the human condition.",
        adaptations: "Charly (movie) - 1968",
        cover: "/images/algernon.jpg",
        altText: "A blue cover with the outlines of a man and a mouse",
        rating: "4.20",
        goodreads: "https://www.goodreads.com/book/show/18373.Flowers_for_Algernon?ref=nav_sb_ss_1_11",
    },
    {
        name: "The Fifth Season",
        author: "N. K. Jemisin",
        synopsis: "This is the first book in 'The Broken Earth' trilogy. In a world prone to devastating geological catastrophes, individuals known as orogenes have the power to control and mitigate these events. The story follows three women with this ability and explores themes of power, oppression, and survival.",
        adaptations: "none",
        cover: "/images/thefifthseason.jpg",
        altText: "A green cover with an old metal door",
        rating: "4.31",
        goodreads: "https://www.goodreads.com/book/show/19161852-the-fifth-season?ref=nav_sb_ss_1_16S",
    },
    {
        name: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        synopsis: "Set in a post-apocalyptic future, this novel explores the moral and philosophical questions surrounding artificial intelligence and humanity. It follows the story of Rick Deckard, a bounty hunter tasked with 'retiring' rogue androids.",
        adaptations: "Blade Runner (movie) - 1982",
        cover: "/images/androids.jpg",
        altText: "A woman falling. On the background, you can see a full moon on the window and many set of stairs",
        rating: "4.09",
        goodreads: "https://www.goodreads.com/book/show/36402034-do-androids-dream-of-electric-sheep?ref=nav_sb_ss_1_11",
    },
];

export { collection };
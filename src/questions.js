// src/questions.js

export const questionBank = [
    // --- Original 50 Questions ---
    // Anime Questions
    {
        questionText: 'In "Jujutsu Kaisen", what is the name of Satoru Gojo\'s Domain Expansion?',
        answerOptions: [
            { answerText: 'Infinite Void', isCorrect: true },
            { answerText: 'Malevolent Shrine', isCorrect: false },
            { answerText: 'Self-Embodiment of Perfection', isCorrect: false },
            { answerText: 'Chimera Shadow Garden', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the primary goal of the scouts in "Attack on Titan"?',
        answerOptions: [
            { answerText: 'To build bigger walls', isCorrect: false },
            { answerText: 'To reclaim territory from Titans', isCorrect: true },
            { answerText: 'To find a new continent', isCorrect: false },
            { answerText: 'To negotiate peace with the Titans', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Demon Slayer", what is the name of the breathing style Tanjiro first learns?',
        answerOptions: [
            { answerText: 'Sun Breathing', isCorrect: false },
            { answerText: 'Flame Breathing', isCorrect: false },
            { answerText: 'Water Breathing', isCorrect: true },
            { answerText: 'Wind Breathing', isCorrect: false },
        ],
    },
    {
        questionText: 'In "My Hero Academia", what is Izuku Midoriya\'s Quirk?',
        answerOptions: [
            { answerText: 'Explosion', isCorrect: false },
            { answerText: 'One For All', isCorrect: true },
            { answerText: 'Half-Cold Half-Hot', isCorrect: false },
            { answerText: 'Zero Gravity', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is known as the "Chainsaw Man" in the anime of the same name?',
        answerOptions: [
            { answerText: 'Aki Hayakawa', isCorrect: false },
            { answerText: 'Power', isCorrect: false },
            { answerText: 'Denji', isCorrect: true },
            { answerText: 'Makima', isCorrect: false },
        ],
    },
    { questionText: 'In "Naruto", what is Kakashi\'s signature jutsu?', answerOptions: [{ answerText: 'Rasengan', isCorrect: false }, { answerText: 'Chidori', isCorrect: true }, { answerText: 'Shadow Clone Jutsu', isCorrect: false }, { answerText: 'Fireball Jutsu', isCorrect: false }] },
    { questionText: 'What is the name of the pirate crew led by Monkey D. Luffy in "One Piece"?', answerOptions: [{ answerText: 'Heart Pirates', isCorrect: false }, { answerText: 'Kid Pirates', isCorrect: false }, { answerText: 'Straw Hat Pirates', isCorrect: true }, { answerText: 'Blackbeard Pirates', isCorrect: false }] },
    { questionText: 'In "Spy x Family", what is Anya\'s secret ability?', answerOptions: [{ answerText: 'Super strength', isCorrect: false }, { answerText: 'Telepathy', isCorrect: true }, { answerText: 'Invisibility', isCorrect: false }, { answerText: 'Time travel', isCorrect: false }] },
    { questionText: 'In "Death Note", what must you know about a person to kill them with the notebook?', answerOptions: [{ answerText: 'Their face and name', isCorrect: true }, { answerText: 'Their birthdate', isCorrect: false }, { answerText: 'Their address', isCorrect: false }, { answerText: 'Their greatest fear', isCorrect: false }] },
    { questionText: 'What is the name of the virtual reality MMORPG in "Sword Art Online"?', answerOptions: [{ answerText: 'Alfheim Online', isCorrect: false }, { answerText: 'Gun Gale Online', isCorrect: false }, { answerText: 'Aincrad', isCorrect: true }, { answerText: 'Underworld', isCorrect: false }] },
    { questionText: 'What is the main objective in "Haikyuu!!"?', answerOptions: [{ answerText: 'To win the national high school volleyball tournament', isCorrect: true }, { answerText: 'To become the best swimmer', isCorrect: false }, { answerText: 'To win a basketball championship', isCorrect: false }, { answerText: 'To be the best ping pong player', isCorrect: false }] },
    { questionText: 'Who is the "One-Punch Man"?', answerOptions: [{ answerText: 'Genos', isCorrect: false }, { answerText: 'Saitama', isCorrect: true }, { answerText: 'King', isCorrect: false }, { answerText: 'Blast', isCorrect: false }] },
    { questionText: 'In "Fullmetal Alchemist: Brotherhood", what is the law of equivalent exchange?', answerOptions: [{ answerText: 'To gain something, something of equal value must be lost', isCorrect: true }, { answerText: 'Magic can solve any problem', isCorrect: false }, { answerText: 'Friendship conquers all', isCorrect: false }, { answerText: 'Power is absolute', isCorrect: false }] },
    { questionText: 'In "Tokyo Ghoul", what are ghouls?', answerOptions: [{ answerText: 'Vampires that drink blood', isCorrect: false }, { answerText: 'Creatures that eat human flesh', isCorrect: true }, { answerText: 'Spirits that haunt buildings', isCorrect: false }, { answerText: 'Aliens from another planet', isCorrect: false }] },
    { questionText: 'What is the name of the main character in "Dr. Stone"?', answerOptions: [{ answerText: 'Taiju', isCorrect: false }, { answerText: 'Senku', isCorrect: true }, { answerText: 'Gen', isCorrect: false }, { answerText: 'Chrome', isCorrect: false }] },
    { questionText: 'In "The Promised Neverland", what is the dark secret of Grace Field House?', answerOptions: [{ answerText: 'It\'s a school for spies', isCorrect: false }, { answerText: 'The children are raised as food for demons', isCorrect: true }, { answerText: 'It\'s a government experiment', isCorrect: false }, { answerText: 'The caretaker is a witch', isCorrect: false }] },
    { questionText: 'What is the name of the flame-wielding hero in "Fire Force"?', answerOptions: [{ answerText: 'Arthur Boyle', isCorrect: false }, { answerText: 'Shinra Kusakabe', isCorrect: true }, { answerText: 'Akitaru Obi', isCorrect: false }, { answerText: 'Takehisa Hinawa', isCorrect: false }] },
    { questionText: 'In "Vinland Saga", what is Thorfinn\'s primary motivation in the first season?', answerOptions: [{ answerText: 'To find Vinland', isCorrect: false }, { answerText: 'To avenge his father\'s death', isCorrect: true }, { answerText: 'To become a king', isCorrect: false }, { answerText: 'To become a wealthy merchant', isCorrect: false }] },
    { questionText: 'What is the power system in "Hunter x Hunter"?', answerOptions: [{ answerText: 'Chakra', isCorrect: false }, { answerText: 'Nen', isCorrect: true }, { answerText: 'Alchemy', isCorrect: false }, { answerText: 'Quirks', isCorrect: false }] },
    { questionText: 'In "Steins;Gate", what household appliance is part of the time machine?', answerOptions: [{ answerText: 'A toaster', isCorrect: false }, { answerText: 'A microwave', isCorrect: true }, { answerText: 'A washing machine', isCorrect: false }, { answerText: 'A refrigerator', isCorrect: false }] },
    { questionSuccess: 'What is the goal of the game in "Mob Psycho 100"?', answerOptions: [{ answerText: 'To become the strongest esper', isCorrect: false }, { answerText: 'To live a normal life and control his powers', isCorrect: true }, { answerText: 'To conquer the world', isCorrect: false }, { answerText: 'To find his lost brother', isCorrect: false }] },
    { questionText: 'In "Re:Zero", what is Subaru Natsuki\'s ability?', answerOptions: [{ answerText: 'Super strength', isCorrect: false }, { answerText: 'Return by Death', isCorrect: true }, { answerText: 'Mind reading', isCorrect: false }, { answerText: 'Invisibility', isCorrect: false }] },
    { questionText: 'In "Bleach", what are the soul reapers called?', answerOptions: [{ answerText: 'Ninja', isCorrect: false }, { answerText: 'Shinigami', isCorrect: true }, { answerText: 'Hollows', isCorrect: false }, { answerText: 'Quincies', isCorrect: false }] },
    { questionText: 'What is the name of the virtual reality game in "Overlord"?', answerOptions: [{ answerText: 'Yggdrasil', isCorrect: true }, { answerText: 'Elder Tales', isCorrect: false }, { answerText: 'The World', isCorrect: false }, { answerText: 'Sword Art Online', isCorrect: false }] },
    { questionText: 'In "Code Geass", what is the power that Lelouch receives?', answerOptions: [{ answerText: 'The ability to stop time', isCorrect: false }, { answerText: 'The power of absolute obedience', isCorrect: true }, { answerText: 'The ability to read minds', isCorrect: false }, { answerText: 'The ability to fly', isCorrect: false }] },

    // Gaming Questions
    {
        questionText: 'In "Valorant", which agent has the ultimate ability "Tour De Force"?',
        answerOptions: [
            { answerText: 'Jett', isCorrect: false },
            { answerText: 'Sova', isCorrect: false },
            { answerText: 'Reyna', isCorrect: false },
            { answerText: 'Chamber', isCorrect: true },
        ],
    },
    {
        questionText: 'Which of these is NOT an element you can control in "Genshin Impact"?',
        answerOptions: [
            { answerText: 'Pyro (Fire)', isCorrect: false },
            { answerText: 'Chrono (Time)', isCorrect: true },
            { answerText: 'Anemo (Wind)', isCorrect: false },
            { answerText: 'Geo (Earth)', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Fortnite", what is the name of the in-game currency?',
        answerOptions: [
            { answerText: 'Gems', isCorrect: false },
            { answerText: 'V-Bucks', isCorrect: true },
            { answerText: 'Fort-Coins', isCorrect: false },
            { answerText: 'Battle Bux', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the main objective of the "Impostor" in the game "Among Us"?',
        answerOptions: [
            { answerText: 'To complete all tasks first', isCorrect: false },
            { answerText: 'To sabotage the ship and eliminate the crewmates', isCorrect: true },
            { answerText: 'To vote out the wrong person', isCorrect: false },
            { answerText: 'To fix the communications array', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the name of the final boss in "Minecraft"?',
        answerOptions: [
            { answerText: 'The Wither', isCorrect: false },
            { answerText: 'The Ender Dragon', isCorrect: true },
            { answerText: 'Herobrine', isCorrect: false },
            { answerText: 'The Warden', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Elden Ring", players explore a world known as...',
        answerOptions: [
            { answerText: 'Lordran', isCorrect: false },
            { answerText: 'The Lands Between', isCorrect: true },
            { answerText: 'Yharnam', isCorrect: false },
            { answerText: 'Hyrule', isCorrect: false },
        ],
    },
    { questionText: 'In "Animal Crossing: New Horizons", who is the raccoon that manages the island\'s finances?', answerOptions: [{ answerText: 'Tom Nook', isCorrect: true }, { answerText: 'Isabelle', isCorrect: false }, { answerText: 'K.K. Slider', isCorrect: false }, { answerText: 'Blathers', isCorrect: false }] },
    { questionText: 'What role does "Mirage" play in "Apex Legends"?', answerOptions: [{ answerText: 'Healer', isCorrect: false }, { answerText: 'Holographic Trickster', isCorrect: true }, { answerText: 'Tank', isCorrect: false }, { answerText: 'Sniper', isCorrect: false }] },
    { questionText: 'In "League of Legends", what is the main objective?', answerOptions: [{ answerText: 'Get the most kills', isCorrect: false }, { answerText: 'Destroy the enemy\'s Nexus', isCorrect: true }, { answerText: 'Slay Baron Nashor 10 times', isCorrect: false }, { answerText: 'Control all the towers', isCorrect: false }] },
    { questionText: 'What is the name of the main character in the "The Legend of Zelda" series that the player controls?', answerOptions: [{ answerText: 'Zelda', isCorrect: false }, { answerText: 'Link', isCorrect: true }, { answerText: 'Ganon', isCorrect: false }, { answerText: 'Epona', isCorrect: false }] },
    { questionText: 'In "Stardew Valley", what is the name of the town you move to?', answerOptions: [{ answerText: 'Mineral Town', isCorrect: false }, { answerText: 'Pelican Town', isCorrect: true }, { answerText: 'Forget-Me-Not Valley', isCorrect: false }, { answerText: 'Olive Town', isCorrect: false }] },
    { questionText: 'What company developed the game "Cyberpunk 2077"?', answerOptions: [{ answerText: 'Bethesda', isCorrect: false }, { answerText: 'CD PROJEKT RED', isCorrect: true }, { answerText: 'Ubisoft', isCorrect: false }, { answerText: 'Rockstar Games', isCorrect: false }] },
    { questionText: 'In "Overwatch 2", which character is a cyborg ninja?', answerOptions: [{ answerText: 'Hanzo', isCorrect: false }, { answerText: 'Genji', isCorrect: true }, { answerText: 'Tracer', isCorrect: false }, { answerText: 'Winston', isCorrect: false }] },
    { questionText: 'What is the name of the protagonist in "The Witcher 3: Wild Hunt"?', answerOptions: [{ answerText: 'Jaskier', isCorrect: false }, { answerText: 'Geralt of Rivia', isCorrect: true }, { answerText: 'Eredin', isCorrect: false }, { answerText: 'Vesemir', isCorrect: false }] },
    { questionText: 'In "Red Dead Redemption 2", who is the main protagonist?', answerOptions: [{ answerText: 'John Marston', isCorrect: false }, { answerText: 'Arthur Morgan', isCorrect: true }, { answerText: 'Dutch van der Linde', isCorrect: false }, { answerText: 'Micah Bell', isCorrect: false }] },
    { questionText: 'What type of game is "Hades"?', answerOptions: [{ answerText: 'A first-person shooter', isCorrect: false }, { answerText: 'A roguelike dungeon crawler', isCorrect: true }, { answerText: 'A racing game', isCorrect: false }, { answerText: 'A life simulation game', isCorrect: false }] },
    { questionText: 'In the "Pokémon" series, which of these is a starter Pokémon from the Kanto region?', answerOptions: [{ answerText: 'Totodile', isCorrect: false }, { answerText: 'Bulbasaur', isCorrect: true }, { answerText: 'Treecko', isCorrect: false }, { answerText: 'Scorbunny', isCorrect: false }] },
    { questionText: 'What is the primary goal in the game "Fall Guys"?', answerOptions: [{ answerText: 'To solve puzzles', isCorrect: false }, { answerText: 'To be the last one standing in a series of mini-games', isCorrect: true }, { answerText: 'To build a base', isCorrect: false }, { answerText: 'To defeat a final boss', isCorrect: false }] },
    { questionText: 'In "God of War" (2018), what is Kratos\'s son\'s name?', answerOptions: [{ answerText: 'Zeus', isCorrect: false }, { answerText: 'Atreus', isCorrect: true }, { answerText: 'Mimir', isCorrect: false }, { answerText: 'Baldur', isCorrect: false }] },
    { questionText: 'What is the name of the battle royale island in "Call of Duty: Warzone"?', answerOptions: [{ answerText: 'Erangel', isCorrect: false }, { answerText: 'Verdansk/Caldera/Al Mazrah (all are valid)', isCorrect: true }, { answerText: 'Kings Canyon', isCorrect: false }, { answerText: 'The Island', isCorrect: false }] },
    { questionText: 'Which game features characters like "Steve" and "Alex" and involves building with blocks?', answerOptions: [{ answerText: 'Terraria', isCorrect: false }, { answerText: 'Minecraft', isCorrect: true }, { answerText: 'Roblox', isCorrect: false }, { answerText: 'Stardew Valley', isCorrect: false }] },
    { questionText: 'What is the name of the AI companion in the "Halo" series?', answerOptions: [{ answerText: 'Siri', isCorrect: false }, { answerText: 'Cortana', isCorrect: true }, { answerText: 'Alexa', isCorrect: false }, { answerText: 'GLaDOS', isCorrect: false }] },
    { questionText: 'In "Street Fighter", what is Ryu\'s signature move?', answerOptions: [{ answerText: 'Spinning Bird Kick', isCorrect: false }, { answerText: 'Hadouken', isCorrect: true }, { answerText: 'Shoryuken', isCorrect: false }, { answerText: 'Tatsumaki Senpukyaku', isCorrect: false }] },
    { questionText: 'What is the setting of "Ghost of Tsushima"?', answerOptions: [{ answerText: 'Feudal Japan', isCorrect: true }, { answerText: 'Ancient Greece', isCorrect: false }, { answerText: 'Viking-era Norway', isCorrect: false }, { answerText: 'The American Wild West', isCorrect: false }] },

    // --- New 50 Questions ---
    {
        questionText: 'What does the slang term "slay" mean?',
        answerOptions: [
            { answerText: 'To kill something', isCorrect: false },
            { answerText: 'To do something exceptionally well', isCorrect: true },
            { answerText: 'To be very tired', isCorrect: false },
            { answerText: 'To laugh loudly', isCorrect: false },
        ],
    },
    {
        questionText: 'If someone is "cringe", they are...?',
        answerOptions: [
            { answerText: 'Cool and popular', isCorrect: false },
            { answerText: 'Funny', isCorrect: false },
            { answerText: 'Awkward or embarrassing', isCorrect: true },
            { answerText: 'Very intelligent', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a "BeReal" post?',
        answerOptions: [
            { answerText: 'A highly edited Instagram photo', isCorrect: false },
            { answerText: 'A simultaneous photo from the front and back camera at a random time', isCorrect: true },
            { answerText: 'A short dance video', isCorrect: false },
            { answerText: 'A long text post', isCorrect: false },
        ],
    },
    {
        questionText: 'What does "IYKYK" stand for?',
        answerOptions: [
            { answerText: 'If You Know, You Know', isCorrect: true },
            { answerText: 'I\'ll Yet Keep You Knowing', isCorrect: false },
            { answerText: 'I Yell, You Yell, We Yell', isCorrect: false },
            { answerText: 'If You\'re Keen, You\'re Keen', isCorrect: false },
        ],
    },
    {
        questionText: 'What platform is primarily known for "duets" and "stitches"?',
        answerOptions: [
            { answerText: 'Instagram', isCorrect: false },
            { answerKey: 'YouTube', isCorrect: false },
            { answerText: 'TikTok', isCorrect: true },
            { answerText: 'Twitter (X)', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the "rizz"?',
        answerOptions: [
            { answerText: 'A type of snack', isCorrect: false },
            { answerText: 'Short for "charisma"; the ability to charm someone', isCorrect: true },
            { answerText: 'A new dance move', isCorrect: false },
            { answerText: 'A video game character', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Baldur\'s Gate 3", who is the popular vampire companion?',
        answerOptions: [
            { answerText: 'Gale', isCorrect: false },
            { answerText: 'Karlach', isCorrect: false },
            { answerText: 'Wyll', isCorrect: false },
            { answerText: 'Astarion', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the name of the main currency in "Roblox"?',
        answerOptions: [
            { answerText: 'Dollars', isCorrect: false },
            { answerText: 'Gems', isCorrect: false },
            { answerText: 'Robux', isCorrect: true },
            { answerText: 'Bloxbucks', isCorrect: false },
        ],
    },
    {
        questionText: 'Which "Valorant" agent is from Korea and uses fast movement abilities?',
        answerOptions: [
            { answerText: 'Viper', isCorrect: false },
            { answerText: 'Jett', isCorrect: true },
            { answerText: 'Sage', isCorrect: false },
            { answerText: 'Killjoy', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Genshin Impact", what are the seven nations all searching for?',
        answerOptions: [
            { answerText: 'The Seven Wonders', isCorrect: false },
            { answerText: 'The Gods or "Archons"', isCorrect: true },
            { answerText: 'The Fountain of Youth', isCorrect: false },
            { answerText: 'The Lost City of Atlantis', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Chainsaw Man", what is the name of Denji\'s dog-like devil partner?',
        answerOptions: [
            { answerText: 'Pochita', isCorrect: true },
            { answerText: 'Aki', isCorrect: false },
            { answerText: 'Meowy', isCorrect: false },
            { answerText: 'Cerberus', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the name of the school in "Jujutsu Kaisen" where the main characters study?',
        answerOptions: [
            { answerText: 'U.A. High', isCorrect: false },
            { answerText: 'Konoha Academy', isCorrect: false },
            { answerText: 'Tokyo Jujutsu High', isCorrect: true },
            { answerText: 'Ashinaka High School', isCorrect: false },
        ],
    },
    {
        questionText: 'In "One Piece", what is a "Devil Fruit"?',
        answerOptions: [
            { answerText: 'A fruit that makes you a great cook', isCorrect: false },
            { answerText: 'A fruit that grants the eater a special power, but they can no longer swim', isCorrect: true },
            { answerText: 'A fruit that is extremely poisonous', isCorrect: false },
            { answerText: 'A fruit that lets you talk to animals', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "Osu!"?',
        answerOptions: [
            { answerText: 'A fighting anime', isCorrect: false },
            { answerText: 'A popular rhythm game', isCorrect: true },
            { answerText: 'A type of Japanese noodle', isCorrect: false },
            { answerText: 'A catchphrase from "Haikyuu!!"', isCorrect: false },
        ],
    },
    {
        questionText: 'Which game is known for its "gulag" feature, where defeated players can fight for a chance to return?',
        answerOptions: [
            { answerText: 'Fortnite', isCorrect: false },
            { answerText: 'Apex Legends', isCorrect: false },
            { answerText: 'PUBG', isCorrect: false },
            { answerText: 'Call of Duty: Warzone', isCorrect: true },
        ],
    },
    {
        questionText: 'What does "NPC" mean in gaming and slang?',
        answerOptions: [
            { answerText: 'Non-Player Character', isCorrect: true },
            { answerText: 'New Player Choice', isCorrect: false },
            { answerText: 'National Pizza Co.', isCorrect: false },
            { answerText: 'No Problem, Chief', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Elden Ring", who is Malenia, Blade of Miquella?',
        answerOptions: [
            { answerText: 'The main protagonist', isCorrect: false },
            { answerText: 'A famously difficult optional boss', isCorrect: true },
            { answerText: 'A friendly merchant', isCorrect: false },
            { answerText: 'The final boss of the game', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a "VTuber"?',
        answerOptions: [
            { answerText: 'A veterinarian who posts on YouTube', isCorrect: false },
            { answerText: 'A content creator who uses a virtual, animated avatar', isCorrect: true },
            { answerText: 'A professional video game tester', isCorrect: false },
            { answerText: 'A type of VR headset', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Demon Slayer", what is a "Nichirin" sword?',
        answerOptions: [
            { answerText: 'A sword that can control time', isCorrect: false },
            { answerText: 'A sword made of a special ore that changes color for its owner', isCorrect: true },
            { answerText: 'A sword that is invisible', isCorrect: false },
            { answerText: 'A cursed sword that drains life', isCorrect: false },
        ],
    },
    {
        questionText: 'What does the term "simp" generally refer to?',
        answerOptions: [
            { answerText: 'Someone who is very simple-minded', isCorrect: false },
            { answerIn: 'Someone who is overly attentive to someone else, often in hopes of affection', isCorrect: true },
            { answerText: 'A short, simple video', isCorrect: false },
            { answerText: 'A new type of "sim" game', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "Phasmophobia"?',
        answerOptions: [
            { answerText: 'The fear of phases', isCorrect: false },
            { answerText: 'A co-op horror game about ghost hunting', isCorrect: true },
            { answerText: 'An anime about ghosts', isCorrect: false },
            { answerText: 'A TikTok challenge', isCorrect: false },
        ],
    },
    {
        questionText: 'In "My Hero Academia", who is the #1 Pro Hero at the *start* of the series?',
        answerOptions: [
            { answerText: 'Endeavor', isCorrect: false },
            { answerText: 'Hawks', isCorrect: false },
            { answerText: 'All Might', isCorrect: true },
            { answerText: 'Best Jeanist', isCorrect: false },
        ],
    },
    {
        questionText: 'A "Discord kitten" is a slang term for...?',
        answerOptions: [
            { answerText: 'A real cat on a Discord call', isCorrect: false },
            { answerText: 'A user who is overly needy or seeks attention in a "cutesy" way', isCorrect: true },
            { answerText: 'A popular bot for managing servers', isCorrect: false },
            { answerText: 'A new emoji pack', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Stardew Valley", what is the name of the corporation that is the "antagonist"?',
        answerOptions: [
            { answerText: 'Walmart', isCorrect: false },
            { answerText: 'Joja Corporation', isCorrect: true },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Umbrella Corporation', isCorrect: false },
        ],
    },
    {
        questionText: 'If a take is "mid", what does it mean?',
        answerOptions: [
            { answerText: 'It is excellent', isCorrect: false },
            { answerText: 'It is terrible', isCorrect: false },
            { answerText: 'It is mediocre or average', isCorrect: true },
            { answerText: 'It is very controversial', isCorrect: false },
        ],
    },
    {
        questionText: 'Which game is the "Imani" tech-based ultimate "KAMEHAMEHA" from?',
        answerOptions: [
            { answerText: 'Fortnite', isCorrect: true },
            { answerText: 'Valorant', isCorrect: false },
            { answerText: 'Apex Legends', isCorrect: false },
            { answerText: 'Overwatch 2', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a "lore dump"?',
        answerOptions: [
            { answerText: 'A small piece of information', isCorrect: false },
            { answerText: 'A large exposition of backstory in a movie, game, or show', isCorrect: true },
            { answerText: 'A video game cheat code', isCorrect: false },
            { answerText: 'A deleted scene', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Cyberpunk 2077", who is the rockstar ghost in your head?',
        answerOptions: [
            { answerText: 'V', isCorrect: false },
            { answerText: 'Jackie Welles', isCorrect: false },
            { answerText: 'Johnny Silverhand', isCorrect: true },
            { answerText: 'Adam Smasher', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the "main character energy" meme?',
        answerOptions: [
            { answerText: 'Feeling like you are the protagonist in a story', isCorrect: true },
            { answerText: 'Being a very boring person', isCorrect: false },
            { answerText: 'Only playing as the main character in games', isCorrect: false },
            { answerText: 'Hating the main character', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Attack on Titan", what is the "Rumbling"?',
        answerOptions: [
            { answerText: 'A loud stomach noise', isCorrect: false },
            { answerObs: 'The sound the Titans make', isCorrect: false },
            { answerText: 'A plan to unleash the millions of Titans inside the walls', isCorrect: true },
            { answerText: 'An earthquake', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Among Us", if you are "sussy" (or "sus"), you are...?',
        answerOptions: [
            { answerText: 'Suspicious', isCorrect: true },
            { answerText: 'Very good at the game', isCorrect: false },
            { answerText: 'The first one to die', isCorrect: false },
            { answerText: 'The host of the game', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "Hollow Knight"?',
        answerOptions: [
            { answerText: 'A popular indie metroidvania game', isCorrect: true },
            { answerText: 'A new anime about a ghost', isCorrect: false },
            { answerText: 'A character from "Elden Ring"', isCorrect: false },
            { answerText: 'A streaming service', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Spy x Family", what is Loid Forger\'s secret profession?',
        answerOptions: [
            { answerText: 'A doctor', isCorrect: false },
            { answerText: 'A spy', isCorrect: true },
            { answerText: 'An assassin', isCorrect: false },
            { answerText: 'A chef', isCorrect: false },
        ],
    },
    {
        questionText: 'And what is Yor Forger\'s secret profession?',
        answerOptions: [
            { answerText: 'A teacher', isCorrect: false },
            { answerText: 'A politician', isCorrect: false },
            { answerText: 'An assassin', isCorrect: true },
            { answerText: 'A scientist', isCorrect: false },
        ],
    },
    {
        questionText: 'What does "touch grass" mean?',
        answerOptions: [
            { answerText: 'To go camping', isCorrect: false },
            { answerText: 'To tell someone to go outside and disconnect from the internet', isCorrect: true },
            { answerText: 'To play a sport', isCorrect: false },
            { answerText: 'To water your lawn', isCorrect: false },
        ],
    },
    {
        questionText: 'In "League of Legends", what are "minions"?',
        answerOptions: [
            { answerText: 'Small, yellow characters from a movie', isCorrect: false },
            { answerText: 'Small AI-controlled creatures that fight for each team', isCorrect: true },
            { answerText: 'The weakest players', isCorrect: false },
            { answerText: 'A type of in-game pet', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "Twitch"?',
        answerOptions: [
            { answerText: 'A new social media app', isCorrect: false },
            { answerText: 'A live-streaming platform, primarily for gaming', isCorrect: true },
            { answerText: 'A fast-food delivery service', isCorrect: false },
            { answerText: 'A photo-editing software', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Valorant", what is the "Spike"?',
        answerOptions: [
            { answerText: 'The name of a weapon', isCorrect: false },
            { answerText: 'The bomb that the attacking team must plant', isCorrect: true },
            { answerText: 'A character\'s nickname', isCorrect: false },
            { answerText: 'A jump-boosting ability', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "MrBeast" famous for?',
        answerOptions: [
            { answerText: 'Being a professional gamer', isCorrect: false },
            { answerText: 'Large-scale, expensive stunts and philanthropy on YouTube', isCorrect: true },
            { answerText: 'Creating "Minecraft"', isCorrect: false },
            { answerText: 'Being a popular politician', isCorrect: false },
        ],
    },
    {
        questionText: 'If something "lives rent-free" in your head, it means...',
        answerOptions: [
            { answerText: 'You think about it a lot', isCorrect: true },
            { answerText: 'It is a free-to-play game', isCorrect: false },
            { answerText: 'It is a bad memory', isCorrect: false },
            { answerText: 'You forgot to pay for it', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the "Tarnished" in "Elden Ring"?',
        answerOptions: [
            { answerText: 'A type of armor', isCorrect: false },
            { answerText: 'The player character', isCorrect: true },
            { answerText: 'The main villain', isCorrect: false },
            { answerText: 'A magical spell', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Genshin Impact", Paimon is often jokingly referred to as...',
        answerOptions: [
            { answerText: 'The final boss', isCorrect: false },
            { answerText: 'Emergency Food', isCorrect: true },
            { answerText: 'The god of wind', isCorrect: false },
            { answerText: 'A treasure chest', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "ASMR"?',
        answerOptions: [
            { answerText: 'A new type of AI', isCorrect: false },
            { answerText: 'A tingling sensation some people get from specific sounds, like whispering', isCorrect: true },
            { answerText: 'A sports-drink brand', isCorrect: false },
            { answerText: 'A video game strategy', isCorrect: false },
        ],
    },
    {
        questionText: 'Which game is known for the phrase "Press F to Pay Respects"?',
        answerOptions: [
            { answerText: 'Halo', isCorrect: false },
            { answerText: 'Call of Duty: Advanced Warfare', isCorrect: true },
            { answerText: 'Battlefield 4', isCorrect: false },
            { answerText: 'Titanfall', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "fancam" in K-Pop culture?',
        answerOptions: [
            { answerText: 'A fan-made camera', isCorrect: false },
            { answerText: 'A video recording that focuses on a single member of a group during a performance', isCorrect: true },
            { answerText: 'A fan club meeting', isCorrect: false },
            { answerText: 'A digital fan letter', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Naruto", what is the name of the nine-tailed fox sealed inside him?',
        answerOptions: [
            { answerText: 'Shukaku', isCorrect: false },
            { answerText: 'Kurama', isCorrect: true },
            { answerText: 'Gyuki', isCorrect: false },
            { answerText: 'Matatabi', isCorrect: false },
        ],
    },
    {
        questionText: 'What is "doomscrolling"?',
        answerOptions: [
            { answerText: 'Playing the game "Doom"', isCorrect: false },
            { answerText: 'Scrolling through large amounts of negative or distressing news online', isCorrect: true },
            { answerText: 'A new dance move', isCorrect: false },
            { answerText: 'Hacking into a server', isCorrect: false },
        ],
    },
    {
        questionText: 'In "Pokémon", what type is Pikachu?',
        answerOptions: [
            { answerText: 'Water', isCorrect: false },
            { answerText: 'Electric', isCorrect: true },
            { answerText: 'Fire', isCorrect: false },
            { answerText: 'Grass', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a "ship" in fandom culture?',
        answerOptions: [
            { answerText: 'A boat', isCorrect: false },
            { answerText: 'Wanting two characters to be in a romantic relationship', isCorrect: true },
            { answerText: 'A piece of merchandise', isCorrect: false },
            { answerText: 'A fan convention', isCorrect: false },
        ],
    },
];

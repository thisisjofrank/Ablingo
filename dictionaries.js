const animals = [
    "Canidae",
    "Felidae",
    "Cat",
    "Cattle",
    "Dog",
    "Donkey",
    "Goat",
    "Guinea pig",
    "Horse",
    "Pig",
    "Rabbit",
    "Fancy rat varieties",
    "laboratory rat strains",
    "Sheep",
    "Water buffalo",
    "Chicken",
    "Duck",
    "Goose",
    "Pigeon",
    "Turkey",
    "Aardvark",
    "Aardwolf",
    "African buffalo",
    "African elephant",
    "African leopard",
    "Albatross",
    "Alligator",
    "Alpaca",
    "American Bison",
    "American Robin",
    "Amphibian",
    "Anaconda",
    "Angelfish",
    "Anglerfish",
    "Ant",
    "Anteater",
    "Antelope",
    "Antlion",
    "Ape",
    "Aphid",
    "Arabian leopard",
    "Arctic Fox",
    "Arctic Wolf",
    "Armadillo",
    "Arrow crab",
    "Asp",
    "Baboon",
    "Badger",
    "Bald eagle",
    "Bandicoot",
    "Barnacle",
    "Barracuda",
    "Basilisk",
    "Bass",
    "Bat",
    "Beaked whale",
    "Bear",
    "Beaver",
    "Bedbug",
    "Bee",
    "Beetle",
    "Bird",
    "Bison",
    "Blackbird",
    "Black panther",
    "Black widow spider",
    "Blue bird",
    "Blue jay",
    "Blue whale",
    "Boa",
    "Boar",
    "Bobcat",
    "Bobolink",
    "Bonobo",
    "Booby",
    "Box jellyfish",
    "Bovid",
    "Buffalo",
    "Bug",
    "Butterfly",
    "Buzzard",
    "Camel",
    "Canid",
    "Cape buffalo",
    "Capybara",
    "Cardinal",
    "Caribou",
    "Carp",
    "Cat",
    "Catshark",
    "Caterpillar",
    "Catfish",
    "Cattle",
    "Centipede",
    "Cephalopod",
    "Chameleon",
    "Cheetah",
    "Chickadee",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chipmunk",
    "Clam",
    "Clownfish",
    "Cobra",
    "Cod",
    "Condor",
    "Constrictor",
    "Coral",
    "Cougar",
    "Cow",
    "Coyote",
    "Crab",
    "Crane",
    "Crane fly",
    "Crawdad",
    "Crayfish",
    "Cricket",
    "Crocodile",
    "Crow",
    "Cuckoo",
    "Cicada",
    "Damselfly",
    "Deer",
    "Dingo",
    "Dinosaur",
    "Dog",
    "Dolphin",
    "Donkey",
    "Dormouse",
    "Dove",
    "Dragonfly",
    "Dragon",
    "Duck",
    "Dung beetle",
    "Eagle",
    "Earthworm",
    "Earwig",
    "Echidna",
    "Eel",
    "Egret",
    "Elephant",
    "Elephant seal",
    "Elk",
    "Emu",
    "English pointer",
    "Ermine",
    "Falcon",
    "Ferret",
    "Finch",
    "Firefly",
    "Fish",
    "Flamingo",
    "Flea",
    "Fly",
    "Flyingfish",
    "Fowl",
    "Fox",
    "Frog",
    "Fruit bat",
    "Gamefowl",
    "Galliform",
    "Gazelle",
    "Gecko",
    "Gerbil",
    "Giant panda",
    "Giant squid",
    "Gibbon",
    "Gila monster",
    "Giraffe",
    "Goat",
    "Goldfish",
    "Goose",
    "Gopher",
    "Gorilla",
    "Grasshopper",
    "Great blue heron",
    "Great white shark",
    "Grizzly bear",
    "Ground shark",
    "Ground sloth",
    "Grouse",
    "Guan",
    "Guanaco",
    "Guineafowl",
    "Guinea pig",
    "Gull",
    "Guppy",
    "Haddock",
    "Halibut",
    "Hammerhead shark",
    "Hamster",
    "Hare",
    "Harrier",
    "Hawk",
    "Hedgehog",
    "Hermit crab",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hookworm",
    "Hornet",
    "Horse",
    "Hoverfly",
    "Hummingbird",
    "Humpback whale",
    "Hyena",
    "Iguana",
    "Impala",
    "Irukandji jellyfish",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Junglefowl",
    "Kangaroo",
    "Kangaroo mouse",
    "Kangaroo rat",
    "Kingfisher",
    "Kite",
    "Kiwi",
    "Koala",
    "Koi",
    "Komodo dragon",
    "Krill",
    "Ladybug",
    "Lamprey",
    "Landfowl",
    "Land snail",
    "Lark",
    "Leech",
    "Lemming",
    "Lemur",
    "Leopard",
    "Leopon",
    "Limpet",
    "Lion",
    "Lizard",
    "Llama",
    "Lobster",
    "Locust",
    "Loon",
    "Louse",
    "Lungfish",
    "Lynx",
    "Macaw",
    "Mackerel",
    "Magpie",
    "Mammal",
    "Manatee",
    "Mandrill",
    "Manta ray",
    "Marlin",
    "Marmoset",
    "Marmot",
    "Marsupial",
    "Marten",
    "Mastodon",
    "Meadowlark",
    "Meerkat",
    "Mink",
    "Minnow",
    "Mite",
    "Mockingbird",
    "Mole",
    "Mollusk",
    "Moogoose",
    "Monitor lizard",
    "Monkey",
    "Moose",
    "Mosquito",
    "Moth",
    "Mountain goat",
    "Mouse",
    "Mule",
    "Muskox",
    "Narwhal",
    "Newt",
    "New World Quail",
    "Old World Quail",
    "Nightingale",
    "Ocelot",
    "Octopus",
    "Opossum",
    "Orangutan",
    "Orca",
    "Ostrich",
    "Otter",
    "Owl",
    "Ox",
    "Panda",
    "Panther",
    "Panthera",
    "Parakeet",
    "Parrot",
    "Parrotfish",
    "Partridge",
    "Peacock",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Perch",
    "Peregrine falcon",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pike",
    "Pilot whale",
    "Pinniped",
    "Piranha",
    "Planarian",
    "Platypus",
    "Polar bear",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Portuguese Man-o'war",
    "Possum",
    "Prairie Dog",
    "Prawn",
    "Praying mantis",
    "Primate",
    "Ptarmigan",
    "Puffin",
    "Puma",
    "Python",
    "Quail",
    "Quelea",
    "Quokka",
    "Rabbit",
    "Raccoon",
    "Rainbow trout",
    "Rat",
    "Rattlesnake",
    "Raven",
    "Batoidea",
    "Rajiformes",
    "Red Panda",
    "Reindeer",
    "Reptile",
    "Rhinoceros",
    "Right whale",
    "Roadrunner",
    "Rodent",
    "Rook",
    "Rooster",
    "Roundworm",
    "Saber-toothed cat",
    "Sailfish",
    "Salamander",
    "Salmon",
    "Sawfish",
    "Scale insect",
    "Scallop",
    "Scorpion",
    "Seahorse",
    "Sea lion",
    "Sea slug",
    "Sea snail",
    "Shark",
    "Sheep",
    "Shrew",
    "Shrimp",
    "Silkworm",
    "Silverfish",
    "Skink",
    "Skunk",
    "Sloth",
    "Slug",
    "Smelt",
    "Snail",
    "Snake",
    "Snipe",
    "Snow leopard",
    "Sockeye salmon",
    "Sole",
    "Sparrow",
    "Spider",
    "Spider monkey",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starfish",
    "Star-nosed mole",
    "Steelhead trout",
    "Stingray",
    "Stoat",
    "Stork",
    "Sturgeon",
    "Sugar glider",
    "Swallow",
    "Swan",
    "Swift",
    "Swordfish",
    "Swordtail",
    "Tahr",
    "Takin",
    "Tapir",
    "Tarantula",
    "Tarsier",
    "Tasmanian devil",
    "Termite",
    "Tern",
    "Thrush",
    "Tick",
    "Tiger",
    "Tiger shark",
    "Tiglon",
    "Toad",
    "Tortoise",
    "Toucan",
    "Trapdoor spider",
    "Tree frog",
    "Trout",
    "Tuna",
    "Turkey",
    "Turtle",
    "Tyrannosaurus",
    "Urial",
    "Vampire bat",
    "Vampire squid",
    "Vicuna",
    "Viper",
    "Vole",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Warbler",
    "Water Boa",
    "Water buffalo",
    "Weasel",
    "Whale",
    "Whippet",
    "Whitefish",
    "Whooping crane",
    "Wildcat",
    "Wildebeest",
    "Wildfowl",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodpecker",
    "Worm",
    "Wren",
    "Xerinae",
    "X-ray fish",
    "Yak",
    "Yellow perch",
    "Zebra",
    "Zebra finch",
    "Alpaca",
    "Bali cattle",
    "Cat",
    "Cattle",
    "Chicken",
    "Dog",
    "Bactrian camel",
    "Canary",
    "Dromedary camel",
    "Duck",
    "goat",
    "goose",
    "guineafowl",
    "hedgehog",
    "pig",
    "pigeon",
    "rabbit",
    "silkmoth",
    "silver fox",
    "turkey",
    "Donkey",
    "Fancy mouse",
    "Fancy rat",
    "Lab rat",
    "Ferret",
    "Gayal",
    "Goldfish",
    "Guinea pig",
    "Guppy",
    "Horse",
    "Koi",
    "Llama",
    "Ringneck dove",
    "Sheep",
    "Siamese fighting fish",
    "Society finch",
    "Yak",
    "Water buffalo",
];

function randomFrom(collection) {
    return collection[Math.floor(Math.random() * collection.length) + 0];
}

function generateName(wordNumber, divider = " ") {
    const allOptions = animals.join(" ");
    const singleWords = allOptions.split(" ");

    const names = [];
    while(names.length < wordNumber) {
        const random = randomFrom(singleWords);
        const capped = random.substr(0, 1).toUpperCase() + random.substr(1);
        names.push(capped);
    }
    
    return names.join(divider);
}

  
try {
    module.exports = { generateName };  
} catch { }
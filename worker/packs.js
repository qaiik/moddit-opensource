module.exports = ({app}) => {
    app.get('/worker/packs', (req, res) => {
        res.json({"error":false,"packs":{"OG":{"price":30,"color1":"#42c0ff","color2":"#2ca5e2","image":"/content/packs/OG.png","blooks":["susdog","Omar","Pablo","Comic Crew Inc","Death","Mixafyy","Piotr","painbow","acai","Cerulean","iBlooket","root","zastix","Doxy","Xotic"],"hidden":false},"Ankha":{"price":25,"color1":"#fae80b","color2":"#afa208","image":"/content/packs/Ankha.png","blooks":["Ankha","Mummy Ankha","Realistic Ankha","Glowing Ankha","Mark Ankha","Ankha's House","High Ankha","Black Ankha","Golden Ankha","Zone Ankha","Rainbow Ankha"],"hidden":false},"Blizzard":{"price":25,"color1":"#bbddff","color2":"#31aae0","image":"/content/packs/Blizzard.png","blooks":["Snow Globe","Holiday Gift","Hot Chocolate","Holiday Wreath","Stocking","Gingerbread Man","Gingerbread House","Reindeer","Snowman","Santa Claus","New York Snow Globe","London Snow Globe","Japan Snow Globe","Egypt Snow Globe","Paris Snow Globe","Frost Wreath","Tropical Globe","Golden Gift","Diamond Gift"],"hidden":false},"Sports":{"price":25,"color1":"#00a513","color2":"#00b120","image":"/content/packs/Sports.png","blooks":["Basketball","Baseball","Soccer Ball","Tennis Ball","Golf Ball","Football","Bowling Ball","Ping Pong Racket","Curling Stone","Football Helmet","Red Bowling Ball"],"hidden":false},"Spooky":{"price":25,"color1":"#525252","color2":"#1a1a1a","image":"/content/packs/Spooky.png","blooks":["Pumpkin","Swamp Monster","Frankenstein","Vampire","Zombie","Mummy","Caramel Apple","Werewolf","Ghost","Haunted Pumpkin","Pumpkin Cookie","Mummy Cookie","Ghost Cookie","Haunted Cookie","Chick Chicken","Chicken Chick","Raccoon Bandit","Owl Sheriff","Anaconda Wizard","Vampire Frog","Pumpkin King","Spooky Cookie","Spooky Pumpkin","Spooky Mummy","Spooky Ghost"],"hidden":false},"Candy":{"price":25,"color1":"#1ac3ff","color2":"#792ad5","image":"/content/packs/Candy.png","blooks":["Candy Corn","Jellybean","Lollipop","Black Licorice","Peppermint","Chocolate","Gummy Worm","Rock Candy","White Chocolate","Red Licorice","Blue Gummy Worm"],"hidden":false},"Dino":{"price":25,"color1":"#a0bd41","color2":"#153b31","image":"/content/packs/Dino.png","blooks":["Amber","Dino Egg","Dino Fossil","Stegosaurus","Velociraptor","Brontosaurus","Triceratops","Tyrannosaurus Rex","Golden Amber"],"hidden":false},"Ice Monster":{"price":25,"color1":"#1d4c5e","color2":"#003449","image":"/content/packs/Ice Monster.png","blooks":["Ice Bat","Ice Bug","Ice Elemental","Rock Monster","Dink","Donk","Bush Monster","Yeti","Ice Slime","Frozen Fossil","Ice Crab"],"hidden":false},"Outback":{"price":25,"color1":"#f08941","color2":"#96421d","image":"/content/packs/Outback.png","blooks":["Dingo","Echidna","Koala","Kookaburra","Platypus","Joey","Kangaroo","Crocodile","Sugar Glider","Teal Platypus"],"hidden":false},"Aquatic":{"price":20,"color1":"#00ccff","color2":"#0033cc","image":"/content/packs/Aquatic.png","blooks":["Old Boot","Jellyfish","Clownfish","Frog","Crab","Pufferfish","Blobfish","Octopus","Narwhal","Dolphin","Baby Shark","Megalodon","Lovely Frog","Lucky Frog","Spring Frog","Rainbow Jellyfish","Blizzard Clownfish","Poison Dart Frog","Lemon Crab","Pirate Pufferfish","Crimson Octopus","Donut Blobfish","Rainbow Narwhal"],"hidden":false},"Space":{"price":20,"color1":"#1c259c","color2":"#070028","image":"/content/packs/Space.png","blooks":["Earth","Meteor","Stars","Alien","Planet","UFO","Spaceship","Astronaut","Pink Astronaut","Red Astronaut","Orange Astronaut","Yellow Astronaut","Lime Astronaut","Green Astronaut","Cyan Astronaut","Blue Astronaut","Purple Astronaut","Brown Astronaut","Black Astronaut","Space Terminal","Space Debugger","Tim the Alien","Rainbow Astronaut"],"hidden":false},"Safari":{"price":20,"color1":"#ffdb4d","color2":"#ff6600","image":"/content/packs/Safari.png","blooks":["Panda","Sloth","Tenrec","Flamingo","Zebra","Elephant","Lemur","Peacock","Chameleon","Lion","Rainbow Panda","White Peacock","Tiger Zebra"],"hidden":false},"Fruit":{"price":20,"color1":"#d4bfb3","color2":"#af9d93","image":"/content/packs/Fruit.png","blooks":["Apple","Orange","Lemon","Lime","Grape","Strawberry","Raspberry","Blueberry","Watermelon","Dragon Fruit","Starfruit","Green Apple","Blue Raspberry"],"hidden":false},"Elemental":{"price":20,"color1":"#3c1be2","color2":"#0b1255","image":"/content/packs/Elemental.png","blooks":["Nature Elemental","Fire Elemental","Water Elemental","Air Elemental","Frost Elemental","Lava Elemental","Space Elemental","Electric Elemental","Plasma Elemental"],"hidden":false},"Bot":{"price":20,"color1":"#33cc33","color2":"#2d8659","image":"/content/packs/Bot.png","blooks":["Lil Bot","Lovely Bot","Angry Bot","Happy Bot","Watson","Buddy Bot","Brainy Bot","Mega Bot","Catson","Forgotten Bot"],"hidden":false},"Medieval":{"price":15,"color1":"#c8c8c8","color2":"#6c6c6c","image":"/content/packs/Medieval.png","blooks":["Elf","Witch","Wizard","Fairy","Slime Monster","Jester","Dragon","Queen","Unicorn","King","Agent Owl","Master Elf","Phantom King","Dark Dragon"],"hidden":false},"Breakfast":{"price":15,"color1":"#ffa65f","color2":"#c15523","image":"/content/packs/Breakfast.png","blooks":["Toast","Cereal","Yogurt","Breakfast Combo","Orange Juice","Milk","Waffle","Pancakes","French Toast","Pizza","Sandwich","Chocolate Milk"],"hidden":false},"Wonderland":{"price":15,"color1":"#00aaff","color2":"#612057","image":"/content/packs/Wonderland.png","blooks":["Two of Spades","Eat Me","Drink Me","Alice","Queen of Hearts","Dormouse","White Rabbit","Cheshire Cat","Caterpillar","Mad Hatter","King of Hearts"],"hidden":false}}})
    })
}
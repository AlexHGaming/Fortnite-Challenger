function playGame() {

  document.getElementById('welcomemsg').style = "display: none;";
  document.getElementById('game').style = "display: block;";

let challenges = [
'Place Top 5 or more without using a weapon.',
`Win a game using only Common weapons.`,
`Win a game using only Uncommon weapons.`,
`Win a game using only Rare weapons.`,
`Win a game using only Epic weapons.`,
`Win a game using only Legendary weapons.`,
`Stay on the grid on the minimap and place Top 10 or more.`,
`You have to do the 'Dance Moves' emote on every kill you get.
You need to dance before 10 seconds after the kill, and you can't
skip the animation until it is fully completed. Requires 3 kills to complete this challenge.`,
`Get 45%+ accuracy and get at least 3 kills.`,
`Take 300 or less damage and finish in the Top 5 or more.`,
`Win the game using Assault Rifles only. Requires 3+ kills to complete the challenge.`,
`Win the game using Sub Machine Guns only. Requires 3+ kills to complete the challenge.`,
`Win the game using Shotguns only. Requires 4+ kills to complete the challenge.`,
`Win the game using Explosives only. You can only use a Common Pistol for backup. Requires 2+ kills to complete the challenge.`,
`Win the game using Snipers only. You can only use a Common Pistol for backup. Requires 2+ kills to complete the challenge.`,
`Get 2 kills with your Pickaxe in a game.`,
`Get 10+ Solo kills in a game.`,
`Get 15+ total Duo kills in a game.`,
`Get 20+ total Squad kills in a game.`,
`Use no healing and obtain a Victory Royale.`,
`Use only traps, finish in the Top 3 and get 3+ kills to complete the challenge. You can only use a Common Pistol for backup.`,
`When you kill a tryhard TTV, emote on them proper hard.`,
`Skin rarity to gun rarity. Favourite 1 of each rarity in your Skin locker, then whatever skin you get in game, you are only allowed to pick up weapons of that skin rarity.`
]

let pickChallenge = Math.floor(Math.random() * challenges.length);
let numtotext = challenges[pickChallenge];

console.log(`At ${new Date()}, user got the challenge:\n"${numtotext}"`)
document.getElementById('displaychallenge').innerHTML = numtotext;
}

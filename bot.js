// =================================================
// | MAY THIS BOT ISN'T WELL CODED, DON'T BLAME PLEASE. I'M NOT A NodeJS DEVELOPER!.
// | CREATED BY  : https://github.com/theraw
// | CREATED FOR : https://github.com/cryptom4n
// =================================================
var CryptoBot = require("./libs/coincap.js");
const Discord = require("discord.js");
var Decimal = require('decimal.js');
const client = new Discord.Client();
const config = require("./config.json");
var CryptoBot = new CryptoBot();
// ==========================================================
// ==========================================================

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`Dope.ovh`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // ==========================================================
  // PING.
  // ==========================================================
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  // ==========================================================

  // ==========================================================
  // COINS.
  // ==========================================================
  if(command === "btc") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("btc", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const xu = new Decimal(in_usd);
          const in_eur = coin['PRICE_EUR'];
          const xe = new Decimal(in_eur);
          const ch1h = coin['CH1H'];
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + xu.toFixed(1) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + xe.toFixed(1) + "€** || ** " + ch1h + "% **");
      });
  };
  if(command === "eth") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("eth", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(1) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(1) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  if(command === "xmr") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("xmr", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(1) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(1) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  if(command === "trx") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("trx", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(7) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(7) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  if(command === "xrc") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("xrc", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(7) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(7) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  if(command === "xrp") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("xrp", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(7) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(7) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  if(command === "xvg") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("xvg", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(7) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(7) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  if(command === "krb") {
      // message.delete().catch(O_o=>{});
      CryptoBot.get("krb", coin => {
          const rank = coin['RANK'];
          const name = coin['NAME'];
          const sym = coin['SYMBOL'];
          const in_usd = coin['PRICE_USD'];
          const in_eur = coin['PRICE_EUR'];
          const in_btc = coin['PRICE_BTC'];
          const ch1h = coin['CH1H'];
          
          const exu = new Decimal(in_usd);
          const exe = new Decimal(in_eur);
          
      message.channel.send(`${message.author}`
          + "\n" + "**#" + rank + "** || **[" + sym + "-USD] **|| **" + exu.toFixed(7) + "$** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-EUR]  **|| **" + exe.toFixed(7) + "€** || ** " + ch1h + "% **"
          + "\n" + "**#" + rank + "** || **[" + sym + "-BTC]  **|| **" + in_btc + "** || ** " + ch1h + "% **");
      });
  };
  // ==========================================================
  // ==========================================================
});

client.login(config.token);

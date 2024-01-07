import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', (client) => {
  console.log(`🚀 Logged in as ${client.user.tag}`);
});

void client.login(process.env.DISCORD_TOKEN);

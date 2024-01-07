declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * Discord bot token
       * @see https://discord.com/developers/applications
       */
      DISCORD_TOKEN: string;
    }
  }
}

export {};

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "776387351";
global.owner = process.env.OWNER_NUMBER || "776387351";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JHWWUvck10blU0b1B3SjZtQUk2eGpXUE92bzErelJHTy90elRyM3pYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2NlTUplcW5jNldvNVhkT0JyeUpMVG1nbmdJTWc3akJibDJlWHZRdGFscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSEZFKzZnUlpKaUF5dmFKcnRvT2ExTmZ0WVBVU2svdlM3em8xT1M4NkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYmxtUFpoWTNPQnpZM2FvS3R6cmZBODZtNlpZRXFwb2xqbWV2Y0MvZ25FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFcmRVNy9ucGZScmlNc0JFc2ZhYTEwdWdDOS9CQ2wyV2htUUZsRE00RnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR3RHJrZmpMK3R1bnVEcUpqUXdsRVNWZmN0ZTFYdy9aUWEwdVZVdnNBRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZaYm5oNHFHRWt4aUd2R1pZRmlmR0hYanNpbHpWdXB6dFUraXArdEMycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFVWNFF4TlRON0NyMENkb2RPSjZYNmd0K21wempVZ2JIY2JGZE1MSStsZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8yb2UraFo4dWNEdFU2VG4yUVk1bFhrdVBBeVdTbmhIRjNQZEhYZlJ4WGFTM0Q4bi9nUnFKZzFSVlkwYUZYc2paVjdndForWHVaZVoxV3J4Mm1WU0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiIrRDVvSXk1dFdFZGxPMlIwUURNN05WSlU2T2hUTVVZWlZUQUg0alR0OThFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlbUJrMzFJclJVcTBsci1LNElmOGhRIiwicGhvbmVJZCI6ImQ1OTM1OTk0LWY1MWItNGM0Ny1iNzY1LTM5OTM2ODA5MzA4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YUd6ZXdOQ2pXRUd2VDllOTdiOGdhRHhxd1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTkwWUw4TkEyY0k2UUZiYmNTR3hjS1dvSHl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5STEtaV0JRIiwibWUiOnsiaWQiOiI5NDc3NjM4NzM1MToyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEaWx1dSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnkva09zRUVLdnR3TGtHR0JFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ1BvQW5JMWx3NzRsYUpwS1EwbVNCR1YwVWhuMXhpQlNjZTFTbnZWSjdTWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTVp6bUx1Q1FoTXFZdTlPNTZSWmtRODBnMmlobk5pbk9sMXhjZC9xc0VtMWhob01BT3RhY00wREJHU2JOMUk2SmphMVpaQ2p6bGMvYTlVd002Zy91Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJjYjRhSUlvQytZeFhVNHk0Q2wwclN4NnhCNzFka2YyYkpHcFRndGYrS2N5ZFh3aVNkeDZReTVuckFVWGdwV2JyMTFjdWFVK1B6NklOb3FOOE1wOUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzYzODczNTE6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUQ2QUp5TlpjTytKV2lhU2tOSmtnUmxkRklaOWNZZ1VuSHRVcDcxU2UwbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTIxMjk4NH0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "MrXhriss",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

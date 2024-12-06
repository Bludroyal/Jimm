//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517,2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349030851807";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRJc0dQWWh1VVFOWDlRWVgveG9mZER2bnRIV2lObU9Cbm9JMTliZGEzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2ZPcitqTlkyN2FWVTNWQkU5dGIwWVNOWmNqRUdEN2E5MTZhUnY3b0dRST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR21HQkppVnFaRjUvRE9aMEZxd0JjMXFqRnpucUZMV1JKbm0vS2t0MEhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Y21IVlR6T2dPZG9hTkdMbVQ2ekJERUh5d2t1Y3ZjU0J3Ry8vOEpVZlhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIcFNXbE5zRzB5ZWxTNkpRQUNuaWFRWkxaaGthQytiejFwWEU4NnFkR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZibEF0cllObHJ6Sm9PeUxFdllJZWp6ZVNOb1RINHRvRWlFenNUZmNoMlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUovT0pYWEk5ZnMyRUJxK1dqKzNyS2MzUDJMY2dWWVpzZjdtSWxlSnQzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0NHT3NMd3Z5SXV4ZVNmZjQzSitwQUhqNkZLcGRjVFdGeEZVQTQ0RTVSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitpRzNzM20xaHNBSmpHaWVoMk8zK2V1bkQ1NnRQWkk2aTVEUGFNK1V4SzFPUFBucWVOWlBlRlRMWWhiaDY1b0ZEUGFkTW1RaWpPTTlmakpUNzVsVGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiI5L1kxU1h2Z0c2MldrL1pZeGpmak9rSEFYd1BDakVxS2JjYzJ3TXpnZWlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMRzZydGpxaVJaSzh6THN5dDF0VVRBIiwicGhvbmVJZCI6ImM4YTlmMzMzLWUzNTUtNDU4YS05NWY3LWM2YmFiYTM3ZmVhMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTmQ5VkZYRTZVUmV6L2QyTUViUWxOQlZxQWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGw2TDVNeVVqd0JmcHBKaG1VM25rTUhPNWNnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRKWTFFMTUzIiwibWUiOnsiaWQiOiIyMzQ5MDMwODUxODA3OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSkVTVSBOSSBURU1JIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaUttcGNPRUpmK3Y3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNay9jYmNqTVdRNkxwaGJNZzZJaEwxaC9yTVByRWM3bVY4VHVsZUJTTFg4PSIsImFjY291bnRTaWduYXR1cmUiOiJEQWlaKzR3eE5EeFpOMXU3a1RFRzh4Q1EwWlIxVmJHcGtDd0pyazNMMG1TV1VETEEreURtZ0kvUW1vNU1zYkFMd0plSnBpYU40aDRuWkZsTEpsL0Vqdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMG11eTlZdFZ6Yk9tdVdBVnhtUGdWNFFwRFl1dkYycGxtWlR0VWRObFoyNXhmcG1lMSt4ZmQ2RlJEV2dWUnNmYVJPWG5pUU8ra1lZaGxPUlJjRGU0aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDMwODUxODA3OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEpQM0czSXpGa09pNllXeklPaUlTOVlmNnpENnhITzVsZkU3cFhnVWkxLyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzI5NTkwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKR2sifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

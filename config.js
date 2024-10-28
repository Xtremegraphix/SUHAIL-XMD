const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348061952633";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348061952633";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_27_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYN0N4LzJlKy91VUxHN0JxY3h1TDdQNCtVNnFaVmZCdVhyM0o5MG1SSWZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPVklIOHdlNlJoZTlFOC1YLXI1eUhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkzNDMwZjdhLTEwNjAtNDYyZS1iMGNjLWVmNjMwNDRiNmFiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICA3NCxcbiAgICAgIDMsXG4gICAgICAxODYsXG4gICAgICA0MCxcbiAgICAgIDE4MixcbiAgICAgIDk1LFxuICAgICAgMzksXG4gICAgICAxMTcsXG4gICAgICAxMyxcbiAgICAgIDEzNyxcbiAgICAgIDQ5LFxuICAgICAgOCxcbiAgICAgIDg5LFxuICAgICAgMzEsXG4gICAgICAyNDIsXG4gICAgICAxNzIsXG4gICAgICAxNjMsXG4gICAgICAxNjIsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTM1LFxuICAgICAgOTQsXG4gICAgICA4MyxcbiAgICAgIDUsXG4gICAgICAyMjAsXG4gICAgICAyMDEsXG4gICAgICAzLFxuICAgICAgNDYsXG4gICAgICAyMzksXG4gICAgICAyMDUsXG4gICAgICA5MixcbiAgICAgIDIwNSxcbiAgICAgIDE2MCxcbiAgICAgIDE4MCxcbiAgICAgIDIwOSxcbiAgICAgIDg1LFxuICAgICAgMTkxLFxuICAgICAgMjQ0LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjlUOTdHWjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjE5NTI2MzM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJYVFJFTUUgR1JBUEhJWFwiLFxuICAgIFwibGlkXCI6IFwiNTk5NjIzMjM2NDg3MTA6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCt2NWUwREVNUG4vN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJbmU1eVp2RWx4VnNva3YvYWY5VXJPeUN3bTZHbzdHSXAvUmtwNXRDSkhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlXRW1sODdnRkJCblhLc1JqY3ZjczRQMUl2VlR1YlhGN1FGMzBXelllUXdLV1dxaFgvTzU4OGhEdk5pNXlIM1ZmZS9TV1NUYzR4ZDB6NkJBVVMxZEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjAyUmUxQ3RJSVZTYzc4WDh6T2lYK0Ric2E4T2tlNHJITXp3TW1SOUxWT0VTRnJlWTR1L0k0RjVmYU5hTkVOTmowSUtPd1gzbWRUanJLN1p3WERHOGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjE5NTI2MzM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAxNDcyNzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

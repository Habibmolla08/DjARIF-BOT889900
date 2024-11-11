module.exports = {
 config: {
	 name: "😘",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "😘") {
 return message.reply({
 body: " 「❥︎----ღ᭄_আই লাভ য়উ আরিফ❞࿐.🙂❥︎---\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\ARIF~KHAN」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465019634_1087957656075690_2877642317146212449_n.mpga/3CfNi9HrPW.mpga?_nc_cat=110&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeGBpaSQ_FlzI6E_ydMH4tbsMeweGzR2efAx7B4bNHZ58NvhI0muJ_BuMMWuAEOH_ayNTM_HBYlGeGT1VQBNSHAY&_nc_ohc=tdrWxOqrev8Q7kNvgEs39vI&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AhQpc--M6z6QItK0-V0Zu8y&oh=03_Q7cD1QFwUCyW-zYSvL1Tzwl9zmXCX3nQZMbKxcdLuq_1DJ-ijQ&oe=6733D407&dl=1")
 });
 }
 }
}

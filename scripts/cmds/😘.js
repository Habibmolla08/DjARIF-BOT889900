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
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465019634_1087957656075690_2877642317146212449_n.mp3/1730393978031.mp3?_nc_cat=110&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeH7a8lrDD3z7-QZlA3w-DTuMeweGzR2efAx7B4bNHZ58MGyprBF6H0SurzLwU5_jmddFlbd2IbSMuLnB6ACDM5z&_nc_ohc=YedllqQUPW0Q7kNvgEh6mEV&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=Ae3ANgp5HYFBxAKUVV-ZdSu&oh=03_Q7cD1QHJuRHMeiRxUC8v-dYoevCxuzWbZQadsgQMxubzs11XFA&oe=6725AED5&dl=1")
 });
 }
 }
}

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
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465019634_1087957656075690_2877642317146212449_n.mpga/7fucuqWdSI.mpga?_nc_cat=110&ccb=1-7&_nc_sid=d61c36&_nc_ohc=gorgRaRlu0sQ7kNvgEdMze8&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AxELjOawWzfkcRYsdLpcKYY&oh=03_Q7cD1QGvEMxotrgTfyJ8vkGm6ctqDpdV8wVZfPXDnuh8WJWevw&oe=672A45F1&dl=1")
 });
 }
 }
}

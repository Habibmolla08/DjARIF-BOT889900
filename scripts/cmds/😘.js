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
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465019634_1087957656075690_2877642317146212449_n.mpga/Ys44X6fvsr.mpga?_nc_cat=110&ccb=1-7&_nc_sid=d61c36&_nc_ohc=tCb5CETAHp0Q7kNvgH09Us0&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=ArLx0jnRR95kGF-py6XEemU&oh=03_Q7cD1QG8EYXnSkzyMA-Hl1FafsT6G_lGhXeq2dHgwIIO8mbYgw&oe=6730D537&dl=1")
 });
 }
 }
}

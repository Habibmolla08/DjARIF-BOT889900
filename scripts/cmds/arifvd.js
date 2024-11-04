 module.exports = {
 config: {
	 name: "arif",
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
 if (event.body && event.body.toLowerCase() === "❤️") {
 return message.reply({
 body: " 「 arif༊••༅༅জীবটা সেই মানুষের সাথে কাটানো❥••༅༅\n🌸●─༅༅উচিত●─༅༅🌸\n••࿔࿔۵༅যার চেহারা থেকে মনটা অনেক༅••ღ🌸🖤\n❥••ღসুন্দর࿐۵🥰😘❤\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://video.xx.fbcdn.net/v/t42.3356-2/464843052_8472349266215706_6533432689869457339_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=X6gymhUuggkQ7kNvgF2riTH&_nc_zt=28&_nc_ht=video.xx&_nc_gid=A61RnDw1ybbxKqtKA6qN1xN&oh=03_Q7cD1QFAueLA-Q7NlWfz8RXn9k9PzlaSjv1mOLhd1w-KJ-Xe5w&oe=672A488E&dl=1")
 });
 }
 }
}

module.exports = {
 config: {
	 name: "i love you",
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
 if (event.body && event.body.toLowerCase() === "i love you") {
 return message.reply({
 body: " 「❥︎----ღ᭄_আই লাভ য়উ আরিফ❞࿐.🙂❥︎---\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\ARIF~KHAN」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465025296_1511293232739606_5416146510748784572_n.mp4/audioclip-1730325450000-6107.mp4?_nc_cat=105&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHDvJ6LrOPpj3YdqlPXzuYoiPBdItbcoemI8F0i1tyh6Xxc7dcQbLy6mx6T0ljyl18jwoMjLsR7-CgE0PYm1v70&_nc_ohc=OeFiVjsKvOcQ7kNvgE0sJnn&_nc_zt=28&_nc_ht=cdn.fbsbx.com&_nc_gid=A7bQjMJ6pOyasHFqXKmtXZz&oh=03_Q7cD1QG47CAKBaPbLBeAExyP7KYgdYQSeMR-RxMORCBqOJnJGw&oe=6724846F&dl=1")
 });
 }
 }
}

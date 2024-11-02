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
 body: " 「 আরিফ বস ওহ তোমাকে ভালো বাসে😍𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nARIF~KHAN」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/465491288_8619148174867999_280937313102379998_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeFHqtGfv06O-o6Adkjz1H35OGMGCvip9Rc4YwYK-Kn1F4F0vtn-V6EvVhgFz6gg2_pDBl9wWucPdEpmCJE2UPKD&_nc_ohc=Fr2azup2Y5IQ7kNvgHLpAzQ&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=AvvBh8BIVPjhPrXuyVexvgG&oh=03_Q7cD1QFdvHx18WPBJfwFxwwR6KD92U_9qxJTGLj--CDXEr8-iA&oe=67287ADE&dl=1")
 });
 }
 }
}

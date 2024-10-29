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
 if (event.body && event.body.toLowerCase() === "arif") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/464843052_8472349266215706_6533432689869457339_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeEqU_y1ehWlDSzJc4Ceioek696GrI1QLAXr3oasjVAsBS-fW1UL0Vt-49eslViwRc4rKO6n19nHjfbj2GPJGzdx&_nc_ohc=5ZbNeE-44t4Q7kNvgE7ASKH&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=AQLBBwqL__ExPbA4k0abMQc&oh=03_Q7cD1QEdmey3yVY8Pe6SoW9ndNqIXQS3wvOJMQ00D8j9RDSVDg&oe=6723408E&dl=1")
 });
 }
 }
   }

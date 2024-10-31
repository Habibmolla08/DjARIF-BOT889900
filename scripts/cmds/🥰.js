module.exports = {
 config: {
	 name: "🥰",
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
 if (event.body && event.body.toLowerCase() === "🥰") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nARIF~KHAN」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465198246_1068854197770847_6117100358872927033_n.mp3/1730394029542.mp3?_nc_cat=106&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeGmXGCjJTjvMG-OTdO_YbxGqSdI56YZncypJ0jnphmdzFh5oEMP4ASe4mrPwxSZavb9gxzropOl4XZs-d5-bH5K&_nc_ohc=2Rd9vtcgefEQ7kNvgE6S4fA&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=A_Ap2prp_u804-kTwnNTUKs&oh=03_Q7cD1QG81n1b59gBxdxhXSPW-7AKYx08WNWLmXpEvZGiRYts5A&oe=6725896F&dl=1")
 });
 }
 }
}

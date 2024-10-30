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
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465055555_1097032058710637_3834832479653525388_n.mp4/audioclip-1730325471000-6339.mp4?_nc_cat=104&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHvJgUH_7lNqkqWRGE45ur8AIFVJPLXIQwAgVUk8tchDPbTgrNAQ6SvxVbehU-fIf4ZUQ4R9xNOTOsRMJAC3xsd&_nc_ohc=dOKqXMYM46oQ7kNvgHHszdX&_nc_zt=28&_nc_ht=cdn.fbsbx.com&_nc_gid=A6XDlrF4DR1f8Yz93W_0Swr&oh=03_Q7cD1QEv7kAkleTfuzWGBXzim3bI-UNrcUzzV8A8iecN5TRHRw&oe=6724750D&dl=1")
 });
 }
 }
 }

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
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465198246_1068854197770847_6117100358872927033_n.mpga/lLKWZGGij8.mpga?_nc_cat=106&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHMG0XI3zmClIfzqu2rcU8qqSdI56YZncypJ0jnphmdzLMheMi6lv77z07GnCWIeKJcMwRtGf0J3-UhYigPD4aR&_nc_ohc=GWbSw4qwXYAQ7kNvgHiEBlm&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AxMn_LUteTP8TIPVcFtUdVU&oh=03_Q7cD1QH9kCWwHJPZ5IhKwqp2htIhIdGNc27S6JNDUJea7tg6oQ&oe=6729478B&dl=1")
 });
 }
 }
}

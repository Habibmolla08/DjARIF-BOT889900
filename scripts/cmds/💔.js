module.exports = {
 config: {
	 name: "💔",
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
 if (event.body && event.body.toLowerCase() === "💔") {
 return message.reply({
 body: " 「 「 🥰❥︎----ღ᭄_আৱিফ বস❞࿐.❤../n❥︎----ღ᭄_ছেঁকা খাইছে❞࿐.🌴🤎🙂./n❥︎----ღ᭄_কান্না করতাছে❞࿐.🌹..../n❥︎---জা বলার.༎༅..🤷‍♂🍀./n❥︎----ღ᭄_আমারে বলতে পারেন❞࿐.🙂\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ARIF」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465198246_1068854197770847_6117100358872927033_n.mpga/lLKWZGGij8.mpga?_nc_cat=106&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeFCK3MhdCm7jONv3cCjXmUIqSdI56YZncypJ0jnphmdzITnqfF0ZeKyMGUN9P4EkQ3MhXDtPM4wiA3jiv8xRO85&_nc_ohc=l8GfSNqgLvUQ7kNvgG8Rc9s&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=A4AyamB-rJuc6ucnWsbCHsa&oh=03_Q7cD1QF6DIwMIeP27HV71MRdad61ce3TOTgfHKenmc2fvoDsHg&oe=6733D38B&dl=1")
 });
 }
 }
}

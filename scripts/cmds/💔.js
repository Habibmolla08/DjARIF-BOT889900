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
 body: " 「 「 🥰❥︎----ღ᭄_আশিক বস❞࿐.❤../n❥︎----ღ᭄_ ছেঁকা খাইছে❞࿐.🌴🤎🙂./n❥︎----ღ᭄_কান্না করতাছে❞࿐.🌹..../n❥︎---জা বলার.༎༅..🤷‍♂🍀./n❥︎----ღ᭄_আমারে বলতে পারেন❞࿐.🙂\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/465198246_1068854197770847_6117100358872927033_n.mpga/lLKWZGGij8.mpga?_nc_cat=106&ccb=1-7&_nc_sid=d61c36&_nc_ohc=5-n3xFg6GL8Q7kNvgEqeSaU&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AzKItSLcBFk4fEV3gK7OYN_&oh=03_Q7cD1QEuNDEXdg6wfBXryB15uTkkgFI7R6eldjc2VNq23Yj8ag&oe=672EC5CB&dl=1")
 });
 }
 }
}

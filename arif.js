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
 body: "আৱিফ বস কাজে বিজি আছেন––আমি থাকতে কেও আমার বস এর কে পাবে না 🤣",
 attachment: await global.utils.getStreamFromURL("https://video.xx.fbcdn.net/v/t42.3356-2/464843052_8472349266215706_6533432689869457339_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=0F9tjdeEE38Q7kNvgHBWU0b&_nc_zt=28&_nc_ht=video.xx&_nc_gid=AsX01ywbtQkg4q50usoR01H&oh=03_Q7cD1QEPdd43_DSrGV3I6TOCg6sK7dSvzYg2O9MbOudSPGxnBg&oe=672EAD8E&dl=1")
 });
 }
 }
}

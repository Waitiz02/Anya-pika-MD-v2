const fs = require('fs')
const chalk = require('chalk')


global.botname = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ" 
global.botLanguage = "default" // 𝗗𝗲𝗳𝗮𝘂𝗹𝘁 || 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 || 𝗛𝗶𝗻𝗱𝗶 || 𝗔𝗿𝗮𝗯𝗶𝗰 \\
global.author = "𝙋𝙄𝙆𝘼"  
global.packname = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ"  
global.myweb = "https://github.com/PikaBotz" // You can put any link 
global.waterMark = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ" // Your own watermark 
global.headerText = "✩ͯ🄶🅁🄸🄵🄵🄾✵ bot by ✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ" // text for header of menu         
global.DocumentTitle = "MASTER✩ͯ🄶🅁🄸🄵🄵🄾✵" 


global.ownername = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷"   // Owner name //        
global.ownernumber = ['254113406513'] 
global.socialm = "𝗜𝗻𝘀𝘁𝗮 : 3.69_pika" // 𝗜𝗻𝘀𝘁𝗮 : || 𝗚𝗶𝘁𝗵𝘂𝗯 : || 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : \\
global.ytname = "YT: Ytname"   // Yt chanel name //
global.continent = "Asia" // your continent name 
global.region = "India" // your country name
global.state = "Assam" // your state name
global.district = "Dibrugarh" // your district name
global.timezone = "Asia/Kolkata" // search on google if you don't know the timezone of your country //
global.instagramId = "3.69_pika" // Your insta ID
global.email = "griffotech254@gmail.com" // put your email here


//------------ 🌟 Premium Users 🌟-------------\\
global.premium = ['916900******','917355******']  // available soon
global.sudo = ['916900******','917355******']  // Co - Owners //

global.prefa = ['-']

//--------Random bot name for Info section--------\\
name16 = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ"
name17 = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ"
name18 = "✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ"

//--------Random footer message-----------\\
footer1 = `✩ͯ🄶🅁🄸🄵🄵🄾✵ bot `
footer2 = `✩ͯ🄶🅁🄸🄵🄵🄾✵ bot`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara 😚🖕🏻' 
nikalmsg2 = 'Patt se headshot 🔫...Abey dil se bura lagta hai bhai 😂.'

//--------Random Tagall msg--------\\
tag1 = '𝘏𝘦𝘺 𝘦𝘷𝘦𝘳𝘺𝘣𝘰𝘥𝘺😚,' 
tag2 = '𝘖𝘺𝘦 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦!! 𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?😐' 
tag3 = '𝘈𝘣𝘦𝘺 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘢𝘰 𝘺𝘢𝘢𝘳!😑' 
tag4 = '𝘞𝘰𝘸 𝘭𝘰𝘰𝘬 ✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ😚' 
tag5 = '✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ' 
tag6 = 'maumbwa !🥵' 
tag7 = '𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?' 
tag8 = '𝘏𝘦𝘺 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?...✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ' 
tag9 = 'ayyeya ' 
tag10 = '𝘈𝘺𝘰𝘰 ✩ͯ🄶🅁🄸🄵🄵🄾✵ 🆃🅴🅲🅷✩ͯ 𝘉𝘦𝘴𝘵!!😚' 


global.mess = {
    success: 'Work done ',
    admin: "only for admins", // I used "\n" for change the line 
    botAdmin: 'First make me 𝗔𝗱𝗺𝗶𝗻!!! 😐',
    owner: 'This command is only for my 𝗼𝘄𝗻𝗲𝗿..',
    group: "umbwa  !!!!!\nYou can't use this command in a 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁 !😑",
    private: '!!\nThis command is only for 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁𝘀. 🥲',
    bot: "This Feature Is Only For 𝗕𝗼𝘁... and you're not a 𝗕𝗼𝘁.",
    wait: "I'm progressing your command , Please wait......",
    linkm: 'Abey where is the link...?',
    error: 'I got an 𝗲𝗿𝗿𝗼𝗿!!',
    sudo: "*Hey User 👋....*\nYou can't use this command because this command is only for my co-owner.", 
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the 𝗼𝘄𝗻𝗲𝗿 😡, if you want to be 𝘂𝗻𝗯𝗮𝗻𝗻𝗲𝗱, chat owner.',
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo 𝗜𝗔𝗦 - 𝗬𝗔𝗦 bano lekin nhii tumhe to nudity dekhni hai 👏',
    banChat: 'The bot was banned 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽!, please contact the owner to unban.'
}

//--------------- Menu images ----------------\\
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg.jpg")
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg2.jpeg")

//--------------- Systemic Function --------------\\
global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false 
global.available = true
global.autoTyping = false 

//----------- Users Userlimit -----------\\
global.userLimit = {
premium: "Infinity",  // premium users 
free: 12,            // Free users
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

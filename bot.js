const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"
var adminprefix = '-'


//bc

client.on("message", message => {
    if (message.content.startsWith("-obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "-";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '388074664649293836') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


      

client.on('message', msg => {
    if(msg.content === '-inv')
    msg.reply('Check Your DM :white_check_mark:')
  });

  client.on('message', msg => {
    if(msg.content === '-help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
 client.on("message", message => {
    if (message.content === "-inv") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**رابط البوت** 

         https://discordapp.com/api/oauth2/authorize?client_id=581606455539531786&permissions=0&scope=bot `)
   message.author.sendEmbed(embed)
   
   }
   });

  
  client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       -obc |  لأرسال برود كاست للكل

       -bc  |  لأرسال برود كاست للأونلاين
      
       -bot |  معلومات البوت
 
       -inv |  لدعوة البوت لسيرفر

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });


client.on('message', message => {
    if(message.content === "-bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});


client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });
		




const fs = require('fs');
const status = JSON.parse(fs.readFileSync('./status.json' , 'utf8'));
client.on("ready",() => { //iTzMurtaja
console.log("Ready!"); //iTzMurtaja
if(!status[client.user.id]) {status[client.user.id] = {
    text: client.user.tag,
    type: "WATCHING"
}} //iTzMurtaja
client.user.setActivity(status[client.user.id].text, {type: status[client.user.id].type})    //iTzMurtaja
});

client.on("message", message => { //iTzMurtaja
if(message.content.startsWith(prefix + "pre")) { //iTzMurtaja
if(message.author.id !== "348143440405725184") return; //iTzMurtaja
var args = message.content.split(" ").slice(1).join(" "); //iTzMurtaja
status[client.user.id].text = args //iTzMurtaja
message.reply("Done, I set it to \`" + args +"\`") //iTzMurtaja
  client.user.setActivity(status[client.user.id].text,{  type : status[client.user.id].type})} //iTzMurtaja
fs.writeFile("./status.json", JSON.stringify(status), (err) => { //iTzMurtaja
if (err) console.error(err) //iTzMurtaja
}) //iTzMurtaja
}); //iTzMurtaja

client.on("message", message => { //iTzMurtaja
if (message.author.id !== "388074664649293836") return; //iTzMurtaja
  if(message.content === prefix + "watching") { //iTzMurtaja
status[client.user.id].type = "WATCHING" //iTzMurtaja
message.reply("Done, I set it to \`WATCHING\`") //iTzMurtaja
client.user.setActivity(status[client.user.id], {type: status[client.user.id].type})} //iTzMurtaja
else //iTzMurtaja
if(message.content === prefix + "listening") { //iTzMurtaja
status[client.user.id].type = "LISTENING" //iTzMurtaja
message.reply("Done, I set it to \`LISTENING\`") //iTzMurtaja
client.user.setActivity(status[client.user.id], {type: status[client.user.id].type})} //iTzMurtaja
else //iTzMurtaja
if(message.content === prefix + "playing") { //iTzMurtaja
status[client.user.id].type = "PLAYING" //iTzMurtaja
message.reply("Done, I set it to \`PLAYING\`") //iTzMurtaja
client.user.setActivity(status[client.user.id], {type: status[client.user.id].type})} //iTzMurtaja
fs.writeFile("./status.json", JSON.stringify(status), (err) => { //iTzMurtaja
if (err) console.error(err) //iTzMurtaja
})}) //iTzMurtaja




 client.login(process.env.BOT_TOKEN); 

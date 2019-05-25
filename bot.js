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

var moment = require("moment");
client.on("message", message => {
	if(message.content.startsWith(prefix + "server")){
		if(message.author.bot || message.channel.type == "dm") return;
		let onlineM = message.guild.members.filter(m => m.presence.status !== "offline");
		let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
		let region = {
			'brazil': "`Brazil`",
			'eu-central': "`Central Europe`",
			'singapore': "`Singapore`",
			'us-central': "`US Central`",
			'sydney': "`Sydney`",
			'us-east': "`US East`",
			'us-south': "`US South`",
			'us-west': "`US West`",
			'eu-west': "`Western Europe`",
			'london': "`London`",
			'amsterdam': "`Amsterdam`",
			'hongkong': "`Hong Kong`",
			'russia': "`Russia`"
		};
		let serverEmbed = new Discord.RichEmbed()
		.setColor("#36393e")
		.setThumbnail(message.guild.iconURL)
		.setAuthor(`${message.guild.name}, Server Info`)
		.setDescription(`- Server Name \`${message.guild.name}\`\n- Created At \`${moment(message.guild.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Total Members \`${message.guild.memberCount} [Online: ${onlineM.size}]\`\n- Server Owner \`${message.guild.owner.user.tag}\`\n- Channels \`${message.guild.channels.filter(m => m.type == 'text').size} Text || ${message.guild.channels.filter(m => m.type == 'voice').size} Voice\`\n- Categories \`${message.guild.channels.filter(m => m.type == 'category').size}\`\n- Roles \`${message.guild.roles.size}\`\n- Region \`${region[message.guild.region]}\`\n- Verification Level \`${verifyL[message.guild.verificationLevel]}\`\n- Server ID \`${message.guild.id}\``)
		.setFooter(message.client.user.username,message.client.user.avatarURL);
	if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:no_entry: You dont have permission!`).then(mm => mm.delete(5000));	message.channel.send(serverEmbed).catch(console.error);
	} else if(message.content.startsWith(prefix + "user")){
		if(message.author.bot || message.channel.type == "dm") return;
		let mnt = message.mentions.users.first();
		let user = mnt || message.author;
		let userEmbed = new Discord.RichEmbed()
		.setColor("#36393e")
		.setThumbnail(user.avatarURL)
		.setAuthor(`${user.username}, User Info`)
		.setDescription(`- Name \`${user.tag}\`\n- Created At \`${moment(user.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Joined At \`${moment(user.joinedAt).format('D/MM/YYYY h:mm a')}\`\n- ID \`${user.id}\``)
		.setFooter(message.client.user.username,message.client.user.avatarURL);
		message.channel.send(userEmbed).catch(console.error);
		
	}
});

const developers = ["388074664649293836","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


 client.login(process.env.BOT_TOKEN); 

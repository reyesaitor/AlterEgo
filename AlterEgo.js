const Discord = require("discord.js");
const  Alter = new Discord.Client();
const config = require("./config.json");

Alter.on("ready", () => {
   console.log("Vamos alla creador ^w^");
});

var prefix = config.prefix;

Alter.on("message", (message) => {

    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;   

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (message.content.startsWith(prefix + "Ohayo")) {
        message.channel.send("Buenos dias ^w^");
    } 

    if (message.content.startsWith(prefix + "Ranumber")) {
        var rand1 = Math.round(Math.random()*100);
        message.channel.sendMessage("Ten tu " + rand1);
        message.channel.sendMessage("Que lo disfrutes ^w^");
    }

    if (message.content.startsWith(prefix + "Ty")) {
        message.channel.sendMessage("Aww, no tienes por que darmelas ://3");
        message.channel.sendMessage("https://vignette.wikia.nocookie.net/danganronpa/images/6/63/04C47000.png/revision/latest/scale-to-width-down/228?cb=20140624231843&path-prefix=es");
    }
        
    let texto = args.join(" ");

    if (message.content.startsWith(prefix + "Conver")) {
        var rpts = ["Si :3", "No :c", "No se que decirte :S", "Hablemos en otro momento, estoy ocupado"];
        if (!texto) return message.reply("Hazme una pregunta para responderte nwn");
        message.channel.send(message.member.user+' a su pregunta `'+texto+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
    }

    if (message.content.startsWith(prefix + "RateWaifu")) {
        var rand1 = Math.round(Math.random()*10);
        if (!texto) return message.reply("Dime tu waifu para que pueda darle una nota nwnU");
        message.channel.sendMessage("Le doy a tu waifu un " + rand1);
    }

    if (message.content.startsWith(prefix + "dab")) {
        var rpts = ["https://pbs.twimg.com/media/Cqu6qCWWYAEc72Y.jpg", "https://pm1.narvii.com/6267/0c3beda77cf88f12f1fec3d27928efec4e410e15_hq.jpg"];
        message.channel.send(rpts[Math.floor(Math.random() * rpts.length)]+'`');
    }

    if (message.content.startsWith(prefix + "rps Tijeras")) {
        var botGame = Math.floor(Math.random()  * 2);
        if (botGame === 0) {
            botGame = "Piedra";
            message.channel.send("Piedra");
        }
        if (botGame === 1) {
            botGame = "Papel";
            message.channel.send("Papel");
        }
        if (botGame === 2) {
            botGame = "Tijeras";
            message.channel.send("Tijeras");
        }

    

    }
    if (botGame === "Piedra") {
        message.channel.send("Yo gano, yupi x3")
        message.channel.send("http://es.danganronpa.wikia.com/wiki/Archivo:04C25C00.png");
    }
    if (botGame === "Papel") {
        message.channel.send("Tu ganas, felicidades nwn");
    }
    if (botGame === "Tijeras") {
        message.channel.send("Vaya, empatamos");
    }
     
    

    if (message.content.startsWith(prefix + "rps Papel")) {
        var botGame1 = Math.floor(Math.random()  * 2);
        if (botGame1 === 0) {
            botGame1 = "Piedra";
            message.channel.send("Piedra");
        }
        if (botGame1 === 1) {
            botGame1 = "Papel";
            message.channel.send("Papel");
        }
        if (botGame1 === 2) {
            botGame1 = "Tijeras";
            message.channel.send("Tijeras");
        }

    

    }
    if (botGame1 === "Piedra") {
        message.channel.send("Tu ganas, bien jugado ;D");
    }
    if (botGame1 === "Papel") {
        message.channel.send("Ostras, empatamos *se rie *");
    }
    if (botGame1 === "Tijeras") {
        message.channel.send("Yo gano, yeei :D")
        message.channel.send("http://es.danganronpa.wikia.com/wiki/Archivo:04C25C00.png");
    }
    



    if (message.content.startsWith(prefix + "rps Piedra")) {
        var botGame2 = Math.floor(Math.random()  * 2);
        if (botGame2 === 0) {
            botGame2 = "Piedra";
            message.channel.send("Piedra");
        }
        if (botGame2 === 1) {
            botGame2 = "Papel";
            message.channel.send("Papel");
        }
        if (botGame2 === 2) {
            botGame2 = "Tijeras";
            message.channel.send("Tijeras");
        }

    

    }
    if (botGame2 === "Piedra") {
        message.channel.send("Empatamos, acaso leiste mi mente xD");
    }
    if (botGame2 === "Papel") {
        message.channel.send("Yo gano, bieeen")
        message.channel.send("http://es.danganronpa.wikia.com/wiki/Archivo:04C25C00.png")
    }
    if (botGame2 === "Tijeras") {
        message.channel.send("Yo gano, yeei :D");
    }

 

});
Alter.login(config.token);
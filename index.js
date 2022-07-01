const Discord = require("discord.js"); // Connect to Discord

const {fPrefix, pPrefix, Token, Oofs, Footer, Prefix, PremFooter} = require("./config.json"); // Read config

const {Embeds} = require("discord.js"); // Connect ds.js embeds
const fs = require('fs'); // Filestream
const {send} = require("process");
const {deflateRawSync} = require("zlib");
const { string } = require("zod");
const { Console } = require("console");

const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]})

client.on("ready", () => {
    console.log(`Chronicle Generator by Sat`)
    console.log(`Logged in as ${client.user.tag}`) // Logged in
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return; // Prevent (other) bot message

    switch (message.content) { // Switch gen type
        case `${fPrefix} crunchyroll`:
            const Crunchyroll = "Crunchyroll";
            const imgCrunchyroll = "https://bit.ly/3ES23z5";
            Generating(Crunchyroll, imgCrunchyroll) // Pass correct parameter
            break;
        case `${fPrefix} duolingo`:
            const Duolingo = "Duolingo";
            const imgDuolingo = "https://bit.ly/3EYz2BZ";
            Generating(Duolingo, imgDuolingo) // Pass correct parameter
            break;
        case `${fPrefix} hulu`:
            const Hulu = "Hulu";
            const imgHulu = "https://bit.ly/3vhZhQK";
            Generating(Hulu, imgHulu) // Pass correct parameter
            break;
        case `${fPrefix} minecraft`:
            const Minecraft = "Minecraft";
            const imgMinecraft = "https://bit.ly/3MB7lBE";
            Generating(Minecraft, imgMinecraft) // Pass correct parameter
            break;
        case `${fPrefix} nitro`:
            const Nitro = "Nitro";
            const imgNitro = "https://bit.ly/3klZkEA";
            Generating(Nitro, imgNitro) // Pass correct parameter
            break;
        case `${fPrefix} nordvpn`:
            const NordVPN = "NordVPN";
            const imgNordVPN = "https://bit.ly/3vh21Of";
            Generating(NordVPN, imgNordVPN) // Pass correct parameter
            break;
        case `${fPrefix} steam`:
            const Steam = "Steam";
            const imgSteam = "https://bit.ly/38myytb";
            Generating(Steam, imgSteam) // Pass correct parameter
            break;
        case `${Prefix}stock`:
            StockEmbed();
            break;
        case `${Prefix}premium`:
            buyPremium();
            break;
        case `${pPrefix} crunchyroll`:
            const pCrunchyroll = "Crunchyroll"
            const imgpCrunchyroll = "https://bit.ly/3ES23z5"
            premGenerating(pCrunchyroll, imgpCrunchyroll)
            break;
        case `${pPrefix} disney+`:
            const Disneyp = "Disney+"
            const imgDisneyp = "https://bit.ly/38sFgO9"
            premGenerating(Disneyp, imgDisneyp)
            break;
        case `${pPrefix} funimation`:
            const Funimation = "Funimation"
            const imgFunimation = "https://bit.ly/3OEk5cO"
            premGenerating(Funimation, imgFunimation)
            break;
        case `${pPrefix} geoguessr`:
            const Geoguessr = "Geoguessr"
            const imgGeoguessr = "https://bit.ly/3EVN0Vo"
            premGenerating(Geoguessr, imgGeoguessr)
            break;
        case `${pPrefix} ipvanish`:
            const Ipvanish = "Ipvanish"
            const imgIpvanish = "https://bit.ly/3OCpvVE"
            premGenerating(Ipvanish, imgIpvanish)
            break;
        case `${pPrefix} napster`:
            const Napster = "Napster"
            const imgNapster = "https://bit.ly/3Kn8GKS"
            premGenerating(Napster, imgNapster)
            break;    
        case `${pPrefix} netflix`:
            const Netflix = "Netflix"
            const imgNetflix = "https://bit.ly/3Mv8dba"
            premGenerating(Netflix, imgNetflix)
            break; 
        case `${pPrefix} nfl`:
            const NFL = "NFL"
            const imgNFL = "https://bit.ly/3KmZ9nf"
            premGenerating(NFL, imgNFL)
            break; 
        case `${pPrefix} plextv`:
            const Plextv = "Plextv"
            const imgPlextv = "https://bit.ly/3xWiusR"
            premGenerating(Plextv, imgPlextv)
            break; 
        case `${pPrefix} pornhub`:
            const Pornhub = "Pornhub"
            const imgPornhub = "https://bit.ly/3ODYjFX"
            premGenerating(Pornhub, imgPornhub)
            break;
        case `${pPrefix} spotify`:
            const Spotify = "Spotify"
            const imgSpotify = "https://bit.ly/3LlWcEF"
            premGenerating(Spotify, imgSpotify)
            break; 
        case `${pPrefix} vrv`:
            const VRV = "VRV"
            const imgVRV = "https://bit.ly/3MxHZoy"
            premGenerating(VRV, imgVRV)
            break;
        case `${pPrefix} wwe`:
            const WWE = "WWE"
            const imgWWE = "https://bit.ly/3KszJ7W"
            premGenerating(WWE, imgWWE)
            break;
        case `${pPrefix} stock`:
                premStockEmbed();
                break;
    }

    function buyPremium(){
        message.reply({
            embeds: [{
                title: `Buy Chronicle Premium`,
                description: `DM Sat#2377 / Brum#4330 or open a ticket to purchase premium!`,
                fields: [{
                    name: `Monthly`,
                    value: `5$ per Month`
                },
                {
                    name: `Lifetime`,
                    value: `20$ Lifetime`,
                },
                {
                    name: `Payment methods`,
                    value: `Paypal, Bitcoin, Litecoin, Ethereum, Doge, Giftcards`,
                }],
                thumbnail: {
                    url: `https://bit.ly/3vkNpgN`
                },
                footer: {
                    text: 'Chronicle Premium',
                    icon_url: `${Footer}`,
                },
                timestamp: new Date(),
            
            }]
        })
    }

    function premStockEmbed(){
        const pTypes = ["Crunchyroll", "Disney+", "Funimation", "Geoguessr", "Ipvanish", "Napster", "Netflix", "NFL", "Plextv", "Pornhub", "Spotify", "VRV", "WWE"];
        const Emojis = ["<:crunchyroll:968802466193899530>", "<:disney:968857351434166312>", "<:funimation:968857108927901696>", "<:geoguessr:968802466248421396>", "<:ipvanish:968857009690652684>", "<:napster:968856729322410085>", "<:netflix:968856763258515478>", "<:nfl:968856828446400543>", "<:plextv:968858972536864769>", "<:pornhub:968856625354014720>", "<:spotify:968860515516440586>", "<:vrv:968858971664425020>", "<:wwe:968858972465545246>"];
        message.reply({
            embeds: [{
                title: 'Chronicle Premium Stock',
                fields: [{
                    name: `${pTypes[0]} ${Emojis[0]}`,
                    value: `${Stock(`Premium\\${pTypes[0]}.txt`)}`
                },
                {
                    name: `${pTypes[1]} ${Emojis[1  ]}`,
                    value: `${Stock(`Premium\\${pTypes[1]}.txt`)}`
                },
                {
                    name: `${pTypes[2]} ${Emojis[2]}`,
                    value: `${Stock(`Premium\\${pTypes[2]}.txt`)}`
                },
                {
                    name: `${pTypes[3]} ${Emojis[3]}`,
                    value: `${Stock(`Premium\\${pTypes[3]}.txt`)}`
                },
                {
                    name: `${pTypes[4]} ${Emojis[4]}`,
                    value: `${Stock(`Premium\\${pTypes[4]}.txt`)}`
                },
                {
                    name: `${pTypes[5]} ${Emojis[5]}`,
                    value: `${Stock(`Premium\\${pTypes[5]}.txt`)}`
                },
                {
                    name: `${pTypes[6]} ${Emojis[6]}`,
                    value: `${Stock(`Premium\\${pTypes[6]}.txt`)}`
                },
                {
                    name: `${pTypes[7]} ${Emojis[7]}`,
                    value: `${Stock(`Premium\\${pTypes[7]}.txt`)}`
                },
                {
                    name: `${pTypes[8]} ${Emojis[8]}`,
                    value: `${Stock(`Premium\\${pTypes[8]}.txt`)}`
                },
                {
                    name: `${pTypes[9]} ${Emojis[9]}`,
                    value: `${Stock(`Premium\\${pTypes[9]}.txt`)}`
                },
                {
                    name: `${pTypes[10]} ${Emojis[10]}`,
                    value: `${Stock(`Premium\\${pTypes[10]}.txt`)}`
                },
                {
                    name: `${pTypes[11]} ${Emojis[11]}`,
                    value: `${Stock(`Premium\\${pTypes[11]}.txt`)}`
                },
                {
                    name: `${pTypes[12]} ${Emojis[12]}`,
                    value: `${Stock(`Premium\\${pTypes[12]}.txt`)}`
                }
            ],
                footer: {
                    text: 'Chronicle Premium',
                    icon_url: `${PremFooter}`,
                },
                
                timestamp: new Date(),
            }]
        })
    }
    
    function StockEmbed(){
        const fTypes = ["Crunchyroll", "Duolingo", "Hulu", "Minecraft", "Nitro", "NordVPN", "Steam"];
        const Emojis = ["<:crunchyroll:968802466193899530>", "<:duolingo:968802466059649034>", "<:hulu:968802466189680700>", "<:minecraft:968802466248421396>", "<:nitro:968802466231623750>", "<:nordvpn:968802466181304320>", "<:steam:968802465992560650>"];
        message.reply({
            embeds: [{
                title: 'Chronicle Free Stock',
                fields: [{
                    name: `${fTypes[0]} ${Emojis[0]}`,
                    value: `${Stock(`Free\\${fTypes[0]}.txt`)}`
                },
                {
                    name: `${fTypes[1]} ${Emojis[1  ]}`,
                    value: `${Stock(`Free\\${fTypes[1]}.txt`)}`
                },
                {
                    name: `${fTypes[2]} ${Emojis[2]}`,
                    value: `${Stock(`Free\\${fTypes[2]}.txt`)}`
                },
                {
                    name: `${fTypes[3]} ${Emojis[3]}`,
                    value: `${Stock(`Free\\${fTypes[3]}.txt`)}`
                },
                {
                    name: `${fTypes[4]} ${Emojis[4]}`,
                    value: `${Stock(`Free\\${fTypes[4]}.txt`)}`
                },
                {
                    name: `${fTypes[5]} ${Emojis[5]}`,
                    value: `${Stock(`Free\\${fTypes[5]}.txt`)}`
                },
                {
                    name: `${fTypes[6]} ${Emojis[6]}`,
                    value: `${Stock(`Free\\${fTypes[6]}.txt`)}`
                }
            ],
                footer: {
                    text: 'Chronicle Free',
                    icon_url: `${Footer}`,
                },
                
                timestamp: new Date(),
            }]
        })
    }

    function Stock(genType){
        const fs = require('fs');
        const data = fs.readFileSync(genType).toString();
        return data.split('\n').length - 1;
    }

    function Generating(genType, img) { // Catch correct parameter
        fs.readFile(`Free\\${genType}.txt`, function(error, data){
            if (!error) {
                data = data.toString(); // Read all lines in file 

                const Position = data.toString().indexOf('\n');
                const genAccount = data.split('\n')[0]; // Index = 0, firstline/top
                

                if (Position === -1) {
                    message.reply({
                        embeds: [{
                            title: `${genType} is currently out of stock!`,
                            description: "We will restock it as soon as possible!",
                            thumbnail: {
                                url: `${Oofs}`
                            },
                            footer: {
                                text: 'Chronicle Free',
                                icon_url: `${Footer}`,
                            },
                            timestamp: new Date(),
                        }]
                    });
                }

                if (Position !== -1) {

                    var removeAccount = data.split('\n')
                    removeAccount.splice(0, 1);
                    var newList = removeAccount.join('\n')

                    fs.writeFile(`Free\\${genType}.txt`, newList, err => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })

                    console.log(`${message.author.id} generated ${genType}`)
                        
                    message.reply({
                        embeds: [{
                            title: `Generated ${genType}!`,
                            description: `Your ${genType} account has been sent into your DM's!`,
                            thumbnail: {
                                url: `${img}`
                            },
                            footer: {
                                text: 'Chronicle Free',
                                icon_url: `${Footer}`,
                            },
                            timestamp: new Date(),
                        }]
                    })

                    message.author.send({
                        embeds: [{
                            title: `Generated ${genType}!`,
                            description: `Thanks for using Chronicle!\n\`\`${genAccount}\`\``,
                            thumbnail: {
                                url: `${img}`
                            },
                            footer: {
                                text: 'Chronicle Free',
                                icon_url: `${Footer}`,
                            },
                            timestamp: new Date(),
                        }]
                    })
                }
            }
        })
    }

    function premGenerating(genType, img) {
        
        if(!message.member.roles.cache.find(r => r.name === "Premium")) {
            buyPremium();
            return;
        }// Catch correct parameter
        fs.readFile(`Premium\\${genType}.txt`, function(error, data){
            if (!error) {
                data = data.toString(); // Read all lines in file 

                const Position = data.toString().indexOf('\n');
                const genAccount = data.split('\n')[0]; // Index = 0, firstline/top
                

                if (Position === -1) {
                    message.reply({
                        embeds: [{
                            title: `${genType} is currently out of stock!`,
                            description: "We will restock it as soon as possible!",
                            thumbnail: {
                                url: `${Oofs}`
                            },
                            footer: {
                                text: 'Chronicle Premium',
                                icon_url: `${PremFooter}`,
                            },
                            timestamp: new Date(),
                        }]
                    });
                }

                if (Position !== -1) {

                    var removeAccount = data.split('\n')
                    removeAccount.splice(0, 1);
                    var newList = removeAccount.join('\n')

                    fs.writeFile(`Premium\\${genType}.txt`, newList, err => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })

                    console.log(`${message.author.id} generated ${genType}`)
                        
                    message.reply({
                        embeds: [{
                            title: `Generated ${genType}!`,
                            description: `Your ${genType} account has been sent into your DM's!\n:gem: Premium Quality :gem:`,
                            thumbnail: {
                                url: `${img}`
                            },
                            footer: {
                                text: 'Chronicle Premium',
                                icon_url: `${PremFooter}`,
                            },
                            timestamp: new Date(),
                        }]
                    })

                    message.author.send({
                        embeds: [{
                            title: `Generated ${genType}!`,
                            description: `Thanks for using Chronicle!\n\`\`${genAccount}\`\``,
                            thumbnail: {
                                url: `${img}`
                            },
                            footer: {
                                text: 'Chronicle Premium',
                                icon_url: `${PremFooter}`,
                            },
                            timestamp: new Date(),
                        }]
                    })
                }
            }
        })
    }

})

client.login(Token) // Log in
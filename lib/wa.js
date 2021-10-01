const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const connect = require('./connect');
const { getRandomExt } = require("./help");
const fs = require('fs')

const 𝕽𝖆𝖙𝖈𝖍𝖊𝖑 = connect.𝕽𝖆𝖙𝖈𝖍𝖊𝖑
const bufferFakeReply = fs.readFileSync('./src/fake.jpg')

exports.sendSticker = (from, filename, sam) => {
        𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, filename, MessageType.sticker, {quoted: sam})
}

exports.setName = async function(query){
    const response = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.updateProfileName(query)
    return response
}

exports.setBio = async function(query){
    const response = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.setStatus(query)
    return response
}

exports.sendFakeStatus2 = (from, teks) => {
        𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '☣️Ratchel☣️ | 🏴‍☠️hunter dexter🏴‍☠️', "jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)} } } })
}

exports.FakeTokoForwarded = (from, teks, fake) => {
        anu = {
                key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                        "productMessage": {
                                "product": {
                                        "productImage":{
                                                "mimetype": "image/jpeg",
                                                "jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)
                                        },
                                        "title": '☣️Ratchel☣️ | 🏴‍☠️hunter dexter🏴‍☠️',
                                        "description": " 🏴‍☠️hunter dexter🏴‍☠️",
                                        "currencyCode": "SYP",
                                        "priceAmount1000": "9999999999999999999",
                                        "retailerId": "USD",
                                        "productImageCount": 10
                                },
                                "businessOwnerJid": `0@s.whatsapp.net`
                }
        }
}
        𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, teks, MessageType.text, {quoted: anu, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}

exports.FakeStatusImgForwarded = (from, image, caption) => {                                                                                                                             𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '☣️Ratchel☣️', "jpegThumbnail": fs.readFileSync(`./src/help.jpg`)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}

exports.sendMessage = async(from, text) => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, text, MessageType.text)
}

exports.sendAudio = async(from, buffer) => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.mp4Audio, { mimetype: Mimetype.mp4Audio, ptt: true })
}

exports.sendImage = async(from, buffer, caption = "") => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.image, { caption: caption })
}

exports.sendVideo = async(from, buffer, caption = "") => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.video, { caption: caption })
}

exports.sendSticker = async(from, buffer) => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.sticker)
}

exports.sendPdf = async(from, buffer, title = "𝕽𝖆𝖙𝖈𝖍𝖊𝖑.pdf") => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.document, { mimetype: Mimetype.pdf, title: title })
}

exports.sendGif = async(from, buffer) => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.video, { mimetype: Mimetype.gif })
}

exports.sendContact = async(from, nomor, nama) => {
    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact)
}

exports.sendMention = async(from, text, mentioned) => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, text, MessageType.text, { contextInfo: { mentionedJid: mentioned } })
}

exports.sendImageMention = async(from, buffer, text, mentioned) => {
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.image, { contextInfo: { mentionedJid: [mentioned], participant: [mentioned] }, caption: text })
}

exports.sendFakeStatus = async(from, text, mentioned = []) => {
    const options = {
        contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            quotedMessage: {
                imageMessage: {
                    caption: '🏴‍☠️hunter dexter🏴‍☠️',
                    jpegThumbnail: bufferFakeReply
                }
            },
            mentionedJid: mentioned
        }
    }
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, text, MessageType.text, options)
}

exports.fakeStatusForwarded = async(from, text) => {
    const options = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            quotedMessage: {
                imageMessage: {
                    caption: '☣️Ratchel☣️ | 🏴‍☠️hunter dexter🏴‍☠️',
                    jpegThumbnail: bufferFakeReply
                }
            }
        }
    }
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, text, MessageType.text, options)
}

exports.sendFakeThumb = async(from, buffer, caption = "") => {
    let options = {
        thumbnail: fs.readFileSync('./src/fake.jpg'),
        caption: caption
    }
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.image, options)
}

exports.downloadMedia = async(media) => {
    const filePath = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.downloadAndSaveMediaMessage(media, `./temp/${getRandomExt()}`)
    const fileStream = fs.createReadStream(filePath)
    const fileSizeInBytes = fs.statSync(filePath).size
    fs.unlinkSync(filePath)
    return { size: fileSizeInBytes, stream: fileStream }
}

exports.hideTag = async(from, text) => {
    members = await this.getGroupParticipants(from)
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, text, MessageType.text, { contextInfo: { mentionedJid: members } })
}

exports.hideTagImage = async(from, buffer) => {
    members = await this.getGroupParticipants(from)
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.image, { contextInfo: { mentionedJid: members } })
}
                                                                                                                                                                                 
exports.hideTagSticker = async(from, buffer) => {                                                                                                                                    
	members = await this.getGroupParticipants(from)                                                                                                                                  
	await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, buffer, MessageType.sticker, { contextInfo: { mentionedJid: members } })
}

exports.hideTagContact = async(from, nomor, nama) => {
    let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
    members = await this.getGroupParticipants(from)
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact, { contextInfo: { mentionedJid: members } })
}

exports.blockUser = async(id, block) => {
    if (block) return await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.blockUser(id, "add")
    await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.blockUser(id, "remove")
}

exports.getGroupParticipants = async(id) => {
    var members = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupMetadata(id)
    var members = members.participants
    let mem = []
    for (let i of members) {                                                                                                                                                           
	    mem.push(i.jid)                                                                                                                                                              
    }
    return mem                                                                                                                                                                   
}

exports.getGroupAdmins = async(participants) => {
    admins = []
    for (let i of participants) {
        i.isAdmin ? admins.push(i.jid) : ''
    }
    return admins
}

exports.getGroupInvitationCode = async(id) => {
    const linkgc = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupInviteCode(id)
    const code = "https://chat.whatsapp.com/" + linkgc
    return code
}

exports.sendKontak = (from, nomor, nama) => {
        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
        𝕽𝖆𝖙𝖈𝖍𝖊𝖑.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}

exports.kickMember = async(id, target = []) => {
    const group = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupMetadata(id)
    const owner = g.owner.replace("c.us", "s.whatsapp.net")
    const me = 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.user.jid
    for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
            await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupRemove(to, [i])
        } else {
            await this.sendMessage(id, "Not Premited!")
            break
        }                                                                                                                                                                            
    }                                                                                                                                                                            
}

exports.promoteAdmin = async(to, target = []) => {
    const g = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupMetadata(to)
    const owner = g.owner.replace("c.us", "s.whatsapp.net")
    const me = 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.user.jid
    for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
            await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupMakeAdmin(to, [i])
        } else {
            await this.sendMessage(to, "Not Premited!")
            break
        }
    }
}

exports.demoteAdmin = async(to, target = []) => {
    const g = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupMetadata(to)                                                                                                                                        
	const owner = g.owner.replace("c.us", "s.whatsapp.net")
    const me = 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.user.jid
    for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
            await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.groupDemoteAdmin(to, [i])
        } else {
            await this.sendMessage(to, "Not Premited!")
            break
        }
    }
}

exports.getUserName = async(jid) => {
    const user = 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.contacts[jid]
    return user != undefined ? user.notify : ""
}

exports.getBio = async(mids) => {
    const pdata = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.getStatus(mids)
    if (pdata.status == 401) {
        return pdata.status
    } else {
        return pdata.status
    }
}

exports.getPictProfile = async(mids) => {
    try {
        var url = await 𝕽𝖆𝖙𝖈𝖍𝖊𝖑.getProfilePicture(mids)
    } catch {
        var url = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    return url
}

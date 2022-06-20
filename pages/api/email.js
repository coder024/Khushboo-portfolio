const nodemailer = require("nodemailer")

const user = process.env.GMAIL_USER
const password = process.env.GMAIL_PASSWORD

export default async function handler(req, res) {
    try {

        const sender = req.body.email
        const senderName = req.body.name
        const messageContent = req.body.content

        let transporter = nodemailer.createTransport({
            host: 'gmail',
            port: 587,
            auth: {
                user: 'khushboo7324@gmail.com',
                pass: '@09765K',
            },
        })

        await transporter.sendMail({
            from: req.body.email,
            to: 'khushboo7324@gmail.com',
            subject: 'Message received from ${senderName}',
            html: `<p>Nome: ${senderName}</p>
            <p>Email: ${sender}</p><br>
            <h3>${messageContent}</h3>`
        })

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ error })
    }
}

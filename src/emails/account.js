const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'mishraprashant2209@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'mishraprashant2209@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Hope to see you back soon.`
    })
}

module.exports= {
    sendWelcomeEmail,
    sendCancelationEmail
}    


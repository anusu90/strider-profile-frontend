import sgMail from ('@sendgrid/mail');
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)

export function sendMailToMe(data) {
    const msg = {
        to: "anusu90@icloud.com", // Change to your recipient
        from: 'anusu90@gmail.com', // Change to your verified sender
        subject: `${data.name} tried to contact you`,
        text: `You have been contacted by ${data.email}`
            + `Subject is ${data.subject}`
            + `message is ${data.message}`,
        html: `<strong>You have been contacted by ${data.email}</strong> <br>` +
            ` Subject is ${data.subject} <br>` +
            `Message is message is ${data.message}` +
            `<br>`
    }
    return sgMail.send(msg)
}


export function sendMailToUser(email) {
    const msg = {
        to: email, // Change to your recipient
        from: 'anusu90@gmail.com', // Change to your verified sender
        subject: 'Thank You for contacting Anunay',
        text: `Anunay has got your message and will contact you ASAP: `
            + `Meanwhile you can check his github repo https://www.github.com/anusu90`,
        html: `<strong>Anunay has got your message and will contact you ASAP:</strong> <br>` +
            ` Meanwhile you can check his github repo https://www.github.com/anusu90`
    }
    return sgMail.send(msg)
}

import { createTransport } from 'nodemailer';

export const handler = (event) => {
  const { user, pass } = process.env;

  const mailTransport = createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
      type: 'login',
      user,
      pass
    }
  })
  
  const { message }: { message: string } = event.queryStringParameters:

  const sendMail = async () => {
    const saneMessage = message
      .replace(/minutes/, 'minutes\n')
      .replace(/UTC/, 'UTC\n')
      .replace(/Contributors/, '\nContributors')
    const mailOptions = {
      from: 'TSE Code Reviews',
      to: user,
      subject: 'New code review avaliable',
      text: `
      You have a new Code review:\n ${saneMessage}
      `
    }

    await mailTransport.sendMail(mailOptions)
    console.log('New email:', message)
  }

  sendMail()

  return {
    statusCode: 200,
    body: JSON.stringify({
      message
    })
  }
}


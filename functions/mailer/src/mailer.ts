import { createTransport } from 'nodemailer';

type eventType = {
  queryStringParameters: {
    message: string
  }
}

export const handler = async (event: eventType) => {
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

  const { message = '' } = event.queryStringParameters;
  console.log({message})

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

  try {
    await mailTransport.sendMail(mailOptions)
    console.log('New email:', message)
  } catch (error) {
    console.log(error)
  }


  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message
    })
  }
}


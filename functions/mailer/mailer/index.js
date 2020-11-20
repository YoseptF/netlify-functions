"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            env: process.env.TEST
        })
    };
};
exports.handler = handler;
//     const { user, pass } = env.gmail;
//     const mailTransport = createTransport({
//       port: 587,
//       host: 'smtp.gmail.com',
//       auth: {
//         type: 'login',
//         user,
//         pass
//       }
//     })
//     const message: string = req.query.message as string;
//     const sendMail = async () => {
//       const saneMessage = message
//         .replace(/minutes/, 'minutes\n')
//         .replace(/UTC/, 'UTC\n')
//         .replace(/Contributors/, '\nContributors')
//       const mailOptions = {
//         from: 'TSE Code Reviews',
//         to: user,
//         subject: 'New code review avaliable',
//         text: `
//       You have a new Code review:\n ${saneMessage}
//       `
//       }
//       await mailTransport.sendMail(mailOptions)
//       console.log('New email:', message)
//     }
//     sendMail()
//     res.send({ hello: 'hello' })
//   })
// })

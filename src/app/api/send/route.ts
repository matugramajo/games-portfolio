// import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['matildegramajo@hotmail.com'],
//       subject: 'Solicitud de duo nueva',
//       react: EmailTemplate({ name, riotID, steam, serDuo }),
//       html: '',
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
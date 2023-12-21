import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const res = await request.json()

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['matildegramajo@hotmail.com'],
      subject: 'Solicitud de duo nueva',
      react: EmailTemplate({ name: res.name , riotID: res.riotid, steam: res.steam, serDuo: res.serduo}),
      html: '',
    });

    return Response.json(null);
  } catch (error) {
    return Response.json({ error });
  }
}
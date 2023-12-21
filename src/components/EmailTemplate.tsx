import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  riotID: string;
  steam: string;
  serDuo: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, riotID, steam, serDuo
}) => (
  <div>
    <h1>Solicitud de duo nueva.</h1>
    <p>Nombre: {name}</p>
    <p>RiotID: {riotID}</p>
    <p>Steam: {steam}</p>
    <p>Razones para ser duo: {serDuo}</p>
  </div>
);
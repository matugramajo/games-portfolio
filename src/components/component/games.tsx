import { PrimeReactProvider } from 'primereact/api'; // Import the appropriate module
import "primereact/resources/themes/lara-light-cyan/theme.css";


interface MyAppProps {
  Component: React.ComponentType;
  pageProps: any; // Adjust the type according to your pageProps type
}

export default function Games({ Component, pageProps }: MyAppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
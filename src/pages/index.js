import Head from 'next/head';
import LoginButton from '@/components/loginButton'

//const routeUrl = process.env.ROUTE_URL


export default function Home() {
  

  return (
    <>
      <Head>
        <title>Drakelfo Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <LoginButton />
        

      </main>
    </>
  );
}

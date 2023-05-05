import Head from "next/head";
import type { NextPage } from "next";

const PageNotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scaffold-ETH 2 App: 404</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="text-3xl mx-auto mt-8">PAGE NOT FOUND!</div>
    </>
  );
};

export default PageNotFound;

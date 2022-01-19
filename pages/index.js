import Head from "next/head";
import Image from "next/image";
import Page from "../component/Page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Feature Proposal — iDAGIO Discovery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Page src="Title.svg" />
        <Page src="TOC.svg" />
        <Page src="Audience.svg" />
        <Page src="Problem Statement-1.svg" />
        <Page src="Problem Statement.svg" />
        <Page src="Proposal.svg" />
        <Page src="Embed.svg" />
        <Page src="Embed - breakdown.svg" />
        <Page src="Embed - breakdown-1.svg" />
        <Page src="IDAGIO Extension - Highlights & Sidebard.svg" />
        <Page src="IDAGIO Extension - Link Menu.svg" />
        <Page src="Discovery Recap.svg" />
        <Page src="Conclusion.svg" />
      </main>
    </div>
  );
}

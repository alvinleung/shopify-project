import Head from "next/head";
import Image from "next/image";
import Page from "../component/Page";
import VideoPlayer from "../component/VideoPlayer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Feature Proposal — iDAGIO Discovery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen">
        <Page src="Title.svg" />
        <Page src="TOC.svg" />
        <Page src="Audience.svg" />
        <Page src="Problem Statement-1.svg" />
        <Page src="Problem Statement.svg" />
        <Page src="Proposal.svg" />
        <Page src="Proposal.svg">
          <VideoPlayer
            src={
              "https://www.sfu.ca/~kkl64/videos/idagio/idagio-walkthrough-light.mp4"
            }
            x={0}
            y={0}
            width={1920}
            height={1080}
          />
        </Page>
        <Page src="Embed.svg">
          <VideoPlayer
            src={"https://www.sfu.ca/~kkl64/videos/idagio/embed-demo.mp4"}
            x={80}
            y={122}
            width={1203.62}
            height={681.99}
            muted="true"
          />
        </Page>
        <Page src="Embed - breakdown.svg" />
        <Page src="Embed - breakdown-1.svg" />
        <Page src="IDAGIO Extension - Highlights & Sidebard.svg">
          <VideoPlayer
            src={"https://www.sfu.ca/~kkl64/videos/idagio/notion.mp4"}
            x={80}
            y={122}
            width={1203.62}
            height={681.99}
            muted="true"
          />
        </Page>
        <Page src="IDAGIO Extension - Link Menu.svg">
          <VideoPlayer
            src={"https://www.sfu.ca/~kkl64/videos/idagio/notion.mp4"}
            x={80}
            y={122}
            width={1203.62}
            height={681.99}
            muted="true"
          />
        </Page>
        <Page src="Discovery Recap.svg">
          <VideoPlayer
            src={"https://www.sfu.ca/~kkl64/videos/idagio/recap.mp4"}
            x={0}
            y={0}
            width={1920}
            height={1080}
            muted={true}
            behind={true}
            controls={false}
          />
        </Page>
        <Page src="Conclusion.svg" />
      </main>
    </div>
  );
}
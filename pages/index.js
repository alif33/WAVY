import Head from "next/head";
import AnotherSection from "../components/AnotherSection/AnotherSection";
import DetailSection from "../components/DetailSection/DetailSection";
import MeetSection from "../components/MeetSection/MeetSection";
import OpenSea from "../components/OpenSea/OpenSea";
import Roadmap from "../components/Roadmap/Roadmap";

export default function Home() {
  return (
    <div>
      {/*Page title*/}
      <Head>
        <title>Wavy Sharks Society</title>
      </Head>
      <DetailSection />
      <MeetSection />
      <OpenSea />
      <Roadmap />
      <AnotherSection />
    </div>
  );
}

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";

import { HeaderDefault } from "@/components/HeaderDefault";
import { AboutUs } from "@/components/AboutUs";
import { OurServices } from "@/components/OurServices";

const WavesImage = styled(Image)({
  width: "100%",
  height: "15.438rem",
  marginTop: "3.5rem",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | CoinSynch</title>
      </Head>

      <HeaderDefault />

      <Box component="main">
        <AboutUs />
        <WavesImage alt="" src="/images/waves.png" width={1440} height={247} />
        <OurServices />
      </Box>
    </>
  );
}

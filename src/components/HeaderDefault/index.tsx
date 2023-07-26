import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { Authentication } from "./Authentication";
import { CoinCarousel } from "./CoinCarousel";

const Container = styled(Box)({
  width: "100%",
  height: "4rem",
});

const Content = styled(Box)({
  display: "flex",
  alignItems: "center",
  maxWidth: "76rem",
  height: "100%",
  margin: "0 auto",
});

interface HeaderDefaultProps {}

export function HeaderDefault({}: HeaderDefaultProps) {
  return (
    <Container component="header">
      <Content>
        <Image alt="CoinSynch" src="/images/logo.png" width={124} height={21} />

        <Navigation />
        
        <Box sx={{ flex: 1 }} />

        <CoinCarousel />

        <Authentication />
      </Content>
    </Container>
  );
}

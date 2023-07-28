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

const LogoImage = styled(Image)({
  width: "7.75rem",
  height: "1.313rem",
});

interface HeaderDefaultProps {}

export function HeaderDefault({}: HeaderDefaultProps) {
  return (
    <Container component="header">
      <Content>
        <LogoImage alt="CoinSynch" src="/images/logo.png" width={248} height={42} />

        <Navigation />
        
        <Box sx={{ flex: 1 }} />

        <CoinCarousel />

        <Authentication />
      </Content>
    </Container>
  );
}

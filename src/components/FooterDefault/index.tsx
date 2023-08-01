import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  maxWidth: "76rem",
  paddingBlock: "1.5rem",
});

const LogoImage = styled(Image)({
  width: "5.875rem",
  height: "1rem",
});

export function FooterDefault() {
  return (
    <Container>
      <Typography variant="label">
        Copyright © 2022 - All rights reserved
      </Typography>

      <LogoImage
        alt="CoinSynch"
        src="/images/logo.png"
        width={248}
        height={42}
      />
    </Container>
  );
}

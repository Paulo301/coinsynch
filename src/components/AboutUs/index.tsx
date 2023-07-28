import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../Button";
import { WorkAreas } from "./WorkAreas";
import { Banner } from "./Banner";

const Container = styled(Box)({
  display: "flex",
  maxWidth: "76rem",
  margin: "6.25rem auto 0",
  gap: "6.125rem",
});

const Content = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export function AboutUs() {
  return (
    <Container id="about-us">
      <Content>
        <Typography variant="h1">
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "1.5rem" }} component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>
        <Button sx={{ width: "17.375rem", marginTop: "2rem" }}>
          SIGN UP NOW
        </Button>

        <WorkAreas />
      </Content>

      <Banner />
    </Container>
  );
}

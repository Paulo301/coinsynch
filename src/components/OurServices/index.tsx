import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ServicesCards } from "./ServicesCards";
import { SignUpInformations } from "./SignUpInformations";

const Container = styled(Box)({
  background: "linear-gradient(#FFFFFF, #F7F7F7)",
});

const Content = styled(Box)({
  display: "flex",
  alignItems: "center",
  maxWidth: "76rem",
  margin: "6.25rem auto 0",
  gap: "2rem",
  padding: "7.5rem 0 8.125rem",
});

export function OurServices() {
  return (
    <Container>
      <Content>
        <ServicesCards />
        <SignUpInformations />
      </Content>
    </Container>
  );
}

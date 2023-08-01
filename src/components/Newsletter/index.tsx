import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NewsletterDescription } from "./NewsletterDescription";
import { NewsletterForm } from "./NewsletterForm";
import { white } from "@/styles/colors";

const Container = styled(Box)({
  background: "linear-gradient(to right, #FBAB34, #AD721A)",
  color: white,
});

const Content = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "63rem",
  margin: "0 auto",
  paddingBlock: "7.5rem"
});

export function Newsletter() {
  return (
    <Container>
      <Content>
        <NewsletterDescription />
        <NewsletterForm />
      </Content>
    </Container>
  );
}

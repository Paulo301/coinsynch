import { primary } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  width: "24rem",
});

export function NewsletterDescription() {
  return (
    <Container>
      <Typography variant="h4" sx={{ color: primary[200] }}>
        Lorem ipsum
      </Typography>
      <Typography variant="h2" sx={{ marginTop: "0.25rem" }}>
        Lorem ipsum
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </Typography>
    </Container>
  );
}

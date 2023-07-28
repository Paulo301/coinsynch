import { Button } from "@/components/Button";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "25.375rem"
});

export function SignUpInformations() {
  return (
    <Container>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>Lorem ipsum</Typography>
      <Typography variant="h2" sx={{ marginTop: "0.25rem" }}>
        Lorem ipsum
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </Typography>
      <Button size="large" sx={{ width: "11rem", marginTop: "2.5rem" }}>
        Sign up now
      </Button>
    </Container>
  );
}

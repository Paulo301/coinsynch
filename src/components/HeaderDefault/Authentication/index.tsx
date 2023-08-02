import { Button } from "@/components/Button";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  marginLeft: "5rem",
});

export function Authentication() {
  return (
    <Container>
      <Button variant="textLabel">Sign in</Button>
      <Button size="small" sx={{ width: "6.25rem" }}>
        Sign up
      </Button>
    </Container>
  );
}

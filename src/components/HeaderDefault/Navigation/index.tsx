import { Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  display: "flex",
  gap: "1.5rem",
  marginLeft: "2.5rem",
});

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    opacity: 0.75,
    transition: 'opacity 0.25s',
  },
});

export function Navigation() {
  return (
    <Container component="nav">
      <CustomLink variant="label" href="#about-us">
        About us
      </CustomLink>
      <CustomLink variant="label" href="#top-cryptos">
        Top Cryptos
      </CustomLink>
    </Container>
  );
}

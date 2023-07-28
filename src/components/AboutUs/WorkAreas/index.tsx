import { List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { WorkAreasItem } from "./WorkAreasItem";

const Container = styled(List)({
  display: "flex",
  gap: "2rem",
  marginTop: "5rem",
  width: "max-content",
  paddingBlock: 0,
});

export function WorkAreas() {
  return (
    <Container>
      <WorkAreasItem name="Cryptos" />
      <WorkAreasItem name="NFTs" />
      <WorkAreasItem name="Games" />
    </Container>
  );
}

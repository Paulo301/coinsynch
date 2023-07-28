import { primary } from "@/styles/colors";
import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(ListItem)({
  display: "flex",
  gap: "0.5rem",
  padding: "0.25rem 1rem",
  backgroundColor: primary[100],
});

interface WorkAreasItemProps {
  name: string;
}

export function WorkAreasItem({ name }: WorkAreasItemProps) {
  return (
    <Container>
      <Typography variant="h5" component="span" sx={{ color: primary[500] }}>
        {name}
      </Typography>
    </Container>
  );
}

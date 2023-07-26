import { quartenary, secondary, tertiary } from "@/styles/colors";
import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(ListItem)({
  display: "flex",
  gap: "0.5rem",
  padding: '0'
});

interface ICoin {
  name: string;
  value: string;
  variation: string;
}

interface CoinProps {
  coin: ICoin;
}

export function Coin({ coin }: CoinProps) {
  const { name, value, variation } = coin;

  return (
    <Container>
      <Typography variant="label" sx={{ color: secondary[800] }}>
        {name}
      </Typography>
      <Typography variant="label">{value}</Typography>
      <Typography
        variant="label"
        sx={{ color: variation[0] === "+" ? tertiary[700] : quartenary[700] }}
      >
        {variation}
      </Typography>
    </Container>
  );
}

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ServiceCard } from "./ServiceCard";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "43.5rem",
  height: "35.5rem",
});

const UpperRow = styled(Box)({
  display: "flex",
  gap: "2rem",
});

const LowerRow = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  gap: "2rem",
});

export function ServicesCards() {
  return (
    <Container>
      <UpperRow>
        <ServiceCard
          image="/images/cryptoCurrencyB.svg"
          additionalText="For your company"
          name="Crypto Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
        />
        <ServiceCard
          image="/images/cryptoCurrency.svg"
          additionalText="For your company"
          name="Crypto Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
        />
      </UpperRow>

      <LowerRow>
        <ServiceCard
          image="/images/businessChart.svg"
          additionalText="For your company"
          name="Crypto Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
        />
        <ServiceCard
          image="/images/laptopMobile.svg"
          additionalText="For your company"
          name="Crypto Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
        />
      </LowerRow>
    </Container>
  );
}

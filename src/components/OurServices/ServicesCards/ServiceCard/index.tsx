import { primary, white } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  backgroundColor: white,
  width: "17.5rem",
  height: "17.5rem",
  borderRadius: "6px",
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.05)"
});

interface ServiceCardProps {
  image: string;
  additionalText: string;
  name: string;
  description: string;
}

export function ServiceCard({
  image,
  additionalText,
  name,
  description,
}: ServiceCardProps) {
  return (
    <Container>
      <Image
        src={image}
        alt="Service Icon"
        width={64}
        height={64}
        aria-hidden={true}
      />
      <Typography
        variant="body1"
        sx={{ color: primary[500], marginTop: "1rem" }}
      >
        {additionalText}
      </Typography>
      <Typography variant="h4" sx={{ marginTop: "0.25rem" }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
        {description}
      </Typography>
    </Container>
  );
}

import { List } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Coin } from "./Coin";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const coins = [
  { id: 1, name: "BIT", value: "R$ 23,62", variation: "+7,082" },
  { id: 2, name: "DOG", value: "R$ 23,62", variation: "-5,230" },
  { id: 3, name: "ETH", value: "R$ 23,62", variation: "+1,023" },
  { id: 4, name: "SOL", value: "R$ 23,62", variation: "+3,908" },
  { id: 5, name: "SOL2", value: "R$ 23,62", variation: "+3,908" },
  { id: 6, name: "SOL3", value: "R$ 23,62", variation: "+3,908" },
  { id: 7, name: "SOL4", value: "R$ 23,62", variation: "+3,908" },
  { id: 8, name: "SOL5", value: "R$ 23,62", variation: "+3,908" },
];

const Container = styled(List)({
  display: "flex",
  maxWidth: "22.5rem",
  "& .swiper-wrapper": {
    transitionTimingFunction: "linear",
  },
});

const CustomSwiperSlide = styled(SwiperSlide)({
  "&.swiper-slide": {
    width: "max-content",
  },
  "& + div": {
    marginLeft: "1.5rem",
  },
});

interface CoinCarouselProps {}

export function CoinCarousel({}: CoinCarouselProps) {
  return (
    <Container>
      <Swiper
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 1,
        }}
        speed={3000}
        modules={[Autoplay]}
        
      >
        {coins.map((coin) => (
          <CustomSwiperSlide key={coin.id}>
            <Coin key={coin.id} coin={coin} />
          </CustomSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

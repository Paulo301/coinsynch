import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel } from 'swiper/modules';

const CustomSwiper = styled(Swiper)({
  flex: 1,
});

const CustomSwiperSlide = styled(SwiperSlide)({
  "&.swiper-slide": {
    width: "max-content",
  },
  "& + div": {
    marginLeft: "2.5rem",
  },
});

export function Banner() {
  return (
    <CustomSwiper
      slidesPerView="auto"
      mousewheel={true}
      modules={[Mousewheel]}
    >
      <CustomSwiperSlide>
        <Image
          alt="Banner"
          src="/images/bannerWomanLeft.png"
          width={496}
          height={499}
        />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <Image
          alt="Banner"
          src="/images/bannerMan.png"
          width={496}
          height={499}
        />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <Image
          alt="Banner"
          src="/images/bannerWomanRight.png"
          width={496}
          height={499}
        />
      </CustomSwiperSlide>
    </CustomSwiper>
  );
}

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import SkeletonCustom from "../skeleton/SkeletonCustom";
import View from "../swapComponents/View";
type Data = {
  children: any;
  perView?: number;
  space?: number;
  className?: string;
  isNavigation?: boolean;
  isPavigation?: boolean;
  isScrollBar?: boolean;
  responsive?: {
    xs?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};
const SwiperCustom = ({
  children,
  perView = 10,
  space = 16,
  className = "",
  isNavigation = true,
  isPavigation = true,
  isScrollBar = true,
  responsive = {
    xs: 1,
    md: 2,
    lg: 3,
    xl: 4,
  },
}: Data) => {
  if (!children)
    return (
      <div>
        <SkeletonCustom></SkeletonCustom>
      </div>
    );
  return (
    <View className={`w-full h-full ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={space}
        slidesPerView={perView}
        navigation={isNavigation}
        pagination={isNavigation ? { clickable: true } : false}
        scrollbar={isScrollBar ? { draggable: true } : false}
        breakpoints={{
          325: {
            slidesPerView: responsive.xs,
            spaceBetween: space,
          },
          768: {
            slidesPerView: responsive.md,
            spaceBetween: space,
          },
          1024: {
            slidesPerView: responsive.lg,
            spaceBetween: space,
          },
          1500: {
            slidesPerView: responsive.xl,
            spaceBetween: space,
          },
        }}
      >
        {children}
      </Swiper>
    </View>
  );
};

export default SwiperCustom;

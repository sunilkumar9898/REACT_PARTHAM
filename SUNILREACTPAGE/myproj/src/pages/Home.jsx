import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Home = () => {
  return (
      <div>
          <div className="w-full mx-auto mt-0">
              <Swiper
                  //   navigation={true}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  pagination={{ clickable: true }}
                  modules={[Navigation, Autoplay, Pagination]}
                  className="mySwiper  w-full">
                  <SwiperSlide>
                      <img
                          className="w-full h-220"
                          src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Slide 1"
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img
                          className="w-full h-220"
                          src="https://images.unsplash.com/photo-1682686580849-3e7f67df4015?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Slide 2"
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img
                          className="w-full h-220"
                          src="https://images.unsplash.com/photo-1753150972975-0524f7f24888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Slide 3"
                      />
                  </SwiperSlide>
              </Swiper>
          </div>
      </div>
  );
}

export default Home

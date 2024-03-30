import React from "react";

export default function HomeProjectsBlock() {
  return <div>HomeProjectsBlock</div>;
}

// import styled from "styled-components";
// import { ProjectCarouselBlockProps } from "../interfaces/ProjectCarouselBlockProps";
// import { v4 as uuidv4 } from "uuid";

// import Link from "next/link";

// import { ProjectImageCard } from ".";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/scss"; // core Swiper
// import "swiper/swiper-bundle.css";
// import "swiper/css/navigation"; // Navigation module
// import "swiper/css/pagination"; // Pagination module
// import "swiper/css/effect-coverflow";

// import "../static/styles/home-projects-slider.css";
// import "../static/styles/sliders.css";

// const swiperConfig = {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   navigation: true,
//   slidesPerView: 3,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     clickable: true,
//   },
//   modules: [EffectCoverflow, Navigation, Pagination],
//   className: "projectsSwiper",
// };
// const HomeProjectsBlock = (props: ProjectCarouselBlockProps) => (
//   <HomeProjectsBlockDiv>
//     <Carousel>
//       <Swiper {...swiperConfig}>
//         {props.content.slider?.map((project) => (
//           <SwiperSlide key={project.name}>
//             <StyledA href={project.link ? project.link : "#"}>
//               <ProjectImageCard props={project} />
//             </StyledA>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Carousel>
//     <MobileProjects>
//       {props.content.slider?.map((project) => (
//         <StyledA key={uuidv4()} href={project.link ? project.link : "#"}>
//           <ProjectImageCard props={project} />
//         </StyledA>
//       ))}
//     </MobileProjects>
//   </HomeProjectsBlockDiv>
// );

// const StyledA = styled(Link)`
//   text-decoration: inherit;
//   color: inherit;
//   cursor: unset;
// `;

// const HomeProjectsBlockDiv = styled.div`
//   padding: 50px;
//   @media ${(props) => `${props.theme.viewport.monitor}`} {
//     width: 72em;
//     margin: auto;
//   }
// `;

// const Carousel = styled.div`
//   display: none;
//   @media ${(props) => `${props.theme.viewport.tablet}`} {
//     display: inherit;
//   }
// `;

// const MobileProjects = styled.div`
//   display: grid;
//   margin: auto;
//   margin-top: 50px;
//   grid-template-columns: 1fr;
//   grid-gap: 30px;
//   @media ${(props) => `${props.theme.viewport.tablet}`} {
//     display: none;
//   }
//   @media ${(props) => `${props.theme.viewport.widerMobile}`} {
//     grid-template-columns: 1fr 1fr;
//   }
//   @media ${(props) => `${props.theme.viewport.widerMobile} and  ${props.theme.viewport.hover}`} {
//     grid-template-columns: 1fr;
//   }
// `;

// export default HomeProjectsBlock;

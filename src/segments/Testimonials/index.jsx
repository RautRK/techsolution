import "./Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import {clientsReviews} from "../../data"
import { cssPerfectShape, starDecoder,convertHexToRgba } from "../../utils"
const Testimonial = () => {
  return (
    <section id="testimonials">
        <div className="container">
            <div className="spotlight" />
            <div className="section-header">
             <h3>What Our Clients Say</h3>
             <h2>Trusted Worldwide for Cutting-Edge IT Solutions</h2>   
            </div>
            <Swiper className="testimonials-wrapper"
             slidesPerView={1}
              spaceBetween={30}
              modules={[Autoplay]}
              autoplay={true}
              loop={true}
              speed={1000}
              grabCursor={true}
               breakpoints={{
                600:{slidesPerView:2},
                900:{slidesPerView:3},
            }}>
             {
                clientsReviews.map((client,index)=>(
                    <SwiperSlide className="blur testimonial"
                    style={{
                        background:convertHexToRgba("--bg-secondary",0.5),
                    }} 
                    key={index}>
                        <div className="top">
                            <p className="content">{client.content}</p>
                        </div>
                        <div className="bottom">
                            <div className="star-container">
                              {starDecoder(client.rating)}  
                            </div>
                            <div style={{...cssPerfectShape(60,60)}} className="profile">
                                <img src={client.image} alt="client" />
                            </div>
                            <h3 className="name">{client.name}</h3>
                            <p className="job-title">{client.jobTitle}</p>
                        </div>

                    </SwiperSlide>

                ))
             }
            </Swiper>
        </div>
      
    </section>
  )
}

export default Testimonial

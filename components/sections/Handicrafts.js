import React from 'react'
import {
    Button,
    Box, Typography,
    Rating,
    Stack,
    Avatar,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
function Handicrafts() {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box 
            id='handicrafts'
            component='section'
            sx={{ minHeight: '100vh', minWidth: '100%', }}
        >
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 1,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                color='yellow'
                speed={700}
                spaceBetween={100}
                
                
                >
            {listOfHandicafts}
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow" style={{ color:'gold' }} >
                </div>
                <div className="swiper-button-next slider-arrow" style={{ color:'gold' }}>
                </div>
                <div className="swiper-pagination" style={{ color:'gold' }}></div>
            </div>
        </Swiper>

        </Box >
    )
}

export default Handicrafts
const handicrafts = [
    {
        id: 1,
        fullName: 'Handicraft 1',
        craft: 'craft 1',
        image: 'https://picsum.photos/250',
        rate: 4,
    },
    {
        id: 2,
        fullName: 'Handicraft 2',
        craft: 'craft 2',
        image: 'https://picsum.photos/250',
        rate: 4.5,
    },
    {
        id: 3,
        fullName: 'Handicraft 3',
        craft: 'craft 3',
        image: 'https://picsum.photos/250',
        rate: 3.5,
    },
    {
        id: 4,
        fullName: 'Handicraft 4',
        craft: 'craft 4',
        image: 'https://picsum.photos/250',
        rate: 4,
    },
    {
        id: 5,
        fullName: 'Handicraft 5',
        craft: 'craft 5',
        image: 'https://picsum.photos/250',
        rate: 4.5,
    },
]
const listOfHandicafts = handicrafts.map((handicraft,index) =>
    < SwiperSlide key={handicraft.id}  >
        <Stack alignItems={'center'} justifyContent={'center'} paddingY={10}>
            <Avatar
                alt={handicraft.fullName}
                src={handicraft.image}
                sx={{ width: 200, height: 200 }}
            />
            <Typography gutterBottom variant="h5" component="div">
                {handicraft.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {handicraft.craft}
            </Typography>
            <Rating name="read-only" value={handicraft.rate} readOnly />
        </Stack>
    </SwiperSlide >


)

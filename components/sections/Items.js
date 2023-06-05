import { Box } from '@mui/system'
import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
function Items() {
    return (
        <Box
            id='items'
            component='section'
            sx={{
                width: {
                    xs: '100%',
                    md: '50%',
                },
                height: {
                    xs:'65vh',
                    md: '100%',

                },
                
            }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Swiper
                modules={[Pagination, A11y, Autoplay]}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                className='handicarfts_swiper'
                centeredSlides={true}
                speed={700} // Set the transition speed in milliseconds
                effect='fade' // Choose the transition effect (e.g., slide, fade)
            >
                <SwiperSlide className='custom_slide' >
                    <Link href='/items' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/image6.jpg"
                                loading="lazy"
                                alt="items"
                                width={300}
                                height={300}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                lorem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                owner
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='custom_slide' >
                    <Link href='/items' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/image6.jpg"
                                loading="lazy"
                                alt="items"
                                width={300}
                                height={300}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                lorem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                owner
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='custom_slide' >
                    <Link href='/items' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/image6.jpg"
                                loading="lazy"
                                alt="items"
                                width={300}
                                height={300}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                lorem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                owner
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                
                {/* Add more slides as needed */}
            </Swiper>
            <Button variant='contained' sx={{ width: {xs:'90%',sm:'40%'}, mt: 2 }}>
                <Link href='/items' style={{ color: 'black', textDecoration: 'none' }} >
                    View All Items
                </Link>
            </Button>

        </Box >
    )
}

export default Items

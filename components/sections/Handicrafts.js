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
function Handicrafts() {
    return (
        <Box
            id='handicrafts'
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
                borderRight:{
                    xs:'none',
                    md:'1px solid #e0e0e0'
                },
                borderBottom:{
                    xs:'1px solid #e0e0e0',
                    md:'none'
                }
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
                }}
                className='handicarfts_swiper'
                centeredSlides={true}
                speed={700} // Set the transition speed in milliseconds
                effect='fade' // Choose the transition effect (e.g., slide, fade)
            >
                <SwiperSlide className='custom_slide' >
                    <Link href='/handicrafts' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/embroidery.png"
                                loading="lazy"
                                alt="handicfraft"
                                width={200}
                                height={200}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                mohammed mesbahi
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                craft
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='custom_slide' >
                    <Link href='/handicrafts' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/embroidery.png"
                                loading="lazy"
                                alt="handicfraft"
                                width={200}
                                height={200}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                mohammed mesbahi
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                craft
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='custom_slide' >
                    <Link href='/handicrafts' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/embroidery.png"
                                loading="lazy"
                                alt="handicfraft"
                                width={200}
                                height={200}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                mohammed mesbahi
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                craft
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='custom_slide' >
                    <Link href='/handicrafts' style={{ color: 'black', textDecoration: 'none' }} >
                        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <Image
                                src="/images/embroidery.png"
                                loading="lazy"
                                alt="handicfraft"
                                width={200}
                                height={200}
                                style={{ borderRadius: '50%' }}
                            >
                            </Image>
                            <Typography
                                variant="h5"

                            >
                                mohammed mesbahi
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                craft
                            </Typography>
                            <Rating name="read-only" value={4.4} precision={0.5} readOnly />
                        </Stack>
                    </Link>
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
            <Button variant='contained' sx={{ width: {xs:'90%',sm:'40%'}, mt: 2 }}>
                <Link href='/handicrafts' style={{ color: 'black', textDecoration: 'none' }} >
                    View All Handicrafts
                </Link>
            </Button>

        </Box >
    )
}

export default Handicrafts

import React from 'react'
import AllEvents from '@/components/AllEvents';
import Banner from '../../../components/HomeComponents/heroBanner';

function page() {
    const bannerImages = [
        {
            src: "/banner/img30.JPG",
            alt: "University Campus",
            title: "Welcome to KR Mangalam University",
            description: "Empowering minds, shaping futures"
        },
        {
            src: "/banner/img31.JPG",
            alt: "Students in Campus",
            title: "Join Our Alumni Network",
            description: "Connect with fellow graduates"
        },
        {
            src: "/banner/img32.JPG",
            alt: "HACK-KRMU",
            title: "HACK KRMU 4.0",
            description: "An event in university"
        }
    ];
    return (
        <main className="min-h-screen">
            <Banner
                images={bannerImages}
                autoSlideInterval={5000} // Optional: 5 seconds per slide
                className="my-banner" // Optional: additional classes
            />
            <AllEvents />
        </main>
    )
}

export default page
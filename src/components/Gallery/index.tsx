"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const EventCarousel = () => {
    const images = [
        "/images/aajneeti.jpg",
        "/images/audience.jpg",
        "/images/delegates1.jpg",
        "/images/faculty1.jpg",
        "/images/faculty2.jpg",
        "/images/members1.jpg",
        "/images/members2.jpg",
        "/images/members3.jpg",
    ];

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item"
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className="image-card"
                    style={{
                        margin: '0 20px',  // Add spacing between images
                        width: '400px',    // Set a fixed width
                        height: '250px',   // Set a fixed height
                    }}
                >
                    <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        width={400}  // Match width of the container
                        height={250} // Match height of the container
                        style={{
                            objectFit: 'cover',  // Ensures uniformity in image sizing
                            width: '95%',       // Make the image fill the container
                            height: '100%',
                        }}
                        priority
                    />
                </div>
            ))}
        </Carousel>
    );
}

const Gallery = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-8 pb-10">
            <h1 className='text-black text-5xl mb-8 leading-relaxed font-bold'>Gallery</h1>
            <div className="carousel w-full max-w-screen-xl" style={{ height: '300px' }}>
                <EventCarousel />
            </div>
        </div>
    );
}

export default Gallery;

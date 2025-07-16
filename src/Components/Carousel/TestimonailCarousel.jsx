import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import image1 from '/assets/img/Hiral-Valia.webp';
import image2 from '/assets/img/Testimonial/author2.png';
import image3 from '/assets/img/Testimonial/author1.png';

const TestimonialCarousel = () => {
    const products = [
        {
            name: "... their variety of products, range and comparatively cheaper price. Service provided was also good.",
            description: 'Ahzaz Naseer',
            image: image1
        },
        {
            name: 'since the last 4 years We appreciate their prompt service and so far we have faced no complaints with their furniture.',
            description: 'Abdur Rehman',
            image: image2
        },
        {
            name: 'Shahmeer efficiently manages our outdated website, providing quick and invaluable support. We would be lost without him',
            description: 'Maham ',
            image: image3
        },
    ];

    const responsiveOptions = [
        { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
        { breakpoint: '768px', numVisible: 2, numScroll: 2 },
        { breakpoint: '560px', numVisible: 1, numScroll: 1 }
    ];

    const productTemplate = (product) => {
        return (
            <div className="p-col-6 p-md-6 p-lg-6">
                <div className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                        <p>{product.name}</p>
                        <h4>{product.description}</h4>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="custom-carousel-container">
            <Carousel
                value={products}
                numVisible={2}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={5000}
                itemTemplate={productTemplate}
            />
        </div>
    );
};

export default TestimonialCarousel;

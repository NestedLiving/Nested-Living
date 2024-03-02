
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HouseCarousel = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            selectedItem={selectedImageIndex}
            onChange={setSelectedImageIndex}
        >
            {images.map((image, index) => (
                <div key={index} onClick={() => handleImageClick(index)}>
                    <img src={image} alt={`House ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default HouseCarousel;

import React, {useState} from 'react';

const Gallery = ({data}) => {
    
    const [model, setModel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openGallery = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModel(true);
    }

    return (
        <section className='section overflow-scroll'>
            {/* add padding from top of screens */}
                <div className='lg:columns-3 md:columns-2 columns-1'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} onClick={() => openGallery(item)}> {}
                                <img height="500px" margin='20px'src={item} alt='' />
                            </div>
                        )
                    })}
                </div>
        
        </section>
    );
};

export default Gallery;
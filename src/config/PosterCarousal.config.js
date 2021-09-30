const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    speed:500,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                InitialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
               
            },
        },

],

};

export default settings;
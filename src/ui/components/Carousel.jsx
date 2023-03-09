
export const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../../../public/img/frente-2.JPG" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src="https://soyrafaramos.b-cdn.net/wp-content/uploads/que-es-un-slider-de-imagenes.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src="../../../public/img/frente-1.JPG" className="d-block w-100" alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

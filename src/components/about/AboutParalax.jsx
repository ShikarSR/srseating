import badge from "/assets/img/icon/badge.png"

const AboutParalax = () => {
    return (
        <>
        <div className="space"></div>
            <div className="award-area bg-fixed" 
            style={{ backgroundImage: `url('https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/employee.jpg')`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="award-items">
                                <div className="award-item">
                                    <div className="center-info">
                                           <p className="text-white">
                                   Over 6,00,000+ seats later, we’ve earned our place as one of India’s leading cinema and auditorium seating manufacturers, where precision meets lasting quality.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutParalax;
// ProductAccessories.jsx
import Animation from '../animation/Animation';

const ProductAccessories = ({ data }) => {
  // Normalize paths so both "assets/..." and "/assets/..." work
const images = (data.images || []).map(p => {
    if (!p) return null;
    return p.startsWith("http") ? p : `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;
  });

  const titles = data.sub_img_title || [];
  return (
    <>
      <div className="space"></div>
      <div className="partner-style-two-area text-light accessories_sec bg-transparent">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE YELLOW BOX */}
            <div className="col-lg-6 partner-style-one yellow_bg">
              <div className="partner-style-one-item text-light yellow_bg bg-transparent">
                <h4
                  className="sub-title text-white"
                  style={{
                    backgroundColor: "#212B37",
                    borderColor: "rgb(33, 43, 55)",
                  }}
                >
                  {data.label}
                </h4>
                <h2 className="font_51 text_black">
                  {data.headline.split("\n").map((line, idx, arr) => (
                    <span key={idx}>
                      {line}
                      {idx !== arr.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
              </div>
            </div>

            {/* ACCESSORY IMAGES WITH SUBTITLES */}
            {images.map((src, i) => (
              <Animation
                key={src}
                className="animate__animated animate__fadeInLeft"
                delay={`${100 * (i + 1)}ms`}
              >
                <div className="col-lg-3 col-md-6 partner-style-one sub_wrapper">
                  <div className="partner-style-one-item text-center">
                    <div className="inner_box_item">

                    <img src={src} alt={titles[i] || `Accessory ${i + 1}`} />
                    {titles[i] && (
                      <p className="mt-2 text_black">{titles[i]}</p>
                    )}
                    </div>
                  </div>
                </div>
              </Animation>
            ))}
          </div>

          {/* DISCLAIMER */}
          <p
            className="text_black disclaimer"
            dangerouslySetInnerHTML={{
              __html: (data.desc || "").replace(/\n/g, "<br/>"),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductAccessories;

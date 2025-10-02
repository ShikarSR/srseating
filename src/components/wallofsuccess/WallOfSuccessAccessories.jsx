import React, { useMemo, useState } from "react";
import Animation from "../animation/Animation";

const logos = [
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/ags.png", alt: "AGS" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/amituniversity.png", alt: "Amit University" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/APRCinemas.png", alt: "APR Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/gkvk.png", alt: "GKVK" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/gold_wins.png", alt: "Gold Wins" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/dnc.png", alt: "DNC" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/dsc.png", alt: "DSC" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/iisc.png", alt: "IISc" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/iit.png", alt: "IIT" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/indian_naval.png", alt: "Indian Naval" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/isro.png", alt: "ISRO" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/itt_india.png", alt: "ITT India" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/kalaivanar.png", alt: "Kalaivanar" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/kamala_cinema.png", alt: "Kamala Cinema" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/kims_hospital.png", alt: "KIMS Hospital" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/kle.png", alt: "KLE" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/la_cinemas.png", alt: "La Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/loop_cinemas.png", alt: "Loop Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/madras_highcourt.png", alt: "Madras High Court" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/magic_frame.png", alt: "Magic Frame" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/mall_dubai.png", alt: "Mall of Dubai" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/manipal_university.png", alt: "Manipal University" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/movie_time.png", alt: "Movie Time" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/mythri_movie.png", alt: "Mythri Movie" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/new_horizon.png", alt: "New Horizon" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/nimhans.png", alt: "Nimhans" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/nxt.png", alt: "NXT" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/palaxi.png", alt: "Palaxi" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/patna_college.png", alt: "Patna College" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/pes_university.png", alt: "PES University" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/planetariums.png", alt: "Planetariums" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/prasads.png", alt: "Prasads" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/pss.png", alt: "PSS" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/radiance_cinema.png", alt: "Radiance Cinema" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/rajhans_cinema.png", alt: "Rajhans Cinema" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/rakki_cinemas.png", alt: "Rakki Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/ramaiah.png", alt: "Ramaiah" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/ravindra_natya.png", alt: "Ravindra Natya" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/rock_mall.png", alt: "Rock Mall" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/sathya_sai.png", alt: "Sathya Sai" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/start_line.png", alt: "Start Line" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/svc_cinemas.png", alt: "SVC Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/svf.png", alt: "SVF" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/tnz.png", alt: "TNZ" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/tamilnadu_college.png", alt: "Tamil Nadu College" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/vetri_theatre.png", alt: "Vetri Theatre" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/vidya_shilp.png", alt: "Vidya Shilp" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/vmr_central.png", alt: "VMR Central" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/wave_cinema.png", alt: "Wave Cinema" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/yashoda.png", alt: "Yashoda" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/ASIANCINEMAS.png", alt: "Asian Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/AURACINEMAS.png", alt: "Aura Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/bharatbiotech.png", alt: "Bharat Biotech" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/BharathCinemas.png", alt: "Bharath Cinemas" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/CentralPictures.png", alt: "Central Pictures" },
  { src: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/ChandigarhUniversity.png", alt: "Chandigarh University" },
];


function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const WallOfSuccessAccessories = () => {
  const [visibleRows, setVisibleRows] = useState(1);
  const rows = useMemo(() => chunk(logos, 20), []);
  const showNextRow = () => setVisibleRows(v => Math.min(v + 1, rows.length));
  const allShown = visibleRows >= rows.length;

  return (
    <section className="wallof_success_sec">
      <div className="partner-style-two-area accessories_sec">
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-lg-6 partner-style-one">
              <div className="partner-style-one-item text-light yellow_bg">
                <h4 className="sr_btn text-white" style={{ background: "#212B37", color: "#fff" }}>
                  Clients
                </h4>
                <h2 className="font_51 text_black">Preferred by the Best in the Business.</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 partner-style-one">
                <Animation className="animate__animated animate__fadeInLeft">
                  {/* <div className="col-lg-3 col-md-6 partner-style-one"> */}
                    <div className="partner-style-one-item">
                     <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/Cinepolis.png" alt="Cinepolis" />
                    {/* </div> */}
                  </div>
                </Animation>
          </div>

           <div className="col-lg-3 col-md-6 partner-style-one">
                <Animation className="animate__animated animate__fadeInLeft">
                    <div className="partner-style-one-item">
                     <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/wallofsuccess/NVCinemas.png" alt="NVCinemas" />
                  </div>
                </Animation>
          </div>
             </div>
          {/* Logo rows */}
          {rows.slice(0, visibleRows).map((row, rIdx) => (
            <div className="row" key={`row-${rIdx}`}>
              {row.map((logo, i) => (
                <Animation className="animate__animated animate__fadeInLeft" delay={`${100 * (i + 1)}ms`} key={`${logo.alt}-${i}`}>
                  <div className="col-lg-3 col-md-6 partner-style-one">
                    <div className="partner-style-one-item">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        onError={(e) => { e.currentTarget.style.opacity = 0.2; e.currentTarget.alt = `${logo.alt} (missing)`; }}
                      />
                    </div>
                  </div>
                </Animation>
              ))}
            </div>
          ))}

          {!allShown && (
            <div className="global_btn" style={{ textAlign: "center", marginTop: 24 }}>
              <button className="sr-btn" onClick={showNextRow}>
                <span className="btn-text">View All Collaborations</span>
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20">
                    <path d="M471.1 297.4c12.5 12.5 12.5 32.8 0 45.3L279.1 534.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L403.2 320 233.9 150.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WallOfSuccessAccessories;

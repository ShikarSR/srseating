import React, { useEffect, useRef } from 'react';

import  VIDEO_URL from  '../../assets/video/scrollvideo.mp4';
import { Link } from "react-router-dom";

const AboutFullImage = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const vid = videoRef.current;
    if (!sec || !vid) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.6 } // play when ~60% of section is in view
    );

    io.observe(sec);

    // Pause if tab becomes hidden
    const onVis = () => (document.hidden ? vid.pause() : null);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <>
    <section ref={sectionRef} className="aboutfull_img_sec position-relative">
      <div className="full_center_img">
        <video
          ref={videoRef}
          src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/video/corporate_video.mp4"
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback nofullscreen"
          className="w-100"
          style={{ display: 'block', width: '100%', border: 0, outline: 'none' }}
        />
      </div>

    </section>

    <div className="global_btn our_story_btn">
                    <button class="sr-btn">
                        <Link className="font_22" to="https://www.youtube.com/watch?v=5h0iD0mhdBY" >
                    <span class="btn-text">Watch Full Video</span>
                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                    </Link>
                    </button>
            </div>

    <div className="container px-0 overlap_vision">
       <div className="vision_mission_wrapper">
        <div className="left_vision">
          <h3 className='font_42'>Our Vision</h3>
          <p>To be the leader in redefining global seating standards with world-class products made in India, built on precision, driven by purpose, and delivered with unwavering commitment to our customers’ trust and success.</p>
        </div>

        <div className="right_mission">
          <h3 className='font_42'>Our Mission</h3>
          <p>In a world that’s always moving, we create places to pause, designing seats that embody comfort, reliability, and thoughtful engineering, made to stand the test of time.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutFullImage;

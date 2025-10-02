import React, { useEffect, useRef } from 'react';

import  VIDEO_URL from  '../../assets/video/scrollvideo.mp4';

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
          style={{ display: 'block', width: '100%', height: 'auto', border: 0, outline: 'none' }}
        />
      </div>

     
    </section>
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

import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import { useParams } from 'react-router-dom';

const VideoTest = ({ videoData = [] }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');
  const durationRefs = useRef([]);
  const videoRefs = useRef([]);
  const sectionRefs = useRef([]);

  const { id } = useParams();
  const numId = Number(id);

  // ✅ extract button data safely
  const buttons = videoData?.[0]?.buttons || {};
  const buttonText = videoData?.[0]?.buttonText || {};

  useEffect(() => {
    if (buttons.button1) setActiveVideo(buttons.button1);
  }, [numId, videoData]);

  // ✅ when video loads
  const onVideoLoadedData = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      durationRefs.current[index] = video.duration;
      setVideoLoaded(true);
    }
  };

  // ✅ scroll-sync playback
  const updateVideoTimeFromScroll = () => {
    videoRefs.current.forEach((video, index) => {
      const section = sectionRefs.current[index];
      if (!video || !section || !videoLoaded) return;

      const scrollPosition = $(window).scrollTop();
      const sectionTop = $(section).offset().top;
      const sectionHeight = $(section).outerHeight();
      const scrollableDistance = sectionHeight - window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollPosition - sectionTop) / scrollableDistance)
      );

      const newTime = scrollProgress * durationRefs.current[index];
      if (video.currentTime !== newTime) video.currentTime = newTime;
    });
  };

  useEffect(() => {
    $(window).on('scroll', updateVideoTimeFromScroll);
    return () => $(window).off('scroll', updateVideoTimeFromScroll);
  }, [videoLoaded]);

  if (!videoData || !videoData.length) return null;

  return (
    <>
      {/* 🔹 Button Block */}
      {buttons.button1 && buttons.button2 && (
        <div
          className="global_btn video_btns"
          style={{
            position: 'relative',
            zIndex: 10, // 🔥 ensures it's above the video
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            padding: '2rem 0',
            background: 'rgba(255,255,255,0.95)', // visible white overlay
          }}
        >
          <button
            className={`sr-btn ${activeVideo === buttons.button1 ? 'active' : ''}`}
            onClick={() => setActiveVideo(buttons.button1)}
          >
            {buttonText.text1 || 'Video 1'}
          </button>

          <button
            className={`sr-btn ${activeVideo === buttons.button2 ? 'active' : ''}`}
            onClick={() => setActiveVideo(buttons.button2)}
          >
            {buttonText.text2 || 'Video 2'}
          </button>
        </div>
      )}

      {/* 🔹 Video Sections */}
      {videoData.map((item, index) => {
        const videoUrl = item?.buttons?.button1 || '';
        if (!videoUrl) return null;

        return (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="video-section rotate_video"
            style={{
              position: 'relative',
          overscrollBehavior: "contain",
          
            }}
          >
            <div
              className=""
              style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={activeVideo || videoUrl}
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                onLoadedData={() => onVideoLoadedData(index)}
                controlsList="nodownload noremoteplayback nofullscreen"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  background: 'transparent',
                }}
              />
            </div>
        
          </section>
        );
      })}
    </>
  );
};

export default VideoTest;

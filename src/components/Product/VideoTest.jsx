import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery'; // Importing jQuery

import AboutFullImage from '@/pages/aboutpage/AboutFullImage';
import AboutFixedBottom from '../about/AboutFixedBottom';

const VideoTest = () => {
  const [videoHeight, setVideoHeight] = useState(0);  // Store video height
  const [videoLoaded, setVideoLoaded] = useState(false); // Video loaded state
  const videoRef = useRef(null); // Video ref
  const sectionRef = useRef(null); // Section ref
  const durationRef = useRef(0); // Video duration

  // 🔹 Video metadata loaded
  const onVideoLoadedData = () => {
    const video = videoRef.current;
    if (video) {
      durationRef.current = video.duration;
      const aspectRatio = video.videoWidth / video.videoHeight;
      setVideoHeight(window.innerHeight * aspectRatio);
      setVideoLoaded(true);
    }
  };

  // 🔹 Use jQuery to update video time based on scroll
  const updateVideoTimeFromScroll = () => {
    const video = videoRef.current;
    const section = sectionRef.current;
    
    if (!video || !section || !videoLoaded) return;

    // Get the scroll progress
    const scrollPosition = $(window).scrollTop();
    const sectionTop = $(section).offset().top;
    const sectionHeight = $(section).outerHeight();
    const scrollableDistance = sectionHeight - window.innerHeight;
    const scrollProgress = Math.max(0, Math.min(1, (scrollPosition - sectionTop) / scrollableDistance));

    // Update video playback time based on scroll progress
    const newTime = scrollProgress * durationRef.current;
    if (video.currentTime !== newTime) {
      video.currentTime = newTime;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', onVideoLoadedData);
    }

    // Scroll event listener using jQuery
    $(window).on('scroll', updateVideoTimeFromScroll);

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', onVideoLoadedData);
      }
      $(window).off('scroll', updateVideoTimeFromScroll); // Cleanup scroll listener
    };
  }, [videoLoaded]);

  const videoSrc = 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/testfolder/SR01.webm'; // Your video source

  return (
    <>
      <AboutFullImage />
      <section
        ref={sectionRef}
        className="video-section"
        style={{
          height: `${videoHeight}px`, // Adjust section height based on video aspect ratio
          position: 'relative',
        }}
      >
        <div
          className="rotate_video"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh', // Keeps the video sticky during scrolling
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload noremoteplayback nofullscreen"
            style={{
              display: 'block',
              maxWidth: '100%',
              background: 'transparent',
            }}
          />
        </div>
      </section>
      <AboutFixedBottom />
    </>
  );
};

export default VideoTest;

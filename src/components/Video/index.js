import React, { useEffect } from 'react'

const Video = () => {
  useEffect(() => {
    // ==================== VIDEO ====================
    const videoFile = document.getElementById('video-file')
    const videoButton = document.getElementById('video-button')
    const videoIcon = document.getElementById('video-icon')

    const playPause = () => {
      if (videoFile.paused) {
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
      } else {
        // Pause video
        videoFile.pause()
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
      }
    }
    videoButton.addEventListener('click', playPause)

    const finalVideo = () => {
      // Video ends, icon change
      videoIcon.classList.remove('ri-pause-line')
      videoIcon.classList.add('ri-play-line')
    }
    // ended, when the video ends
    videoFile.addEventListener('ended', finalVideo)
  }, [])

  return (
    <section className="video section">
      <h2 className="section__title">Video Tour</h2>

      <div className="video__container container">
        <p className="video__description">
          Find out more with our video of the most beautiful and pleasant places for you and your
          family.
        </p>

        <div className="video__content">
          <video id="video-file">
            <source src="assets/video/video.mp4" type="video/mp4" />
          </video>

          <button className="button button--flex video__button" id="video-button">
            <i className="ri-play-line video__button-icon" id="video-icon"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Video

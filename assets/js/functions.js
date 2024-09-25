// Función para mostrar/ocultar el video y reiniciarlo
function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause();
}

// Función para cerrar el tráiler al hacer clic fuera del área del video
function closeVideo(event) {
  const videoContainer = document.querySelector(".video-container");
  if (!videoContainer.contains(event.target)) {
    toggleVideo();
  }
}

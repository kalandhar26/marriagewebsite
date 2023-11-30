document.addEventListener("DOMContentLoaded", function () {
  const pageTitle =
    "Join us on december 3 2023 as we begin this journey of love and commitment. Your presence is the greatest gift of all. Save the date and share in our joy as we celebrate the magic of togetherness.";
  const images = [
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/19154556/pexels-photo-19154556/free-photo-of-wedding-couple-walking-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/2917380/pexels-photo-2917380.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/2057692/pexels-photo-2057692.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/2057692/pexels-photo-2057692.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/4765078/pexels-photo-4765078.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/13780091/pexels-photo-13780091.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.imgur.com/Ybishr0.png",
    "https://images.pexels.com/photos/3534497/pexels-photo-3534497.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const videoUrl = "https://www.youtube.com/embed/JTpDCoxZdv8";
  const googleMapEmbedCode =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.0778937338787!2d78.48153075193916!3d13.627871149538926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb267e61f49b17d%3A0x2367ac625f514461!2sBhaarath%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1701170982968!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  const qrCodeImage = "https://i.imgur.com/0RgMrxI.png";

  let currentIndex = 0;
  const transitionDuration = 1000; // in milliseconds
  const holdDuration = 5000; // in milliseconds

  function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.width = "100%";
    img.style.maxWidth = "800px";
    img.style.height = "auto";
    img.style.objectFit = "cover"; // Add this line
    img.style.margin = "10px";
    img.style.transition = `transform ${
      transitionDuration / 1500
    }s ease-in-out`;
    return img;
  }

  function createVideo(src) {
    const iframe = document.createElement("iframe");
    iframe.width = 400;
    iframe.height = 225;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.src = src;
    return iframe;
  }

  function createMapIframe(embedCode) {
    const mapContainer = document.createElement("div");
    mapContainer.innerHTML = embedCode;
    return mapContainer;
  }

  function createQRCodeImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gifts QR Code";
    img.style.margin = "20px";
    return img;
  }

  function createModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.innerHTML = content;

    const closeButton = document.createElement("span");
    closeButton.className = "modal-close";
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.appendChild(closeButton);
    modal.appendChild(modalContent);

    return modal;
  }

  function createVideoModal(videoSrc) {
    const videoIframe = createVideo(videoSrc);
    const videoModal = createModal(videoIframe.outerHTML);
    return videoModal;
  }

  function createQRCodeModal(qrCodeSrc) {
    const qrCodeImage = createQRCodeImage(qrCodeSrc);
    const qrCodeModal = createModal(qrCodeImage.outerHTML);
    return qrCodeModal;
  }

  function updateImage() {
    const carouselElement = document.getElementById("carousel");
    const currentImage = carouselElement.firstChild;

    currentImage.style.transition = `transform ${
      transitionDuration / 1000
    }s ease-in-out`;
    currentImage.style.transform = "translateX(-100%)";

    setTimeout(() => {
      const newImage = createImage(
        images[currentIndex],
        `Image ${currentIndex + 1}`
      );
      newImage.style.transform = "translateX(0)";

      // Remove the current image from the DOM
      carouselElement.removeChild(currentImage);

      // Add the new image to the DOM
      carouselElement.appendChild(newImage);

      // Remove the animation styles from the new image
      setTimeout(() => {
        newImage.style.transition = "";
        newImage.style.transform = "";
      }, transitionDuration);
    }, transitionDuration);
  }

  function initializePageContent() {
    const rootElement = document.getElementById("root");

    const titleElement = document.createElement("h1");
    titleElement.textContent = pageTitle;
    rootElement.appendChild(titleElement);

    const carouselElement = document.createElement("div");
    carouselElement.id = "carousel";
    carouselElement.appendChild(
      createImage(images[currentIndex], `Image ${currentIndex + 1}`)
    );
    rootElement.appendChild(carouselElement);

    const videoElement = document.createElement("div");
    videoElement.id = "video";
    const videoTitleElement = document.createElement("h2");
    videoTitleElement.textContent =
      "Take a moment to watch our engagement video and shower us with your heartfelt blessings as we embark on this beautiful journey of love ";
    videoElement.appendChild(videoTitleElement);
    videoElement.appendChild(createVideo(videoUrl));
    rootElement.appendChild(videoElement);

    const mapElement = document.createElement("div");
    mapElement.id = "map";
    const mapTitleElement = document.createElement("h2");
    mapTitleElement.textContent =
      "Please find the optimal route to the function hall by clicking the link below. We look forward to celebrating with you!";
    mapElement.appendChild(mapTitleElement);
    mapElement.appendChild(createMapIframe(googleMapEmbedCode));
    rootElement.appendChild(mapElement);

    const qrCodeElement = document.createElement("div");
    qrCodeElement.id = "giftQRCode";
    const qrCodeTitleElement = document.createElement("h2");
    qrCodeTitleElement.textContent =
      "Your blessings are our treasure! Your presence is the most cherished gift to us";
    qrCodeElement.appendChild(qrCodeTitleElement);
    qrCodeElement.appendChild(createQRCodeImage(qrCodeImage));
    rootElement.appendChild(qrCodeElement);

    document.getElementById("video").addEventListener("click", function () {
      const videoModal = createVideoModal(videoUrl);
      document.body.appendChild(videoModal);
      videoModal.style.display = "block";
    });

    document
      .getElementById("giftQRCode")
      .addEventListener("click", function () {
        const qrCodeModal = createQRCodeModal(qrCodeImage);
        document.body.appendChild(qrCodeModal);
        qrCodeModal.style.display = "block";
      });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }, holdDuration + transitionDuration);
  }

  initializePageContent();
});

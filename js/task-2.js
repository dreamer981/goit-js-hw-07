const images = [
  {
    url: "images/1.png",
    alt: "Working",
  },
  {
    url: "images/2.png",
    alt: "New Idea",
  },
  {
    url: "images/3.png",
    alt: "Develop experience",
  },
  {
    url: "images/4.png",
    alt: "Meeting",
  },
  {
    url: "images/5.png",
    alt: "Rest time",
  },
  {
    url: "images/6.png",
    alt: "Working space",
  },
];

const gallery = document.querySelector(".gallery");

const galleryMarkup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

gallery.innerHTML = galleryMarkup;

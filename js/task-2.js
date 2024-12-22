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
  
  // Gallery öğesini seç
  const gallery = document.querySelector('.gallery');
  
  // Resim öğelerini oluştur ve galeriyi doldur
  images.forEach(image => {
    // Yeni <li> öğesi oluştur
    const li = document.createElement('li');
    
    // Yeni <img> öğesi oluştur
    const img = document.createElement('img');
    img.src = image.url; // Resim URL'si
    img.alt = image.alt; // Resim alt metni
  
    // <li> öğesine <img> öğesini ekle
    li.appendChild(img);
    
    // <li> öğesini galeriye ekle
    gallery.appendChild(li);
  });
  
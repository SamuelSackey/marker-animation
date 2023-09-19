const markers = document.querySelectorAll(".marker");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const elementStyle = element.style;
      elementStyle.setProperty("--marker-opacity", "1");
      elementStyle.setProperty("--marker-width", "100%");
    }
  });
});

markers.forEach((marker) => {
  observer.observe(marker);
});

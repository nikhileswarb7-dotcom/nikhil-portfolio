import { useEffect, useState } from "react";

const images = (import.meta as any).glob("/src/assets/Photography/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}", {
  eager: true,
});

export function PhotographyFrames() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // delay for smooth section-switch animation
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`masonry-wrapper ${loaded ? "show" : ""}`}>
      <div className="masonry">
        {Object.values(images).map((img: any, index) => (
          <div key={index} className="masonry-item">
            <img src={img.default} alt="photography" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

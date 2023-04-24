// import {useState, useEffect, useRef} from "react";

// import bigcommerce from "../assets/bigcommerce.svg";
// import commerzbank from "../assets/commerzbank.svg";
// import precommit from "../assets/precommit.svg";
// import woocommerce from "../assets/woocommerce.svg";
// import precommit0 from "../assets/precommit.svg";
// import woocommerce0 from "../assets/woocommerce.svg";

// const images = [
//   bigcommerce,
//   woocommerce0,
//   precommit0,
//   commerzbank,
//   precommit,
//   woocommerce,
// ];

// export default function Scrolling() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex((activeIndex + 1) % images.length);
//     }, 2000); // adjust this value to change the interval between image transitions

//     return () => clearInterval(intervalRef.current);
//   }, [activeIndex, images.length]);

//   return (
//     <div className="flex h-16 w-full">
//       {images.map((imageUrl, index) => (
//         <div
//           key={index}
//           className={`w-full h-full transition-all duration-500 ease-in-out ${
//             activeIndex === index ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={imageUrl}
//             alt={`Image ${index + 1}`}
//             className="h-9 w-9 object-contain mx-2"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

import {useState, useEffect, useRef} from "react";
import bigcommerce from "../assets/bigcommerce.svg";
import commerzbank from "../assets/commerzbank.svg";
import precommit from "../assets/precommit.svg";
import woocommerce from "../assets/woocommerce.svg";

const images = [
  bigcommerce,
  commerzbank,
  precommit,
  woocommerce,
  bigcommerce,
  commerzbank,
  precommit,
  woocommerce,
  bigcommerce,
  commerzbank,
  precommit,
  woocommerce,
  bigcommerce,
  commerzbank,
  precommit,
  woocommerce,
];

export default function Scrolling() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setScrollX(scrollX => scrollX - 60);
    }, 2000); // adjust this value to change the interval between image transitions

    return () => clearInterval(intervalRef);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      if (scrollX < -containerWidth) {
        setScrollX(0);
      }
    }
  }, [scrollX]);

  return (
    <div className="w-full h-12 overflow-hidden relative" ref={containerRef}>
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="h-9 w-9 object-contain absolute top-0 left-0 transition-all duration-2000 ease-out"
          style={{transform: `translateX(${scrollX + index * 60}px)`}}
        />
      ))}
    </div>
  );
}

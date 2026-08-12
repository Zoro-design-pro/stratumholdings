"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  id,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Component = as;

  return (
    <Component
      id={id}
      ref={ref}
      data-visible={visible}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`on-scroll ${className}`}
    >
      {children}
    </Component>
  );
}


// "use client"
// import { useEffect, useRef, useState } from "react";

// function Reveal({
//   children,
//   as,
//   className = "",
//   delay = 0,
//   id,
// }) {
//   const Tag = as || "div";
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;

//     if (!node) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible(true);
//             observer.disconnect();
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -60px 0px",
//       }
//     );

//     observer.observe(node);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Tag
//       id={id}
//       ref={ref}
//       data-visible={visible}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`on-scroll ${className}`}
//     >
//       {children}
//     </Tag>
//   );
// }

// export default Reveal;
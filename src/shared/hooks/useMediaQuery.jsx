// 화면 크기 감지해서 반응형 디자인

// import { useState, useEffect } from "react";

// export const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(query);
//     setMatches(mediaQuery.matches);

//     const handler = (e) => setMatches(e.matches);
//     mediaQuery.addEventListener("change", handler);

//     return () => mediaQuery.removeEventListener("change", handler);
//   }, [query]);

//   return matches;
// };

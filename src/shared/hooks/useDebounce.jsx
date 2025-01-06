//입력값 변경될 때마다 호출 지연시키는 Hook (검색 기능 최적화)

// import { useState, useEffect } from "react";

// export const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => clearTimeout(handler);
//   }, [value, delay]);

//   return debouncedValue;
// };

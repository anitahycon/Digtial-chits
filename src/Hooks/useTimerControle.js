// import { useEffect, useState } from "react";

// const useTimerValidate = (val) => {
//     const [countDown, setCountDown] = useState(60 * val);
//     const [runTimer, setRunTimer] = useState(true);
//     const seconds = String(countDown % 60).padStart(2, 0);
//     const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

//     // useEffect(() => {
//     //   let timerId;
//     //   if (runTimer) {
//     //     timerId = setInterval(() => {
//     //       setCountDown((countDown) => countDown - 1);
//     //     }, 1000);
//     //   } else {
//     //     clearInterval(timerId);
//     //   }
//     //   return () => clearInterval(timerId);
//     // }, [runTimer]);

//     const timerHandler = ()=>{
//       let timerId;
//       if (runTimer) {
//         timerId = setInterval(() => {
//           setCountDown((countDown) => countDown - 1);
//         }, 1000);
//       } else {
//         clearInterval(timerId);
//         setRunTimer(false)
//       }
//       return runTimer
//       // return () => clearInterval(timerId);
//     }
    
//     useEffect(() => {
//       if (countDown < 0 && timerHandler) {
//         console.log("expired");
//         setRunTimer(false);
//         setCountDown(0);
//       }
//     }, [countDown, runTimer, minutes, seconds]);
//     return minutes , seconds ,runTimer
// };
// export default useTimerValidate;

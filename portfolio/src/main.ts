// import '../styles/style.css';

// let curX: number = 0;
// let curY: number = 0;
// let tgX: number = 0;
// let tgY: number = 0;


// document.addEventListener('DOMContentLoaded', () => {
//   const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
//   const footer = document.querySelector<HTMLDivElement>('.gradient-bg')!;
  
//   window.addEventListener('mousemove', (event: MouseEvent) => {
//     if (isCursorInsideFooter(event)) {
//       tgX = event.clientX;
//       tgY = event.clientY;
//     }
//   });

//   window.addEventListener('touchmove', (event: TouchEvent) => {
//     if (isCursorInsideFooter(event.touches[0])) {
//       tgX = event.touches[0].clientX;
//       tgY = event.touches[0].clientY;
//     }
//   });
//   function move(): void {
//     curX += (tgX - curX) / 20;
//     curY += (tgY - curY) / 20;
//     interBubble.style.transform = `translate(${Math.round(curX)-470}px, ${Math.round(curY)-400}px)`;
//     requestAnimationFrame(() => {
//       move();
//     });
//   }
  

//   function isCursorInsideFooter(event: MouseEvent | Touch): boolean {
//     const footerRect = footer.getBoundingClientRect();
//     return (
//       event.clientX >= footerRect.left &&
//       event.clientX <= footerRect.right &&
//       event.clientY >= footerRect.top &&
//       event.clientY <= footerRect.bottom
//     );
//   }

//   move();
// }); 

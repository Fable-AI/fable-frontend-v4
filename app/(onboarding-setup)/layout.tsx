// "use client";
// import React from 'react';

// export default function DashboardLayout({
//     children, // will be a page or nested layout
// }: {
//     children: React.ReactNode
// }) {

//     return (
//         <div>
//             {children}
//         </div>
//     )
// }

// // app/custom-page/layout.js
// export default function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//     return (
//       <html>
//         <body>
//           <main>{children}</main>
//           {/* Your custom footer or no footer */}
//         </body>
//       </html>
//     );
//   }
  
//   // Important: This tells Next.js not to use the root layout
//   export const metadata = {
//     // Your metadata
//   };
  
//   // This is the key property to prevent inheriting the root layout
//   export const dynamic = 'force-static';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
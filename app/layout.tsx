// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "./provider";
// import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Chatter Application",
//   description: "A dynamic and innovative platform designed to cater to the needs of traditional bookworms and modern content creators alike.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider
//       appearance={{
//         baseTheme: dark,
//         variables: { 
//           colorPrimary: "#3371FF", fontSize: '16px' , }
        
       
//       }}
    
//     >
//       <html lang="en">
//         <body className={inter.className}>
//           <ThemeProvider
//               attribute="class"
//               defaultTheme="dark"
//               enableSystem
//               disableTransitionOnChange
//             >
//               {children}
              
//           </ThemeProvider>
          
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }





import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatter Application",
  description: "A dynamic and innovative platform designed to cater to the needs of traditional bookworms and modern content creators alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371FF",
          fontSize: "16px",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          
        </body>
      </html>
    </ClerkProvider>
  );
}

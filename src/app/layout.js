import Header from "./components/Header";
import { sora } from "./fonts";
import "@/app/styles/global.css";

export const metadata = {
  title: "Wajid | Web 3.0 Developer",
  description:
    "Welcome to my personal website, where I showcase my passion for Web 3.0 development. Explore my projects, learn more about my skills, and discover what drives me in the world of web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

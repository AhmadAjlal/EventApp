import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import {aboutMePageData, pages} from "@/app/data/data"

export default function RootLayout(
    {children,}: { children: React.ReactNode; }
) {
    return (
        <html lang="en">
        <body>
        <Header data={aboutMePageData} pages={pages}/>
        {children}
        <div className="bg-blue-500 text-white p-4">
            This is a blue box with white text.
        </div>

        <Footer/>
        </body>
        </html>
    );
}
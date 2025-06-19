import Header from '../layouts/HomeHeader';
import Footer from "../layouts/HomeFooter";
import Background from "../assets/photos/bg2.png";
import TopImage from "../assets/photos/about.png";

function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex justify-center bg-gray-100">
        <img src={TopImage} alt="Top section" />
      </div>
        <div className="flex justify-center items-center pt-10 backdrop-blur-md">
          <div className="max-w-2xl p-6 bg-white bg-opacity-50">
            <p className="text-center text-lg text-black-700">
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

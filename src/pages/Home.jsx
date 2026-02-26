import Image from "../components/common/Image";
 import banner from '../assets/banner.jpg'
const Home = () => {
  return (
    <section className="flex justify-center items-center  font-bold text-5xl h-[100vh]">

        <Image imgSrc={banner} altSrc={banner} />

    </section>
  );
};

export default Home;

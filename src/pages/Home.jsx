import Image from "../components/common/Image";
 import programming from '../assets/programing.jpg'
const Home = () => {
  return (
    <section className="flex justify-center items-center h font-bold text-5xl">

        <Image imgSrc={programming} altSrc={programming}/>

    </section>
  );
};

export default Home;

import Navigation from "../components/Navigation";
import HeroSection from '../components/HeroSection'
import BrandInfo from '../components/BrandInfo'
import ProductShop from '../components/ProductShop'
import ProductInfo from '../components/ProductInfo'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#000000] overflow-x-hidden'>
      <Navigation />
      <HeroSection />
      <BrandInfo />
      <ProductShop />
      <ProductInfo />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home

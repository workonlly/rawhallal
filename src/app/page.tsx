import supabase from "../../supabase";

export async function generateMetadata() {


  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 111) 
    .eq('table','home')
    .single();


  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Raw Halal Chicken - Fresh & Halal Products',
    description: data?.metadata || 'Fresh chicken and products from Raw Halal Chicken.',
    keywords: Array.isArray(data?.metakeywords) ? data.metakeywords : ['raw', 'chicken', 'fresh', 'halal'],
    authorName: 'Raw Halal Chicken',
    imageUrl: '/fdrd-removebg-preview-modified.png',
    altImageUrl: '/fdrd-removebg-preview-modified.png',
  };

  return {
    // --- Basic SEO Metadata ---
    title: product.name,
    description: product.description,
    keywords: product.keywords,
    publisher: 'Raw Halal Chicken',
    
    // --- Canonical URL and Alternates ---
    alternates: {
      canonical: `https://www.rawhalalchicken.com/products/${product.id}`,
    },

    // --- Open Graph (for Facebook, LinkedIn, etc.) ---
    openGraph: {
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      url: `https://www.rawhalalchicken.com/products/${product.id}`,
      siteName: 'Raw Halal Chicken',
      images: [
        {
          url: product.imageUrl,
          width: 1200,
          height: 630,
          alt: `An image of ${product.name}`,
        },
        {
          url: product.altImageUrl,
          width: 800,
          height: 600,
          alt: `A different view of ${product.name}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },

    // --- Twitter Card ---
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      creator: '@YourTwitterHandle',
      images: [product.imageUrl],
    },
    
    // --- Icons and Manifest ---
    icons: {
      icon: '/fdrd-removebg-preview-modified.png',
      shortcut: '/fdrd-removebg-preview-modified.png',
      apple: '/fdrd-removebg-preview-modified.png',
    },
    manifest: '/site.webmanifest',
  };
}

import Home from "./pag";
import MobileMenu from "./components/MobileMenu";

export default async function PageContent() {
  // Get the specific row by ID only
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 111) 
    .single();

  const pageHeading = data?.heading || 'Fresh and halal chicken products';

  return (
    <div className='relative h-screen w-screen'>
      {/* Mobile Menu */}
      <MobileMenu />
      
      <div className='animated-bg h-screen w-screen relative p-1'>
        {/* black background screen here */}
        <div className='bg-black h-full w-full rounded-md relative flex flex-col lg:flex-row items-center p-1'>
          {/* 2 column working start */}
          {/* 1st div - Desktop Sidebar (hidden on mobile) */}
          <div className="hidden lg:block w-full lg:w-[15%] h-full border-2 border-[#14213d] backdrop-blur-md rounded-md lg:mr-1"> {/*main div */} 
            <div className="w-[100%] h-full rounded-sm p-[5px] flex flex-col gap-3 backdrop-blur-md overflow-y-auto"> {/*alining div */}
            <div className="animated-bg h-[10vh] p-[5vh] flex flex-col justify-center items-center font-bold rounded-xl text-white  ">Raw  Chicken </div>
              <div className="flex flex-col gap-2">
                <a href="/"><div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center  pl-5 rounded-r-xl  font-semibold hover:shadow-xl">🏠Home</div></a>                
                <a href="/chicken"><div className="hover:bg-[#00b4d8] text-white h-[10vh] bg-white/10 backdrop-blur-md shadow-xl  flex flex-col justify-center  font-semibold ml-5 " > 🍗Chicken</div></a>
                <a href="/fish"><div className="hover:bg-[#00b4d8] text-white h-[10vh] bg-white/10 backdrop-blur-md shadow-xl  flex flex-col justify-center font-semibold ml-5 " > 🐟Raw fresh fish</div></a>
                <a href="/mutton"><div className="hover:bg-[#00b4d8] text-white h-[10vh] bg-white/10 backdrop-blur-md shadow-xl  flex flex-col justify-center font-semibold text-[15px] ml-5 " > 🐐Raw fresh mutton</div></a>
                <a href="/contact"><div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl">🤝  Contact us</div></a>
                <a href="/bhiryani"><div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl"   >🤝  Bhiryani</div></a>
                <a href="/aboutus"><div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl">ABOUT US</div></a>
                <a href="/privacypolicy"><div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl">PRIVACY POLICY</div></a>
                <a href="/termsandconditions"><div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl">TERMS & CONDITIONS</div></a>
              </div>
            </div>
          </div> 
          {/* 1st div end */}
          {/* 2nd div - Main Content Area (full width on mobile) */}
          <div className="w-full lg:w-[90%] h-full pb-1 backdrop-blur-md rounded-sm relative">  
            {/* main logo area */}
            <div className="flex flex-row justify-center items-center h-15 pt-4 lg:pt-0">
              <a href="/"><img src="/fdrd-removebg-preview-modified.png" alt="Raw Halal Chicken Logo" className="absolute w-[50px] h-[50px] rounded-tl-lg rounded-br-lg bg-white left-2 top-2 box lg:left-2 lg:top-2" /></a>
              <p className='text-white text-lg lg:text-2xl font-bold text-center px-16 lg:px-0'>{pageHeading}</p>
            </div>
            {/* main logo area end */}
            <div className="h-[2px]  animated-bg absolute w-[93%]  right-0"></div>
           
    
             {/* working area */}
              <Home/>

             {/* working area end */}
          
         
          </div>
          {/* 2nd div end */}
          {/* 2 cloumn working here end */}
        </div>
        {/* black screen end here */}
      </div>
     
    </div>
  );
} 
import React, { useState } from "react";
import { Breadcrumb } from "../../shared/Breadcrumb";
import { CiSearch } from "react-icons/ci";
import { Wrapper } from "../../shared/Wrapper";

const AboutUs = () => {
  const collectionBreadCrumb = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/AboutUs",
      title: "Career",
    },
  ];
  const [activeTab, setActiveTab] = useState("Our Vision");
  const tabs = [
    "Our Vision",
    "Our Goal",
    "Our Achievements",
    "Our Team",
    "More About Horecastore",
  ];
  return (
    <>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-[10px]"} />
      </Wrapper>
      <div className="flex mt-[10px] text-[32px] font-bold text-white h-[160px] sm:h-[500px] w-full bg-[#186737]">
        {/* <img
          className="absolute h-[160px] sm:h-[500px] w-full object-cover"
          src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
        /> */}
        <div className="relative p-[10px] sm:p-20 w-[100%]">
          <p className="text-[20px] ml-0 sm:ml-[3%] text-center sm:text-left sm:text-[54px] leading:[10px] sm:leading-[63.34px] w-full sm:w-[50vw]">
            Our global reach is your playground.
          </p>
          <p className="hidden sm:block text-[12px] sm:text-[16px] ml-0  sm:ml-[3%] text-center sm:text-left sm:text-start w-[100%] sm:w-[914px] font-normal leading-[22px] text-white mt-[0px] sm:mt-[20px]">
            At Sell at HORECA, we specialize in helping businesses sell more by
            acting fast while minimizing risk. Our solutions are tailored to the
            hospitality industry's needs, ensuring success and profitability.
          </p>
          <p className="block sm:hidden text-[12px] sm:text-[16px] ml-0  sm:ml-[3%] text-center sm:text-left sm:text-start w-[100%] sm:w-[914px] font-normal leading-[22px] text-white mt-[0px] sm:mt-[20px]">
            At Sell at HORECA, we specialize in helping businesses sell more by
            acting fast while minimizing risk.
          </p>
          <div className="flex items-center justify-center sm:justify-start mt-[10px]">
            <button className="w-[150px] text-center ml-[3%] sm:w-[204px] text-[#186737] h-[32px] sm:h-[40px] sm:h-[60px] bg-[#EDF1F6] text-[12px] sm:text-[16px] mt-[10px] sm:mt-[30px] rounded font-semibold">
              Join Marketplace
            </button>
          </div>
        </div>
      </div>
      <nav className="w-full bg-[#E2E8F0] text-[16px]">
        <ul className="flex justify-center pt-[20px] text-[16px] items-center space-x-6 border-b border-gray-300 px-4">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`relative pb-[20px] text-sm cursor-pointer ${
                activeTab === tab
                  ? "text-black font-semibold text-[16px]"
                  : "text-[#030303] hover:text-gray-700 text-[16px]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 text-[16px] left-0 w-full h-[2px] bg-green-600"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Wrapper>
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-[40px] leading-[46.92px] font-semibold">
              Our Vision for the Future
            </h1>
            <p className="font-[20px] mt-[20px] font-normal leading-[34px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin. Volutpat viverra tincidunt arcu odio.
              Imperdiet fermentum at massa nec. Condimentum imperdiet orci id
              vulputate in. Eget dictum in faucibus euismod semper facilisi
              massa. Elit at nascetur fermentum tellus tellus nec. Aliquam
              <br />
              <br />
              auctor metus arcu vitae tempor nibh varius sit vitae. Eu porttitor
              integer elit ac duis tellus nec. Viverra sed eu sollicitudin
              pharetra ultrices rhoncus odio faucibus scelerisque. Ut massa
              egestas integer in. Nibh velit consequat ultricies ultrices. Leo
              mattis auctor laoreet est laoreet mus varius consectetur quis.
              Integer mollis ultrices tellus euismod eros curabitur ut feugiat
              morbi.
            </p>
          </div>
          <div className="flex-1 h-[500px] m-[20px]">
            <img
              className="absolute h-[160px]  rounded-md m-[20px] sm:h-[500px] w-[40vw] object-cover"
              src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-[60px]">
          <h1 className="text-[18px] sm:text-[30px] font-semibold leading-[21px] sm:leading-[35px] text-center">
            Why Chefs Choose Horecastore?
          </h1>
          <p className="text-[12px] sm:text-[16px] font-normal mt-[5px] sm:mt-[20px] mb-[20px] leading-[18px] sm:leading-[30px] text-[#64748B] w-[100%] sm:w-[60%] text-center">
            Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis sed
            tellus et sollicitudin. Volutpat viverra tincidunt arcu odio.
            Imperdiet fermentum at massa nec.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-[0px] sm:mb-[30px] p-[15px]">
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
          <div className="bg-[#F9FAFC] p-4 border-2 border-[#E2E8F0] rounded w-[360px] h-[250px]">
            <img
              className="w-[50px] h-[50px] rounded-full border border-[#186737] p-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <h3 className="text-[24px] lading-[28px] font-normal text-[#186737] mt-[10px]">
              Fastest Delivery
            </h3>
            <p className="mt-[10px] text-[20px] font-light leading-[30px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className="flex items-center justify-center bg-[green] mt-[40px] mb-[40px] h-[300px] text-[54px]  leading-[73px]">
        <h1 className="w-[1392px] font-semibold text-[white] text-center">
          Everything you need in one B2B integrated platform. It's easier with
          Horecastore
        </h1>
      </div>
      <Wrapper>
        <div className="flex items-center">
          <div className="flex-1 h-[500px]">
            <img
              className="absolute h-[160px] rounded-md sm:h-[500px] w-[40vw] object-cover"
              src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <div className="flex-1 m-[20px]">
            <h1 className="text-[40px] ml-[20px] leading-[46.92px] font-semibold">
              Our Vision for the Future
            </h1>
            <p className="font-[20px] mt-[20px] ml-[20px] font-normal leading-[34px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin. Volutpat viverra tincidunt arcu odio.
              Imperdiet fermentum at massa nec. Condimentum imperdiet orci id
              vulputate in. Eget dictum in faucibus euismod semper facilisi
              massa. Elit at nascetur fermentum tellus tellus nec. Aliquam
              <br />
              <br />
              auctor metus arcu vitae tempor nibh varius sit vitae. Eu porttitor
              integer elit ac duis tellus nec. Viverra sed eu sollicitudin
              pharetra ultrices rhoncus odio faucibus scelerisque. Ut massa
              egestas integer in. Nibh velit consequat ultricies ultrices. Leo
              mattis auctor laoreet est laoreet mus varius consectetur quis.
              Integer mollis ultrices tellus euismod eros curabitur ut feugiat
              morbi.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-[40px] leading-[46.92px] font-semibold">
              Our Vision for the Future
            </h1>
            <p className="font-[20px] mt-[20px] font-normal leading-[34px] text-[#64748B]">
              Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis
              sed tellus et sollicitudin. Volutpat viverra tincidunt arcu odio.
              Imperdiet fermentum at massa nec. Condimentum imperdiet orci id
              vulputate in. Eget dictum in faucibus euismod semper facilisi
              massa. Elit at nascetur fermentum tellus tellus nec. Aliquam
              <br />
              <br />
              auctor metus arcu vitae tempor nibh varius sit vitae. Eu porttitor
              integer elit ac duis tellus nec. Viverra sed eu sollicitudin
              pharetra ultrices rhoncus odio faucibus scelerisque. Ut massa
              egestas integer in. Nibh velit consequat ultricies ultrices. Leo
              mattis auctor laoreet est laoreet mus varius consectetur quis.
              Integer mollis ultrices tellus euismod eros curabitur ut feugiat
              morbi.
            </p>
          </div>
          <div className="flex-1 h-[500px] m-[20px]">
            <img
              className="absolute h-[160px] rounded-md m-[20px] sm:h-[500px] w-[40vw] object-cover"
              src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </Wrapper>
      <div className="flex items-center justify-center bg-[green] mt-[40px] mb-[40px] h-[300px] text-[54px]  leading-[73px]">
        <h1 className="w-[1392px] font-semibold text-[white] text-center">
          Everything you need in one B2B integrated platform. It's easier with
          Horecastore
        </h1>
      </div>
      <div className="flex flex-col mb-[40px] items-center justify-center text-center mt-[60px]">
        <h1 className="text-[18px] sm:text-[30px] font-semibold leading-[21px] sm:leading-[35px] text-center">
          Helping Restaurants Do More
        </h1>
        <p className="text-[12px] sm:text-[16px] font-normal mt-[5px] sm:mt-[20px] mb-[20px] leading-[18px] sm:leading-[30px] text-[#64748B] w-[100%] sm:w-[60%] text-center">
          Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis sed
          tellus et sollicitudin. Volutpat viverra tincidunt arcu odio.
          Imperdiet fermentum at massa nec.
        </p>
      </div>
      {/* Testimonials */}
      <div className="flex overflow-x-auto whitespace-nowrap p-4">
        <div className="flex flex-shrink-0 border-2 rounded-lg w-[1070px] m-[10px] h-[600px] shadow-lg">
          <div className="flex flex-col justify-center w-[60%] px-8 py-6">
            <p className="text-[30px] font-medium leading-[44px] font-sans text-[#000000] mb-6 whitespace-normal">
              “With Square, we’ve gone through an evolution. We started with the
              original Square Stand. Every time a new product comes out, it’s
              great because we get to test out better software or better
              hardware.”
            </p>
            <div>
              <img
                src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="TGI Fridays Logo"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="ml-0 font-bold text-black text-lg">Randy Curtis</p>
              <p className="ml-0 text-[black] text-md">
                CEO, Thanks Goodness Its Fridays
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="TGI Fridays Building"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 border-2 rounded-lg w-[1070px] m-[10px] h-[600px] shadow-lg">
          <div className="flex flex-col justify-center w-[60%] px-8 py-6">
            <p className="text-[30px] font-medium leading-[44px] font-sans text-[#000000] mb-6 whitespace-normal">
              “With Square, we’ve gone through an evolution. We started with the
              original Square Stand. Every time a new product comes out, it’s
              great because we get to test out better software or better
              hardware.”
            </p>
            <div>
              <img
                src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="TGI Fridays Logo"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="ml-0 font-bold text-black text-lg">Randy Curtis</p>
              <p className="ml-0 text-[black] text-md">
                CEO, Thanks Goodness Its Fridays
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="TGI Fridays Building"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 border-2 rounded-lg w-[1070px] m-[10px] h-[600px] shadow-lg">
          <div className="flex flex-col justify-center w-[60%] px-8 py-6">
            <p className="text-[30px] font-medium leading-[44px] font-sans text-[#000000] mb-6 whitespace-normal">
              “With Square, we’ve gone through an evolution. We started with the
              original Square Stand. Every time a new product comes out, it’s
              great because we get to test out better software or better
              hardware.”
            </p>
            <div>
              <img
                src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="TGI Fridays Logo"
                className="w-[80px] h-[80px] object-cover rounded-r-lg"
              />
              <p className="ml-0 font-bold text-black text-lg">Randy Curtis</p>
              <p className="ml-0 text-[black] text-md">
                CEO, Thanks Goodness Its Fridays
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="TGI Fridays Building"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </div>
      {/* End Testimonials */}

      {/* featured  image*/}
      <div className="flex mt-[40px] items-center justify-center h-[445px] bg-[#E2E8F04D]">
        <img src={`${process.env.PUBLIC_URL}/icons/featureImage.png`} />
      </div>
      {/* Social Section */}
      <Wrapper>
        <div className="flex flex-col mb-[40px] items-center justify-center text-center mt-[60px]">
          <h1 className="text-[18px] sm:text-[30px] font-semibold leading-[21px] sm:leading-[35px] text-center">
            Let's Get Social
          </h1>
          <p className="text-[12px] sm:text-[16px] font-normal mt-[5px] sm:mt-[20px] mb-[20px] leading-[18px] sm:leading-[30px] text-[#64748B] w-[100%] sm:w-[60%] text-center">
            Lorem ipsum dolor sit amet consectetur. Enim felis enim iaculis sed
            tellus et sollicitudin. Volutpat viverra tincidunt arcu odio.
            Imperdiet fermentum at massa nec.
          </p>
          <div className="flex">
            <img
              className="ml-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <img
              className="ml-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <img
              className="ml-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <img
              className="ml-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
            <img
              className="ml-[10px]"
              src={`${process.env.PUBLIC_URL}/icons/truck.png`}
            />
          </div>
        </div>
        <div className="grid mb-10 grid-cols-6 gap-4">
          <div className="h-[245px] w-[245px] bg-[red] rounded-md">
            <img
              className="w-[245px] h-[245px] rounded-md object-cover"
              src={`${process.env.PUBLIC_URL}/images/featureShop/feature-1.png`}
            />
          </div>
          <div className="h-[245px] w-[245px] bg-[red] rounded-md">
            <img
              className="w-[245px] h-[245px] rounded-md object-cover"
              src={`${process.env.PUBLIC_URL}/images/featureShop/feature-1.png`}
            />
          </div>
          <div className="h-[245px] w-[245px] bg-[red] rounded-md">
            <img
              className="w-[245px] h-[245px] rounded-md object-cover"
              src={`${process.env.PUBLIC_URL}/images/featureShop/feature-1.png`}
            />
          </div>
          <div className="h-[245px] w-[245px] bg-[red] rounded-md">
            <img
              className="w-[245px] h-[245px] rounded-md object-cover"
              src={`${process.env.PUBLIC_URL}/images/featureShop/feature-1.png`}
            />
          </div>
          <div className="h-[245px] w-[245px] bg-[red] rounded-md">
            <img
              className="w-[245px] h-[245px] rounded-md object-cover"
              src={`${process.env.PUBLIC_URL}/images/featureShop/feature-1.png`}
            />
          </div>
          <div className="h-[245px] w-[245px] bg-[red] rounded-md">
            <img
              className="w-[245px] h-[245px] rounded-md object-cover"
              src={`${process.env.PUBLIC_URL}/images/featureShop/feature-1.png`}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AboutUs;

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const services = [
    {
      image: "/images/shipping.svg",
      title: "Free Shipping",
      paragraph: "Order above $200",
    },
    {
      image: "/images/finance.svg",
      title: "Money-back",
      paragraph: "30 days guarantee",
    },
    {
      image: "/images/lock.svg",
      title: "Secure Payments",
      paragraph: "Secured by Stripe",
    },
    {
      image: "/images/call.svg",
      title: "24/7 Support",
      paragraph: "Phone and Email support",
    },
  ];

  return (
    <>
      <section className="px-8 lg:px-14">
        <Swiper
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (_, className) {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Pagination, Navigation]}
          autoHeight={true}
          className="relative"
        >
          <SwiperSlide>
            <img
              src="/images/hero.png"
              className="max-h-[536px] w-full"
              alt="hero"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hero.png"
              className="max-h-[536px] w-full"
              alt="hero"
            />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
          <div className="hidden md:block">
            <div className="swiper-button image-swiper-button-next">
              <img
                style={{
                  height: "32px",
                  width: "32px",
                }}
                src={"/images/arrow-right-carousel.svg"}
                alt="arrow right"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="swiper-button image-swiper-button-prev">
              <img
                style={{
                  height: "32px",
                  width: "32px",
                }}
                src={"/images/arrow-left-carousel.svg"}
                alt="arrow right"
              />
            </div>
          </div>
        </Swiper>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            style={{
              backgroundImage: "url(/images/category-one.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[377px] md:max-h-[664px] md:h-[664px] w-full bg-primary"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]">
                Living Room
              </h2>
              <a className="flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit">
                <p className="text-app-black font-inter text-sm font-medium leading-[24px]">
                  Shop Now
                </p>
                <img
                  src="/images/arrow-right-carousel.svg"
                  alt="arrow right"
                  className="h-[18px] w-[18px]"
                />
              </a>
            </div>
          </div>
          <div className="grid md:grid-rows-2 gap-4">
            <div className="w-full bg-primary grid grid-cols-2">
              <div className="py-[42px] pl-8 flex flex-col justify-end">
                <h2 className="text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]">
                  Living Room
                </h2>
                <a className="flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit">
                  <p className="text-app-black font-inter text-sm font-medium leading-[24px]">
                    Shop Now
                  </p>
                  <img
                    src="/images/arrow-right-carousel.svg"
                    alt="arrow right"
                    className="h-[18px] w-[18px]"
                  />
                </a>
              </div>

              <img
                src="/images/category-one.png"
                alt=""
                className="object-cover w-full h-full md:max-h-[319px]"
              />
            </div>

            <div className="w-full bg-primary grid grid-cols-2">
              <div className="py-[42px] pl-8 flex flex-col justify-end">
                <h2 className="text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]">
                  Living Room
                </h2>
                <a className="flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit">
                  <p className="text-app-black font-inter text-sm font-medium leading-[24px]">
                    Shop Now
                  </p>
                  <img
                    src="/images/arrow-right-carousel.svg"
                    alt="arrow right"
                    className="h-[18px] w-[18px]"
                  />
                </a>
              </div>

              <img
                src="/images/category-one.png"
                alt=""
                className="object-cover w-full h-full md:max-h-[319px]"
              />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <div className="">
            <h3 className="text-black font-poppins text-[26px]/[30px] font-medium tracking-[-0.4px]">
              Available Shopping Sites
            </h3>
            <p className="text-[18px] mt-2">
              Below are some websites where Buyee can bid and purchase on your
              behalf.
            </p>
            {/* <a className="hidden md:flex gap-1 items-center cursor-pointer mt-3">
              <p className="text-app-black font-inter text-base/[28px] font-medium">
                More Products
              </p>
              <img
                src="/images/arrow-right-carousel.svg"
                alt="arrow right"
                className="h-[20px] w-[20px]"
              />
            </a> */}
          </div>
          <div className="pt-12 pb-8">
            <div className="mb-6 flex min-h-[50px] items-centers">
              <img
                src="https://cdn.buyee.jp/images/common/logo_jdiauction.png"
                className="h-[25px]"
                alt="store logo"
              />
              <p className="ps-5">
                JDirectItems Auction is the most popular auction site in Japan.
                Most sellers only speak Japanese, but if you buy through Buyee,
                we will bid on your behalf and ship the item to you.
              </p>
            </div>

            <div className="flex gap-x-3">
              {Array.from({ length: 6 }, (_, idx) => (
                <div key={idx} className="cursor-pointer">
                  <div className="w-full">
                    <img
                      src="/images/product-one.png"
                      className="w-[210px] h-[210px] min-h-[210px] object-cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="mb-2 text-app-black font-inter text-base/[26px] font-medium">
                      Loveseat Sofa
                    </h3>
                    <div className="flex gap-3.5 items-center">
                      <p className="text-app-black font-inter text-sm/[22px] font-semibold">
                        <span className="text-[14px]">$</span>
                        <span className="font-bold text-[22px]">199.00</span>
                      </p>
                      <p className="line-through text-app-gray font-inter text-[12px]/[14px] font-semibold">
                        $400.00
                      </p>
                    </div>
                    <div>
                      <div className="bg-red-500 inline-block text-white px-2 mt-2">
                        Sale
                      </div>
                      <span className="ml-2 font-bold text-red-500">-51%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to={"shop/JDirectItemsAuction"}>
              <div className="flex justify-end gap-1 items-center cursor-pointer mt-8">
                <p className="text-app-black font-inter text-base/[28px] font-medium">
                  More Products
                </p>
                <img
                  src="/images/arrow-right-carousel.svg"
                  alt="arrow right"
                  className="h-[20px] w-[20px]"
                />
              </div>
            </Link>
          </div>
          <div className="pt-12 pb-8">
            <div className="mb-6 flex min-h-[50px] items-centers">
              <img
                src="https://cdn.buyee.jp/images/common/logo_mercari.png"
                className="h-[25px]"
                alt="store logo"
              />
              <p className="ps-5">
                Shop from the largest second-hand marketplace Mercari! Find
                everything from the latest fashions to rare finds!
              </p>
            </div>

            <div className="flex gap-x-3">
              {Array.from({ length: 6 }, (_, idx) => (
                <div key={idx} className="cursor-pointer">
                  <div className="w-full">
                    <img
                      src="/images/product-one.png"
                      className="w-[210px] h-[210px] min-h-[210px] object-cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="mb-2 text-app-black font-inter text-base/[26px] font-medium">
                      Loveseat Sofa
                    </h3>
                    <div className="flex gap-3.5 items-center">
                      <p className="text-app-black font-inter text-sm/[22px] font-semibold">
                        <span className="text-[14px]">$</span>
                        <span className="font-bold text-[22px]">199.00</span>
                      </p>
                      <p className="line-through text-app-gray font-inter text-[12px]/[14px] font-semibold">
                        $400.00
                      </p>
                    </div>
                    <div>
                      <div className="bg-red-500 inline-block text-white px-2 mt-2">
                        Sale
                      </div>
                      <span className="ml-2 font-bold text-red-500">-51%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to={"shop/JDirectItemsAuction"}>
              <div className="flex justify-end gap-1 items-center cursor-pointer mt-8">
                <p className="text-app-black font-inter text-base/[28px] font-medium">
                  More Products
                </p>
                <img
                  src="/images/arrow-right-carousel.svg"
                  alt="arrow right"
                  className="h-[20px] w-[20px]"
                />
              </div>
            </Link>
          </div>
          <div className="pt-12 pb-8">
            <div className="mb-6 flex min-h-[50px] items-centers">
              <img
                src="https://cdn.buyee.jp/images/common/logo_jdishopping.png"
                className="h-[25px]"
                alt="store logo"
              />
              <p className="ps-5">
                The shopping mall is powered by LY Corporation, one of the
                largest portals in Japan.
              </p>
            </div>

            <div className="flex gap-x-3">
              {Array.from({ length: 6 }, (_, idx) => (
                <div key={idx} className="cursor-pointer">
                  <div className="w-full">
                    <img
                      src="/images/product-one.png"
                      className="w-[210px] h-[210px] min-h-[210px] object-cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="mb-2 text-app-black font-inter text-base/[26px] font-medium">
                      Loveseat Sofa
                    </h3>
                    <div className="flex gap-3.5 items-center">
                      <p className="text-app-black font-inter text-sm/[22px] font-semibold">
                        <span className="text-[14px]">$</span>
                        <span className="font-bold text-[22px]">199.00</span>
                      </p>
                      <p className="line-through text-app-gray font-inter text-[12px]/[14px] font-semibold">
                        $400.00
                      </p>
                    </div>
                    <div>
                      <div className="bg-red-500 inline-block text-white px-2 mt-2">
                        Sale
                      </div>
                      <span className="ml-2 font-bold text-red-500">-51%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to={"shop/JDirectItemsAuction"}>
              <div className="flex justify-end gap-1 items-center cursor-pointer mt-8">
                <p className="text-app-black font-inter text-base/[28px] font-medium">
                  More Products
                </p>
                <img
                  src="/images/arrow-right-carousel.svg"
                  alt="arrow right"
                  className="h-[20px] w-[20px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-14 py-10 md:py-20">
        <h3 className="text-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px]">
          Best Seller
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 py-6 md:py-12">
          {Array.from({ length: 8 }, (_, idx) => (
            <div key={idx}>
              <div
                style={{
                  background: "url(/images/product-one.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="bg-primary min-w-[262px] h-[308px] md:h-[349px] p-4 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="px-3 py-1 bg-white rounded">
                      <p className="text-app-black font-inter text-base font-bold uppercase">
                        New
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-app-green rounded mt-2">
                      <p className="text-white font-inter text-base font-bold uppercase">
                        -50%
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-1.5 rounded-3xl h-8 w-8 shadow-wishlist-icon">
                    <img
                      src="/images/wishlist.svg"
                      alt="whishlist"
                      className="h-5 w-5"
                    />
                  </div>
                </div>
                <button className="text-white text-center font-inter text-base font-medium leading-[28px] tracking-[-0.4px] bg-app-black rounded-lg w-full px-10 py-[10px]">
                  Add to cart
                </button>
              </div>
              <div className="mt-3">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <img
                      key={idx}
                      src="/images/star-icon.svg"
                      alt="star icon"
                    />
                  ))}
                </div>
                <h3 className="mb-2 text-app-black font-inter text-base/[26px] font-medium">
                  Loveseat Sofa
                </h3>
                <div className="flex gap-3.5 items-center">
                  <p className="text-app-black font-inter text-sm/[22px] font-semibold">
                    $199.00
                  </p>
                  <p className="text-app-gray font-inter text-sm/[22px] font-semibold">
                    $400.00
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

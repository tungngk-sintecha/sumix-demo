import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <section className="">
        {/* <Swiper
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
        </Swiper> */}

        {/* <div className="grid md:grid-cols-2 gap-6">
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
              <img
                src="https://cdn.buyee.jp/images/common/logo_jdiauction.png"
                className="h-[25px]"
                alt="store logo"
              />
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
              <div className="py-[42px] pl-8">
                <img
                  src="https://cdn.buyee.jp/images/common/logo_jdishopping.png"
                  className="h-[25px]"
                  alt="store logo"
                />
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
              <div className="py-[42px] pl-8">
                <img
                  src="https://cdn.buyee.jp/images/common/logo_mercari.png"
                  className="h-[25px]"
                  alt="store logo"
                />
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
        </div> */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen flex flex-col items-center border justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 pixel-font leading-tight text-center">
            <span className="inline text-white">
              <span className="char-stagger" style={{ animationDelay: "0s" }}>
                F
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.05s" }}
              >
                r
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.1s" }}>
                o
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.15s" }}
              >
                m
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.2s" }}>
                &nbsp;
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.25s" }}
              >
                J
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.3s" }}>
                a
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.35s" }}
              >
                p
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.4s" }}>
                a
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.45s" }}
              >
                n
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.5s" }}>
                &nbsp;
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.55s" }}
              >
                t
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.6s" }}>
                o
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.65s" }}
              >
                &nbsp;
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.7s" }}>
                t
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.75s" }}
              >
                h
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.8s" }}>
                e
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.85s" }}
              >
                &nbsp;
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.9s" }}>
                W
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.95s" }}
              >
                o
              </span>
              <span className="char-stagger" style={{ animationDelay: "1s" }}>
                r
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "1.05s" }}
              >
                l
              </span>
              <span className="char-stagger" style={{ animationDelay: "1.1s" }}>
                d
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "1.15s" }}
              >
                ,
              </span>
            </span>
            <br className="mb-1" />
            <span className="inline text-white">
              <span className="char-stagger" style={{ animationDelay: "0s" }}>
                I
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.05s" }}
              >
                n
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.1s" }}>
                &nbsp;
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.15s" }}
              >
                J
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.2s" }}>
                u
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.25s" }}
              >
                s
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.3s" }}>
                t
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.35s" }}
              >
                &nbsp;
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.4s" }}>
                a
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.45s" }}
              >
                &nbsp;
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.5s" }}>
                F
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.55s" }}
              >
                e
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.6s" }}>
                w
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.65s" }}
              >
                &nbsp;
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.7s" }}>
                C
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.75s" }}
              >
                l
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.8s" }}>
                i
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.85s" }}
              >
                c
              </span>
              <span className="char-stagger" style={{ animationDelay: "0.9s" }}>
                k
              </span>
              <span
                className="char-stagger"
                style={{ animationDelay: "0.95s" }}
              >
                s
              </span>
            </span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 pixel-font">
            <span
              className="block text-blue-400 neo-gradient neo-glow transition-all duration-200 opacity-100 transform scale-100"
              aria-live="polite"
            >
              SEARCH LESS. WIN MORE.
            </span>
          </div>
          <div>
            <p className="text-lg">
              <span className="text-blue-500 font-semibold">Buy products</span>
              ...all in seconds.
            </p>
          </div>
          <div>
            <p className="mt-5 text-lg">
              <span className="mr-2">🎌</span>Instantly access authentic
              Japanese products from major Japanese stores
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-6 px-2">
            <button className="hover-lift press focus-glow ring-0 px-6 py-3 rounded-xl font-medium transition-all pixel-button transform hover:scale-105 bg-white text-gray-900 shadow-xl border-2 border-cyan-200">
              📝 Word
            </button>

            <button className="hover-lift press focus-glow ring-0 px-6 py-3 rounded-xl font-medium transition-all pixel-button transform hover:scale-105 bg-white/10 text-white/80 hover:bg-white/20 border border-white/20">
              📸 Photo
            </button>

            <button className="hover-lift press focus-glow ring-0 px-6 py-3 rounded-xl font-medium transition-all pixel-button transform hover:scale-105 bg-white/10 text-white/80 hover:bg-white/20 border border-white/20">
              📂 Categories
            </button>

            <button className="hover-lift press focus-glow ring-0 px-6 py-3 rounded-xl font-medium transition-all pixel-button transform hover:scale-105 bg-white/10 text-white/80 hover:bg-white/20 border border-white/20">
              🔗 URL
            </button>
          </div>
          <div
            className="mx-auto max-w-[42rem] w-full rounded-2xl border transition-all duration-300 border-white/15 hover:border-white/25 bg-black/40 backdrop-blur-sm p-2"
            aria-label="Search or drop an image"
          >
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={`Enter keywords like "Pokemon cards", "Sony camera", "Uniqlo shirt"...`}
                  className="hover-lift focus-glow ring-0 w-full bg-transparent text-white placeholder-white/40 outline-none px-4 py-3 rounded-xl border border-transparent text-sm sm:text-base"
                  value=""
                />
              </div>
              <button
                type="submit"
                className="hover-lift press focus-glow ring-0 rounded-xl px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold border border-cyan-400/30 transition-all shadow-lg hover:shadow-cyan-400/50 w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search w-5 h-5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </form>

            <p className="px-4 pb-2 text-xs text-white/40 text-center mt-2">
              💡 Tip: Drop a product image to find similar items instantly
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-4">
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              👘 Fashion
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              📱 Electronics
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              🎮 Toys &amp; Games
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              🎭 Anime &amp; Manga
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              🏠 Home &amp; Kitchen
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              💄 Beauty
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              ⚽ Sports
            </button>
            <button
              className="
      hover-lift press focus-glow ring-0
      rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
      border border-white/15 text-white/85 bg-white/5
      hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/25
      transition-all duration-300
    "
              tabIndex={0}
            >
              🍜 Food
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60 px-4">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span>Japan-Wide Deal Finder</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></span>
              <span>Any URL, We Buy It</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></span>
              <span>Lowest Fees. Guaranteed.</span>
            </span>
          </div>
        </div>
        <div className="pt-12 2xl:container mx-auto px-8 lg:py-14">
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

      <section className="px-8 lg:px-14 py-10 md:py-20 max-w-[1440px] mx-auto">
        <h3 className="text-black font-poppins text-[26px]/[30px] font-medium tracking-[-0.4px]">
          Recommended Items
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-6 md:py-12">
          {Array.from({ length: 12 }, (_, idx) => (
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
      </section>
    </>
  );
};

export default Home;

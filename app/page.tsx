import SliderImage from "@/components/SliderImage";
import "animate.css";
import Image from "next/image";

const images = [
  { src: "/imgs/pages/thumb-01.png", tag: "Health" },
  { src: "/imgs/pages/thumb-02.png", tag: "Food" },
  { src: "/imgs/pages/thumb-03.png", tag: "Travel" },
  { src: "/imgs/pages/thumb-04.png", tag: "Trade" },
  { src: "/imgs/pages/thumb-05.png", tag: "Pofilage" },
  { src: "/imgs/pages/thumb-06.png", tag: "Sports" },
].map((image) => ({ ...image, alt: image.tag }));

export default function Home() {
  return (
    <>
      <section className="relative pt-20 lg:pt-24">
        <div className="container px-4">
          <h1 className="heading-1">
            Hey, we’re Ideko.{" "}
            <span className="font-light">See our thoughts, stories &amp; </span>
            ideas.
          </h1>
        </div>
      </section>
      <section className="my-20 py-16 flex flex-col gap-8 relative">
        <h3 className="text-3xl md:text-5xl text-neutral-950 dark:text-neutral-dark-950 font-light text-center z-10 relative">
          Subscribe to <span className="font-bold">New posts</span>
        </h3>
        <div className=" z-10 relative">
          <div className="swiper-container post-slider-6">
            <SliderImage images={images} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 lg:gap-32 flex-col lg:flex-row z-10 relative">
          <form className="max-w-full overflow-hidden mx-auto pt-4" action="#">
            <div className="flex flex-col md:flex-row mb-4 md:bg-neutral-0 dark:bg-neutral-dark-200 rounded-full p-1 md:border border-neutral-300 dark:border-neutral-dark-300">
              <input
                className="focus:outline-none transition duration-200 py-4 bg-neutral-0 dark:bg-neutral-dark-200 rounded-full pl-6 w-full mb-2 md:mb-0 md:border-0 border border-neutral-300 dark:border-neutral-dark-300 "
                type="text"
                placeholder="Your email address"
              />
              <button
                className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-950 transition duration-200 flex items-center justify-center gap-2"
                type="submit"
              >
                <svg
                  width={22}
                  height={18}
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 fill-primary-light-950"
                  preserveAspectRatio="none"
                >
                  <path d="M19.8829 0.671875H2.8827C2.35277 0.673442 1.84497 0.890991 1.47025 1.277C1.09552 1.663 0.884334 2.18609 0.882812 2.73198V15.6118C0.884334 16.1577 1.09552 16.6807 1.47025 17.0668C1.84497 17.4528 2.35277 17.6703 2.8827 17.6719H19.8829C20.4129 17.6703 20.9207 17.4528 21.2954 17.0668C21.6701 16.6807 21.8813 16.1577 21.8828 15.6118V2.73198C21.8813 2.18609 21.6701 1.663 21.2954 1.277C20.9207 0.890991 20.4129 0.673442 19.8829 0.671875ZM19.6326 5.04989L11.3828 10.7158L3.13182 5.04989V2.98979L11.3817 8.65566L19.6315 2.98979L19.6326 5.04989Z" />
                </svg>
                <span className="text-neutral-0 font-medium text-2xl">
                  Subscribe
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="absolute w-full top-0 left-0 z-0">
          <div className="container px-4">
            <div className="w-full h-[562px] bg-primary-light-950 dark:bg-primary-dark-950 rounded-[30px]" />
          </div>
        </div>
      </section>

      <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
        <div className="container px-4">
          <h3 className="heading-2 text-center mb-16">
            <span className="font-light">See what we’ve</span>
            <br /> written lately
          </h3>
          {/*Post list 1*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
              <a
                className="rounded-3xl overflow-hidden max-h-[606px]"
                href="single.html"
              >
                <Image
                  src="/imgs/pages/img-06.png"
                  width={606}
                  height={150}
                  alt="image"
                />
              </a>
              <div className="flex-col justify-start items-start gap-3.5 flex">
                <div className="justify-start items-center gap-5 inline-flex">
                  <a
                    className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex"
                    href="category.html"
                  >
                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                      Trending
                    </div>
                  </a>
                  <div className="justify-start items-center gap-2 flex">
                    <a href="author.html">
                      <Image
                        className="w-9 h-9 rounded-3xl"
                        src="/imgs/avatar/avatar-01.png"
                        width={606}
                        height={150}
                        alt="image"
                      />
                    </a>
                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                      <a href="author.html">Daniel Taylor</a> - June 8, 2024
                    </div>
                  </div>
                </div>
                <h3>
                  <a
                    className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link"
                    href="single.html"
                  >
                    Globetrotting in Style: A Journey Through My Lens
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

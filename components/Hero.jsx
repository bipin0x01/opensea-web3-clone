import React from "react";

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?cs=srgb&dl=pexels-steve-johnson-1183992.jpg&fm=jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `h-screen w-screen flex relative justify-center flex-wrap items-center gap-2`,
  copyContainer: `w-3/4 m-4`,
  title: `relative text-slate-500 text-[46px] font-bold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] my-[20px] sm:my-0`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Recehan Token
            </div>
            <div className={style.description}>
            Recehan Token is more than a cryptocurrency; it is a movement to honor Indonesia’s past while embracing its future.
            </div>
            <div className={style.ctaContainer}>
            <a href="https://opensea.io/CentIndonesia"><button className={style.accentedButton}>Explore</button></a>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://i.seadn.io/s/raw/files/f719b1ce949080805036ffafa8879d61.jpg?auto=format&dpr=1&w=1000"
              alt=""
              width={300}
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>User</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/matic/0x317290feee6dce7ba5223438cbbc9a9e65927718/3/"
                >
                  Recehan NFT Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

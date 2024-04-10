import Image from 'next/image';

import { Background } from '../layouts/background';

const Hero = () => (
  <Background color="#fbfbfb">
    <div className="divide-y-2 divide-black">
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        {/* <Image
        className="absolute animate-spin hidden lg:block mb-20"
        src="/assets/images/circle-spinner.png"
        alt="Spinner"
        height="800"
        width="800"
      /> */}
        <Image
          className="z-10 mb-36"
          src="/assets/images/logo.png"
          alt="DRORJEN LLC Logo"
          height="300"
          width="300"
        />
      </div>

      <div className="absolute flex flex-col gap-2 bottom-2 text-center justify-center items-center w-full mx-auto pt-12">
        <span className="font-semibold text-lg">DRORJEN LLC</span>
        <span className="text-sm">
          5203 JUAN TABO BLVD NE STE 2B
          <br /> ALBUQUERQUE, NM 87111
        </span>
        <span className="text-sm">legal@drorjen.is</span>
        <span className="text-sm">+1-725-225-0950</span>
      </div>
    </div>
  </Background>
);

export { Hero };

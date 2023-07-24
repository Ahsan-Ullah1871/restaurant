import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="   mx-auto bg-transparent w-full flex items-center justify-start  gap-8">
      {/* desc */}
      <div>
        <p className=" text-base font-jakarta text-[#FFFFFF] ">
          Hi, new friend!
        </p>
        <p className=" max-w-2xl mt-3 text-6xl  font-libre  capitalize text-[#fff] ">
          We do not cook, we create your emotions!
        </p>
        <p className="max-w-lg  mt-5 text-base font-jakarta text-[#FFFFFF] ">
          {`There's evidence that cooking, like other creative practices, can
          boost well-being, self-esteem, and other measures of mental health.`}
        </p>
        {/* button */}
        <button className=" mt-10 text-[#FB8F2C] font-jakarta text-base border-b border-[#FB8F2C] ">
          Our menu
        </button>
      </div>
      {/* image */}
      <div className="flex items-end">
        <div className="relative">
          {/* Main image */}
          <Image
            src={'/Images/image80.png'}
            width={370}
            height={436}
            alt="test"
          />
          {/* price tag */}
          <p className="bg-[#FB8F2C] px-4 py-3  text-2xl  font-semibold font-libre absolute  bottom-20 -left-8">
            Price:$11
          </p>
        </div>
        {/* Thumb images */}
        <div className="flex flex-col gap-8 w-[100px] h-full ">
          <Image
            src={'/Images/image80.png'}
            width={80}
            height={80}
            className="ml-5"
            alt="test"
          />
          <Image
            src={'/Images/image80.png'}
            width={80}
            height={80}
            alt="test"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

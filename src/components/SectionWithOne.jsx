import React from 'react';

const SectionWithOne = ({ children }) => {
  return (
    <section className="my-12 bg-[#ede1ad]">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-full flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  );
};

export default SectionWithOne;

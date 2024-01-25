import React from 'react';

const SectionWithOne = ({ children }) => {
  return (
    <section className="my-12 bg-[#ede1ad]">
      <div className="container mx-auto text-center ">
        {children}
      </div>
    </section>
  );
};

export default SectionWithOne;

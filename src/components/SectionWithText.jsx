import React from 'react';

const SectionWithText = ({ children }) => {
  return (
    <section className="my-8">
      <div className="container mx-auto text-center ">
        {children}
      </div>
    </section>
  );
};

export default SectionWithText;

const SectionWithText = ({ children }) => {
    return (
      <section className="my-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-[100%] text-center">
          {children}
        </div>
      </section>
    );
  };
  
  export default SectionWithText;
  
import Navbar from "./_components/Navbar";

export const Provider = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">{children}</div>
      </div>
    </>
  );
};

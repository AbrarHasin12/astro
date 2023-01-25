const NavBar = () => {
  return (
    <>
      <nav>
        <div className="ml-7 md:ml-10 text-white font-semibold font-sans text-sm md:text-lg lg:text-xl xl:text-2xl">
          Astronomical.ml
        </div>
        <div className="auths">
          <button className="text-white ">
            <a href="#">Sign in</a>
          </button>
          <button className="joinUs">
            <a href="#">Join us</a>
          </button>
        </div>
        
      </nav>
    </>
  );
};

export default NavBar;

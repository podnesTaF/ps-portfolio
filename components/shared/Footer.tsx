const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="justify-center py-4 hidden md:flex bg-[#1b1a2ea9] backdrop-blur-md">
      <p className="text-white">Copyright © {year} Oleksii Pidnebesnyi</p>
    </div>
  );
};

export default Footer;

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="justify-center py-4 hidden md:flex bg-[#1b1a2ea9] backdrop-blur-md">
      <h3 className="text-white">Copyright © {year} Oleksii Pidnebesnyi</h3>
    </div>
  );
};

export default Footer;

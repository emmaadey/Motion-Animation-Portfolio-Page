const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center gap-5">
      {items.map((item) => (
        <a href={`#${item}`} key={item} className="">
          {item}
        </a>
      ))}
    </div>
  );
};
export default Links;

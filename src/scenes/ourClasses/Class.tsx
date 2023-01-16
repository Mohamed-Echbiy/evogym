type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-full w-full flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-auto inline-block  w-[450px]">
      <div className={overlayStyles}>
        <p className=" md:text-1xl lg:text-2xl text-xl">{name}</p>
        <p className=" lg:text-base mt-5 text-xs md:text-sm">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;

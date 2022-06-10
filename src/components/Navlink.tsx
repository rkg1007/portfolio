import Link from "next/link";

const Navlink = ({
  name,
  route,
  activeItem,
  setActiveItem,
}: {
  name: string;
  route: string;
  activeItem: string;
  setActiveItem: Function;
}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a href="" onClick={() => setActiveItem(name)}>
          {name}
        </a>
      </Link>
    ) : null
  );
};

export default Navlink;

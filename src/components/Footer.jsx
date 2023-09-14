import FooterNavItem from "./FooterNavItem";

export default function Footer() {
  return (
    <footer className="bg-rose-600 w-screen text-white flex flex-col py-10 gap-10">
      <img
        className="w-36 mx-auto"
        src="src/assets/images/simplon_logo_footer.svg"
        alt=""
      />
      <nav>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-3">
          <FooterNavItem title={"Mentions légales"} />
          <span className="hidden md:block">|</span>

          <FooterNavItem title={"Nos actualités"} />
          <span className="hidden md:block">|</span>

          <FooterNavItem title={"Nous rejoindre"} />
          <span className="hidden md:block">|</span>

          <FooterNavItem title={"Contact"} />
          <span className="hidden md:block">|</span>

          <FooterNavItem title={"Presse"} />
          <span className="hidden md:block">|</span>

          <FooterNavItem title={"Plan du site"} />
          <span className="hidden md:block">|</span>

          <FooterNavItem title={"Notre agence numérique"} />
        </ul>
      </nav>
    </footer>
  );
}

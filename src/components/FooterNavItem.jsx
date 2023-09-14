export default function FooterNavItem({title}) {
  return (
    <li>
      <a className="hover:underline hover:underline-offset-4" href="#">{title}</a>
    </li>
  );
}

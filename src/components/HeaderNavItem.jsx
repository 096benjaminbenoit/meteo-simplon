export default function HeaderNavItem({title, children}) {
  return (
    <li className="flex justify-center items-center gap-2 hover:underline hover:underline-offset-4">
      <a href="#">{title}</a>
      {children}
    </li>
  );
}

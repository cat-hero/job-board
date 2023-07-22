import Link from "next/link";
const Header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/jobs">Jobs</Link>
      <Link href="/companies">Companies</Link>
    </>
  );
};
export default Header;

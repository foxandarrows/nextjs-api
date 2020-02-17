import React from "react";
import Link from "next/link";

// const links = [
//   { href: "https://zeit.co/now", label: "ZEIT" },
//   { href: "https://github.com/zeit/next.js", label: "GitHub" }
// ].map(link => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/countries">
          <a>Countries from Europe</a>
        </Link>
      </li>
      {/* {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
    </ul>
    <style jsx>{``}</style>
  </nav>
);

export default Nav;

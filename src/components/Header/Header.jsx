import React from "react";
import Container from "../Container/Container";
import LogoutBtn from "./LogoutBtn";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { UNSAFE_NavigationContext } from "react-router-dom";
export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const NavItems = [
    {
      name: "Home",
      slug: "/",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "AllPost",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-posts",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {NavItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button 
                  onClick={()=> navigate(item.slug)}
                  className="inline-block px-6 py-2 duration-200
                  hover:bg-blue-500 rounded-full">{item.name}</button>
                </li>
              ) : null
            )}
            {
              authStatus && (
                <li>
                  <LogoutBtn></LogoutBtn>
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
}

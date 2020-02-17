import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";

const Home = props => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <ul>
        {props.countries.map(country => (
          <li style={{ color: "black" }} key={country}>
            {country.name}
          </li>
        ))}
      </ul>
      <style jsx>{``}</style>
    </div>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    countries: countries
  };
};

export default Home;

import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";

const Home = props => {
  let countriesEurope = props.countries.filter(
    country => country.region === "Europe"
  );

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <h1>List of all countries</h1>
      <ul>
        {props.countries.map((country, index) => (
          <li style={{ color: "black" }} key={index}>
            {country.name} - {country.capital} - {country.alpha2Code}
          </li>
        ))}
      </ul>

      <h1>List of all countries from Europe</h1>
      {countriesEurope.map((country, index) => (
        <li style={{ color: "black" }} key={index}>
          {country.name} - {country.capital} - {country.alpha2Code}
        </li>
      ))}

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

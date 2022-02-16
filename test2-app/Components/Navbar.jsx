import React from "react";
import { A } from "hookrouter";
export const Navbar = () => {
  return (
    <div>
      <h1>Fridgin' Smart App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          borderBotton: "1px solid grey",
        }}
      >
        <A href="/">Home</A>
        <A href="/Fridge">Fridge</A>
        <A href="/Logs/1234">Logs</A>
      </div>
    </div>
  )
}

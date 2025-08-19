"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import os from "os";


export default function Home() {

  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "3rem",
              fontWeight: 700,
            }}
          >
            {`Welcome to Webflow Cloud`}
          </h1>
          <Block tag="p" className="margin-bottom-24px">
            This is a simple test using Basic components with enhanced styling.
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

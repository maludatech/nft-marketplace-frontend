"use client";

import Image, { StaticImageData } from "next/image";
import { Brand } from "@/components/shared/Brand";
import image from "@/public/assets/image";

interface Founder {
  name: string;
  position: string;
  image: StaticImageData;
}

interface Fact {
  title: string;
  info: string;
}

const About = () => {
  const founderArray: Founder[] = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Chief Executive",
      image: image.founder1,
    },
    {
      name: "Danien Jame",
      position: "Co-founder and Chief Executive",
      image: image.founder2,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder, Chairman",
      image: image.founder3,
    },
    {
      name: "Dara Frazier",
      position: "Co-Founder, Chief Strategy Officer",
      image: image.founder4,
    },
  ];

  const factsArray: Fact[] = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021)",
    },
  ];

  return (
    <div className="w-full pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="body-container">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">👋 About Us.</h1>
            <p className="text-muted-foreground text-lg">
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people around the world.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={image.hero2}
              alt="About Hero"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
        {/* Founder Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-2">⛱ Founder</h2>
          <p className="text-muted-foreground">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {founderArray.map((el, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3"
            >
              <Image
                src={el.image}
                alt={el.name}
                width={200}
                height={200}
                className="rounded-full object-cover w-40 h-40 shadow-md"
              />
              <h3 className="text-xl font-semibold">{el.name}</h3>
              <p className="text-muted-foreground text-sm">{el.position}</p>
            </div>
          ))}
        </div>
        {/* Facts Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-2">🚀 Fast Facts</h2>
          <p className="text-muted-foreground">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {factsArray.map((el, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-2">{el.title}</h3>
              <p className="text-muted-foreground text-sm">{el.info}</p>
            </div>
          ))}
        </div>
        <Brand />
      </div>
    </div>
  );
};

export default About;

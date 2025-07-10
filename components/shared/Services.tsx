import Image from "next/image";
import image from "@/public/assets/image";

export const Services = () => {
  const services = [
    {
      image: image.service1,
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
    },
    {
      image: image.service2,
      title: "Add to bag",
      description: "Easily select the correct items and add them to the cart",
    },
    {
      image: image.service3,
      title: "Fast shipping",
      description: "The carrier will confirm and ship quickly to you",
    },
    {
      image: image.service4,
      title: "Enjoy the product",
      description: "Have fun and enjoy your 5-star quality products",
    },
  ];
  return (
    <section className="w-full min-h-1/2 pt-36 px-6 md:px-12">
      <div className="body-container grid sm:grid-cols-2 lg:grid-cols-4 place-items-start gap-16 sm:gap-8 w-full">
        {services.map((service, index) => (
          <div
            className="flex flex-col gap-4 justify-center items-center w-full"
            key={index}
          >
            <Image
              src={service.image}
              alt="service"
              width={100}
              height={100}
              className="object-contain"
            />
            <div className="bg-primary rounded-full px-4 py-2 text-white font-semibold">
              Step {index + 1}
            </div>
            <h1 className="font-bold">{service.title}</h1>
            <p className="text-muted-foreground text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

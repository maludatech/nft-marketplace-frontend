import { useTheme } from "next-themes";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import image from "@/public/assets/image";

const DaysComponents = () => {
  const { theme } = useTheme();
  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";
  return (
    <div
      className="w-full border-4 cursor-pointer"
      style={{ boxShadow: shadow }}
    >
      <div className="w-full">
        <div className="">
          <Image
            src={image.creatorbackground1}
            className="border-4"
            alt="profile background"
            width={500}
            height={300}
            objectFit="covers"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Image
            src={image.creatorbackground2}
            alt="profile"
            width={200}
            height={200}
            className="rounded-bl-4"
            objectFit="covers"
          />
          <Image
            src={image.creatorbackground2}
            alt="profile"
            width={200}
            height={200}
            className=""
            objectFit="covers"
          />
          <Image
            src={image.creatorbackground2}
            alt="profile"
            width={200}
            height={200}
            className="rounded-br-4"
            objectFit="covers"
          />
        </div>

        <div className="px-4 py-2">
          <h2>Amazing Collection</h2>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src={image.user1}
                alt="profile"
                width={30}
                height={30}
                objectFit="covers"
                className="rounded-full"
              />

              <p>
                Creator
                <span>
                  Shoaib Bhai
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className="font-semibold border-2 p-2 rounded-sm">
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;

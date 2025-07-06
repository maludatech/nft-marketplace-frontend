import Image from "next/image";
import image from "@/public/assets/image";

export const Notification = () => {
  return (
    <div className="absolute p-4 shadow-xl top-15 border rounded-md bg-background z-100 w-64 text-lg">
      <p className="text-xl font-semibold mb-8"></p>
      <div className="rounded-md">
        <Image
          src={image.user1}
          alt="profile"
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
      </div>
      <div className="">
        <h4>Maludatech</h4>
        <p>Address </p>
        <small>3 minutes ago</small>
        <span className=""></span>
      </div>
    </div>
  );
};

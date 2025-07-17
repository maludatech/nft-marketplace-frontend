"use client";

import { ReactNode, useState } from "react";
import { Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialOption {
  icon: ReactNode;
  name: string;
}

const LoginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  const socialOptions: SocialOption[] = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Continue with Facebook",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Continue with Twitter",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Continue with Facebook",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card p-6 rounded-2xl shadow-lg space-y-6">
        <div className="space-y-4">
          {socialOptions.map((el, i) => (
            <div
              key={i}
              onClick={() => setActiveBtn(i + 1)}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition 
                ${
                  activeBtn === i + 1
                    ? "bg-muted border-primary"
                    : "border-border hover:bg-muted"
                }`}
            >
              <div className="text-primary">{el.icon}</div>
              <p className="text-sm font-medium text-foreground">{el.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-muted-foreground text-xs">OR</div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 text-sm rounded-lg border bg-background border-input focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="password" className="font-medium text-foreground">
                Password
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 text-sm rounded-lg border bg-background border-input focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <Button className="w-full">Continue</Button>
      </div>
    </div>
  );
};

export default LoginAndSignUp;

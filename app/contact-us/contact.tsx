"use client";

import Link from "next/link";
import {
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  return (
    <section className="pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="body-container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-muted-foreground text-sm uppercase mb-1">
                Address
              </h4>
              <p className="text-lg font-medium">
                No.103, Odim street, Obukpa Province, Nsukka, Enugu state.
              </p>
            </div>
            <div>
              <h4 className="text-muted-foreground text-sm uppercase mb-1">
                Email
              </h4>
              <p className="text-lg font-medium">maludatech@gmail.com</p>
            </div>
            <div>
              <h4 className="text-muted-foreground text-sm uppercase mb-1">
                Phone
              </h4>
              <p className="text-lg font-medium">+2348163887385</p>
            </div>
            <div>
              <h4 className="text-muted-foreground text-sm uppercase mb-2">
                Socials
              </h4>
              <div className="flex items-center gap-5 text-primary">
                <Link
                  href="https://facebook.com/maludatech"
                  className="hover:scale-110 transition-transform"
                >
                  <FacebookIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/maludatech"
                  className="hover:scale-110 transition-transform"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/ugotech.eth"
                  className="hover:scale-110 transition-transform"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://youtube.com/maludatech"
                  className="hover:scale-110 transition-transform"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/maludatechdev"
                  className="hover:scale-110 transition-transform"
                >
                  <TwitterIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Shoaib Bhai"
                  className="focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="pl-10 focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Let us know how we can help..."
                  className="resize-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

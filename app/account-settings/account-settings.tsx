"use client";

import React from "react";
import { Mail, Globe, Copy, Facebook, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const AccountSettings: React.FC = () => {
  return (
    <section className="body-container pt-32 pb-12 px-6 md:px-12 w-full">
      <Card className="max-w-2xl mx-auto p-6 rounded-2xl shadow-md">
        <form className="space-y-6">
          {/* Username */}
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="shoaib bhai" className="mt-2" />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-zinc-500" />
              <Input id="email" type="email" placeholder="Email*" />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="something about yourself in few words"
              className="mt-2"
              rows={5}
            />
          </div>

          {/* Website */}
          <div>
            <Label htmlFor="website">Website</Label>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-5 h-5 text-zinc-500" />
              <Input id="website" type="text" placeholder="website" />
            </div>
          </div>

          {/* Socials */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Facebook */}
            <div>
              <Label htmlFor="facebook">Facebook</Label>
              <div className="flex items-center gap-2 mt-2">
                <Facebook className="w-5 h-5 text-zinc-500" />
                <Input id="facebook" type="text" placeholder="http://shoaib" />
              </div>
            </div>

            {/* Twitter */}
            <div>
              <Label htmlFor="twitter">Twitter</Label>
              <div className="flex items-center gap-2 mt-2">
                <Twitter className="w-5 h-5 text-zinc-500" />
                <Input id="twitter" type="text" placeholder="http://shoaib" />
              </div>
            </div>

            {/* Instagram */}
            <div className="sm:col-span-2">
              <Label htmlFor="instagram">Instagram</Label>
              <div className="flex items-center gap-2 mt-2">
                <Instagram className="w-5 h-5 text-zinc-500" />
                <Input id="instagram" type="text" placeholder="http://shoaib" />
              </div>
            </div>
          </div>

          {/* Wallet Address */}
          <div>
            <Label htmlFor="wallet">Wallet Address</Label>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-5 h-5 text-zinc-500" />
              <Input
                id="wallet"
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
              />
              <Copy className="w-5 h-5 text-zinc-500 cursor-pointer" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <Button className="cursor-pointer">Upload profile</Button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default AccountSettings;

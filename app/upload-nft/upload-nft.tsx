"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import image from "@/public/assets/image";

const UploadNFT = () => {
  const [fileUrl, setFileUrl] = useState<File | null>(null);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");
  const [active, setActive] = useState<number>(0);

  const onDrop = useCallback((acceptedFile: File[]) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 100000000,
  });

  const categoryArray = [
    { image: image.nft_image_1, category: "Sports" },
    { image: image.nft_image_2, category: "Arts" },
    { image: image.nft_image_3, category: "Music" },
    { image: image.nft_image_4, category: "Digital" },
    { image: image.nft_image_5, category: "Time" },
    { image: image.nft_image_6, category: "Photography" },
  ];

  return (
    <section className="pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="body-container w-full flex flex-col gap-8">
        <div
          {...getRootProps()}
          className="border border-dashed border-gray-300 p-8 rounded-lg text-center cursor-pointer hover:border-gray-500"
        >
          <input {...getInputProps()} />
          <div className="space-y-2">
            <p className="text-muted-foreground">JPG, PNG, WEBM , MAX 100MB</p>
            <Image
              src={image.upload}
              alt="upload"
              width={100}
              height={100}
              className="mx-auto object-contain"
            />
            <p className="text-lg font-semibold">Drag & drop file</p>
            <p className="text-muted-foreground">
              or Browse media on your device
            </p>
          </div>
        </div>

        {fileUrl && (
          <div className="border rounded-lg p-6 flex flex-col gap-4">
            <Image src={image.nft_image_1} alt="nft" width={200} height={200} />
            <div className="space-y-2">
              <p>
                <span className="font-medium">NFT Name:</span> {itemName}
              </p>
              <p>
                <span className="font-medium">Website:</span> {website}
              </p>
              <p>
                <span className="font-medium">Description:</span> {description}
              </p>
              <p>
                <span className="font-medium">Royalties:</span> {royalties}
              </p>
              <p>
                <span className="font-medium">File Size:</span> {fileSize}
              </p>
              <p>
                <span className="font-medium">Properties:</span> {properties}
              </p>
              <p>
                <span className="font-medium">Category:</span> {category}
              </p>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Item Name</label>
            <input
              type="text"
              placeholder="shoaib bhai"
              className="w-full border rounded px-4 py-2"
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Website</label>
            <div className="flex items-center border rounded px-4 py-2 gap-2">
              <MdOutlineHttp />
              <input
                type="text"
                placeholder="website"
                className="w-full outline-none"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Ciscryp will include a link to this URL on this item's detail
              page.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              rows={6}
              placeholder="something about yourself in few words"
              className="w-full border rounded px-4 py-2"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p className="text-xs text-muted-foreground">
              The description will be included underneath the item's image.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Choose collection
            </label>
            <p className="text-xs text-muted-foreground">
              Choose or create a collection
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categoryArray.map((el, i) => (
                <div
                  key={i}
                  className={cn(
                    "border rounded-lg p-2 cursor-pointer relative",
                    active === i && "border-primary"
                  )}
                  onClick={() => {
                    setActive(i);
                    setCategory(el.category);
                  }}
                >
                  <Image
                    src={el.image}
                    alt="collection"
                    width={70}
                    height={70}
                    className="rounded"
                  />
                  {active === i && (
                    <div className="absolute top-2 right-2 text-green-500">
                      <TiTick size={24} />
                    </div>
                  )}
                  <p className="mt-1 text-sm">{el.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Royalties</label>
              <div className="flex items-center border rounded px-4 py-2 gap-2">
                <FaPercent />
                <input
                  type="text"
                  placeholder="20%"
                  className="w-full outline-none"
                  onChange={(e) => setRoyalties(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">File Size</label>
              <div className="flex items-center border rounded px-4 py-2 gap-2">
                <MdOutlineAttachFile />
                <input
                  type="text"
                  placeholder="165MB"
                  className="w-full outline-none"
                  onChange={(e) => setFileSize(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Properties</label>
              <div className="flex items-center border rounded px-4 py-2 gap-2">
                <AiTwotonePropertySafety />
                <input
                  type="text"
                  placeholder="Property"
                  className="w-full outline-none"
                  onChange={(e) => setProperties(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button className="cursor-pointer" onClick={() => {}}>
              Upload
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => {}}
            >
              Preview
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadNFT;

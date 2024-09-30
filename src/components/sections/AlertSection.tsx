"use client";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function AlertSection() {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <div className="bg-primary flex justify-between p-3 rounded-[12px] mx-4">
      <div></div>
      <div className="md:flex text-white font-semibold text-[.75rem] md:text-[1rem] items-center text-center">
        <p className="md:flex gap-3">
          We&apos;ve raised a $23.5m Series A led by Redpoint Ventures!
          <Link href="/" className="underline underline-offset-4 pl-4">
            Read more
          </Link>
        </p>
      </div>
      <div>
        <PlusIcon
          className="rotate-45 hover:cursor-pointer"
          color="#fff"
          onClick={() => setShowAlert(false)}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default AlertSection;

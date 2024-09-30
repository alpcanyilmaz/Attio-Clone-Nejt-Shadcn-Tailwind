"use client";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function AlertSection() {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <div className="bg-primary flex justify-between p-3 rounded-[12px]">
      <div></div>
      <div className="flex gap-3 text-white font-semibold">
        <p>We&apos;ve raised a $23m Series A led by Redpoint Ventures!</p>
        <Link href="/" className="underline underline-offset-4">
          Read more
        </Link>
      </div>
      <div>
        <PlusIcon className="rotate-45 hover:cursor-pointer" color="#fff" onClick={() => setShowAlert(false)}/>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default AlertSection;

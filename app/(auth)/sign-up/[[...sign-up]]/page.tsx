import { Loader2 } from "lucide-react";
import Image from "next/image";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[black]"> Welcome to Split Care !</h1>
          <h2 className="font-normal text-lg text-stone-600"> Here we help you to take care of your finincial requirements.</h2>
          <p className="text-base text-[grey]">
            Create account to get your started
          </p>
        </div>
        <div className="flex item-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-purple-600 hidden lg:flex item-center justify-center">
        <Image src="/sample-logo.svg" height={100} width={100} alt="logo"></Image>
      </div>
    </div>
  );
}

"use client";
import ReduxProvider from "@/app/components/ReduxProvider/page";
import PATH from "@/app/constants/path";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LayoutAdmin = ({ children }) => {
  const { profile } = useSelector((state) => state.profile);
  const router = useRouter();
  useEffect(() => {
    if (!!profile?.id) {
      if (profile?.role !== "ADMIN") {
        router.push(PATH.NOT_FOUND);
      }
    }
  }, [profile]);

  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutAdmin;

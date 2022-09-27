/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Move = () => {
  const [state, setState] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    document.addEventListener("wheel", (e) => {
      if (e.deltaY < 0) {
        router.push("/");
      } else if (e.deltaY > 0) {
        router.push("/aboutme");
      }
    });
  }, [state, setState]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setState(!state);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <></>;
};
export default Move;

import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;

  return <div>{slug}</div>;
};

export default slug;

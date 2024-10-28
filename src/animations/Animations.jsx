import { lazy, Suspense } from "react";

const TextAnimation = lazy(() => import("./TextAnimation"));

const Animations = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TextAnimation />
    </Suspense>
  );
};

export default Animations;

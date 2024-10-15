import { lazy, Suspense } from "react";

// const SmoothScroll = lazy(() => import("./SmoothScroll"));
const TextAnimation = lazy(() => import("./TextAnimation"));

const Animations = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <SmoothScroll /> */}
      <TextAnimation />
    </Suspense>
  );
};

export default Animations;

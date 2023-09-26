import { DependencyList, useEffect } from "react";

//디바운스 훅
export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps: DependencyList | undefined = []
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn();
    }, waitTime);

    return () => {
      clearTimeout(t);
    };
  }, [fn, waitTime, deps]); // 이 부분에서 빈 배열을 기본값으로 설정합니다.
}

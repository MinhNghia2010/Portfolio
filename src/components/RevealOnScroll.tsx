import { useEffect, useRef , type ReactNode} from "react";

type RevealOnScrollProps = {
  children: ReactNode;
};

export const RevealOnScroll = ({ children }: RevealOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            if (entry[0].isIntersecting) {
                ref.current?.classList.add("visible");
            } else {
                ref.current?.classList.remove("visible");
            }
        }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
        if (ref.current) {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            }
        }
    });

  return <div ref={ref} className="reveal">{children}</div>;
}
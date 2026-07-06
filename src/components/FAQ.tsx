import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faqs";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white pb-12 pt-12 md:pb-14 md:pt-14" ref={ref}>
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center text-[1.75rem] font-bold tracking-wide text-primary md:mb-10 md:text-[2rem]"
        >
          FAQS
        </motion.h2>

        <div className="flex flex-col gap-[1.125rem]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={cn(
                  "overflow-hidden border-2 border-primary transition-[border-radius] duration-200",
                  isOpen ? "rounded-[1.35rem]" : "rounded-full",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className={cn(
                    "group flex w-full min-h-[3.25rem] items-center gap-4 px-7 py-4 text-left transition-colors duration-200 sm:min-h-[3.5rem] sm:px-9 sm:py-[1.125rem]",
                    isOpen
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-foreground hover:bg-primary hover:text-primary-foreground",
                  )}
                >
                  <span className="flex-1 text-[15px] font-normal leading-snug sm:text-base">{item.q}</span>
                  <ChevronRight
                    className={cn(
                      "h-[18px] w-[18px] shrink-0 transition-all duration-200",
                      isOpen
                        ? "rotate-90 text-primary-foreground"
                        : "text-foreground/70 group-hover:text-primary-foreground",
                    )}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-primary/20 bg-white px-7 py-5 sm:px-9 sm:py-6">
                        <p className="text-sm leading-relaxed text-foreground/90 sm:text-[15px]">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

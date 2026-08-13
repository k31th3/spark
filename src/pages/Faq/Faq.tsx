
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";

import { Icon, Image, Text, Wrapper } from "@/components";

import { IoSearch, IoClose } from "react-icons/io5";

import FaqWebp from "@/assets/faq.webp"
import { clientQuestions } from "./clientQuestions";

function Faq() {

    const [open, setOpen] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const faqRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const [searchParams, setSearchParams] = useSearchParams();

    const filteredQuestions = clientQuestions
            .map((menu) => ({
            ...menu,
            frequently: menu.frequently.filter((item) =>
                item.question.toLowerCase().includes(search.toLowerCase()) ||
                item.answer.toLowerCase().includes(search.toLowerCase())
            ),
            }))
            .filter((menu) => menu.frequently.length > 0);

    useEffect(() => {
        const query = searchParams.get("search");

        if (query) {
            setSearch(query);
        }
    }, []);

    useEffect(() => {
        if (!search.trim()) {
            setOpen(null);
            return;
        }

        const firstMenu = filteredQuestions[0];
        const firstItem = firstMenu?.frequently[0];

        if (!firstItem) {
            setOpen(null);
            return;
        }

        setOpen(`${firstMenu.title}-${firstItem.question}`);
    }, [search]);

    const highlightText = (text: string) => {
        if (!search) return text;

        const parts = text.split(new RegExp(`(${search})`, "gi"));

        return parts.map((part, index) =>
            part.toLowerCase() === search.toLowerCase() ? (
                <span key={index} className="bg-primary/40 rounded-xs">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    useEffect(() => {
        faqRefs.current = {};
    }, [search]);

	return <>
        <Wrapper title="Frequently asked questions" path="frequently-asked-questions">
      	     <Wrapper.FullBleed className="relative min-h-screen">

                <Wrapper.Background/>
            
                <Wrapper.Body className="vstack gap-12">
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-16 w-full">

                        <div className="flex flex-col gap-3">
                            <Text variant="h1" className="lg:text-1xl">
                                Frequently Asked
                                <br />
                                <span className="text-gradient">Questions</span>
                            </Text>

                            <div className="flex flex-col gap-2 text-xs">
                                <Text variant="caption">
                                    Find answers to the common 
                                <br />
                                questions about SIT and our services.</Text>
                            </div>
                        </div>
                        
                        <div className="flex">
                        <Image
                            src={FaqWebp}
                            alt="Frequently Asked Questions"
                            className="w-full max-w-[480px] object-cover"/>
                        </div>

                    </div>

                    <div className="flex items-center rounded-xl bg-white pl-3 outline-1 -outline-offset-1 
                        outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 
                        has-[input:focus-within]:outline-primary
                        sm:w-[60%] xs:w-[70%] w-full m-auto">
                        <input
                            id="search"
                            name="search"
                            type="text"
                            autoComplete="off"
                            value={search}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSearch(value);
                                setOpen(null);

                                if (value) {
                                    setSearchParams({
                                        search: value,
                                    });
                                } else {
                                    setSearchParams({});
                                }
                            }}
                            placeholder="Looking for something?"
                            className="block min-w-0 grow py-3 pr-3 pl-2 text-base focus:outline-none text-sm bg-white"/>
                        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                            <AnimatePresence mode="wait" initial={false}>
                                {search ? (
                                    <motion.button
                                        key="close"
                                        type="button"
                                        aria-label="Clear search"
                                        onClick={() => {
                                            setSearch("");
                                            setOpen(null);
                                            setSearchParams({});
                                        }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                        className="rounded-full cursor-pointer">
                                        <Icon 
                                            icon={IoClose} 
                                            aria-hidden="true"
                                            variant="primary"
                                            size="md"
                                            className="mr-4"/>
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        key="search"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}>
                                        <Icon icon={IoSearch}
                                            aria-hidden="true"
                                            variant="primary"
                                            size="md"
                                            className="mr-4"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="sm:w-[80%] w-full m-auto">
                        <div className="vstack gap-8">
                        {
                            filteredQuestions.length === 0 ? (
                                <div className="py-8 text-center">
                                    <Text variant="label" className="text-gray-500">
                                        No matching questions found.
                                    </Text>
                                </div>
                            ) : (
                            filteredQuestions.map((menu) => (
                            <div key={menu.title}>
                                <Text variant="h1" className="text-lg sm:text-lg lg:text-lg mb-4">{menu.title}</Text>
                                {
                                    menu.frequently.map((item, index) => {
                                    const id = `${menu.title}-${item.question}`;
                                    return (
                                        <div key={id} 
                                             ref={(el) => {
                                                faqRefs.current[id] = el;
                                             }}>
                                        <button
                                            onClick={() => {
                                                setOpen(open === id ? null : id);
                                            }}
                                            aria-expanded={open === id}
                                            aria-controls={`faq-${id}`}
                                            className={`p-4 cursor-pointer border-1 w-full shadow-sm border-[#E7E8EA] bg-white
                                                ${index === 0 ? "rounded-t-xl" : ""}
                                                ${index === menu.frequently.length - 1 ? "rounded-b-xl" : ""}
                                                ${index !== menu.frequently.length - 1 ? "border-b-0" : ""}
                                            `}>
                                            
                                            <div className="flex w-full items-center justify-between">
                                            <div>
                                                <Text variant="h2" className="text-sm sm:text-sm lg:text-sm font-light">{highlightText(item.question)}</Text>
                                            </div>

                                            <motion.div
                                                animate={{ rotate: open === id ? 90 : 0 }}
                                                transition={{ duration: 0.25 }}>
                                                <Icon icon={FaChevronRight} size="sm" />
                                            </motion.div>
                                            </div>

                                            <AnimatePresence initial={false}>
                                                {open === id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden px-6 py-4 text-start">

                                                    <Text variant="label" className="font-light">{highlightText(item.answer)}</Text>

                                                </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </button>
                                        </div>
                                    )
                                })}
                            </div>
                            )))
                        }
                        </div>
                    </div>

                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
	</>;
}

export default Faq;

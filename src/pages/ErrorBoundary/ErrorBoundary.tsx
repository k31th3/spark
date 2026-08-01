
import { FaHeadset } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiPokerHeartsFill } from "react-icons/ri";
import { IconGradient } from "@/components";

import errorBoundary from "@/assets/errorBoundary.webp";

import { Component, type ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <div className="vstack gap-4">
                            
                            {/*modern illustration*/}
                            <div>
                            <img
                                src={errorBoundary}
                                alt="icon"
                                className="w-full h-full object-cover"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                            </div>

                            {/*title*/}
                            <div className="text-center">
                                <p className="font-black text-[42px] text-gradient w-[300px]
                                              mx-auto h-[100px] leading-none">
                                    We're making
                                    things better.
                                </p>
                            </div>

                            {/*body*/}
                            <div className="text-center text-[#5F6B76] text-[14px] mb-8 vstack gap-3">
                                <p className="text-black/70 font-medium">
                                Sometimes technology needs a quick tune-up
                                </p>
                                <span>
                                    We're currently improving this page so it'll
                                    be even better when you come back. 
                                </span>
                                <p>
                                    <div className="hstack gap-1 items-center justify-center">
                                        Thanks for your patience.<RiPokerHeartsFill className="text-purple-700"/>
                                    </div>
                                </p>
                            </div>

                            {/*footer*/}
                            <div className="w-[80%] mx-auto">
                                <div className="hstack gap-4 items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
                                        <IconGradient />
                                        <FaHeadset size={24} style={{ fill: "url(#iconGradient)" }} />
                                    </div>
                                    <div className="vstack gap-0">
                                        <ul>
                                            <li className="font-medium text-[12px]">Need something urgent?</li>
                                            <li className="text-purple-700 text-[16px] hstack gap-2 items-center cursor-pointer">
                                                Contact Spark Support <FaLongArrowAltRight />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

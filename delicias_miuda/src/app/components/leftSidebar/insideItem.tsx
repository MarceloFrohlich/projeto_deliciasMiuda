import { AccordionContent } from "@radix-ui/react-accordion";
import React from "react";

import { LuArrowRight } from "react-icons/lu";
import Link from 'next/link'

interface IInsideItem {
    text: string
    link: string
}

const InsideItem: React.FC<IInsideItem> = ({ text, link }) => {
    return (
        <Link className="m-0 p-0 " href={link}>
            <AccordionContent className="hover:cursor-pointer hover:underline underline-offset-4 duration-300 text-md ">
                <div className="flex gap-2 items-center">
                    <LuArrowRight />
                    <div className="text-elipsis">{text}</div>
                </div>
            </AccordionContent>
        </Link>
    )
}

export default InsideItem
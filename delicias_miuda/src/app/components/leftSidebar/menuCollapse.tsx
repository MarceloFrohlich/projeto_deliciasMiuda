import React, { ReactElement } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import InsideItem from "./insideItem";
import { v4 as uuidv4 } from 'uuid';

interface IMenuCollapse {
    title: string;
    icon: ReactElement;
    items: IInsideItem[];
    isExpanded: boolean;
}

interface IInsideItem {
    item: string;
    link: string;
}

const MenuCollapse: React.FC<IMenuCollapse> = ({ title, icon, items, isExpanded }) => {
    return (
        <div className={`w-full hover:cursor-pointer duration-300 text-md hover:bg-gray-200 `}>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="border-none pl-6 flex flex-col " value="title">
                    <div className="flex h-8 gap-2 items-center ">
                        <div className="text-lg">
                            {icon}
                        </div>
                        {isExpanded && (
                            <AccordionTrigger className="flex">
                                <p className="font-normal text-sm whitespace-nowrap">
                                    {title}
                                </p>
                            </AccordionTrigger>
                        )}
                    </div>
                    {isExpanded && (
                        <AccordionContent className="flex flex-col gap-3 pl-4">
                            {items && items.map((item) => (
                                <InsideItem link={item.link} key={uuidv4()} text={item.item} />
                            ))}
                        </AccordionContent>
                    )}
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default MenuCollapse;

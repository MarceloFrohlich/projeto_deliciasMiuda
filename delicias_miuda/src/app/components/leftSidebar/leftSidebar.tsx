"use client"
import { useState } from "react"
import LeftSidebarItem from "./leftSidebarItem";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { RiCake2Line } from "react-icons/ri";

const LeftSideBar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <aside className={`hidden pb-4 md:block overflow-y-auto finer-line-scrollbar h-svh pt-1.5 bg-slate-100 shadow-2xl duration-300  ${isExpanded ? "w-56" : "w-16"
            }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <ul className={`flex flex-col text-slate-600 w-full gap-2  pt-4`}>
                <Link
                    className="h-8 flex flex-col justify-center  hover:bg-gray-200"
                    href="/painel/usuarios"
                >
                    <LeftSidebarItem
                        icon={<FaRegUser />}
                        text="Gerenciar Usuários"
                        isExpanded={isExpanded}
                    />
                </Link>

                <Link
                    className="h-8 flex flex-col justify-center  hover:bg-gray-200"
                    href="/painel/produtos"
                >
                    <LeftSidebarItem
                        icon={<RiCake2Line />}
                        text="Gerenciar Produtos"
                        isExpanded={isExpanded}
                    />
                </Link>

            </ul>

        </aside>
    )
}

export default LeftSideBar
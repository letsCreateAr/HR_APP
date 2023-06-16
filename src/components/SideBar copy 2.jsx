import { useState } from "react";
function SideBar(){
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div className="flex">
        <div
            className={` ${
            open ? "w-72" : "w-20 "
            } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
        >
            <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-6 items-center">
                <div
                    class="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                    className={`cursor-pointer duration-500 ${
                    open && "rotate-[360deg] relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                    }`}
                >
                    <div
                        class="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                        className={`cursor-pointer duration-500 ${
                        !open && "relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                        }`}
                    >
                    </div>
                    <span 
                        class="font-medium text-gray-600"
                        className={`cursor-pointer duration-500 ${
                            !open && "relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                            }`}
                    >JS</span>
                </div>

                <div>
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                        !open && "scale-0"
                        }`}
                    >
                        Jin Seok
                    </h1>
                    <h1
                        className={`text-white origin-left font-normal text-xs duration-200 ${
                        !open && "scale-0"
                        }`}
                    >
                        IT/HR
                    </h1>
                </div>
            </div>

            <ul className="pt-6">
            {Menus.map((Menu, index) => (
                <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                } `}
                >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                </span>
                </li>
            ))}
            </ul>
        </div>
        <div className="h-screen flex-1 p-7">
            <h1 className="text-2xl font-semibold ">Today's Announcements</h1>
        </div>
        </div>
    );
};
export default SideBar;
import { useState } from "react";
function SideBar(){
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "My Tasks", src: "Chat" },
        { title: "Lunchtime", src: "User", gap: true },
        { title: "Contact List", src: "Calendar" },
        { title: "My Info", src: "Folder", gap: true },
        { title: "Settings", src: "Setting" },
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
                <div className="flex flex-row gap-x-6 items-center">
                    <div
                        class="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                        className={`cursor-pointer duration-500 ${
                        open && "relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                        }`}
                    >
                    <div
                        class="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                        className={`cursor-pointer duration-500 ${
                        !open && "rotate-[360deg] relative inline-flex items-center justify-center w-9 h-9 overflow-hidden rounded-full bg-gray-100"
                        }`}
                    >
                        <span class="font-medium text-gray-600">JS</span>
                    </div>
                    </div>

                    <div
                        className={`relative flex-col space-y-0 duration-500 ${
                        !open && "scale-0"
                        }`}
                    >
                        <div className="whitespace-nowrap text-white origin-left font-medium text-xl">Jin Seok</div>
                        <div className="whitespace-nowrap text-white origin-left font-regular text-xs">IT/HR</div>
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

                <h1 className="text-2xl font-semibold ">My Tasks</h1>
            </div>
        </div>
    );
};
export default SideBar;

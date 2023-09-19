"use client"
import React, { useState } from "react";
import ButtonArrow from "../button/buttonArrow";
import Card from "../card/card";
import { AiOutlineStock } from 'react-icons/ai';

interface TabProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openTab: any;
    setOpenTab: React.Dispatch<React.SetStateAction<any>>;
}
const Tab: React.FC<TabProps> = ({ openTab, setOpenTab }) => {
    return (
        <>
            <div className="inline-flex rounded-md bg-gray-100 text-gray-400 text-sm p-1 shadow-sm mt-2">

                <button className={"px-3 py-1 rounded-md " + (openTab === 1 ? "text-black bg-white shadow-md shadow-gray-300 " : "")} onClick={e => { e.preventDefault(); setOpenTab(1); }}>Overview</button>

                <button className={"px-3 py-1 rounded " + (openTab === 2 ? "text-black bg-white shadow-md shadow-gray-300" : "")} onClick={e => { e.preventDefault(); setOpenTab(2); }}>Analytics</button>

                <button className={"px-3 py-1 rounded " + (openTab === 3 ? "text-black bg-white shadow-md shadow-gray-300" : " ")} onClick={e => { e.preventDefault(); setOpenTab(3); }}>Reports</button>

            </div>
            {/* main */}
            <div className={`${openTab === 1 ? "block " : "hidden"}`}>
                <div className="grid lg:grid-cols-2 mt-3">
                    <div>
                        <div className="flex flex-col lg:flex-row bg-blue-100 mb-1.5 rounded-lg shadow-md">
                            <div className="basis-1/2 grid p-4 text-gray-700">
                                <p className="text-base">Total Revenue</p>
                                <p className="text-3xl font-bold">$97845.78</p>
                                <p className="text-xs">+20% from last month</p>
                            </div>
                            <div className="basis-1/2 bg-white my-auto hidden lg:grid grid-cols-2 justify-items-center rounded">
                                <div className="text-center mt-1">
                                    <p className="text-green-700 text-3xl ml-10"><AiOutlineStock /></p>
                                    <p className="text-3xl text-green-700 font-bold">+40.8%</p>
                                    <p className="text-xs">This month</p>
                                </div>
                                <div className="text-center mt-1">
                                    <p className="text-red-700 text-3xl ml-10"><AiOutlineStock /></p>
                                    <p className="text-3xl text-red-700 font-bold">-02.8%</p>
                                    <p className="text-xs">Last month</p>
                                </div>
                            </div>
                            <div className="basis-1/4 lg:grid justify-items-center hidden">
                                <ButtonArrow bgColor="bg-blue-200" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-1">
                            <div className="basis-1/2 bg-gray-200 pr-7 rounded-lg shadow-md">
                                <Card bgColor="bg-gray-300" heading="Total Organization" amount="$ 4587.27" text="+10% increased till now" />
                            </div>
                            <div className="basis-1/2 bg-blue-100 pr-7 lg:mt-0 mt-1.5 rounded-lg shadow-md ms-0 sm:ms-1.5">
                                <Card bgColor="bg-blue-200" heading="Total Organization" amount="$ 2314.27" text="+10% increased till from last month" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-lg shadow-md lg:mt-0 mt-2 shadow-md sm:ms-1.5 ms-0">Graph</div>
                </div>
            </div>
            <div className={openTab === 2 ? "block mt-3" : "hidden"}>
                Analytics Page
            </div>
            {openTab === 3 && (
                <div className="block mt-3">
                    Reports Content
                </div>
            )}
        </>
    )
}

export default Tab

import React, { useState } from "react";
import { BiSolidSortAlt } from "react-icons/bi";
import Datepicker from "../search/search";
import DefaultButton from "@/app/(auth)/component/button/buttons";
import ButtonWithIcon from "../button/buttonWithIcon";

const DefaultDropdown = () => {
    const [org, setorg] = useState(false);
    const [filter, setfilter] = useState(false);

    const FindByOrg = [
        { msg: <Datepicker placeholder="Search..." /> },
        { msg: "Test" },
        { msg: "Test" },
        { msg: "Test" },
    ];
    const sort = [
        { msg: "Test" },
        { msg: "Test" },
        { msg: "Test" },
    ];

    const bell = () => {
        setorg(!org);
        setfilter(false)
    };
    const filters = () => {
        setfilter(!filter);
        setorg(false)
    };
    return (
        <div>
            <ButtonWithIcon name="Find by organization" click={bell} icon={<BiSolidSortAlt />} click2={filters} name2="Filter" icon2={<BiSolidSortAlt />}/>
            {org && (
                <div
                    className="absolute right-0 z-10 mt-2 mr-3 text-xs text-gray-700 w-40 bg-white border rounded-md shadow-lg" onMouseLeave={() => { setorg(false); }}>
                    {FindByOrg.map((e, id) => {
                        return (
                            <div key={id}>
                                <div className="hover:bg-gray-100">
                                    <div className="col-span-3">
                                        <a href="#" className="block p-1">
                                            {e.msg}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {filter && (
                <div
                    className="absolute right-0 z-10 mt-2 mr-3 text-xs text-gray-700 w-40 bg-white border rounded-md shadow-lg" onMouseLeave={() => { setorg(false); }}>
                    {sort.map((e, id) => {
                        return (
                            <div key={id}>
                                <div className="hover:bg-gray-100">
                                    <div className="col-span-3">
                                        <a href="#" className="block p-1">
                                            {e.msg}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DefaultDropdown;

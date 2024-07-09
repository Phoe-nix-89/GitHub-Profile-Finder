import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import GithubCardsContainer from "../GithubCardsContainer/GithubCardsContainer";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex flex-col items-center justify-between">
            <input type="text" placeholder="Enter the name" className="h-8 w-56 pl-2 m-4"  onChange={(e) => {
                setSearchTerm(e.target.value);
            }} />
            {searchTerm ? <GithubCardsContainer search={searchTerm} /> : <div className="font-bold text-2xl" >Write the Username of the person to find</div>}
        </div>
    );
}

export default Home;

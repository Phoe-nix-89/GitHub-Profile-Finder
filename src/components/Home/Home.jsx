import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import GithubCardsContainer from "../GithubCardsContainer/GithubCardsContainer";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex flex-col items-center justify-between">
            <input type="text" placeholder="Enter the name" onChange={(e) => {
                setSearchTerm(e.target.value);
            }} />
            {searchTerm ? <GithubCardsContainer search={searchTerm} /> : <div className="font-bold">Write the name of the person to find</div>}
        </div>
    );
}

export default Home;

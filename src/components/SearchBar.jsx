import { useState } from "react";

export default function SearchBar({ onSearch }){
    const [input,setInput] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        onSearch(input);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className="search-input"
                placeholder="Enter city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="search-btn" type="submit">Search</button>
        </form>
    );
}
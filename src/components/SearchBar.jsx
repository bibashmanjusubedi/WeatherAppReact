import { useState } from "react";

export default function SearchBar({ onSearch }){
    const [input,setInput] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        onSearch(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Enter city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}
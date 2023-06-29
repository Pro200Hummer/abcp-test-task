import React from "react";
import {FetchUser} from "./features";

export function App() {
    return (
        <div>
            <header>Get a random user</header>
            <FetchUser/>
        </div>
    );
}

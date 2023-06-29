import React, {useState} from "react";
import {BASE_URL, User} from "./common";
import {UserInfo, Button} from "./components";

function App() {
    const [item, setItem] = useState<User | null>(null);

    const receiveRandomUser = async () => {
        const id = Math.floor(Math.random() * (10 - 1)) + 1;
        const response = await fetch(`${BASE_URL}/${id}`);
        const _user = (await response.json()) as User;
        setItem(_user)
    };

    const handleButtonClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        receiveRandomUser()
    };

    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={handleButtonClick}/>
            {item && (
                <UserInfo user={item}/>
            )}
        </div>
    );
}

export default App;

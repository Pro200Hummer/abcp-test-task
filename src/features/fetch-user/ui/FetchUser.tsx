import React, {useCallback, useEffect, useState} from 'react';
import {Button, UserInfo} from "../../../components";
import {BASE_URL, getFromSessionStorage, setToSessionStorage, User, useThrottle} from "../../../common";

export const FetchUser = () => {
    const [item, setItem] = useState<User | null>(null);

    const throttledValue = useThrottle(item)

    useEffect(() => {
        const cachedUser = getFromSessionStorage<User | null>('user', null)
        cachedUser && setItem(cachedUser)
    }, [])

    const receiveRandomUser = async () => {
        const id = Math.floor(Math.random() * (10 - 1)) + 1;
        const response = await fetch(`${BASE_URL}/${id}`);
        const _user = (await response.json()) as User;
        setItem(_user)
        setToSessionStorage('user', _user)
    };

    const handleButtonClick = useCallback((
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        receiveRandomUser()
    }, []);

    return (
        <div>
            <Button onClick={handleButtonClick}/>
            {throttledValue && (
                <UserInfo user={throttledValue}/>
            )}
        </div>
    );
};

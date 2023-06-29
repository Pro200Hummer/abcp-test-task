import React, {useCallback, useEffect, useState} from 'react';
import {Button, UserInfo} from "../../../components";
import {getFromSessionStorage, User, useThrottle} from "../../../common";
import {receiveRandomUser} from "../api";

export const FetchUser = () => {
    const [item, setItem] = useState<User | null>(null);

    const throttledValue = useThrottle(item)

    useEffect(() => {
        const cachedUser = getFromSessionStorage<User | null>('user', null)
        cachedUser && setItem(cachedUser)
    }, [])

    const handleButtonClick = useCallback((
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        receiveRandomUser(setItem)
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

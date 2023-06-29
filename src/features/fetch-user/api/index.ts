import {BASE_URL, setToSessionStorage, User} from "../../../common";

export const receiveRandomUser = async (
    setItem: (item: User | null) => void
) => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    const response = await fetch(`${BASE_URL}/${id}`);
    const _user = (await response.json()) as User;
    setItem(_user)
    setToSessionStorage('user', _user)
};

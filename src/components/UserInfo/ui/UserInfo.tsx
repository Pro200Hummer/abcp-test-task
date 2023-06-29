import React, {useMemo} from "react";
import {IUserInfoProps} from "../types";
import {generateNestedKeys, userInfoSchema} from "../utils";

export function UserInfo({user}: IUserInfoProps) {

    const userInfo = useMemo(() => {
        return generateNestedKeys(userInfoSchema, user)
    }, [user])

    return (
        <table>
            <thead>
            <tr>
                {userInfo[0].map((item, index) => (
                    <th key={`${item}_${index}`}>{item}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {userInfo[1].map((item, index) => (
                    <th key={`${item}_${index}`}>{item}</th>
                ))}
            </tr>
            </tbody>
        </table>
    );
}

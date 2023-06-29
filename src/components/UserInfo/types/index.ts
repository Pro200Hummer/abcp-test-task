import {User} from "../../../common";

export interface IUserInfoProps {
    user: User;
}

export type UserRenderInfoSchema = {
    [key in keyof User]: string
}

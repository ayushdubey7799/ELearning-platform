
import { Response } from 'express';
import {IUser} from "../models/user.model";
import {redis} from './redis';
import dotenv from 'dotenv';
dotenv.config();


interface ITokenOptions {
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite: 'lax' | 'strict' | 'none' | undefined;
    secure?: boolean;
}

export const sendToken = (user: IUser, statusCode: number, res:Response) => {
    const accessToken = user.SignAccessToken();
    const refreshToken = user.SignRefreshToken();

    // upload sesson to redis



    // parse environment variablrs to integrate with fallback values
}


































/*
'lax': The cookie will be sent with same-site requests (e.g., navigation within the same site), but not with cross-site requests triggered by links, iframes, etc.
'strict': The cookie will only be sent with same-site requests and not with any cross-site requests.
'none': The cookie can be sent with both same-site and cross-site requests.
----------------------
The secure property is optional. When set to true, it indicates that the cookie should only be sent over secure (HTTPS) connections.
*/
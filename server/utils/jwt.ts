
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

// parse environment variablrs to integrate with fallback values 
export const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE || '300', 10);
export const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_EXPIRE || '1200', 10);
// console.log(process.env.)

// options for cookies
export const accessTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax'
}

export const refreshTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax'
}

export const sendToken = (user: IUser, statusCode: number, res:Response) => {
    const accessToken = user.SignAccessToken();
    const refreshToken = user.SignRefreshToken();

    // upload session to redis
    redis.set(user._id,JSON.stringify(user) as any);


    

    // only set secure to true in production
    if(process.env.NODE_ENV === 'production'){
        accessTokenOptions.secure=true;
    }
    // console.log(accessToken,accessTokenOptions);
    res.cookie("access_token",accessToken,accessTokenOptions);
    res.cookie("refresh_token",refreshToken,refreshTokenOptions);
    res.status(statusCode).json({
        success: true,
        user,
        accessToken
    })

}


































/*
'lax': The cookie will be sent with same-site requests (e.g., navigation within the same site), but not with cross-site requests triggered by links, iframes, etc.
'strict': The cookie will only be sent with same-site requests and not with any cross-site requests.
'none': The cookie can be sent with both same-site and cross-site requests.
----------------------
The secure property is optional. When set to true, it indicates that the cookie should only be sent over secure (HTTPS) connections.
*/
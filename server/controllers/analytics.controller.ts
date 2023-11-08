import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import { generateLastTwelveMonthsData } from "../utils/analytics.generator";
import userModel from "../models/user.model";
import CourseModel from "../models/course.model";
import OrderModel from "../models/order.modal";



// get users analytics --- ony for admin
export const getUsersAnalytics = catchAsyncError(
    async(req: Request, res: Response, next: NextFunction) => {
        try{
            const users = await generateLastTwelveMonthsData(userModel);

            res.status(200).json({
                success: true,
                users,
            })
        }
        catch(error: any) {
            return next(new ErrorHandler(error.message,500));
        }
    }
)


// get orders analytics --- ony for admin
export const getOrdersAnalytics = catchAsyncError(
    async(req: Request, res: Response, next: NextFunction) => {
        try{
            const orders = await generateLastTwelveMonthsData(OrderModel);

            res.status(200).json({
                success: true,
                orders,
            })
        }
        catch(error: any) {
            return next(new ErrorHandler(error.message,500));
        }
    }
)

// get courses analytics --- ony for admin
export const getCoursesAnalytics = catchAsyncError(
    async(req: Request, res: Response, next: NextFunction) => {
        try{
            const courses = await generateLastTwelveMonthsData(CourseModel);

            res.status(200).json({
                success: true,
                courses,
            })
        }
        catch(error: any) {
            return next(new ErrorHandler(error.message,500));
        }
    }
)



































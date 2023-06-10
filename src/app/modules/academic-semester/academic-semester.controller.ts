import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { IAcademicSemester } from './academic-semester.interface'
import { AcademicSemesterService } from './academic-semester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    })
    next()
  }
)

export const AcademicSemesterController = {
  createSemester,
}
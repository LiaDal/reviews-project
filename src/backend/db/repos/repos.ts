import {UsersRepository} from './usersRepo';
import { ReviewsRepository } from './reviewsRepo'

// Database Interface Extensions:
export interface IExtensions {
    users: UsersRepository,
    reviews: ReviewsRepository,
}

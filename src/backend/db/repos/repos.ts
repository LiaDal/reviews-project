import { UsersRepository } from './usersRepo'
import { ReviewsRepository } from './reviewsRepo'
import { TagsRepository } from './tagsRepository'

export interface IExtensions {
  users: UsersRepository
  reviews: ReviewsRepository
  tags: TagsRepository
}

export interface IReview {
    title: string;
    content: string;
    rating: number;
    group: string;
    tags: string;
    //user_id: number;
}

export interface DbReview extends IReview {
    id: number;
}
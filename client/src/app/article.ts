export interface Article {
    success: boolean;
    data: {
        _id: string;
        title: string;
        body: string;
    }
};

export interface NewArticle {
    title: string;
    body: string;
    tags: string;
};
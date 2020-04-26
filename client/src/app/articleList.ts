interface article {
    _id: string;
    title: string;
};

export interface ArticleList {
    success: boolean;
    data: article[];
};
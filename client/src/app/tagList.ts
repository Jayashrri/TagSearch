interface tag {
    _id: string;
    name: string;
};

export interface TagList {
    success: boolean,
    data: tag[];
}
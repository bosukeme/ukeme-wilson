export type QuizObjType = {
    difficulty: string;
    qtype: string;
    category_id: number | string;
}

export type CategoryType = {
    name: string;
    id: number;
    isSelected: boolean;
}

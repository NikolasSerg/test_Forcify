export interface ITitleBlockProps {
    point: string,
    header: string,
    title: string,
    direction: Direction,
}

export enum Direction {
    ROW = "row",
    ROW_REVERS = "row_revers",
}
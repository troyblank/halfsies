export interface Log {
    date: string,
    amount: number,
    description: string,
    user: string
}

export interface LogState {
    log?: Log[],
}

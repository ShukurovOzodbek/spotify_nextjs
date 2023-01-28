export function getAlbums(data: any, count: number | string) {
    if (typeof count === 'string') return data
    else return data.slice(0, count)
} 
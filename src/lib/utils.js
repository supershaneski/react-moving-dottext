export const splitArray = (arr, rows) => {

    const itemsPerRow = Math.ceil(arr.length / rows)
    
    return arr.reduce((acc, val, ind) => {
        const currentRow = Math.floor(ind / itemsPerRow)
        if(!acc[currentRow]) {
            acc[currentRow] = [val]
        } else {
            acc[currentRow].push(val)
        }
        return acc
    }, [])
}

export function filterData(search, restaurants) {
    const filteredData = restaurants.filter((restaurant) => {
        return restaurant?.info?.name.toLowerCase().includes(search.toLowerCase())
    })
    return filteredData;
}
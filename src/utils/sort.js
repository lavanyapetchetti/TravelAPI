import { expect } from 'chai'; // Import your assertion library

/**
 * Sort ships by crew size and filter out those with null or zero crew size.
 * @param {Array} ships - Array of ship objects.
 * @param {string} order - Sort order ('asc' for ascending, 'desc' for descending).
 * @returns {Array} - Sorted array of ships.
 * @throws Will throw an error if input is not an array or if crew sizes are not numbers.
 */
export function sortAndFilterShips(ships, order = 'desc') {
    // Assert that the input is an array
    expect(ships).to.be.an('array');

    const sortedShips = ships
        .filter(ship => ship.ship.crew !== null && ship.ship.crew !== 0) // Filter out ships with null or zero crew size
        .sort((a, b) => {
            const comparison = a.ship.crew - b.ship.crew; // Ascending comparison
            return order === 'asc' ? comparison : -comparison; // Reverse for descending
        });

    // Assert that the result is also an array
    expect(sortedShips).to.be.an('array');

    // Optional: Assert that each ship in the sorted array has a valid crew size
    sortedShips.forEach(ship => {
        expect(ship.ship.crew).to.be.a('number'); // Ensure crew size is a number
    });

    return sortedShips;
}

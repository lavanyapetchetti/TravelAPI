import api from '../src/api.js';
import { expect } from 'chai';
import {sortAndFilterShips} from "../src/utils/sort.js";

let destinationId;

describe('Tripadvisor Cruises API Tests', function () {
    it('Should get the destination ID for the Caribbean', async() => {
        const response = await api.get('/cruises/getLocation');

        // Check if the response contains the expected location
        const caribbeanLocation = response.data.find(location => location.name === 'Caribbean');

        if (!caribbeanLocation) {
            throw new Error('Destination ID for Caribbean not found in the response');
        }

        destinationId = caribbeanLocation.destinationId; // Extract destinationId if location is found

        // Validate the destinationId
        if (destinationId === undefined || typeof destinationId !== 'number') {
            throw new Error('Invalid destinationId for Caribbean location');
        }

        console.log(`Found destinationId: ${destinationId}`);

    });

    it('Should get cruises for the Caribbean and sort by crew size', async() => {
        expect(destinationId).to.exist; // Checks that it's defined
        expect(destinationId).to.not.be.null; // Checks that it's not null
        // let destinationId = 147237;
        const cruisesResponse = await api.get(`/cruises/searchCruises?destinationId=${destinationId}&order=popularity&page=1&currencyCode=USD`);

        const sortedShips = sortAndFilterShips(cruisesResponse.data.list);

        // Log and display ship names sorted by crew size
        console.log('Ships sorted by crew size:');
        sortedShips.forEach(ship => {
            console.log(`Ship: ${ship.ship.name}, Crew Size: ${ship.ship.crew}`);
        });
    });

    // Additional tests can be added here, e.g., filtering cruises by shipId, etc.
});

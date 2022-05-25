const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');

describe('A RocketLauncher', () => {
    it('Should launch all rockets', () => {
        //arrange
        const nasaRocket = new Rocket('Nasa');
        const spaceXRocket = new Rocket('SpaceX');
        const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

        //action
        rocketLauncher.launchAllRockets();

        //Assert
        expect(nasaRocket.engineStatus).toEqual('active');
        expect(spaceXRocket.engineStatus).toEqual('active');
        expect(rocketLauncher.rockets.length).toEqual(0);
    });

    it('Should launch only one rocket by queue', () => {
        //arrange
        const nasaRocket = new Rocket('Nasa');
        const spaceXRocket = new Rocket('SpaceX');
        const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

        // Action
        rocketLauncher.launchRocketByQueue();

        // Assert
        expect(nasaRocket.engineStatus).toEqual('active');
        expect(spaceXRocket.engineStatus).toEqual('inactive');
        expect(rocketLauncher.rockets.length).toEqual(1);
    });
})
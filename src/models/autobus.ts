
export interface Autobus {
    BusPositions: [{
        DateTime?: Date,

        Deviation?: number,

        DirectionNum?: number,

        DirectionText?: string,

        Lat: number,

        Lon: number,

        RouteID?: string,

        TripEndTime?: Date,

        TripHeadsign?: string,

        TripID?: number,

        TripStartTime?: Date,

        VehicleID?: number,
    }]

}
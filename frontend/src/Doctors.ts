export interface Doctor {
    _id: string;
    name: string;
    image: string;
    specialty: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    available: Boolean;

    address: {
        line1: string;
        line2: string;
    };
}
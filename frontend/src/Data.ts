export interface UserData {
    name: string;
    image: string;
    email: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
    };
    gender: string; // Changed from literal type to accept both "Male" and "Female"
    dob: string;
}
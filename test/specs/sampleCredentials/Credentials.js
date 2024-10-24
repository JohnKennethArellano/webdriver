import moment from "moment";

class Credentials {
    constructor() {
        this.firstName = 'SampleFirstName';
        this.lastName = 'SampleLastName';
        this.email = this.getTimeAndDateAndSeatNumber();
        this.password = 'SamplePassword';
    }

    setCredentials(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getTimeAndDateAndSeatNumber() {
        const dateAndTime = moment(new Date()).format('YYYYMMDDHHMM');
        const seatNumber = 14;
        return `testsssss_${dateAndTime}${seatNumber}@testaq.com`;
    }
}

export default new Credentials();

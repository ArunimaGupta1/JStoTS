class Name{
    first_name: any;
    last_name: any;

    constructor(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    getName():any {
        var fullname = this.first_name + " " + this.last_name;
        return fullname;
    };
};
var author_name:Name;

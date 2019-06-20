//creating an address book using constructors and objects.
function Contact(first_name,second_name,phone_number,email,address){ //I also include here the address because the address is under the contact information.
    this.first_name=first_name;
    this.second_name=second_name;
    this.phone_number=phone_number;
    this.email=email;
    this.address=address; //Here you give the address any variable name which it will be able to notice throughout the code
}

function address_book(street,city,country){ //This is an independent constructor for the address
        this.street=street;
        this.city=city;
        this.country=country;
    }

Contact.prototype.addFullName = function(){
        return this.first_name + " , " + this.second_name}; //this is a prototype that returns the first name and the second name



var address1= new address_book('fourth street','kako','saudi arabia'); //here you input any address of your choice 
var address2= new address_book('st.van street','kampala','uganda'); //same as above.


var contact1 = new Contact('Vallerie','Kck','07027934555','karungivallerie@gmail.com',address1);// i included the address because i wanted the contact to easily notice or read the address information written above
var contact2 = new Contact('Rayton','Ags','0788131085','Rayton@gmail.com',address2);//same as above.

contact2.email;//here you can change to any information of your choice which you want to be displayed. 
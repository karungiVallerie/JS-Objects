function contact(first_name,second_name,phone_number,email,){
    this.first_name=first_name;
    this.second_name=second_name;
    this.phone_number=phone_number;
    this.email=email;
}

function address(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }

var address = new address('ntinda','fourth street','koko village');
var address = new address('kintu','st.van street','hen village');


var contact = new contact('Vallerie','K','07027934555','karungivallerie@gmail.com');
var contact = new contact('Rayton','A','0788121085','Rayton@gmail.com');

console.log(contact);

contact . prototype . fullname = function(){
    return this . first_name + " , " + second_name ;
}
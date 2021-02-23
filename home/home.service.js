class HomeService {
  constructor() {
    'ngInject';

    var contacts = [{
        id: 0,
        'name': 'John Smith',
        'email': 'john.smith@tcg.com',
        'age': 45
    },{
        id: 1,
        'name': 'Jane Doe',
        'email': 'jane.doe@tcg.com',
        'age': 33
    }, 
    {
        id: 2,
        'name': 'Jane Johnson',
        'email': 'jane.johnson@tcg.com',
        'age': 23
    }];
    
    var uid = contacts.length;
    var alertTxt = "";
    

    this.save = function (contact) {
        if (contact.name != null && !angular.isUndefined(contact.name)) {
            if (contact.id == null) {
                contact.id = uid++;
                contacts.push(contact);
                this.alertTxt = "Saved Successfully!";
            } else {
                for (var i in contacts) {
                    if (contacts[i].id == contact.id) {
                        contacts[i] = contact;
                    }
                }
                this.alertTxt = "Updated Successfully!";
            }
        } else {
            this.alertTxt = "Sorry, cannot be saved!";
        }
    }

    this.get = function (id) {
        for (var i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
    }

    this.delete = function (id) {
        for (var i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
        this.alertTxt = "Deleted Successfully!";
    }

    this.list = function (paging) {
        var results = {};
        results.paging = paging;
        results.contacts = contacts;
        return results;
    }
    }
}

export default HomeService;
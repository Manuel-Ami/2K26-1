type Roletype = ("admin" | "read" );

function assignRoles(role:Roletype) {
    switch (role) {
        case "admin":
            console.log("Fam is assigned an admin role");
            break;

        case "read":
            console.log("Nigga is assigned an read role");
            break;

        default:
            break;
    }
}

assignRoles("admin")









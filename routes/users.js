const express = require("express");

// Here users array in (./data/users.json) file is assigned to the users below as a variable & similar for books.json file
const {users} = require("../data/users.json");

// Below 'router' is same as that of 'app' we have used so far
const router = express.Router();


// Route : "/users"
// Method : GET
// Description : Get details of all the users
// Access : Public
// Parameters : None
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

// Route : "/users/:id"
// Method : GET
// Description : Get details of a specefic users through their id
// Access : Public
// Parameters : id
// Here :id is not the route (like /users) rather its a parameter 
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((data) => data.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: `User with id ${id} not found !!`,
        });
    }
    return res.status(200).json({
        success: true,
        data: user,
    });
});

// Route : "/users"
// Method : POST
// Description : Post details of a specefic users through their id
// Access : Public
// Parameters : none
router.post("/", (req, res) => {
    const { id, name, surname, email, issuedBook, issuedDate, returnDate, subscriptionType, subscriptionDate } = req.body;
    const user = users.find((data) => data.id === id);
    if (user) {
        return res.status(404).json({
            success: false,
            message: `User with id ${id} already exist !!`,
        });
    }
    users.push({
        id, name, surname, email, issuedBook, issuedDate, returnDate, subscriptionType, subscriptionDate,
    });
    return res.status(200).json({
        success: true,
        message: `User with id ${id} added successfully`,
    });
});

// Route : "/users/:id"
// Method : PUT
// Description : Update details of a specefic users through their id
// Access : Public
// Parameters : id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user = users.find((each) => each.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: `User with id ${id} does not exist !!`,
        });
    }
    const updatedUser = users.map((each) => {
        if (each.id === id) {
            return {
                /**Here (...) spread operator is used to convert object into data 
                 * i.e. {"name" : "anand"} into "name" : "anand"
                 *  Below for id where each.id === id
                 * each corresponding data changed i.e. included in the req.body will be reflected in the users array 
                 * and finally it will be assigned to the updatedUser array
                 * 
                 * if origanlly in users.id (for each.id === id) {
                 * "name" : "rohan",
                 * "age" : 56}
                 * 
                 * and req.body contains {
                 * "data" : {
                 * "name" : "anand"
                 * }
                 * } only, then
                 * 
                 * finally in the updatedUsers will contain
                 * {
                 * "name" : "anand",
                 * "age" : 56 (it will ramain as it is)
                  * } 
                 */
                ...each,
                ...data,
            };
        }
        return each;
    });

    return res.status(200).json({
        success: true,
        data: updatedUser,
    });
});

// Route : "/users/:id"
// Method : DELETE
// Description : Delete details of a specefic users through their id
// Access : Public
// Parameters : id
router.delete("/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: `User with id ${id} does not exist !!`,
        });
    }
    const index = users.indexOf(user);
    users.splice(index,1);

    return res.status(200).json({
        success: true,
        message: `User with id ${id} deleted successfully`,
        data : users,
    });
});

// Default export
module.exports = router;

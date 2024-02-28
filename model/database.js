import configPg from '../config/config.js'
import bcrypt from 'bcrypt'

const pool = configPg.pool

let getProducts = async ()=>{
    let [productsArray] = await pool.query(`
    SELECT * FROM tnfz_products
    `)
    // console.log(productsArray)
    return productsArray
}
// console.log(await getProducts());

let getUsers = async ()=>{
    let [usersArray] = await pool.query(`
    SELECT * FROM tnfz_users
    `)
    // console.log(usersArray)
    return usersArray
}
// console.log(await getUsers());

let getAProduct = async (id)=>{
    let [product] = await pool.query(`
    SELECT * from tnfz_products WHERE prodID = ?
    `, [id])
    return product
}
// console.log(await getAProduct(2));

let getAUser = async (id)=>{
    let [user] = await pool.query(`
    SELECT * from tnfz_users WHERE userID = ?
    `, [id])
    console.log("The getAUser fx is running correctly")
    return user
}
// console.log(await getAUser(2));

let checkUser = async (username)=>{
    let [user] = await pool.query(`
    SELECT * from tnfz_users WHERE username = ?
    `, [username])
    console.log("the checkUser fx definition is running correctly")
    return user
}
// check true
// console.log(await checkUser("Naeema"));
// check false
// console.log(await checkUser("kii kale"));



let addAProduct = async (prodName, quantity, price, category, prodDesc, imgUrl) =>{
    let insertProd = await pool.query(`
    INSERT INTO tnfz_products (prodName, quantity, price, category, prodDesc, imgUrl) VALUES (?, ?, ?, ?, ?, ?)
    `, [prodName, quantity, price, category, prodDesc, imgUrl]) 
    let [newProd] = await pool.query(`
    SELECT * FROM tnfz_products WHERE prodName = ?
    `, [prodName])
    return newProd
}
// console.log(await addAProduct("Phone 2", 2, "28.75", "HuaWei phone", "This is a phone with good quality for its pricepoint", "This is the url"))

// NOTE TO JODIE: 
//      1) This fx needs the product name to be unique else it will return
//         >1 item
//      2) All the fields in the "add product" modal need a "required" attribute since the columns in the database all have a "NOT NULL" constraint

// PROBLEM: This fx is not dynamic and requires ALL values to be present. This is necessary since the website will look untidy/uneven if there are some elements missing.

const addAUser = async(username, password, firstName, lastName, userAge, gender, emailAdd, userProfile)=>{
    let hashedPassword = bcrypt.hash(password, 10, async(err, hash) => {
        if (err){
          console.error(err);  
        } else {
            console.log(`Hashed password is as follows: ${hash}`)
            await pool.query(`
            INSERT INTO tnfz_users (username, hashedPassword, txtPassword,firstName, lastName, userAge, gender, emailAdd, userProfile) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,[username, hash, password, firstName, lastName, userAge, gender, emailAdd, userProfile] )
            console.log(`The following user was created: username = ${username}, password = ${password}, hashedPassword = ${hash}`)
        }
    }) // NOTE: Up till here runs correctly
    let [createdUser] = await checkUser(username)
    return createdUser
}

let editProduct = async (id, prodName, quantity, price, category, prodDesc, imgUrl) => {
    if(prodName){
        let editName = await pool.query(`
        UPDATE tnfz_products SET prodName = ? WHERE prodID = ?
        `, [prodName, id])
    } else {
        console.log("There is no product name to update")
    }
    // The code below is the ternary operator version of the conditional satatment above.
    let editQuantity = quantity ? await pool.query(`UPDATE tnfz_products SET quantity = ? WHERE prodID = ?`, [quantity, id]) : console.log("There is no quantity to be updated")

    let editPrice = price ? await pool.query(`UPDATE tnfz_products SET price = ? WHERE prodID = ?`, [price, id]) : console.log("There is no price to be updated")

    let editCategory = category ? await pool.query(`UPDATE tnfz_products SET category = ? WHERE prodID = ?`, [category, id]) : console.log("There is no category to be updated")

    let editProdDesc = prodDesc ? await pool.query(`UPDATE tnfz_products SET prodDesc = ? WHERE prodID = ?`, [prodDesc, id]) : console.log("There is no prodDesc to be updated")

    let editUrl = imgUrl ? await pool.query(`UPDATE tnfz_products SET imgUrl = ? WHERE prodID = ?`, [imgUrl, id]) : console.log("There is no imgUrl to be updated")

    let showProduct = await getAProduct(id)
    return showProduct
}

// Test 1: does the 'true' condition work
// await editProduct(10, "Testing editProduct() fx", 12, 15.32, "test editProduct() fx", "Let's say this is a url when it's actually a prodDesc", "This actually is a url")

// Test 2: does the 'false' condition work
// await editProduct(10, null, null, null, null, null)

// NOTE TO SELF: The conditional statements of the editProduct() fx work when true and when values are empty/null. The ternary operator work at true and false as well

// NOTE TO JODIE: This function needs a required at the id since it won't work w/out the product id.

let editUser = async (id, username, txtPassword, firstName, lastName, userAge, gender, emailAdd, userProfile, userRole) => {
    let editUsername = username ? await pool.query(`UPDATE tnfz_users SET username = ? WHERE userID = ?`, [username, id]) : console.log("There is no username to be updated")

    let editTxtpassword = txtPassword ? await pool.query(`UPDATE tnfz_users SET txtPassword = ? WHERE userID = ?`, [txtPassword, id]) : console.log("There is no txtPassword to be updated")

    let editHashPassword = txtPassword ? bcrypt.hash(txtPassword, 10, async(err, hash) => {
        if (err){
          console.error(err);  
        } else {
            console.log(`Hashed password is as follows: ${hash}`)
            await pool.query(`
            UPDATE tnfz_users SET hashedPassword = ? WHERE userID = ?
            `,[hash, id] )
        }
    }) : console.log("There is no hashPassword to be updated")

    let editFirstName = firstName ? await pool.query(`UPDATE tnfz_users SET firstName = ? WHERE userID = ?`, [firstName, id]) : console.log("There is no firstName to be updated")

    let editLastName = lastName ? await pool.query(`UPDATE tnfz_users SET lastName = ? WHERE userID = ?`, [lastName, id]) : console.log("There is no lastName to be updated")

    let editUserAge = userAge ? await pool.query(`UPDATE tnfz_users SET userAge = ? WHERE userID = ?`, [userAge, id]) : console.log("There is no userAge to be updated")

    let editGender = gender ? await pool.query(`UPDATE tnfz_users SET gender = ? WHERE userID = ?`, [gender, id]) : console.log("There is no gender to be updated")

    let editEmailAdd = emailAdd ? await pool.query(`UPDATE tnfz_users SET emailAdd = ? WHERE userID = ?`, [emailAdd, id]) : console.log("There is no emailAdd to be updated")

    let editUserProfile = userProfile ? await pool.query(`UPDATE tnfz_users SET userProfile = ? WHERE userID = ?`, [userProfile, id]) : console.log("There is no userProfile to be updated")

    let editUserRole = userRole ? await pool.query(`UPDATE tnfz_users SET userRole = ? WHERE userID = ?`, [userRole, id]) : console.log("There is no userRole to be updated")

    let editedUser = await getAUser(id)
    return editedUser
}

// Test 1: does the 'true' condition work
// await editUser(1, "username", "txtPassword", "firstName", "lastName", 15, "gender", "emailAdd", "userProfile")

// Test 2: does the 'false' condition work
// await editUser(1, null, null, null, null, null, null, null, null, "admin")

let deleteProduct = async (id) => {
    let deletedProduct = await getAProduct(id)
    let deleteTheProduct = await pool.query(`
    DELETE FROM tnfz_products WHERE prodID = ?
    `, [id])
    return deletedProduct
}
// console.log(await deleteProduct(13))


let deleteUser = async (id) => {
    let deletedUser = await getAUser(id)
    let deleteTheUser = await pool.query(`
    DELETE FROM tnfz_users WHERE userID = ?
    `, [id])
    return deletedUser
}
// console.log(await deleteUser(25))

export {getProducts, getAProduct, addAProduct, editProduct, deleteProduct, deleteUser, editUser, addAUser, getAUser, getUsers, checkUser}
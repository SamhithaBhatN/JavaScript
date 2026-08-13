let usersContainer = document.getElementById("users");
let detailsContainer = document.getElementById("details");


// ==========================================
// Fetch and display all users
// ==========================================

async function getUsers() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        users.forEach(function(user) {

            usersContainer.innerHTML += `
                <div>

                    <h3>${user.name}</h3>

                    <p>Email: ${user.email}</p>

                    <p>City: ${user.address.city}</p>

                    <button onclick="showUserDetails(${user.id})">
                        View Details
                    </button>

                </div>
            `;

        });

    }
    catch (error) {

        console.log(error.message);

    }

}


// ==========================================
// Fetch and display selected user's details
// ==========================================

async function showUserDetails(id) {

    try {

        let response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {

            throw new Error("Failed to fetch user details");

        }

        let user = await response.json();

        detailsContainer.innerHTML = `
            <h2>${user.name}</h2>

            <p>Email: ${user.email}</p>

            <p>Phone: ${user.phone}</p>

            <p>Website: ${user.website}</p>

            <p>City: ${user.address.city}</p>
        `;

    }
    catch (error) {

        console.log(error.message);

    }

}


// ==========================================
// Start application
// ==========================================

getUsers();
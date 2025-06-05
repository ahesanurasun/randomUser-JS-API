const userDiv = document.getElementById("user");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");


const API_URL = `https://randomuser.me/api/`;



const fetchUsers = async (url) => {
  try {
    showLoder();
    const response = await fetch(url);
    console.log(response);
    if(!response.ok){
      throw new Error("Somthing want wrong.....");
    }
    const data = await response.json();
    hideLoder();
    displayUser(data.results[0]);
  } catch (error) {
    console.log(error);
    hideLoder();
    errorDiv.innerHTML = `<h4>
          Something Went Wrong... Try again later
        </h4>`;
  }




};
const showLoder = () => {
  loader.style.display = "block";
};
const hideLoder = () => {
  loader.style.display = "none";
};
fetchUsers(API_URL);


function displayUser(user) {
  userDiv.innerHTML = `
         <div class=" max-w-[700px] mx-auto my-10">
        <a
          href="#"
          class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
        >
          <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
            <div class="sm:order-last sm:shrink-0">
              <img
                alt=""
                src="${user.picture.large}"
                class="size-16 rounded-full object-cover sm:size-[72px]"
              />
            </div>

            <div class="mt-4 sm:mt-0">
              <h3 class="text-lg font-medium text-pretty text-gray-900">
                ${user.name.title} ${user.name.first} ${user.name.last}
              </h3>

              <p class="mt-1 text-sm text-gray-700">ID: ${user.id.name} ${user.id.value} | Age: ${user.dob.age}</p>

              <p class="mt-4 line-clamp-2 text-xl text-pretty text-gray-800">
                Email: ${user.email} | Country: ${user.location.country}
              </p>
            </div>
          </div>

          <dl class="mt-6 flex gap-4 lg:gap-6">
            <div>
              <dt class="text-sm font-medium text-gray-700">Phone Number</dt>

              <dd class="text-xs text-gray-700">${user.phone}</dd>
            </div>

            <div>
              <dt class="text-sm font-medium text-gray-700">Gender</dt>

              <dd class="text-xs text-gray-700 capitalize">${user.gender} </dd>
            </div>
          </dl>
        </a>
      </div>
    `;
};


const generateUserBtn = document.getElementById("generate");
generateUserBtn.addEventListener("click", () => {
  fetchApi(API_URL);
});



const API_URL = `https://randomuser.me/api/`;

function fetchApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((user) => {
        console.log(user.results[0]);
        displayUser(user.results[0]);
    });
}

const userDiv = document.getElementById("user");

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

fetchApi(API_URL);

const generateUserBtn = document.getElementById("generate");
generateUserBtn.addEventListener("click", () => {
  fetchApi(API_URL);
});



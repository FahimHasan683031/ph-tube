const mainHandler = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const categories = data.data
    console.log(categories)
    // categories show
    const tabContainer = document.getElementById('tab-container');
    categories.forEach(element => {
        const tab = document.createElement('div');
        tab.innerHTML = `
        <a onclick="categoryPost(${element.category_id})" class=" px-4 py-2 rounded-md bg-gray-200">${element.category}</a> 
        `
        tabContainer.appendChild(tab);

    });
}


// category pst show
const categoryPost = async(categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    const posts = data.data;
    console.log(posts)
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';
    // post show
    posts.forEach(post => {
       const div = document.createElement('div');
       div.innerHTML = `
       <div class="  bg-base-100 shadow-xl px-3 pt-5">
       <figure><img class='rounded-md w-[312px] h-[180px]' src='${post.thumbnail}' alt="Shoes" /></figure>
       <div class=" py-7 flex gap-3">
           <div>
               <img class="rounded-full w-12 h-12" src='${post.authors[0].profile_picture}' alt="">
           </div>
           <div>
               <h2 class=" text-xl font-medium">${post.title}</h2>
               <div class="flex gap-3 my-2">
                   <p class="text-lg font-medium text-gray-500 ">${post.authors[0].profile_name}</p>
                   <img class="w-6" src="images/fi_10629607.jpg" alt="">
               </div>
               <h3 class="text-lg font-medium text-gray-500"> ${post.others.views} Views</h3>
               
           </div>
       </div>
   </div>
       `
       postContainer.appendChild(div);
    });
}
mainHandler()
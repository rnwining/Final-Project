const getApi = () => {
  console.log("This is the House Votes box")
  let list = document.querySelector("#house-list")
  axios.get("https://api.propublica.org/congress/v1/house/votes/recent.json", {headers:{"X-API-Key":"NJZb9o6fZp3LX9t74YBKcw1EBIv7VSRPs6zmioHa"}}).then(data=>{
    let houseData = data.data.results.votes
    houseData.forEach(vote=>{
    let item = document.createElement("li")
    item.innerHTML = vote.chamber
    list.appendChild(item)
})



    console.log(data.data.results.votes)
  })
}

document.addEventListener("DOMContentLoaded", getApi)

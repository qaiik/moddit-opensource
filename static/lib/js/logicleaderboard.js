$(function reset() {
    if (blacket.config) {
        let lb = document.querySelector("#app > div > div.arts__profileBody___eNPbH-camelCase > div > div > div > div:nth-child(3) > div")
        document.querySelector("#big-name").innerText = blacket.config.name
        blacket.requests.get("/worker/leaderboard", (data) => {
            if (data.error) return lb.innerText += "Something went wrong."
            data.forEach((player, index) => {
                lb.innerHTML += `${index + 1}. [${player.role}] ${player.username} - ${player.tokens.toLocaleString()}<br/>`
            })
        })
    } else setTimeout(reset, 1);
  });
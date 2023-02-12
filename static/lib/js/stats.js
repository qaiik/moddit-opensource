window.onload = () => {
    blacket.requests.get('/worker/blooks', (data) => {
        if (data.error) return
        blacket.blooks = data.blooks
        pass()
    })

}

function pass() {
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__headerRow___3mqZi-camelCase > div > div.styles__headerLeftRow___8vTJL-camelCase > div.styles__headerInfo___1oWlb-camelCase > div.styles__headerBanner___3Uuuk-camelCase > div.styles__headerName___1GBcl-camelCase").innerText = blacket.user.username
    let b = document.createElement("img")
    b.src = "content/blooks/Moddit.png"
    b.style.width = "100%"
    b.style.height = "100%"
    b.style.objectFit = "contain"
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__headerRow___3mqZi-camelCase > div > div.styles__headerLeftRow___8vTJL-camelCase > div.styles__headerBlookContainer___36zY5-camelCase").appendChild(b)
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__bottomContainer___3kOrb-camelCase > div > div > div.styles__topStats___3qffP-camelCase > div:nth-child(1) > div.styles__statNum___5RYSd-camelCase").innerText = blacket.user.tokens.toLocaleString()
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__bottomContainer___3kOrb-camelCase > div > div > div.styles__topStats___3qffP-camelCase > div:nth-child(3) > div.styles__statNum___5RYSd-camelCase").innerText = blacket.user.packsopened
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__bottomContainer___3kOrb-camelCase > div > div > div.styles__topStats___3qffP-camelCase > div:nth-child(2) > div.styles__statNum___5RYSd-camelCase").innerText = `${Object.keys(blacket.user.blooks).length} / ${Object.keys(blacket.blooks).length}`
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__bottomContainer___3kOrb-camelCase > div > div > div.styles__topStats___3qffP-camelCase > div:nth-child(4) > div.styles__statNum___5RYSd-camelCase").innerText = blacket.user.messagessent
    document.querySelector("#app > div > div.arts__profileBodyMax___3SXtp-camelCase > div > div.styles__headerRow___3mqZi-camelCase > div > div.styles__headerLeftRow___8vTJL-camelCase > div.styles__headerInfo___1oWlb-camelCase > div.styles__headerBanner___3Uuuk-camelCase > div.styles__headerTitle___24Ox2-camelCase").innerText = blacket.user.role
    document.querySelector("#big-name").innerText = blacket.config.name
}

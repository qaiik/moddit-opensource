const claim = document.querySelector("#claimButton > div.styles__front___vcvuy-camelCase > div")
claim.addEventListener("click", () => {
    blacket.requests.get('/worker/claim', data => {
        if (!data.error) location.reload()
    })
})
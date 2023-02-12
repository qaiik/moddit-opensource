$(function reset() {
    if (blacket.user) {
        if (blacket.getParameter("plus") == "") {
            $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Congratulations!<br><br>You now have access to all ${blacket.config.name} Plus features!<br><br>Thank you for supporting ${blacket.config.name}!</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
            $("#closeButton").click(() => {
                $(".arts__modal___VpEAD-camelCase").remove();
            });
            window.history.replaceState({}, document.title, "/stats");
        }
        if (blacket.getParameter("1hBooster") == "") {
            $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Congratulations!<br><br>You have received a 1 Hour Booster.<br><br>Thank you for supporting ${blacket.config.name}!</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
            $("#closeButton").click(() => {
                $(".arts__modal___VpEAD-camelCase").remove();
            });
            window.history.replaceState({}, document.title, "/stats");
        }
        if (blacket.getParameter("3hBooster") == "") {
            $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Congratulations!<br><br>You have received a 3 Hour Booster.<br><br>Thank you for supporting ${blacket.config.name}!</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
            $("#closeButton").click(() => {
                $(".arts__modal___VpEAD-camelCase").remove();
            });
            window.history.replaceState({}, document.title, "/stats");
        }
        if (new Date(blacket.user.claimed * 1000).toLocaleDateString('en-US', {
                timeZone: "UTC"
            }) == new Date(Date.now()).toLocaleDateString('en-US', {
                timeZone: "UTC"
            })) $("#claimButton").remove();
        else {
            $("#claimButton").click(() => {
                if (blacket.user.username !== blacket.user.current) {
                    $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>You must be viewing your account to continue.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                    $("#closeButton").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                    return;
                }
                blacket.startLoading();
                blacket.requests.get("/worker/claim", (data) => {
                    if (!data.error) {
                        blacket.user.tokens += blacket.config.rewards;
                        $("#claimButton").remove();
                        let tokens = 0;
                        let interval = setInterval(() => {
                            tokens += Math.ceil((blacket.config.rewards - tokens) / 35);
                            $(".styles__topStats___3qffP-camelCase > div:nth-child(1) > div:nth-child(2)").html(`${(blacket.user.tokens - blacket.config.rewards + tokens).toLocaleString()}`);
                            if (tokens == blacket.config.rewards) clearInterval(interval);
                        }, 1);
                        $(".styles__topStats___3qffP-camelCase > div:nth-child(1) > div:nth-child(2)").html(`${blacket.user.tokens.toLocaleString()}`);
                    } else {
                        $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>${data.reason}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                        $("#closeButton").click(() => {
                            $("#errorModal").remove();
                        });
                    }
                    blacket.stopLoading();
                });
            });
        }
        blacket.requests.get("/worker/blooks", (data) => {
            blacket.blooks = data.blooks;
            blacket.requests.get("/worker/packs", (data) => {
                blacket.packs = data.packs;
                $("#viewStatsButton").click(() => {
                    $("body").append(`<div class="arts__modal___VpEAD-camelCase">
            <form class="styles__container___1BPm9-camelCase">
                <div class="styles__text___KSL4--camelCase">Enter their username.</div>
                <div class="styles__holder___3CEfN-camelCase">
                    <div class="styles__numRow___xh98F-camelCase">
                        <div style="border: 3px solid rgba(0, 0, 0, 0.17);
                        border-radius: 6px;
                        width: 90%;
                        height: 50px;
                        margin: 0px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;"><input style="  border: none;
                        height: 40px;
                        line-height: 40px;
                        font-size: 28px;
                        text-align: center;
                        font-weight: 700;
                        font-family: Nunito, sans-serif;
                        color: #ffffff;
                        background-color: #3f3f3f;
                        outline: none;
                        width: 100%;
                      " placeholder="Username" maxlength="16" value="" style="width: 60px;"/></div>
                    </div>
                    <div class="styles__buttonContainer___2EaVD-camelCase">
                        <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0">
                            <div class="styles__shadow___3GMdH-camelCase"></div>
                            <div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div>
                            <div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">View</div>
                        </div>
                        <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0">
                            <div class="styles__shadow___3GMdH-camelCase"></div>
                            <div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div>
                            <div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div>
                        </div>
                    </div>
                </div>
                <input type="submit" style="opacity: 0; display: none;" />
            </form>
                    </div>`);
                    $(".styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)").focus();
                    $("div.styles__button___1_E-G-camelCase:nth-child(2)").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                    $(`.styles__container___1BPm9-camelCase`).submit((event) => {
                        event.preventDefault();
                        blacket.getUser($(".styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)").val());
                    });
                    $("div.styles__button___1_E-G-camelCase:nth-child(1)").click(() => {
                        blacket.getUser($(".styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)").val());
                    });
                    $("div.styles__button___1_E-G-camelCase:nth-child(2)").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                });
                $("#tradeButton").click(() => {
                    if (blacket.user.current !== blacket.user.username) return blacket.tradeUser(blacket.user.current);
                    $("body").append(`<div class="arts__modal___VpEAD-camelCase">
            <form class="styles__container___1BPm9-camelCase">
                <div class="styles__text___KSL4--camelCase">Who would you like to trade with?</div>
                <div class="styles__holder___3CEfN-camelCase">
                    <div class="styles__numRow___xh98F-camelCase">
                        <div style="border: 3px solid rgba(0, 0, 0, 0.17);
                        border-radius: 6px;
                        width: 90%;
                        height: 50px;
                        margin: 0px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;"><input style="  border: none;
                        height: 40px;
                        line-height: 40px;
                        font-size: 28px;
                        text-align: center;
                        font-weight: 700;
                        font-family: Nunito, sans-serif;
                        color: #ffffff;
                        background-color: #3f3f3f;
                        outline: none;
                        width: 100%;
                      " placeholder="Username" maxlength="16" value="" style="width: 60px;"/></div>
                    </div>
                    <div class="styles__buttonContainer___2EaVD-camelCase">
                        <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0">
                            <div class="styles__shadow___3GMdH-camelCase"></div>
                            <div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div>
                            <div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Send Request</div>
                        </div>
                        <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0">
                            <div class="styles__shadow___3GMdH-camelCase"></div>
                            <div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div>
                            <div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div>
                        </div>
                    </div>
                </div>
                <input type="submit" style="opacity: 0; display: none;" />
            </form>
                    </div>`);
                    $(".styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)").focus();
                    $("div.styles__button___1_E-G-camelCase:nth-child(2)").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                    $(`.styles__container___1BPm9-camelCase`).submit((event) => {
                        event.preventDefault();
                        blacket.tradeUser($(".styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)").val());
                    });
                    $("div.styles__button___1_E-G-camelCase:nth-child(1)").click(() => {
                        blacket.tradeUser($(".styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)").val());
                    });
                    $("div.styles__button___1_E-G-camelCase:nth-child(2)").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                });
                rainbow = false;
                blacket.getUser = (user) => {
                    $(".arts__modal___VpEAD-camelCase").remove();
                    blacket.startLoading();
                    blacket.requests.get(`/worker/user/${user}`, (data) => {
                        if (data.error) {
                            $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>${data.reason}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                            $("#closeButton").click(() => {
                                $("#errorModal").remove();
                            });
                            blacket.stopLoading();
                            return;
                        }
                        if (data.user.username !== blacket.user.username) history.pushState(null, null, `/stats?name=${data.user.username}`);
                        else history.pushState(null, null, `/stats`);
                        blacket.setUser(data.user);
                        blacket.stopLoading();
                    });
                }
                blacket.setUser = (user) => {
                    $("#goBackButton").remove();
                    blacket.user.current = user.username;
                    user.level = 0;
                    for (let i = 0; i <= 27915; i++) {
                        user.needed = 5 * Math.pow(user.level, blacket.config.exp.difficulty) * user.level;
                        if (user.exp >= user.needed) {
                            user.exp -= user.needed;
                            user.level++;
                        }
                    }
                    $(".styles__headerBlook___DdSHd-camelCase").html(``);
                    $(".styles__headerName___1GBcl-camelCase").html(`${user.username} `);
                    if (user.badges.length > 0) $(".styles__headerBadges___ffKa4-camelCase").html(`<img loading="lazy" class="styles__headerBadgeBg___12ogR-camelCase" draggable="false" src="/content/banners/Default.png">`);
                    else $(".styles__headerBadges___ffKa4-camelCase").html(``);
                    Object.keys(blacket.badges).forEach((badge) => {
                        if (user.badges.includes(badge) || user.badges.includes("*")) {
                            $(".styles__headerBadges___ffKa4-camelCase").append(`<div id="${badge.replaceAll(" ", "-")}" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy"src="${blacket.badges[badge].image}" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div>`);
                            $(`#${badge.replaceAll(" ", "-")}`).click(() => {
                                $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>${badge} Badge<br><br>${blacket.badges[badge].description}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                                $("#closeButton").click(() => {
                                    $(".arts__modal___VpEAD-camelCase").remove();
                                });
                            });
                        }
                    });
                    $(".styles__headerName___1GBcl-camelCase").attr("style", `color: ${user.color}`);
                    if (user.color.toLowerCase() == "rainbow") $(".styles__headerName___1GBcl-camelCase").attr("class", `styles__headerName___1GBcl-camelCase rainbow`);
                    else $(".styles__headerName___1GBcl-camelCase").attr("class", `styles__headerName___1GBcl-camelCase`);
                    $(".styles__headerTitle___24Ox2-camelCase").html(`${user.role}`);
                    let onlineColor = "red";
                    if (user.modified * 1000 > Date.now() - 60000) onlineColor = "green";
                    $(".styles__headerBlook___DdSHd-camelCase").append(`<img loading="lazy" src="${user.avatar}" style="filter: drop-shadow(0px 0px 5px ${onlineColor});" draggable="false" class="styles__blook___1R6So-camelCase" />`);
                    $(".styles__headerBg___12ogR-camelCase").attr("src", user.banner);
                    $(".styles__topStats___3qffP-camelCase > div:nth-child(1) > div:nth-child(2)").html(`${user.tokens.toLocaleString()}`);
                    let blookLength = 0;
                    let maxBlooks = 0;
                    Object.keys(blacket.packs).forEach((pack) => {
                        Object.keys(blacket.packs[pack].blooks).forEach(blook => {
                            maxBlooks++;
                        });
                    });
                    Object.keys(user.blooks).forEach((blook) => {
                        if (blacket.blooks[blook]) blookLength++;
                    });
                    $("div.styles__statContainer___QKuOF-camelCase:nth-child(2) > div:nth-child(2)").html(`${blookLength.toLocaleString()} / ${maxBlooks.toLocaleString()}`);
                    $("div.styles__statContainer___QKuOF-camelCase:nth-child(3) > div:nth-child(2)").html(`${user.misc.opened.toLocaleString()}`);
                    $("div.styles__statContainer___QKuOF-camelCase:nth-child(4) > div:nth-child(2)").html(`${user.misc.messages.toLocaleString()}`);
                    if (user.level >= 100) {
                        if (!rainbow) $("body").append(`<style id="rainbow">.styles__levelBarInside___3FLAG-camelCase {background: linear-gradient(#fcd843, #fcd843 50%, #feb31a 50.01%, #feb31a);height: 100%;width: 100%;transform-origin: left center;animation: styles__levelBarRainbow___3FLAG-camelCase 2s linear infinite;}</style>`);
                        rainbow = true;
                    } else {
                        $("#rainbow").remove();
                        rainbow = false;
                    }
                    $(".styles__levelStarText___2Myxg-camelCase").html(user.level.toLocaleString());
                    $(".styles__levelBarInside___3FLAG-camelCase").css("transform", `scaleX(${user.exp / user.needed})`);
                    if (user.username !== blacket.user.username) {
                        $(".styles__headerLeftButtons___3zGk0-camelCase").append(`<a id="goBackButton" class="styles__button___1_E-G-camelCase styles__headerButton___36TRh-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #7e29fc;"></div><div class="styles__front___vcvuy-camelCase" style="background-color: #7e29fc;"><div class="styles__headerButtonInside___26e_U-camelCase"><i class="styles__headerButtonIcon___1pOun-camelCase fas fa-reply" aria-hidden="true"></i>Go Back</div></div></a>`);
                        $("#goBackButton").click(() => {
                            blacket.getUser(``);
                            history.pushState(null, null, `/stats`);
                            $("#goBackButton").remove();
                        });
                    }
                }
                blacket.tradeUser = (user) => {
                    blacket.startLoading();
                    $(".arts__modal___VpEAD-camelCase").remove();
                    blacket.requests.get(`/worker/user/${user}`, (data) => {
                        if (data.error) {
                            $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>${data.reason}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                            $("#closeButton").click(() => {
                                $("#errorModal").remove();
                            });
                            blacket.stopLoading();
                            return;
                        }
                        blacket.stopLoading();
                        $("body").append(`<div id="waitingForModal" class="loaderModal"><div class="loader"><div class="blookContainerLoader loaderBox"><img loading="lazy" src="/content/logo.png" class="loaderBlook" /></div><div class="styles__shadow___3OUHP-camelCase"></div></div><text class="styles__waitingForText__G5A73-camelCase">Waiting for ${data.user.username} to accept...</text><div id="cancelButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0" style="position: absolute;left: 50%;top: 64.5%;transform: translate(-50%, -50%);"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div></div></div>`);
                        $("#cancelButton").click(() => {
                            $("#waitingForModal").remove();
                            blacket.socket.emit("cancel");
                        });
                        blacket.socket.emit("request", data.user.id);
                    });
                }
                blacket.requests.get("/worker/badges", (data) => {
                    blacket.badges = data.badges;
                    blacket.setUser(blacket.user);
                    if (blacket.getParameter("name")) blacket.getUser(blacket.getParameter("name"));
                });

                blacket.setBlook = (blook) => {
                    blacket.startLoading();
                    blacket.requests.post("/worker/set", {
                        type: "blook",
                        blook: blook
                    }, (data) => {
                        blacket.stopLoading();
                        if (data.error) {
                            $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>${data.reason}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                            $("#closeButton").click(() => {
                                $("#errorModal").remove();
                            });
                            return;
                        }
                        blacket.user.avatar = blacket.blooks[blook].image;
                        $(".styles__headerBlook___DdSHd-camelCase > img:nth-child(1)").attr("src", blacket.blooks[blook].image);
                        $(".styles__profileBlook___37mfP-camelCase > img:nth-child(1)").attr("src", blacket.blooks[blook].image);
                    });
                }
                $(".styles__headerBlookContainer___36zY5-camelCase").click(() => {
                    if (blacket.user.username !== blacket.user.current) {
                        $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>You must be viewing your account to continue.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                        $("#closeButton").click(() => {
                            $(".arts__modal___VpEAD-camelCase").remove();
                        });
                        return;
                    }
                    $("#app > div").append(`<div class="arts__modal___VpEAD-camelCase"><div class="styles__container___3St5B-camelCase"><div class="styles__blooksHolder___1skET-camelCase"></div></div></div>`);
                    $(".arts__modal___VpEAD-camelCase").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    })
                    Object.keys(blacket.user.blooks).forEach((blook) => {
                        if (!blacket.blooks[blook]) return;
                        $(".styles__blooksHolder___1skET-camelCase").append(`
                    <div id="${blook.replaceAll(' ', '-').replaceAll("'", "_")}" class="styles__blookContainer___hvHJM-camelCase" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___3FnM0-camelCase"><img loading="lazy" src="${blacket.blooks[blook].image}" alt="${blook}" draggable="false" class="styles__blook___1R6So-camelCase"></div></div>`);
                        $(`#${blook.replaceAll(' ', '-').replaceAll("'", "_")}`).click(() => {
                            blacket.setBlook(blook);
                        });
                    });
                });
            });
        });
        blacket.requests.get("/worker/banners", (data) => {
            blacket.banners = data.banners;
            blacket.setBanner = (banner) => {
                blacket.startLoading();
                blacket.requests.post("/worker/set", {
                    type: "banner",
                    banner: banner
                }, (data) => {
                    blacket.stopLoading();
                    if (data.error) {
                        $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>${data.reason}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                        $("#closeButton").click(() => {
                            $("#errorModal").remove();
                        });
                        return;
                    }
                    blacket.user.banner = blacket.banners[banner].image;
                    $(".styles__headerBg___12ogR-camelCase").attr("src", blacket.banners[banner].image);
                });
            }
            $(".styles__headerBanner___3Uuuk-camelCase").click(() => {
                if (blacket.user.username !== blacket.user.current) {
                    $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>You must be viewing your account to continue.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                    $("#closeButton").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                    return;
                }
                if (!blacket.user.perms.includes("change_banner") && !blacket.user.perms.includes("*")) {
                    $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>You need ${blacket.config.name} Plus to change your banner.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
                    $("#closeButton").click(() => {
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                    return;
                }
                $("body").append(`<div class="arts__modal___VpEAD-camelCase"><div class="styles__editHeaderContainer___2G1ji-camelCase"><div class="styles__editHeaderColumn___2ye6v-camelCase"></div></div></div>`);
                Object.keys(blacket.banners).forEach((banner) => {
                    $(".styles__editHeaderColumn___2ye6v-camelCase").append(`<div id="${banner.replaceAll(" ", "-").replaceAll("'", "_")}" class="styles__editBanner___vkKiZ-camelCase" role="button" tabindex="0"><img loading="lazy" src="${blacket.banners[banner].image}" class="styles__editBannerImg___2eCH9-camelCase" draggable="false"></div>`);
                    $(`#${banner.replaceAll(" ", "-").replaceAll("'", "_")}`).click(() => {
                        blacket.setBanner(banner);
                        $(".arts__modal___VpEAD-camelCase").remove();
                    });
                });
                $(".arts__modal___VpEAD-camelCase").click(() => {
                    $(".arts__modal___VpEAD-camelCase").remove();
                });
            });
        });
        blacket.stopLoading();
    } else setTimeout(reset, 1);
});
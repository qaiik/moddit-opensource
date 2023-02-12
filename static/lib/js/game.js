$(function reset() {
    if (blacket.config && blacket.socket && blacket.socket.on) {
            Object.keys(blacket.config.pages).forEach(page => {
                if (true) {
                    if (blacket.config.pages[page].location === "left") {
                        if (blacket.config.pages[page].isNews) {
                            let buttonId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
                            $(".styles__sidebar___1XqWi-camelCase > div:nth-child(2)").append(`<a id="${buttonId}" class="styles__pageButton___1wFuu-camelCase"><i class="styles__pageIcon___3OSy9-camelCase ${blacket.config.pages[page].icon}" aria-hidden="true"></i><div class="styles__pageText___1eo7q-camelCase">${page}</div></a>`)
                            $(`#${buttonId}`).click(() => {
                                $(".styles__container___3LSgB-camelCase").attr("style", `transform: translateX(-100%); opacity: 1;`);
                                $("#app > div:nth-child(1) > div:nth-child(1)").append(`<div class="arts__modal___VpEAD-camelCase" role="button" tabindex="0" style="outline: currentcolor none medium; opacity: 0.8;"></div>`);
                                $(".arts__modal___VpEAD-camelCase").click(() => {
                                    $(".arts__modal___VpEAD-camelCase").remove();
                                    $(".styles__container___3LSgB-camelCase").attr("style", `transform: translateX(0px); opacity: 0;`);
                                });
                            });
                        } else $(".styles__sidebar___1XqWi-camelCase > div:nth-child(2)").append(`<a class="styles__pageButton___1wFuu-camelCase" href="${blacket.config.pages[page].link}"><i class="styles__pageIcon___3OSy9-camelCase ${blacket.config.pages[page].icon}" aria-hidden="true"></i><div class="styles__pageText___1eo7q-camelCase">${page}</div></a>`);
                    } else {
                        if (blacket.config.pages[page].isNews) {
                            let buttonId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
                            $(".styles__bottomRow___3OozA-camelCase").append(`<a id="${buttonId}" class="styles__smallButton___sQuq8-camelCase" currentitem="false"><i class="styles__bottomIcon___3Fswk-camelCase ${blacket.config.pages[page].icon}" aria-hidden="true"></i></a>`)
                            $(`#${buttonId}`).click(() => {
                                $(".styles__container___3LSgB-camelCase").attr("style", `transform: translateX(-100%); opacity: 1;`);
                                $("#app > div:nth-child(1) > div:nth-child(1)").append(`<div class="arts__modal___VpEAD-camelCase" role="button" tabindex="0" style="outline: currentcolor none medium; opacity: 0.8;"></div>`);
                                $(".arts__modal___VpEAD-camelCase").click(() => {
                                    $(".arts__modal___VpEAD-camelCase").remove();
                                    $(".styles__container___3LSgB-camelCase").attr("style", `transform: translateX(0px); opacity: 0;`);
                                });
                            });
                        } else $(".styles__bottomRow___3OozA-camelCase").append(`<a data-tip="${page}" class="styles__smallButton___sQuq8-camelCase" href="${blacket.config.pages[page].link}" currentitem="false"><i class="styles__bottomIcon___3Fswk-camelCase ${blacket.config.pages[page].icon}" aria-hidden="true"></i></a>`)
                    }
                }
            });
    } else setTimeout(reset, 1);
});
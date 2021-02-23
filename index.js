
if (isMobile()) {
    var heightArray = ["920", "865", "875", "1820", "1780"];
    var recommendHeight = ["1600", "1600", "1687", "1687", "1820"];
} else {
    var heightArray = ["1050", "1020", "975", "1920", "1100"];
    var recommendHeight = ["1150", "1150", "1150", "1150", "1150"];
}
var pageIndex = 0;

// var SHAREURL = "https://www.our-work.com.tw/demosite/2020/2020-IBM/app/api/";
var SHAREURL = location.protocol+"//"+location.host+"/";

var answerArray = ["資安新人式崩潰", "眼神死式崩潰", "切洋蔥式崩潰", "8+9式崩潰", "抓馬影帝式崩潰"];
var subArray = [
    "連續加班沒時間刮鬍子",
    "把上班當作功德",
    "生活多辛酸，就有多鼻酸",
    "不知不覺拳頭硬了起來",
    "如果能重來，不要當資安",
];

var recommendTitle = [
    ["IBM QRadar Security<br>Intelligence Platform", "QRadar "],
    ["IBM X-Force Exchange", "X-Force Exchange "],
    ["IBM Security Guardium", "Security Guardium "],
    ["IBM Cloud Identity", "Cloud Identity "],
    ["IBM Cloud Pak for Security", "Cloud Pak for Security "]
];
var recommendContent = [
    ["AI感知並偵測詐騙、內⿁和進階威脅，立即將事件正規化並產⽣相互關聯。", "感知、追蹤並連結重⼤事件和威脅，並搭配Data Store授權提供⽇誌無限量儲存且強制執⾏資料隱私原則。", "從IBM X-Force提供專業即時威脅情報，能在本地或雲端環境中部署QRadar SIEM。"],
    ["監控超過250億個網頁是否有Web威脅，並由超過96,000個漏洞的資料庫作為支援。", "全球使用者可透過公開或私密群組共享研究、驗證威脅與研議攻擊回應計畫。", "提供API讓您無縫整合各式安全相關應用，包括支援開放式的標準環境。威脅預警直接串接使用。"],
    ["滿足企業合規報告和審計需求，企業需滿足合規和監管需求，包括:HIPA，PCI/DSS，以及歐盟法規GDPR等。", "提高了對於敏感性資料的可視性，發現、瞭解資料並進行分，幫助發現潛在的問題來源。 ", "完整保護整個企業環境內的敏感性資料。透過即時保護工具，降低員工從事非預期存取的風險，持續監控企業環境內存取，確保資料庫、資料倉儲、Hadoop、NoSQL以及檔共用庫等各種資料儲存系統的安全。"],
    ["所有裝置單一登入(SSO)，提供統一的應用程式啟動程式和SSO，以便從任何裝置都能單一登入任何應用程式。 ", "使用2FA登入任何企業系統，使用彈性的MFA來保護Web、雲端、行動、VPN及作業系統。", "監測管理雲端使用，要求、核准、供應與重新認證使用者的應用程式存取。透過風險評分、法規遵循資料及URL位置來評估並瞭解雲端應用程式風險。"],
    ["在不移動資料的情況下獲得安全洞察。連接所有資料來源，以發現隱藏的威脅，無需移動資料、跨任何安全工具或者跨雲來搜索威脅。", "自動的快速回應安全事件，在統一的介面下把安全工作流程與自動規程連接起來，支援企業編排數百種常見安全場景的回應。", "可在任何地方運行、開放的安全連接，輕鬆地安裝在任何環境中，無論是本地、私有雲還是公有雲。它提供的統一介面簡化了操作，由預先整合Red Hat OpenShift的容器化軟體組成 - OpenShift是行業最完整的企業級Kubernetes平台。 "]
]

var saveResult = 0;

var phoneType = /^[0]{1}[9]{1}[0-9]{8}$/;
var mailType = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;;

var FORM_FAMILYNAME;
var FORM_GIVENNAME;
var FORM_PHONE;
var FORM_COMPANY;
var FORM_COMPANYSIZE;
var FORM_DEPT;
var FORM_JOB;
var FORM_EMAIL;

var email_verification;
var phone_verification;

function checkVal() {
    for (i = 0; i < 5; i++) {
        if (document.getElementById('check_' + i).checked) {
            saveResult++;
            pageIndex = i;
            $(".swiper-wrapper").append('<div class="recommend__slider swiper-slide"><div class="recommend__left"><p class="recommend__subtitle">防止繼續崩潰最重要</p><h3 class="recommend__en">' + recommendTitle[i][0] + '</h3><div class="recommend__area"><img class="plus" src="images/recommend_plus.png" alt=""><img class="frame" src="images/recommend/recommend_' + i + '.png" alt=""></div></div><div class="recommend__right"><div class="recommend__article"><h2 class="article__title">' + recommendTitle[i][1] + '<span>獨特之處</span></h2><div class="article__content"><p>' + recommendContent[i][0] + '</p><span class="gap"></span><p>' + recommendContent[i][1] + '</p><span class="gap"></span><p>' + recommendContent[i][2] + '</p></div></div></div></div>');
        }
    }
    if (saveResult == 0) {
        swiper.slideTo(0, 0);
        alert("請選擇至少一項");
        return;
    }

    if(saveResult < 2) {
        $(".recommend__prev").hide();
        $(".recommend__next").hide();
        $(".recommend__dots").hide()
    }
    // console.log(saveResult);
    $(".loading").fadeIn();
    setTimeout(function () {
        onStep_2.leave();
    }, 2000)
    $(".result__title span").html(answerArray[saveResult - 1]);
    $(".result__sub .change").html(subArray[saveResult - 1]);
    $(".popup__form .frame").attr("src", "images/result/result_" + (saveResult - 1) + ".png");
    $(".result__content .frame").attr("src", "images/result/result_" + (saveResult - 1) + ".png");
    // $(".recommend__content .frame").attr("src", "images/result/result_"+(saveResult-1)+".png")
}

$(function () {
    onStep_1.enter();
    $(".step-1 .next--page").click(function () {
        // $(".btn__area--box").addClass("hidden");
        // $(".step-2").removeClass("hidden");
        // $(".contentbox").eq(0)
        if (isMobile()) {
            onOri();
        } else {
            onStep_1.leave();
        }
    });
    $(".step-2 .next--page").click(function () {
        checkVal();
        // onStep_2.leave();
    });
    $(".step-3 .next--page").click(function () {
        TweenMax.fromTo($(".stage"), 1, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1 })
        onStep_3.leave();
    });
    $(".step-4 .next--page").click(function () {
        $(".popup").fadeIn();
        setTimeout(function () {
            $(".popup__1").fadeIn()
        }, 200);
    });
    $(".toForm").click(function () {
        $(".popup").fadeOut()
        $(".popup__1").fadeOut()
        onStep_4.leave();
    });
    $(".step-5 .next--page").click(function () {
        FORM_FAMILYNAME = $("#familyName").val();
        FORM_GIVENNAME = $("#givenName").val();
        FORM_PHONE = $("#phone").val();
        FORM_COMPANY = $("#company").val();
        FORM_COMPANYSIZE = $("#scale").val();
        FORM_DEPT = $("#dept").val();
        FORM_JOB = $("#job").val();
        FORM_EMAIL = $("#email").val();

        email_verification = $("#byEmail").is(":checked") ? "NOT CHECKED" : "CHECKED";
        phone_verification = $("#byPhone").is(":checked") ? "NOT CHECKED" : "CHECKED";

        if (!FORM_FAMILYNAME) {
            alert("請輸入姓氏");
        } else if (!FORM_GIVENNAME) {
            alert("請輸入名稱");
        } else if (!FORM_PHONE) {
            alert("請輸入電話");
        } else if (!FORM_COMPANY) {
            alert("請輸入任職公司");
        } else if (!FORM_COMPANYSIZE) {
            alert("請選擇公司規模");
        } else if (!FORM_DEPT) {
            alert("請輸入公司部門");
        } else if (!FORM_JOB) {
            alert("請輸入職稱");
        } else if (!FORM_EMAIL) {
            alert("請輸入電子信箱");
        } else if (FORM_EMAIL.search(mailType) == -1) {
            alert("請輸入正確信箱格式");
        } else if (FORM_FAMILYNAME.match(/\d+/g) || FORM_GIVENNAME.match(/\d+/g)) {
            alert("姓名不得含有數字");
        } else {
            sendData()

            // $(".popup").fadeIn();
            // setTimeout(function () {
            //     $(".popup__2").fadeIn()
            // }, 200);
        }
    });
    $(".toShare").click(function () {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(SHAREURL + "app/api/Share.php?Pic=" + (saveResult - 1)),
            'facebook-share-dialog',
            'width=600,height=600'
        );
    });
});

function sendData() {
    $.ajax({
        url: "api/siteserve/upload",
        dataType: "json",
        data: {
            "email": FORM_EMAIL,
            "first_name": FORM_FAMILYNAME,
            "last_name": FORM_GIVENNAME,
            "company": FORM_COMPANY,
            "company_size": FORM_COMPANYSIZE,
            "department": FORM_DEPT,
            "job_title": FORM_JOB,
            "phone": FORM_PHONE,
            "questionnum1_ooemail": "Q_XSYS:OOEMAIL",
            "email_verification": email_verification,
            "questionnum2_ootele": "Q_XSYS:OOTELE",
            "phone_verification": phone_verification
        },
        type: "POST",
        success: function (d) {
            if (d.response.status == "Success") {
                alert("成功送出！");
                $(".popup").fadeIn();
                setTimeout(function () {
                    $(".popup__2").fadeIn()
                }, 200);
            } else {
                var message = "您的資料提交失敗";
                var errors = d.response.errors.join("\n");
                var contact = "如有其他問題，請發送電子信件至 imailtw@tw.ibm.com，洽詢相關服務人員。"
                alert(message + "\n\n" + errors + "\n\n" + contact);
            }
        },
        error: function () {
            alert("系統忙碌中，請稍候。")
        }
    });
    // $(".popup").fadeIn();
    // setTimeout(function () {
    //     $(".popup__2").fadeIn()
    // }, 200);
}



var step_1 = function () {
    function enter() {
        $(".wrap").animate({
            scrollTop: 0
        }, 500, 'swing', function () { });
        $("section").css({
            "height": heightArray[0] + "px"
        });
    }

    function leave() {
        $(".cover").fadeIn(function() {
            onStep_2.enter();
            $(".step-1").addClass("hidden");
            $(".index").addClass("pagePrev");
        });
    }

    function reset() {

    }

    return {
        enter: function () {
            enter();
        },
        leave: function () {
            leave();
            onStep_2.enter();
        }
    };
}

var onStep_1 = new step_1();

var step_2 = function () {
    function enter() {
        setTimeout(function() {
            $(".cover").fadeOut();
        }, 800)
        $(".wrap").animate({
            scrollTop: 0
        }, 500, 'swing', function () { });
        $("section").css({
            "height": heightArray[1] + "px"
        });
        $(".contentbox-2").removeClass("pageNext");
        $(".step-2").removeClass("hidden");
        openSwiper();
    }

    function leave() {
        $(".contentbox-2").addClass("pagePrev");
        $(".step-2").addClass("hidden");
        openRecommend();
    }

    function reset() {

    }

    return {
        enter: function () {
            enter();
        },
        leave: function () {
            leave();
            onStep_3.enter();
        }
    };
}

var onStep_2 = new step_2();

var step_3 = function () {
    function enter() {
        $(".wrap").animate({
            scrollTop: 0
        }, 500, 'swing', function () { });
        $("section").css({
            "height": heightArray[2] + "px"
        });
        $(".contentbox-3").removeClass("pageNext");
        $(".step-3").removeClass("hidden");
        setTimeout(function () {
            $(".loading").fadeOut();
        }, 900)
    }

    function leave() {
        $(".contentbox-3").addClass("pagePrev");
        $(".step-3").addClass("hidden");
    }

    function reset() {

    }

    return {
        enter: function () {
            enter();
        },
        leave: function () {
            leave();
            onStep_4.enter();
        }
    };
}

var onStep_3 = new step_3();

var step_4 = function () {
    function enter() {
        $(".wrap").animate({
            scrollTop: 0
        }, 500, 'swing', function () { });
        $("section").css({
            "height": recommendHeight[pageIndex] + "px"
        });
        $(".contentbox-4").removeClass("pageNext");
        $(".step-4").removeClass("hidden");
    }

    function leave() {
        $(".contentbox-4").addClass("pagePrev");
        $(".step-4").addClass("hidden");
    }

    function reset() {

    }

    return {
        enter: function () {
            enter();
        },
        leave: function () {
            leave();
            onStep_5.enter();
        }
    };
}

var onStep_4 = new step_4();

var step_5 = function () {
    function enter() {
        $(".wrap").animate({
            scrollTop: 0
        }, 500, 'swing', function () { });
        $("section").css({
            "height": heightArray[4] + "px"
        });
        $(".contentbox-5").removeClass("pageNext");
        $(".step-5").removeClass("hidden");
    }

    function leave() {
        $(".contentbox-5").addClass("pagePrev");
        $(".step-5").addClass("hidden");
    }

    function reset() {

    }

    return {
        enter: function () {
            enter();
        },
        leave: function () {
            leave();
        }
    };
}

var onStep_5 = new step_5();

// var path = document.querySelector('#cls-1');
// var img = document.querySelector('#anim');

// var counter = 0;

// var pathLength = path.getTotalLength();

// function setAnim() {
//     counter += 0.003;
//     img.setAttribute("transform", "translate("+(path.getPointAtLength(counter * pathLength).x - 2050)+", "+(path.getPointAtLength(counter * pathLength).y - 754)+")")
//     // console.log((path.getPointAtLength(counter * pathLength).x - 2050));
//     if(counter >= 1) {
//         return;
//         var stay = setTimeout(function() {
//             counter = 0;
//             img.setAttribute("transform", "translate("+(path.getPointAtLength(0).x - 2050)+", "+(path.getPointAtLength(0).y - 754)+")")
//             setAnim();
//         }, 1000)
//     }
//     var timeCount = setTimeout(function() {
//         setAnim()
//     }, 90);
// }
// setAnim();

var scaleVal;
$(window).resize(function () {
    scaleAction()
});

function scaleAction() {
    scaleVal = $(window).width() / 1920;
    scaleValh = $(window).height() / 1080;
    if ($(window).width() > 640 && !isMobile()) {
        if ($(".wrap").height() * scaleVal > $(window).height()) {
            $(".wrap").css({
                "transform": "scale(" + $(window).height() / $(".wrap").height() + ") translateY(-50%)",
            });
        } else if ($(window).height() / $(window).width() > 0.77) {
            $(".wrap").css({
                "transform": "scale(" + $(window).height() / $(".wrap").height() + ") translateY(-50%)",
            });
        } else {
            $(".wrap").css({
                "transform": "scale(" + scaleVal + ") translateY(-50%)",
            });
        }
    }
}
$(function () {
    if (!isMobile()) {
        scaleAction()
    }
})
// ナビゲーションを読み込む関数
function loadNav() {
    const navPlaceholder = document.getElementById("nav-placeholder");

    if (navPlaceholder) {
        // ページの階層に応じて `nav.html` のパスを決定
        let navPath = window.location.pathname.includes("/detail/") ? "../nav.html" : "nav.html";

        fetch(navPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("nav.html の読み込みに失敗しました");
                }
                return response.text();
            })
            .then(data => {
                navPlaceholder.innerHTML = data;
                setupMenu(); // メニューの動作をセットアップ
            })
            .catch(error => console.error("ナビゲーションの読み込みエラー:", error));
    }
}


// ハンバーガーメニューの動作
function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

// ページ読み込み後に実行
document.addEventListener("DOMContentLoaded", loadNav);

// ヘッダー（head.html）を読み込む関数
function loadHead() {
    const headPlaceholder = document.getElementById("head-placeholder");

    fetch("head.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("head.html の読み込みに失敗しました");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("head-placeholder").innerHTML = data;
    })
    .catch(error => console.error("ヘッダーの読み込みエラー:", error));

}

// ページ読み込み後に `head.html` を読み込む
document.addEventListener("DOMContentLoaded", loadHead);

document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    // 記事データ（ここに追加可能）
    const articles = [
        { title: "サイト開設のきっかけ", link: "article1.html", date: "2025/03/19" },
    ];

    // 記事一覧を作成
    articles.forEach(article => {
        let articleItem = document.createElement("div");
        articleItem.classList.add("blog-item");
        articleItem.innerHTML = `
            <h3><a href="${article.link}">${article.title}</a></h3>
            <p>公開日: ${article.date}</p>
        `;
        blogList.appendChild(articleItem);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // モバイル用：Galleryクリックでサブメニューを表示
    dropdown.addEventListener("click", (e) => {
        // リンク自体の移動は止める
        e.preventDefault();
        dropdown.classList.toggle("active");
    });
});
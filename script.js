// مصفوفة المنتجات (9 صور)
const productsGrid = document.getElementById('productsGrid');

for (let i = 1; i <= 9; i++) {
    // نستخدم الصور images1.jpg و images2.jpg بشكل تبادلي كمثال
    let imgNum = (i % 4 === 0) ? 4 : (i % 4); 
    
    productsGrid.innerHTML += `
        <div class="product-card" onclick="goToProduct(${i})">
            <div class="product-image">
                <img src="images/images${imgNum}.jpg" alt="Product ${i}">
            </div>
            <div class="product-info">
                <h3>محفظة الجيب - موديل ${i}</h3>
                <p class="price">150 د.م</p>
                <button class="view-btn">عرض التفاصيل</button>
            </div>
        </div>
    `;
}

function goToProduct(id) {
    // الانتقال لصفحة تفاصيل المنتج (يجب أن تنشئ ملف اسمه product.html)
    window.location.href = `product.html?id=${id}`;
}











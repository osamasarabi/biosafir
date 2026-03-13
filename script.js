function openProductPage(productId) {
    // سيتم توجيه المستخدم لصفحة المنتج مع رقم تعريفي
    // حالياً سنقوم بفتح تنبيه، ويمكنك لاحقاً إنشاء صفحة product.html
    window.location.href = `product.html?id=${productId}`;
}

// كود بسيط لزيادة رقم السلة (تجريبي)
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // لمنع فتح صفحة المنتج عند الضغط على الزر فقط
        alert("تمت إضافة المنتج إلى السلة!");
    });
});










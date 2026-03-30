let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        // API එකෙන් QR image එක ගෙන්වා ගැනීම
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        
        // Image එක පෙන්වීම සඳහා CSS class එකක් එක් කිරීම
        imgBox.classList.add("show-img");
    } else {
        // Input එක හිස් නම් රතු පාටින් ගැස්සෙන Animation එකක් වැනි දෙයක් කළ හැක
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
        alert("Please enter some text or a link!");
    }
}